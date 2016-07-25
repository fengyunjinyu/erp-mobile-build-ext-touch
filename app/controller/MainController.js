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
            nav:{  //µã»÷À¸Ä¿Ñ¡Ôñ
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
            this.redirectTo(record);
        }else{
            this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
                url: 'menu/' + record.get('id')
            }));
        }
    }

})