window.onload=function(){
    var btn=document.getElementById("login-button");
    var all=document.getElementById("all");
    var interface=document.getElementsByClassName("login-interface")
    btn.onclick=function(){
        all.style.display="block";
    }
}
$(function(){
    var a="��¼���̳ɹ���";
    var b="��¼ʧ�ܣ�";
    var c="��¼���̺�̨ϵͳ�ɹ���";
    var uesrvalue=$(".login-interface #user").val();
    var psd=$(".login-interface #psd").val();
    $(".login-interface .close img").on("click",function(){
        $("#all").css({display:"none"});
    })
    $("#user").on("blur",function(){
        if($(".login-interface #user").val()==""){
            $(".user-show-message").text("�������˺ţ�");
            $(this).css({border:"1px solid red"})
        }else if($(".login-interface #user").val().length<3||$(".login-interface #user").val().length>12){
            $(".user-show-message").text("�û����������");
            $(this).css({border:"1px solid red"})
        }
        else{
            $(this).css({border:"1px solid rgba(0,0,0,1)"});
        }
    })
    $("#psd").on("blur",function(){
        if($(".login-interface #psd").val()==""){
            $(".psd-show-message").text("���������룡");
            $(this).css({border:"1px solid red"})
        }
        else{
            $(this).css({border:"1px solid rgba(0,0,0,1)"});
        }
    })
    $("#user").on("focus",function(){
        $(".user-show-message").text("");
    })
    $("#psd").on("focus",function(){
        $(".psd-show-message").text("");
    })
    $(".login-interface #loginbtn").on("click",function(){
        if($(".login-interface #user").val()=="123" && $(".login-interface #psd").val()=="123"){
            alert(a);
            window.open("shop.html");
        }else if($(".login-interface #user").val()=="321" && $(".login-interface #psd").val()=="321"){
            alert(c);
            window.open("Webmaster.html");
        }else{
            alert(b);
        }
    })

})