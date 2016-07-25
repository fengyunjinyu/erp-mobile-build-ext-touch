Ext.define("mobileapp.profile.User" , {
    extend:'Ext.app.Profile',
    requires:[
        'mobileapp.controller.UserController',
        'mobileapp.view.user.UserGrid'
    ],
    config:{
        views:['mobileapp.view.user.UserGrid'],
        controllers:['mobileapp.controller.UserController'],
        models:[],
        stores:[]

    },
    launch:function(){
        console.log('jj');

        Ext.create('mobileapp.view.user.UserGrid');
    },
    addComp:function(){
        console.log('ddss');

    }

});
