const countryList = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", 
    "Antarctica", "Antigua-and-Barbuda", "Argentina", "Armenia", "Aruba", 
    "Australia", "Austria", "Azerbaijan"
];

const countryInput = document.getElementById("country");
const suggestionsDiv = document.getElementById("suggestions");

countryInput.addEventListener("input", function () {
    const query = countryInput.value.toLowerCase();
    suggestionsDiv.innerHTML = "";

    if (query.length === 0) return;

    const filteredCountries = countryList.filter(country =>
        country.toLowerCase().startsWith(query)
    );

    filteredCountries.forEach(country => {
        const suggestion = document.createElement("div");
        suggestion.textContent = country;
        suggestion.classList.add("suggestion");

        suggestion.addEventListener("click", function () {
            countryInput.value = country;
            suggestionsDiv.innerHTML = "";
        });

        suggestionsDiv.appendChild(suggestion);
    });
});
