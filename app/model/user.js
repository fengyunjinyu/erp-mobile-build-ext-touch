/**
 * 用户模型
 */
Ext.define("mobileapp.model.User" , {
    extend:'Ext.data.Model',
    config:{
        fields:['name' , 'email' , 'phone']
    }
})
