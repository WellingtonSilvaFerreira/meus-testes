
//void
function meuNome(){
    const nome = 'Wellington'
    console.log(nome)
}
meuNome()

function number (){
    const n1 = 30
    const n2 = 20
    const so = n1 + n2
    console.log(so)
}
number()

//paramatros

function qualquerNome(nome){
    console.log(nome)
}
qualquerNome("vinicius")

function soma(numero1, numero2){
    const resultado = numero1 + numero2

    console.log(resultado)
}
soma(8,9)

//return

function somar(numero1, numero2){
    const resultado = numero1 + numero2

    return resultado
}

const resSoma = somar(30,40)
console.log(resSoma)


function divida(receita, gastos){
    if (receita > gastos) {
        return 'Esta no Azul'
    } else {
        return 'Esta no Vermelho'
    }
}

const jose = divida(200, 300)
const joao = divida(300, 200)
console.log(jose)
console.log(joao)

//Arrow fuction

 function normal(){
    const semArrow = 'Sem Arrow Fuction'
    console.log(semArrow)
 }
 normal()

 const comArrow = ()=>{
    console.log('Com Arrow Function')
 }
 comArrow()

 const arrowEParametros = (nome, nome2)=>{
console.log('Par01', 'Par02')

return arrowEParametros
 }
 arrowEParametros()