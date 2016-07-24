/**
 * Created by Administrator on 2016/7/24.
 */
Ext.define('mobileapp.controller.FullSample' , {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
            'search/:query' :'doSearch'
        },
        /**
         * 将界面dom元素映射到控制器中
         * 可以添加多个
         */
        refs:{
            btn_pro_view:'#btn_product_view'

        },
        /**
         * 为控制器中的元素添加事件
         */
        control:{
            btn_pro_view: {
                itemtap : "showProduct"
            }
        }
    },

    /**
     * 事件定义
     */
    showProduct:function(){

    },
    soSearch:function(query){
        console.log('Search for '+query);
    }
})