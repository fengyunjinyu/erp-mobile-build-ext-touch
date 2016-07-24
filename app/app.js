Ext.application({
    name: 'mobileapp',

    icon:'resources/images/logo.png',
    models:['User' ,"Group"],
    controllers:['Users' , 'Login'],
    views:['Main' , 'Users'],
    launch:function(){
        //Ext.Msg.alert("Hi" , "Hello Sencha Touch" , Ext.emptyFn);
        Ext.create('mobileapp.view.Main')

    }
})