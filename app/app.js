Ext.Loader.setConfig({enabled: true});
Ext.application({
    name: 'mobileapp',
    icon:'resources/images/logo.png',
    //models:['User' ,"Group"],
    //controllers:['Users' , 'Login'],
    requires:[
        //"mobileapp.view.main.Main",
        'mobileapp.controller.AbstractController',
        'mobileapp.controller.BaseController',
        //'mobileapp.controller.UserController'
    ],

    profiles:[
        'Phone'
    ],
    controllers:[
        //'mobileapp.controller.UserController',
        'mobileapp.controller.AbstractController',
        //'mobileapp.controller.MainController'
    ],

    //views:['Main'],
    launch:function(){

        /*
        var that = this;

        //Ext.Msg.alert("Hi" , "Hello Sencha Touch" , Ext.emptyFn);
        Ext.create('mobileapp.view.main.Main');

        */


        //Ext.create("mobileapp.view.user.User")
        //var handler = new that;
        //that.setControllers(["mobileapp.controller.UserController"]);
        //var d = new Ext.create("mobileapp.profile.User");
        //d.launch();
        //d.addComp();
        //Ext.create("mobileapp.view.user.UserGrid");
    }
});