function check(){
    var nam= document.getElementById("nam").value;
    var msg=document.getElementById("msg");
    if(nam.trim()==""){
        for(var i=0;i<5;i++){
            for(var j=0;j<2;j++){
                msg.innerHTML="Please enter your name";
               msg.style.color="black";
            }
                for(var t=0;t<2;t++){
                    msg.innerHTML="";
                }
        
         
        }
        msg.innerHTML="Please enter your name";
        msg.style.color="black";
       
        return false;
    }else{
        
        return true;
    }
}
function validate(){
    var name= document.getElementById("rnam").value;
    var email= document.getElementById("em").value;
    var error= document.getElementById("error");
    var mail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(name.trim()==""||email.trim()==""){
        error.innerHTML="Fill the Detials";
        error.style.color="white";
        error.style.backgroundColor="black";
        return false;
    }else{
        if(mail.test(email)){
            error.innerHTML="";
            return true;
        }else{
            error.innerHTML="Email is invalid";
            error.style.color="white";
            error.style.backgroundColor="black";
            return false;
        }
    }
}
function show(){
    var n=document.getElementById("namam").value;
    var e=document.getElementById("emai").value;
    alert("Greetings sent to "+n+" at "+e);
}
function s(){
    
}