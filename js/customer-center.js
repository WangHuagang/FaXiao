/**
 * Created by Mr.Wang on 2016/11/28.
 */
$(function(){
    $("#aid").on("mouseover",function(){
        $(".con-img").slideDown(1000);
    })
    $("#aid").on("mouseout",function(){
        $(".con-img").slideUp(1000);
    })
})

/*�ص�����*/
window.onload=function(){
    var btn=document.getElementById("btn");
    var timer=null;
    var pageloolheight=document.documentElement.clientHeight;
    window.onscroll=function(){
        var backtop=document.body.scrollTop;
        if(backtop>=pageloolheight/2){
            btn.style.display="block";
        }
        else{
            btn.style.display="none";
        }
    }
    btn.onclick=function(){
        timer=setInterval(function(){
            var backtop=document.body.scrollTop;
            var speedtop=backtop/5;//�ص��������ٶ��𽥱���
            document.body.scrollTop=backtop-speedtop;
            if( backtop == 0){
                clearInterval(timer);
            }
        },50)

    }
}
