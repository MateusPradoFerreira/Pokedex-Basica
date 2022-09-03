var formlario = document.querySelector('form')

formlario.addEventListener('submit', function (e) {
    e.preventDefault()

    let urlForm = 'https://pokeapi.co/api/v2/pokemon/';
    let nome = document.getElementById('name')

    urlForm = (urlForm + this.name.value).toLocaleLowerCase()

    let resposta = document.getElementById('content')
    let imgPK = document.getElementById('ImgPk')

    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function (data) {
            console.log(data)
            html = 'Nome : ' + maiuscula(data.name) + '<br>'
            html = html + 'Tipo : ' + data.types[0].type.name 
            imgPK.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.front_shiny + "'>"
            resposta.innerHTML = html
        })
        .catch(function (err) {
            console.log(err)
            if (err = 'SyntaxError: Unexpected token N in JSON at position 0') {
                html = 'Pokemon não encontrado!!';
            }
            else {
                html = 'Erro: ' + err;
            };
            imgPK.innerHTML = '';
            resposta.innerHTML = html;
        })
})

function maiuscula(val) {
    return val[0].toUpperCase() + val.substr(1)
}