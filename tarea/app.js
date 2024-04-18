document.getElementById('send').addEventListener('click', async function(){
    const pokemon= document.getElementById('name').value;
    await getPokemon(pokemon);
});

async function getPokemon(name){
    const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const datos= response.json(pokemones);
    return datos;
}

getPokemon().then(datos => {
    console.log(datos);
})