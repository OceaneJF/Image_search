const input = document.querySelector(".input input");
const button = document.querySelector(".input button");
const divCards = document.querySelector(".cards");
const footer = document.querySelector("footer");
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
let page = 1;


button.addEventListener('click', (event) => {
    divCards.innerHTML = "";
    footer.innerHTML = "";
    requete();

})
const requete = async () => {
    try {
        const inputText = input.value;
        let response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputText}&client_id=${accessKey}`);
        let data = await response.json();
        console.log(data);
        for (const d of data.results) {
            const img = document.createElement("img");
            console.log(d);
            img.src = d.urls.thumb;
            divCards.appendChild(img);
        }
        const btnMore = document.createElement("button");
        btnMore.textContent = "Voir plus";
        footer.appendChild(btnMore);
        showMore(requete, btnMore, data);

    } catch (error) {
        console.error(error);
    }
}

const showMore = (requete, btnMore, data) => {
    btnMore.addEventListener('click', (event) => {
        if (page < data.total_pages) {
            page++;
            footer.innerHTML = "";
            requete();
        } else {
            footer.innerHTML = "";
        }
    })
}
