/**
 * 用户table表
 */

/*
Ext.define("mobileapp.view.user.UserGrid" , {
    extend:'Ext.List',
    requires:[
        //'mobileapp.store.users'
    ],
    config:{
        fullscreen: true,
        itemTpl: '{title}',
        data: [
            { title: 'Item 1' },
            { title: 'Item 2' },
            { title: 'Item 3' },
            { title: 'Item 4' }
        ]
    }
})

*/

Ext.define("mobileapp.view.user.UserGrid" , {
    extend:'Ext.List',
    alias:'widget.usergrid',
    xtype:'usergrid',

    requires:[
        //'mobileapp.store.users'
        //'mobileapp.view.user.UserToolbar'
    ],
    config:{
        //
        fullscreen: true,

        itemTpl: '{title}',
        data: [
            { title: 'Item 1' },
            { title: 'Item 2' },
            { title: 'Item 3' },
            { title: 'Item 4'},
            { title: 'Item 1' },
            { title: 'Item 2' },
            { title: 'Item 3' },
            { title: 'Item 4' },
            { title: 'Item 1' },
            { title: 'Item 2' },
            { title: 'Item 3' },
            { title: 'Item 4' },
            { title: 'Item 1' },
            { title: 'Item 2' },
            { title: 'Item 3' },
            { title: 'Item 4' }
        ],
        title:'Hello',
        width:'100%',
        height:'100%',


        items:[
            {
                xtype:'toolbar',
                docked:'top',
                items: [
                    { iconCls: 'action' },
                    { iconCls: 'add' },
                    { iconCls: 'compose' },
                    { iconCls: 'delete' },
                    { iconCls: 'organize' },
                    { iconCls: 'refresh' },
                    { xtype: 'spacer' }
                ]
            }

        ]


    }
})




