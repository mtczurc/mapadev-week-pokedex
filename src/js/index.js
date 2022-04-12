/*
quando clicar no pokemon na listagem temos que esconder o cartao
do pokemon aberto e mostrar o cartao corresponder ao que foi selecionado
na listagem

para isso vamos precisar trabalhar com dois elementos
-listagem
-cartao do  pokemon

precisamos criar duas variaveisno JS pra trabalhar com os elementos
da tela

vamos precisar trabalhar com um evento de clique feito pelo
usuario na listagem de pokemons 

-remover a classe aberto so do cartao que esta aberto
-ao clicar em pokemon da listagem 
pegamos o id desse pokemon para saber qual cartao
mostrar
-remover a classe ativo que marca o pokemon selecionado
-add a classe ativo no item da lista selecionado
*/

//precisamos criar duas variaveisno JS pra trabalhar com os elementos da tela

const listaSelecaoPokemon = document.querySelectorAll('.pokemonLogo')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

function soma(numero1, numero2){
    console.log(numero1 + numero2)
}

listaSelecaoPokemon.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemons 
    pokemon.addEventListener('click',() => {
        
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        //ao clicar em pokemon da listagem pegamos o id desse pokemon para saber qual cartao mostrar
         const idPokemonSelecionado = pokemon.attributes.id.value

         const idDoCartaoPokemonParaAabrir = 'cartao-' + idPokemonSelecionado

         const cartaoPokemonSelecionado = document.getElementById(idDoCartaoPokemonParaAabrir)
         cartaoPokemonSelecionado.classList.add('aberto')


        //-remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //-add a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagen = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagen.classList.add('ativo')
    })
})



