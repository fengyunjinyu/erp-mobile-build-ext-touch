/*
Ext.define("mobileapp.view.main.Main" ,{
    extend:'Ext.NestedList',
    requires:[
        'mobileapp.controller.Main',
        'mobileapp.store.navigations'

    ],
    config:{
        fullscreen: true,
        title: 'Groceries',
        displayField: 'text',
        store:Ext.create("mobileapp.store.navigations")
    }
});

*/



Ext.define("mobileapp.view.main.Main" , {
    extend:'Ext.TabPanel',

    config:{
        defaults:{
            styleHtmlContent:true
        },

        xtype:'main',
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
                html: 'Home Screen2'
            },
            {
                title:'Test',
                iconCls:'user',
                html: 'Home Screen3'
            },

        ]
    }
})

/*

Ext.create('Ext.TabPanel', {
    fullscreen: true,
    tabBarPosition: 'bottom',

    defaults: {
        styleHtmlContent: true
    },

    items: [
        {
            title: 'Home',
            iconCls: 'home',
            html: 'Home Screen'
        },
        {
            title: 'Contact',
            iconCls: 'user',
            html: 'Contact Screen'
        }
    ]
});

*/

