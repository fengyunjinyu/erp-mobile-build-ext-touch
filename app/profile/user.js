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
    isActive:function(){
        return Ext.os.is.Phone; // || Ext.os.is.Desktop;
    },
    launch:function(){

        Ext.create('mobileapp.view.main.Main');
        this.callParent();
    },
    addComp:function(){
        console.log('ddss');

    }

});
