Ext.define("mobileapp.model.User" , {
    extend:'Ext.data.Model',
    config:{
        fields:[
            {name:'name' , type:'string'},
            {name:'age' , type:'int'},
            {name:'alive' , type:'boolean' , defaultValue : true}
        ],
        validators:[
            {type: 'presence', field: 'age'},
            {type: 'length',   field: 'name', min: 2}
        ]
    },
    sayName:function(){
        alert(this.get('name'));
    }
})