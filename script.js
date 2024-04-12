const obtenerValorInput = () => {
    let inputTexto = document.getElementById('input_pokemon')
    let valor = inputTexto.value
    peticionApi(valor)

}

const peticionApi = (pokemon) => {
    const baseURL = 'https://pokeapi.co/api/v2/'
    const endpoint = `pokemon/${pokemon}`;
    const url = `${baseURL}${endpoint}`;

    axios.get(url)
    .then(res => printData(res.data))
    .catch(err => console.log(err))
}

const printData = () => {
    let respuesta = document.getElementById('show-info');
    respuesta.innerHTML = `
    <span>${data[0].sprites.front_default}</span>
    <label>Nombre:<h3>${data[0]['name']}</h3></label>
    
    `

}



//fetch API
// const baseURL = 'https://pokeapi.co/api/v2/pokemon/ditto';
// fetch(baseURL)
// .then(response => response.json())
// .then( datos => console.log(datos));

//async Await

// const fetchData = async() => {

//     try{
//         const response = await fetch('https://pokeapi.co/api/v2/ability/7/')
//         const data = await response.json
//         console.log(data)

//     } catch (error){
//         console.log('Error:',error)
//     }
// }