Ext.define("mobileapp.view.user.User" , {
    extend:'Ext.TabPanel',

    requires:[
        //'mobileapp.view.user.UserGrid'
    ],
    config:{
        defaults:{
            styleHtmlContent:true
        },

        xtype:'user',
        fullscreen: true,
        tabBarPosition:'bottom',
        items:[
            {
                title:'Home',
                iconCls:'home',
                html: 'Home Screen1'
            },
            {
                title:'User',
                iconCls:'user',
                xtype: 'panel',
                items:[
                    {
                        xtype:'usergrid',
                        docked:'top',
                        height:'100%',
                        fullscreen:true,
                        title:"true"
                    }
                ]
            },
            {
                title:'Test',
                iconCls:'user',
                html: 'Home Screen3'
            }
        ]

    }
})
