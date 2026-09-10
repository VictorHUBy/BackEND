const personagens = [
    {nome: "Kael", idade: 12},
    {nome: "Nyxen", idade: 23},
    {nome: "Kanner", idade: 132}
];


// const maioridade = personagens.find((personagens) => personagens.idade > 30);

// console.log(maioridade);


// for (let i = 0; i < personagens.length; i++){
//     const idade = personagens[i];
//     if(idade.idade > 20) {
//         console.log(idade);
//         break;
//     }

// }

// for (let i = 0; i < personagens.length; i++){
//     const veridade = personagens[i];
//     if (veridade.idade > 100){
//         console.log(veridade);
//         break;
//     }
// };

for (let i = 0; i < personagens.length; i++) {
    console.log(`[INDEX ATUAL] ${i}`);     // agora com crase e i minúsculo
    let personagem = personagens[i];       // colchetes []
    console.log(personagem);
}









