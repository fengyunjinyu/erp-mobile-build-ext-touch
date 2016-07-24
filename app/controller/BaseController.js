/**
 * Created by fengyun on 2016/7/24.
 * 基础功能实现
 * 登陆 退出等
 */
Ext.define("mobileapp.controller.BaseController" , {
    extend:'Ext.app.Controller',
    config:{

    },
    onLogout:function(){
        console.log("退出系统");
    },
    onLogin:function(){
        console.log("登陆系统");
    },
    onMainnav:function(){
        console.log("回到主菜单")
    }

});