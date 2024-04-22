document.getElementById('send').addEventListener('click', async function(){
    const pokemonName = document.getElementById('name').value;
    await displayPokemon(pokemonName);
  });
  async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.json();
  }
  
  async function displayPokemon(name) {
    const response = await getPokemon(name);

    const imagen = document.querySelector('#informacion-pokemon img');
    imagen.src = response.sprites.front_default;

    const nombre = document.getElementById('nombre');
    nombre.textContent = "Nombre: " + response.name;

    const id = document.getElementById('id');
    id.textContent = "ID: " + response.id;

    const tipo = document.getElementById('tipo');
    tipo.textContent = "Tipo(s): ";
    response.types.forEach((type) => {
        tipo.textContent += `${type.type.name}, `;
    });
}
