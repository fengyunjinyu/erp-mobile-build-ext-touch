/**
 * Created by Administrator on 2016/7/24.
 */
Ext.define('mobileapp.controller.MainController' , {
    extend: 'mobileapp.controller.BaseController',
    config: {
        alias:'controller.main',
        refs:{
            btn_nav : "#mainNav",
            btn_login:"#btn_login",
            btn_logout:"#btn_logout"
        },
        control:{
            btn_nav:{
                tap:'onMainnav'
            }
        },
        routes: {
            'search/:query' :'doSearch'
        }
    },
    soSearch:function(query){
        console.log('Search for '+query);
    }
})