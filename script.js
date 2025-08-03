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

// GRAFICO BARRAS
const ctxBarra = document.getElementById('graficoBarra');
new Chart(ctxBarra, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
        datasets: [
            {
                label: 'Receitas',
                data: [1200, 1900, 3000, 2500],
                backgroundColor: '#4cd45c'
            },
            {
                label: 'Despesas',
                data: [1000, 800, 1800, 1200],
                backgroundColor: '#d44c4c'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// GRAFICO PIZZA
const ctxPizza = document.getElementById('graficoPizza');
new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Setor A', 'Setor B', 'Setor C', 'Setor D'],
        datasets: [{
            label: 'Distribuição de Despesas',
            data: [30, 20, 25, 25],
            backgroundColor: [
                '#4763e4',
                '#facc15',
                '#10b981',
                '#ef4444'
            ]
        }]
    },
    options: {
        responsive: true
    }
});


// Dados fictícios simulando receitas e despesas do usuário
const receitas = [
    { nome: "Salário", valor: 3000 },
    { nome: "Freelance", valor: 1200 }
];

const despesas = [
    { nome: "Aluguel", valor: 1200 },
    { nome: "Internet", valor: 100 },
    { nome: "Luz", valor: 300 }
];

// Função para calcular os totais
function atualizarDashboard() {
    const totalReceitas = receitas.reduce((acc, atual) => acc + atual.valor, 0);
    const totalDespesas = despesas.reduce((acc, atual) => acc + atual.valor, 0);
    const saldo = totalReceitas - totalDespesas;

    // Inserindo no HTML
    document.getElementById("valor-receitas").textContent = formatarValor(totalReceitas);
    document.getElementById("valor-despesas").textContent = formatarValor(totalDespesas);
    document.getElementById("valor-saldo").textContent = formatarValor(saldo);
}

// Função para formatar como R$ 0,00
function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Chamada da função ao carregar
atualizarDashboard();


