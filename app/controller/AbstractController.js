/**
 * 抽象类， 实现数据的增删改查等一些公共的方法
 */
Ext.define('mobileapp.controller.AbstractController' , {
    extend:'Ext.app.Controller',
    alias:'controller.abstract',
    config:{
        control:{
            '#normal_create':{
                tap:"onCreateForm"
            },
            '#normal_edit':{
                tap:'onEditForm'
            },
            '#normal_view':{
                tap:'onViewForm'
            },
            '#normal_delete':{
                tap:'onDeleteItem'
            }
        }
    },

    onCreateForm:function(){
        console.log("sss");

    },
    onEditForm:function(){
        console.log('edit');

    },
    onViewForm:function(){
        console.log('view')

    },
    onDeleteItem:function(){
        console.log('delete');
    },
    onRefershData:function(){

    }

})
