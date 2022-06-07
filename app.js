const API = "https://rickandmortyapi.com/api/character"

const $charactersContainer = document.getElementById("characters")

const getData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}


const loadCharacters = async () => {
    const charactersList = await getData(API)

    const characters = []
    charactersList.results.forEach((item) => {
        const character = document.createElement("article")
        character.classList.add("character")
        character.innerHTML = `
            <figure class="character-image" data-id="${item.id}">
                <img src="${item.image}" />
            </figure>
            <p class="character-name">${item.name}</p>
        `

        characters.push(character)
    })

    $charactersContainer.append(...characters)
}

loadCharacters()

