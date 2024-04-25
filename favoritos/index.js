const favoritos = localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : [];
const ul = document.getElementById("lista-favoritos")

function listFavoritos() {
    favoritos.forEach(favorito => {
        const nomeMunicipioFavoritado = favorito.nome
        const li = document.createElement("li")
        li.innerHTML = `${nomeMunicipioFavoritado}`
        ul.appendChild(li)
    });
}

document.addEventListener('DOMContentLoaded', function () {
    listFavoritos()
})