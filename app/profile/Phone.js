Ext.define("mobileapp.profile.Phone" , {
    extend:'Ext.app.Profile',
    /*
    requires:[
        'mobileapp.controller.UserController',
        'mobileapp.view.user.UserGrid'
    ],
    */
    config:{
        views:['mobileapp.view.main.Main'],
        controllers:['mobileapp.controller.MainController']

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
