/**
 * Created by DFQ on 2017/12/22.
 */

//存入全局变量用户名
var _name = '';
//存入处理过的用户名
var lastVal = '';
(function(window){
    //验证姓名密码
    //$('.verification_btn').live('click',function(){


        /*var obj = [
            {'name':'代','password':'222'},
            {'name':'刘','password':'333'}
        ];

        for(var i=0;i<obj.length;i++){
            if(obj[i].name==_name && obj[i].password==_password){
                alert('√')
            }else{
                alert('×')
            }
        }*/

    //});

})(window);

function login(){
    _name = $('.name input').val();
    var _password = $('.password input').val();
    if(_name=='admin'){
        lastVal=_name
    }else if(_name=='曹潇潇'){
        lastVal='媳妇儿'
    }else{
        lastVal= _name.substr(-1,1)+'哥';
    }
    if(_name == "") {
        alert("不说是谁不让进 !");
        $('.name input').focus();
    }else if(_password == ""&&_name !== ""){
        alert("没有口令也想进 ? !");
        $('.password input').focus();
    }else if((_name=='刘文明'&&_password=='123') ||
        (_name=='刘文明'&&_password=='123') ||
        (_name=='翟伟佳'&&_password=='123') ||
        (_name=='代金川'&&_password=='123') ||
        (_name=='admin'&&_password=='111') ||
        (_name=='曹潇潇'&&_password=='love')
    ){
        alert('欢迎你  '+lastVal);

        //url地址跳转
        //var curWwwPath=window.document.location.href;
        //var pathName=window.document.location.pathname;
        //var pos=curWwwPath.indexOf(pathName);
        //var localhostPaht=curWwwPath.substring(0,pos);
        //window.location=localhostPaht+'/loveu/page/love.html';

        //验证成功显示主页面
        $('.login').slideUp();
        $('#main').slideDown();
        $('.bg').slideUp();
        //页面滚动marquee信息
        //$('marquee').html('欢迎'+lastVal+'莅临寒舍 ');

        //存入用户session信息
        sessionStorage.setItem('user','1');
    }else if((_name=='刘文明'&&_password!=='123') ||
        (_name=='刘文明'&&_password!=='123') ||
        (_name=='翟伟佳'&&_password!=='123') ||
        (_name=='代金川'&&_password!=='123') ||
        (_name=='admin'&&_password!=='111') ||
        (_name=='曹潇潇'&&_password!=='love')
    ){
        alert('密码错误 , 请重新输入');
        $('.password input').val('');
        $('.password input').focus();
    }else{
        alert(_name+'没有访问权限');
        $('.name input').val('');
        $('.password input').val('');
        $('.name input').focus();
    }
}

//回车键触发点击方法
document.onkeydown=function(e){
    var keycode=document.all?event.keyCode:e.which;
    if(keycode==13)
        login();
};

window.onload=function(){
    if(sessionStorage.getItem('user')=='1'){
        $('.login').slideUp();
        $('#main').slideDown();
        $('.bg').slideUp();
    }
};


//点击任意位置出现验证框
$('.bg').live('click',function(){
    $('.login').slideDown();
});

//点击关闭按钮关闭验证框
$('.close').live('click',function(){
    $('.login').slideUp();
    //if(window.event){//IE下阻止冒泡
    //    event.cancelBubble  = true;
    //}else{
    //    event.stopPropagation();
    //}
    return false;
});
