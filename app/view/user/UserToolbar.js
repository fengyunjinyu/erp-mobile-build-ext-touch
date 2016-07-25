/**
 * usergrid 上方操作按钮集合
 */

Ext.define("mobileapp.view.user.UserToolbar" , {
    extend:'Ext.Panel',
    xtype:'usertolbar',
    alias:'widget.usertoolbar',

    config:{
        docked:'top',
        items:[
            {
                xtype:'button',
                iconCls:'user',
                width:40
                //text:'Create'
            },
            {
                xtype:'button',
                iconCls:'home',
                width:40,
                //text:'view'
            },
            {
                iconCls:'refresh'

            }
        ]
    }
})
