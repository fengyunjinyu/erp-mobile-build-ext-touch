Ext.define("mobileapp.view.user.User" , {
    extend:'Ext.TabPanel',

    requires:[
        'mobileapp.view.user.UserGrid',
        'mobileapp.view.user.CreateUser',
        //'mobileapp.view.user.ViewUser'
    ],
    //id:'usertabpanel',
    config:{

        defaults:{
            styleHtmlContent:true
        },
        xtype:'user',
        fullscreen: true,
        tabBarPosition:'bottom',
        width:'100%',
        title:'',
        enableTabScroll:true,
        layoutOnTabChange:true,
        items:[
            {
                title:'User',
                iconCls:'user',
                xtype: 'panel',
                padding:'0',
                //scrollable:true,
                items:[
                    {
                        id:'usergrid',
                        xtype:'usergrid',
                        //docked:'top',
                        height:'100%',
                        padding:0,
                        fullscreen:true,
                        scrollable:true,
                        title:"true"
                    }
                ]
            },
            {
                iconCls: 'add',
                id:'normal_add',
                title:'创建',
                items:{
                    xtype:'createuser'
                }
            },

            {

                iconCls: 'compose',
                id: 'd_normal_edit',
                title: '编辑',

                /*
                activetabchange:function(e, value, oldValue, eOpts){
                    console.log('ddd');

                },
                */
            }
            ,
            {
                iconCls: 'delete',
                id:'normal_view',
                title:'查看'
            },
            {
                iconCls: 'refresh',
                id:'normal_delete',
                title:'刷新'
            }
        ],


        listeners:{
            'activeitemchange':function(e, value, oldValue, eOpts){
                if(e.getActiveItem().id == "d_normal_edit"){
                    //Ext.Application.
                    var data = Ext.getCmp("usergrid").getSelection();
                    if(data.length<=0){
                        new Ext.MessageBox().alert("提示", "请选择一条信息");
                        return false

                    }else{
                        return true;


                    }
                    return false;
                }else{

                    return true;
                }

            }

        }


    },

})
