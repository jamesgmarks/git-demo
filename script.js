
window.addEventListener("load", function() {
    document.querySelector("#searchPokemonButton")
            .addEventListener("click", search_onclick);
    document.querySelector("#btnHide").addEventListener("click", () => {
        document.querySelector("#pokemonDisplay").classList.add("hidden");
    })
});

function search_onclick() {

    const searchTerm = document.querySelector("#pokemonNameSearch").value;
    
    let url = `https://api.pokemontcg.io/v1/cards?name=${searchTerm}`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            // console.log(json.cards);
            for (let i = 0; i < json.cards.length; i++) {
                const currentCard = json.cards[i];
                const newRow = document.querySelector("#pokemonItemTemplate")
                                    .content.querySelector(".pokemonItem")
                                    .cloneNode(true);
                newRow.querySelector(".pokemonItemName").innerText = currentCard.name;
                newRow.querySelector(".pokemonItemLink").addEventListener("click", () => {
                    document.querySelector("#pokemonDisplayName").innerText = currentCard.name;
                    document.querySelector("#pokemonDisplayImage").src = currentCard.imageUrl;
                    document.querySelector("#pokemonDisplay").classList.remove("hidden");
                });
                document.querySelector("#pokemonList").appendChild(newRow);
            }
        })

}