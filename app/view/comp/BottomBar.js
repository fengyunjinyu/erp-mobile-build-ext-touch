/**
 * Created by Administrator on 2016/7/24.
 */
Ext.defile('mobileapp.view.comp.BottomBar' , {
    dock:'bottom',
    defaults:{
        ui:'plain',
        iconMask:true
    },
    scroll:'horizontal',
    sortable:true,
    layout:{
        pack:'center'
    },
    items:[
        {
            iconCls:'add',
            handler:function(btn , event){
            }
        },
        {
            iconCls:'trash'
        },
        {
            iconCls:'refersh'
        },
        {
            iconCls:'favorites'
        },
        {
            iconCls:'action'
        }

    ],
})