$(function(){

    const email = document.querySelector("#email");
    const eBtn = document.querySelector("#email_check");

    email.addEventListener('keyup',e=>{
        if(e.target.value){
            console.log("입력");
            eBtn.style.cssText="background-color:#35C5F0;color:#fff;border:none";
        }else{
            console.log("else");
            eBtn.style.cssText="background-color:none";
        }
    })

})