const ul = document.getElementById("lista-estados")

async function getEstados() {
    const estadosResponse = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
    const estados = await estadosResponse.json()
    estados.forEach(estado => {
        const nomeEstado = estado.nome
        const li = document.createElement("li")
        li.innerHTML = `<a href="./municipios/index.html?uf=${estado.sigla}">${nomeEstado}</a>`
        ul.appendChild(li)
    });
}

getEstados()
