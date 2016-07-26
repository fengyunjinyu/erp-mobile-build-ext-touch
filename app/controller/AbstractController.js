/**
 * 抽象类， 实现数据的增删改查等一些公共的方法
 */
Ext.define('mobileapp.controller.AbstractController' , {
    extend:'Ext.app.Controller',
    alias:'controller.abstract',
    config:{
        control:{
            /*
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

            */
        }
    },

    getActiveView:function(){
        //获取当前活动对象


    },

    onCreateForm:function(){
        console.log("sss");

    },
    onEditForm:function(){
        console.log('edit');
        console.log(this.activeView);
        var data = this.ActiveView.getSelection();
        console.log(data);

    },
    onViewForm:function(){
        console.log('view')

    },
    onDeleteItem:function(){
        console.log('delete');
    },
    onRefershData:function(){

    },
    /**
     * 获取当前面板对象
     */
    getPanel:function(){

    },
    /**
     * 获取当前列表对象
     */
    getGridList:function(){

    }


})
