document.getElementById('buscar-btn').addEventListener('click', () => {
    const tipo = document.getElementById('tipo-select').value;
    obtenerPokemonPorTipo(tipo);
});

function obtenerPokemonPorTipo(tipo) {
    const url = `https://pokeapi.co/api/v2/type/${tipo}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pokemons = data.pokemon;
            const lista = document.getElementById('pokemon-list');
            lista.innerHTML = '';
            pokemons.forEach(p => {
                const nombre = p.pokemon.name;
                const li = document.createElement('li');
                li.textContent = nombre;
                lista.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}
