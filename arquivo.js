let somar = window.document.getElementById('somar')
let subtrair = window.document.getElementById('subtrair')
let multiplicar = window.document.getElementById('multiplicar')
let dividir = window.document.getElementById('dividir')
let resultado = window.document.getElementById('res')

const op=[
    ()=>{
        const val=[document.getElementById('valor_one').value,document.getElementById('valor_two').value]
        resultado.value=Number(val[0])+Number(val[1])
    },

    ()=>{
        const val=[document.getElementById('valor_one').value,document.getElementById('valor_two').value]
        resultado.value=Number(val[0])-Number(val[1])
    },

    ()=>{
        const val=[document.getElementById('valor_one').value,document.getElementById('valor_two').value]
        resultado.value=Number(val[0])*Number(val[1])
    },
    ()=>{
        const val = [document.getElementById('valor_one').value,document.getElementById('valor_two').value]
        resultado.value=Number(val[0])/Number(val[1])
    }
]

somar.addEventListener("click",op[0])
subtrair.addEventListener("click",op[1])
multiplicar.addEventListener("click",op[2])
dividir.addEventListener("click",op[3])