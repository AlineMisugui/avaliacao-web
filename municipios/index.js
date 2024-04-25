const favoritos = localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : [];
const tituloPagina = document.getElementById("titulo-pagina")

function setfavorito(municipio) {
    let defaultFavoritos = {
        id: 0,
        nome: ""
    }
    defaultFavoritos.id = municipio.id
    defaultFavoritos.nome = municipio.nome

    const favoritosAtuais = favoritos;
    favoritosAtuais.push(defaultFavoritos)
    localStorage.setItem('favoritos', JSON.stringify(favoritosAtuais))
}

function changePageTitles(title) {
    document.title = title
    tituloPagina.textContent = title
}

function getSearchParams() {
    if (!location.search) {
        return
    }
    const urlSearchParams = new URLSearchParams(location.search)

    const uf = urlSearchParams.get('uf')

    changePageTitles(`Municípios de ${uf}`)
    getMunicipios(uf)
}

const ul = document.getElementById("lista-municipios")

async function getMunicipios(uf) {
    const municipiosResponse = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios `);
    const municipios = await municipiosResponse.json()
    municipios.forEach(municipio => {
        const nomemunicipio = municipio.nome
        const li = document.createElement("li")
        li.innerHTML = `${nomemunicipio}
        <button class="botao-favoritar"">Favoritar</button>`
        ul.appendChild(li)

        li.addEventListener("click", ()=>{
            setfavorito(municipio)
        })
    });
}

document.addEventListener('DOMContentLoaded', function () {
    getSearchParams()
})