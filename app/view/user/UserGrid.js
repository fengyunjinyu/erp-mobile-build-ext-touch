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
/*
Ext.define("mobileapp.view.user.UserGrid" , {
    extend:'Ext.DataView',
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

var touchTeam = Ext.create('Ext.DataView', {
    requires: ['Ext.data.Store'],
    fullscreen: true,
    store: {
        fields: ['name', 'age'],
        data: [
            {name: 'Jamie',  age: 100},
            {name: 'Rob',   age: 21},
            {name: 'Tommy', age: 24},
            {name: 'Jacky', age: 24},
            {name: 'Ed',   age: 26}
        ]
    },
    height:200,

    itemTpl: '<div>111</div>'
});
