const inputPassword =document.getElementById("password")
const btnShowpassword =document.getElementById("show-password")
const btnHidepassword = document.getElementById("hide-password")

btnShowpassword?.addEventListener("click",() =>{
    inputPassword.setAttribute("type", "text");
    btnShowpassword.style.display = "none"
    btnHidepassword.style.display = "block"
})

btnHidepassword?.addEventListener("click", ()=>{
    inputPassword.setAttribute("type","password");
    btnHidepassword.style.display ="none"
    btnShowpassword.style.display = "block"
})




//DESHBORD//
const toglleMenuBotao = document.querySelector(".toglle-menu");
const menulist = document.querySelector(".menu-deshbord ul");
const icon = toglleMenuBotao;

let isNotClickd = false;

toglleMenuBotao?.addEventListener("click",() =>{
   if(isNotClickd){
    menulist.style.display = "none"
    icon.style.transform = "rotate(0deg)"
   }else{
    menulist.style.display = "block"
    icon.style.transform = "rotate(90deg)"
    
   }
   isNotClickd = !isNotClickd;

})


const itemModules = document.querySelectorAll(".menu-modulo ul li");

itemModules.forEach((item) =>{
    item.addEventListener("click",() =>{
        if(!item.classList.contains("item-modulo-active")){
            itemModules.forEach((el) =>{
                el.classList.remove("item-modulo-active")

            });
            item.classList.add("item-modulo-active");
        }
    })
})

const closeModalAdd= document.querySelector(".close-modal-add-expense");
const addDespesa = document.getElementById("add-new-expense");
const modalAdd= document.querySelector(".modal-add-expense");

addDespesa?.addEventListener("click", () =>{
    modalAdd.style.display = "flex";
})
   
closeModalAdd?.addEventListener("click",()=>{
    modalAdd.style.display = "none";
})

const closeModalDelete= document.querySelector(".close-modal-delete-expense");
const modalDeleteExpense= document.querySelector(".modal-delete-expense");
const btnlixeira= document.getElementById("delete");
const btnCancelDelete= document.querySelector(".cancel-delete-expense");

btnlixeira?.addEventListener("click", () => {
    modalDeleteExpense.style.display = "flex";

});


btnCancelDelete?.addEventListener("click", () => {
    modalDeleteExpense.style.display ="none";

});

closeModalDelete?.addEventListener("click",() => {
    modalDeleteExpense.style.display =  "none";

});
