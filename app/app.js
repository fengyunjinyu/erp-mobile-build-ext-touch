Ext.application({
    name: 'mobileapp',

    icon:'resources/images/logo.png',
    //models:['User' ,"Group"],
    //controllers:['Users' , 'Login'],

    /*
    requires:[
        "mobileapp.view.main.Main"
    ],
    */
    //views:['Main'],
    launch:function(){
        //Ext.Msg.alert("Hi" , "Hello Sencha Touch" , Ext.emptyFn);
        Ext.create('mobileapp.view.main.Main')

        //Ext.create("mobile.view.user.User")
        //Ext.create("mobileapp.view.user.UserGrid");

    }
})