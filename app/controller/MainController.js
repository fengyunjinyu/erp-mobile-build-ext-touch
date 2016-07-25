/**
 * Created by Administrator on 2016/7/24.
 */
Ext.define('mobileapp.controller.MainController' , {
    extend: 'mobileapp.controller.BaseController',
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
                itemtap:'onNavTap'
            }
        },
        routes: {
            'search/:query' :'doSearch',
            'demo/:id': 'showViewById',
            'menu/:id': 'showMenuById',
            '': 'showMenuById'
        }
    },
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
        var name = item.get("view") || item.get('text'), ns = "mobileapp.view.";
        return ns+name;
    },
    onNavTap:function(nestedList , list , index){
        var record = list.getStore().getAt(index);

        if(record.isLeaf()){
            //console.log(record);
            console.log(record.get('id'))
            //Ext.app.Application.redirectTo(record.get('id'));
        }else{
            this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
                url: 'menu/' + record.get('id')
            }));
        }
    },
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
    showView:function(item){
        var nav = this.getNav(),title = item.get('text'),
            view = this.createView(item),
            layout = nav.getLayout(),
            newAnim;
    },
    onBackTap:function(nestedList , node){
        if (node.isLeaf()) {
            this.getSourceButton().setHidden(true);
        }

        this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
            url: 'menu/' + node.parentNode.get('id')
        }), true);
    },
    showTouchEventConsole:function(button){
        this.getTouchEvents().showConsole();
    }

})