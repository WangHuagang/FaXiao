/**
 * Created by Mr.Wang on 2016/12/1.
 */
function save(){
    var data=new Object;
    data.name=document.getElementById("name").value;
    data.tel=document.getElementById("tel").value;
    data.email=document.getElementById("email").value;
    var str=JSON.stringify(data);
    localStorage.setItem(data.name,str);
    alert("�����Ѿ�����");
}

function find(){
    var find=document.getElementById("find").value;
    var str=localStorage.getItem(find);
    var data=JSON.parse(str);
    var result="<br>"+"������"+data.name+"<br>";
        result+="�绰��"+data.tel+"<br>";
        result+="�ʼ���"+data.email+"<br>";
    var target=document.getElementById("show");
    target.innerHTML=result;
}