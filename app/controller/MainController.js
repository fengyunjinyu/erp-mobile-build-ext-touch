/**
 * Created by Administrator on 2016/7/24.
 */
Ext.define('mobileapp.controller.MainController' , {
    extend: 'mobileapp.controller.AbstractController',
    config: {
        alias:'controller.main',
        refs:{
            nav: '#mainNestedList',
            btn_nav : "#mainNav",
            btn_login:"#btn_login",
            btn_logout:"#btn_logout"
        },
        control:{
            btn_nav:{
                tap:'onMainnav'
            },
            nav:{
                itemtap:'onNavTap',
                back:'onBackTap'
            },
            '#normal_create':{
                tap:"onCreateForm"
            },
            '#normal_edit':{
                tap:'onEditForm'
            },
            '#normal_view':{
                tap:'onViewForm'
            },
            '#normal_delete':{
                tap:'onDeleteItem'
            }
        },
        routes: {
            'search/:query' :'doSearch',
            'demo/:id': 'showViewById',
            'menu/:id': 'showMenuById',
            '': 'showMenuById'
        }
    },
    projectname:'mobileapp.',
    soSearch:function(query){
        console.log('Search for '+query);
    },
    showViewById:function(id){
        var nav = this.getNav();
        var view = nav.getStore().getNodeById(id);
        this.showView(view);
        //this.setCurrentDemo(view)

    },
    getViewName: function( item ){
        var name = item.get("view") || item.get('id'), ns = "mobileapp.view.";
        return ns+name;
    },
    onNavTap:function(nestedList , list , index){
        var record = list.getStore().getAt(index);
        if(record.isLeaf()){
            //console.log(record);
            console.log(record.get('id'));
            //Ext.app.Application.redirectTo(record.get('id'));
            this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
                url: 'demo/' + record.get('id')
            }));
        }else{
            this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
                url: 'menu/' + record.get('id')
            }));
        }
    },
    /**
     * ·����Ŀѡ��
     * @param id
     */
    showMenuById:function(id){
        var me = this;
        var nav = this.getNav(),store = nav.getStore();
        var item =  (!id || id == 'root') ? store.getRoot() : store.getNodeById(id);
        if(item){
            nav.goToNode(item);
            console.log(item.get('text'));
            //Ext.component.query("#mainNestedList").getToolbar().setTitle(item.get('text'))
            //me.getToolbar().setTitle(item.get('text'));
        }
    },
    activeView:null,  //�当前活动的activeview
    activeStore:null,
    activeModel:null,
    /**
     * 对象缓存
     */
    viewCache:[],
    StoreCache:[],
    ModelCache:[],


    /**
     * model store view 缓存地址
     */
    cache_msv:{},
    /**
     *
     * @param item
     */

    showView:function(item){
        var that = this;
        var nav = this.getNav(),title = item.get('text');

        var module_name = item.get('id');

        if(this.cache_msv[module_name]){

            //当前view 已生成
            console.log("当前结果已缓存");
            that.getToolbar().setTitle(title);
            nav.setDetailCard(view);
        }else{

            var view = this.createView(item),  layout = nav.getLayout();
            //anim = item.get('animation');
            //newAnim;
            this.activeView = view;
            that.getToolbar().setTitle(title);
            nav.setDetailCard(view);

        }

    },
    /**
     *
     * @param data
     * exp: { text:'创建用户'，viewname:'user.CreateUser' }
     */
    showViewByName:function(data){

        var that = this;
        var nav = this.getNav();
        var layout = nav.getLayout();
        var view = this.createViewByName( data);
        that.activeView = view;
        console.log(data.text);
        that.getToolbar().setTitle(data.text);
        nav.setDetailCard(view);

    },
    createViewByName:function(data){
        var that = this;
        var name = data.viewname;
        var view = Ext.create("mobileapp.view."+name);
        view.viewName = name;

        //view.addListener('activeitemchange' , that.doTabChange , that);
        console.log('jfjfj');
        return view;

    },

    /**
     * Tab选项卡切换时触发的前置技能
     */

    doTabChange:function( e, value, oldValue, eOpts ){
        var obj = e.getActiveItem().initialConfig;

        if(obj.needselected){
            var data = this.activeView.down('usergrid').getSelection();
            console.log(data);
            if(data.length <=0){
                new Ext.MessageBox().alert("提示", "请选择一条信息");
                return false
            }else{

                switch(obj.type) {

                    case 'update':
                        this.loadform('update');
                        break;
                    case 'edit':
                        this.loadform('edit');
                        break;
                    case 'upload':
                        this.uploadform();
                        break;
                    case  'delete' :
                        this.delete();
                        break
                }
                return true;

            }
        }
        /*
        if(e.getActiveItem().id == "d_normal_edit"){
            //Ext.Application.
            var data = Ext.getCmp("usergrid").getSelection();
            if(data.length<=0){
                new Ext.MessageBox().alert("提示", "请选择一条信息");
                return false

            }else{
                return true;


            }
            return false;
        }else{

            return true;
        }

        */
    },

    /**
     *
     * @param str  type:   edit update
     * @param data datagrid selected data
     */
    loadForm:function(str , data){
        var form_handler = this.activeView.down(this.activeView.name+'str');
        var grid_handler = this.activeView.down(this.activeView.name+'grid');
    },



    getToolbar :function(){
        return Ext.ComponentQuery.query("#mainNavigationBar")[0];
    },

    onBackTap:function(nestedList , node){
        console.log('haha');
        if (node.isLeaf()) {
            //this.getSourceButton().setHidden(true);
        }

        this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
            url: 'menu/' + node.parentNode.get('id')
        }), true);
    },
    showTouchEventConsole:function(button){
        this.getTouchEvents().showConsole();
    },
    getUsedViewName:function(str){
        var reg = /\b(\w)|\s(\w)/g;
        return str.replace(reg,function(m){return m.toUpperCase()})
    },
    createView:function(item){
        var that = this;
        var name = this.getViewName(item);
        var limit = item.get('limit') || 20;
        //var view, i = 0, j, oldView;
        var view_name_used = this.getUsedViewName(item.get('id'));
        var module_name = item.get('id').toLowerCase();

        var store, model, view ;
        var cache_obj = {}
        console.log(this.projectname+"view."+item.get('id').toLowerCase()+'.'+item.get('id'))
        view = Ext.create('mobileapp.view.user.User');
        store = Ext.create(this.projectname+"store."+item.get('id'));
        model = Ext.create(this.projectname+'model.'+item.get('id'));

        cache_obj['view'] = view;
        cache_obj['store'] = store;
        cache_obj['model'] = model;

        view.addListener('activeitemchange' , that.doTabChange , that);
        view.viewName = name;
        this.cache_msv[item.get('id')] = cache_obj;

        return view;
    }
})