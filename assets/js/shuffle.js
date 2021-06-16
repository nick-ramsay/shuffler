const addBtn = document.getElementById("add-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const clearBtn = document.getElementById("clear-btn");
const addItemInput = document.getElementById("shuffle-item");
const shuffledItemDiv = document.getElementById("shuffled-items");

let items = [];

const populateList = () => {

    if (localStorage.items === undefined) {
        localStorage.items = ["null"];
    }

    let currentItemList = localStorage.items.split(',');
    console.log(localStorage.items);
    document.getElementById("shuffled-items").innerHTML = "";

    if (currentItemList[0] !== "null") {
        for (let i = 0; i < currentItemList.length; i++) {
            let newItemEl = document.createElement('p');
            newItemEl.id = "item" + i;
            newItemEl.innerHTML = (i + 1) + ". " + currentItemList[i];

            document.getElementById("shuffled-items").appendChild(newItemEl);
        }
    }
}

const addItem = () => {
    addItemInput.focus();
    
    let currentItems = localStorage.items.split(',');

    currentItems[0] === "null" && currentItems.length > 1 ? currentItems.splice(0):"";

    let addItemInputValue = addItemInput.value;

    if (addItemInputValue !== "") {
        document.getElementById("shuffled-items").innerHTML = "";
        currentItems.push(addItemInputValue);
    }

    localStorage.items = currentItems;

    populateList();

    addItemInput.value = "";
}

const clearItems = () => {
    addItemInput.focus();
    document.getElementById("shuffled-items").innerHTML = "";
    items = [];

    localStorage.setItem("items", "null");

    populateList();
}

const shuffleItems = () => {
    let orderedItems = [];
    let usedIndexes = [];
    let currentIndex;

    for (let i = 0; usedIndexes.length < items.length; i++) {
        currentIndex = Math.floor((Math.random() * items.length));

        if (usedIndexes.indexOf(currentIndex) === -1) {
            usedIndexes.push(currentIndex);
            orderedItems.push(items[currentIndex]);
        }

    }

    items = orderedItems;

    localStorage.setItem("items", items);

    populateList();
}

clearBtn.addEventListener("click", clearItems);
addBtn.addEventListener("click", addItem);
shuffleBtn.addEventListener("click", shuffleItems);