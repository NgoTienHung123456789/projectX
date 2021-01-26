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