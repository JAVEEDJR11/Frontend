function checkData(){
    let uname=document.myform.fname.value;
    let umail=document.myform.fmail.value;
    let ucont=document.myform.fcont.value;
    let upass=document.myform.fpass.value;

    let edu=document.myform.edu;
    let regname ="^[a-zA-Z]{3,20}$";
    if(!uname.trim().match(regname)){
        window.alert("fname must contain only character min-3 and max-20");
        document.getElementById("fname").focus();
        return false;
        

    }
    let regmail="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    if(!umail.trim().match(regmail)){
        window.alert("mail must contain mail" );
        document.getElementById("fmail").focus();
        return false;
    }
     let regcont="^[0-9]{9,11}$";
    if(!ucont.trim().match(regcont)){
        window.alert("cont must contain number" );
        document.getElementById("fcont").focus();
        return false;
    }
    let regpass="^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$";

    if(!upass.trim().match(regpass)){
        window.alert("pass must password");
        document.getElementById("fpass").focus();
        return false;
    }

    if(edu[0].checked==false && edu[1].checked==false && edu[2].checked==false&& edu[3].checked==false){
        window.alert("plaese select the classification");
        return false;
    }
}