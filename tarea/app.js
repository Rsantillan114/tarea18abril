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

  // Actualizar el div 'informacion-pokemon'
  let imagen = document.querySelector('#informacion-pokemon img');
  imagen.src = response.sprites.front_default;

  let nombre = document.getElementById('nombre');
  nombre.textContent = "Nombre: " + response.name;

  let id = document.getElementById('id');
  id.textContent = "ID: " + response.id;

  let tipo = document.getElementById('tipo');
  tipo.textContent = "Tipo(s): ";
  response.types.forEach((type, index) => {
      tipo.textContent += type.type.name;
      if (index !== response.types.length - 1) {
        tipo.textContent += ", ";
    }
  });
  
  const historial = document.getElementById('historial');
  const listItem = document.createElement('li');
  const img = document.createElement('img');
  img.src = response.sprites.front_default;
  img.alt = response.name;
  listItem.appendChild(img);
  const details = document.createElement('span');
  details.textContent = `Nombre: ${response.name}, Tipo(s): `;
  response.types.forEach((type, index) => {
      details.textContent += type.type.name;
      if (index !== response.types.length - 1) {
        details.textContent += ", ";
    }
  });
  listItem.appendChild(details);
  historial.appendChild(listItem);
}


