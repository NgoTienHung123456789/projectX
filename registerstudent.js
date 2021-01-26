const pass_field = document.querySelector('.password');
const show_btn = document.querySelector('.show');
show_btn.addEventListener('click', function(){
    if(pass_field.type === "password"){
        pass_field.type ="text";
        show_btn.style.color = "black";
        show_btn.textContent = "HIDE";
    }else{
        pass_field.type ="password";
        show_btn.style.color = "grey";
        show_btn.textContent = "SHOW";
    }
})
const pass2_field = document.querySelector('.password2');
const show2_btn = document.querySelector('.show2');
show2_btn.addEventListener('click', function(){
    if(pass2_field.type === "password2"){
        pass2_field.type ="text";
        show2_btn.style.color = "black";
        show2_btn.textContent = "HIDE";
    }else{
        pass2_field.type ="password2";
        show2_btn.style.color = "grey";
        show2_btn.textContent = "SHOW";
    }
})