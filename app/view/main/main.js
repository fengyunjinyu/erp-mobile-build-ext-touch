
Ext.define("mobileapp.view.main.Main" ,{
    extend:'Ext.NestedList',
    requires:[
        //'mobileapp.controller.Main',
        'mobileapp.store.navigations'
    ],
    id:'mainNestedList',
    config:{
        fullscreen: true,
        title: 'hxerp',
        layout:{
            animation:{
                duration:250,
                easing: 'ease-in-out'
            }
        },

        useTitleAsBackText: false,
        displayField: 'text',
        store:Ext.create("mobileapp.store.navigations"),
        toolbar:{
            id:'mainNavigationBar',
            xtype:'titlebar',
            docked:'top',
            title:'HXS',
            items:{
                xtype:'button',
                id:'viewSourceButton',
                align:'right',
                ui:'action',
                action:'viewSource',
                text:'Source'
            }

        }
    }
});




/*
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
                xtype:'usergrid'
            },
            {
                title:'Test',
                iconCls:'user',
                html: 'Home Screen3'
            },

        ]
    }
})
*/

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

