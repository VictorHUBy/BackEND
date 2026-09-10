// console.log("Esta rodando" )
// console.log(typeof false)


// let teste = undefined

// conselo.log(typeof teste)

// Um = é atribuir valor, Dois == é comparar, Tres é comparar valor e tipo

// console.log(typeof function(){})

// variavelminha = 3;

// console.log(variavelminha)

// let idade = 3;

// var minhavariavel = "string";
// console.log("idade de antes " + idade);
// idade = 4;
// console.log("idade depois" + idade);


// function testar() {
//     var testa = 3;

//     console.log("O valor de testa é:", testa);
// }

// testar()
// let meu_texto = 1.2;
// let teste  = parseInt(meu_texto);
// console.log("teste:", teste, "| tipo:", typeof teste);
// let numero = parseFloat(meu_texto);
// console.log("numero:", numero, "| tipo:", typeof numero);

// let meu_texto = "25.7";

// let teste = parseInt(meu_texto);       // 25
// let numero = parseFloat(meu_texto); // 25.7
// console.log("numero:", numero, "| tipo:", typeof numero);



// ✅ Converter para inteiro
//  1 number

// ✅ Converter para número de ponto flutuante
// let numeroFloat = parseFloat("3.14");
// console.log("numeroFloat:", numeroFloat, "| tipo:", typeof numeroFloat); // 3.14 number

// ✅ Converter string numérica para número
// let numero = Number("42");
// console.log("numero:", numero, "| tipo:", typeof numero); // 42 number


// let listaDePessoas = [user1, user2];

// for(i = 0; i < listaDePessoas.length; i++) {


// };

// const usuarios = [
//   { nome: "João", idade: 25 },
//   { nome: "Maria", idade: 100 },
//   { nome: "Cleber", idade: 52 },
//   { nome: "Matheus", idade: 6 },
//   { nome: "Suzana", idade: 22 },
//   { nome: "Camila", idade: 25 },
//   { nome: "Jonathan", idade: 24 },
//   { nome: "Fernando", idade: 34 },
//   { nome: "Clara", idade: 41 },
//   { nome: "Bruno", idade: 18 },
// ];

// for (let i = 0; i < usuarios.length; i++) {
//   let usuarioDaVez = usuarios[i];           // ✅ usa [] e não ()

//   if (usuarioDaVez.idade > 30) {            // ✅ compara a idade
//     console.log(usuarioDaVez);
//     break;                                  // ✅ para o loop
//   }
// }

// const maiorDeTrinta = usuarios.find((usuarios) => usuarios.idade > 30);
// console.log(maiorDeTrinta)