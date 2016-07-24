/**
 * Created by Administrator on 2016/7/24.
 */
Ext.define('mobileapp.controller.Main' , {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
            'search/:query' :'doSearch'
        }
    },
    soSearch:function(query){
        console.log('Search for '+query);
    }
})