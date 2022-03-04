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

const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// const resultante =  nomes.filter((n) => {
//     return n.startsWith("")
// })

// const res = nomes.map((nome) => nome.charAt(0))
// console.log(res)

// const res = nomes.map((x) => x.length)
// console.log(res)

const todosComecamComA = nomes.every ((n) => n.startsWith("A"))
console.log(todosComecamComA)
