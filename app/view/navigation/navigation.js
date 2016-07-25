/**
 * 栏目
 */

Ext.define("mobileapp.view.navigation.Navigation" , {
    extend :'Ext.Container',
    requires:['mobileapp.model.navigation'],
    config:{
        layput:'fit',
        items:[
            {
                xtype:'dataview',
                scrollable:true,
                inline:true,
                cls:'dataview-inline',
                itemTpl:'<div class="img">{text}</div> ',
                store:'Speakers'
            }
        ]
    }
})
