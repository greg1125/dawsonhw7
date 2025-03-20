const houses = [
    { code: "ST", name: "Stark" },
    { code: "LA", name: "Lannister" },
    { code: "BA", name: "Baratheon" },
    { code: "TA", name: "Targaryen" }
];

const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST": return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA": return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA": return ["Robert", "Stannis", "Renly"];
        case "TA": return ["Aerys", "Daenerys", "Viserys"];
        default: return [];
    }
};

const houseSelect = document.getElementById("house");
const characterList = document.getElementById("characters");

houses.forEach(house => {
    const option = document.createElement("option");
    option.value = house.code;
    option.textContent = house.name;
    houseSelect.appendChild(option);
});

houseSelect.addEventListener("change", function () {
    characterList.innerHTML = "";
    const selectedHouse = houseSelect.value;
    const characters = getCharacters(selectedHouse);

    characters.forEach(character => {
        const listItem = document.createElement("li");
        listItem.textContent = character;
        characterList.appendChild(listItem);
    });
});
