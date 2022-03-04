// const nome ="jose"
// //nao pode atribuir outro valor a variavel

// let a = 2 
// let b = "abc"
// a = true
// //js não é estaticamente tipado, tem um tipo de estilos, mas não é estatico

// var c = 2 + 4

// var linguagem = "Java"
// console.log ('aprendento' + linguagem)
// var linguagem = "Java"  
// console.log ('aprendento ${linguagem}')

// var idade = 18 
// console.log ("oi" + nome)
// if (idade >=18){
//     var nome = "Jose"
//     //içamento/hoist (pucada para fora do if)
//     console.log     ("parabens" + nome + ", voce pode dirigir")
// }
// console.log ("ate " + nome)

// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log (n3)

// const n4 = n1 + Number(n2)

// console.log ([]=== false)
// console.log (1=="1")//sim pois a coerção
// console.log (1 === "1")//sem coerção

// v1[3]= 3
// v1[0]= "abc"
// v1[1]=true

// for(let i=0; i<v1.length; i++){
//     console.log(v1[i])
// }


// const nome = [0,1]
// nome[0]=1 //pode
// console.log(nome)
// nome[0]="nome" //n pode

// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// const resultante =  nomes.filter((n) => {
//     return n.startsWith("")
// })

// const res = nomes.map((nome) => nome.charAt(0))
// console.log(res)

// const res = nomes.map((x) => x.length)
// console.log(res)

// const todosComecamComA = nomes.every ((n) => n.startsWith("A"))
// console.log(todosComecamComA)

// const valores = [1, 2, 3, 4]
// //reduce
// const soma = valores.reduce((ac, v) => ac + v)

// function hello () {
//     console.log ("Oi")
// }
// hello()
// function hello (nome) {
//     console.log ("Hello, " + nome)
// }
// hello ("João")

// function soma (a, b) {
//     return a + b
// }
// const res = soma (2, 3)
// console.log(res)

// const dobro = function (n){
//     return 2 * n
// }
// console.log (dobro (5))

// const triplo = function (n = 1){
//     return n * 3
// }
// console.log(triplo())
// console.log(triplo(2))

//arrow functions
// () => {}
// const hello = () => console.log("Hello")
// console.log(hello())

// const dobro = (n) => {
//     return n * 2
// }
// const dobro = (n) => n * 2

// const dobro = n => n * 2
// console.log (dobro(5))

// const triplo = (n) => { n * 3 }
// console.log(triplo(2))
// Undefined por causa das chaves

// const triplo = (n) => {
//     const r = n + n
//     r = r + n
//     return (
//         r + 2 + r + 2 + r + 2
//     )
// }
// console.log(triplo(2))

// Javascript Object Notification
// JSON

//pares chave/valor
// let pessoa = {
//     nome: "João",
//     idade: 17
// }

// console.log (pessoa.nome)
// console.log (pessoa['idade'])

// let p = {
//     nome: "Maria",
//     idade: 22,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 12
//     }
// }

// console.log (p.nome)
// console.log (p['idade'])
// console.log (p.endereco.logradouro)
// console.log (p['endereco'].numero)
// console.log (p['endereco']['numero'])

//uma concessionaria que tem 
//cnpj e endereco
//e carros em estoque
//cada carro tem, marca, modelo e ano de fab

// let c = {
//     cnpj: '11122211100001-45',
//     edereco: {
//         logadour: 'Rua A',
//         numero: 10,
//         bairro: "Vila J"
//     },
//     Veiculos: [
//         {
//             marca: 'Ford',
//             modelo: 'Ka',
//             ano: 2012,
//             revisoes: [
//                 {
//                     data: '12/02/2013',
//                     consultor: 'André'
//                 },
//                 {
//                     data: '14/02/2014',
//                     consultor: 'Pedro'
//                 }
//             ]
//         }, 
//         {
//             marca: 'Volks',
//             modelo: 'Nivus',
//             ano: 2020
//         }, 
//         {
//             marca: 'Chevrolet',
//             model: 'Onix',
//             ano: 2020
//         }
//     ]
// }
// console.log (c.Veiculos[0].revisoes[1].consultor) 

// let calc = {
//     soma: (a, b) => a + b,
//     subtracao: function (a , b){
//         return a - b
//     }
// }
// console.log (calc.soma(2, 3))
// console.log (calc.subtracao (5, 4))

// const nome = "João"
// const idade = 17
// const objeto = { 
//     nome, 
//     idade 
// }


