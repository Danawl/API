
const Breeds = document.getElementById("Breeds");
const Fact = document.getElementById("Fact");
const submitbtn = document.getElementById("submitbtn");

let currentBreedIndex = 0;
let breedsData = [];

submitbtn.addEventListener("click", () => {
    if (breedsData.length === 0) {
        fetch("https://catfact.ninja/breeds/")
            .then(response => response.json())
            .then(data => {
                breedsData = data.data;
                displayNextBreed();
            })
            .catch(error => console.error("Error fetching breeds:", error));
    } else {
        displayNextBreed();
    }
    fetch("https://catfact.ninja/fact/")
    .then(response => response.json())
    .then(data => {
        console.log("Cat fact:", data);
        Fact.innerHTML = "<h2>Fact</h2>";
        Fact.innerHTML += `<p>${data.fact}</p>`;
    })
    .catch(error => console.error("Error fetching fact:", error));
});

function displayNextBreed() {
    if (currentBreedIndex >= breedsData.length) {
        currentBreedIndex = 0;
    }
    
    const breed = breedsData[currentBreedIndex];
    Breeds.innerHTML = `
        <h2>Breed</h2>
        <div>
            <p>Breed: ${breed.breed}</p>
            <p>Country: ${breed.country}</p>
            <p>Origin: ${breed.origin}</p>
            <p>Coat: ${breed.coat}</p>
            <p>Pattern: ${breed.pattern}</p>
        </div>`;
    
    currentBreedIndex++;
}

