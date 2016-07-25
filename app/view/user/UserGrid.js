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
        //'mobileapp.controller.UserController',
        //'mobileapp.profile.user'
        //'mobileapp.store.users'
        //'mobileapp.view.user.UserToolbar'
    ],



    config:{
        //
        fullscreen: true,

        /*
        control:{
            'button[id=adduser]':{
                tap:'onCreateForm'
            }
        },
        */


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
                docked:'bottom',
                items: [
                    {
                        iconCls: 'add',
                        id:'normal_add'
                    },
                    {
                        iconCls: 'compose',
                        id:'normal_edit'
                    },
                    {
                        iconCls: 'delete',
                        id:'normal_view'
                    },
                    {
                        iconCls: 'refresh',
                        id:'normal_delete'
                    }
                ]
            },
            {
                xtype:'titlebar',
                docked:'top',
                title:'用户列表',
                items:[
                    {
                         xtype:'button',
                        text:'back',
                        align:'left',
                        id:'adduser'
                        /*,
                        listeners:{
                            tap:'onCreateForm'
                        }
                        */

                    },
                    {
                         xtype:'button', iconCls:'home',align:'right'
                    }
                ]
            }
        ]
    }
})




