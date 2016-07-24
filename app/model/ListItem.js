/**
 * Created by Administrator on 2016/7/24.
 */
Ext.define("mobileapp.model.ListItem" , {
    extend:'Ext.data.Model',
    fields:[
        {name:'text' , type:'string'} ,
        {name:'link' , type:'string'},
        {name:'description' , type:'string'}
    ]
});
