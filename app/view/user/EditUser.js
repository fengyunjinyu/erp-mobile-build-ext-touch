Ext.define("mobileapp.view.user.EditUser" , {
    extend:'Ext.form.Panel',
    xtype:'edituser',
    config: {
        fullscreen: true,
        height: '100%',
        showAnimation: 'fadeIn',
        scrollable: true,
        top: 0,
        left: 0,
        width: '100%',
        items: [
            {
                xtype         : 'textfield',
                name          : 'name',
                label         : 'Name',
                placeHolder   : 'Tom Roy',
                autoCapitalize: true,
                required      : true,
                clearIcon     : true
            },
            {
                xtype: 'passwordfield',
                name : 'password',
                label: 'Password',
                clearIcon  : !Ext.theme.is.Blackberry
            },
            {
                xtype      : 'emailfield',
                name       : 'email',
                label      : 'Email',
                placeHolder: '',
                clearIcon  : true
            },

            {
                xtype: 'container',
                defaults: {
                    xtype: 'button',
                    style: 'margin: .5em',
                    flex : 1
                },
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        text: 'Disable fields'
                    }]

            }



        ]
    }
})
