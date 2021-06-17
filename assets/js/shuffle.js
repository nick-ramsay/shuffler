const addBtn = document.getElementById("add-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const clearBtn = document.getElementById("clear-btn");
const addItemInput = document.getElementById("shuffle-item");
const shuffledItemDiv = document.getElementById("shuffled-items");

let items = [];

const populateList = () => {

    let currentItemList;
    localStorage.items === undefined ? currentItemList = [] : currentItemList = localStorage.items.split(',');
    document.getElementById("shuffled-items").innerHTML = "";

    for (let i = 0; i < currentItemList.length; i++) {
        let newItemEl = document.createElement('p');
        newItemEl.id = "item" + i;
        newItemEl.innerHTML = (i + 1) + ". " + currentItemList[i];

        document.getElementById("shuffled-items").appendChild(newItemEl);
    }
}

const addItem = () => {
    addItemInput.focus();

    let currentItems;

    localStorage.items === undefined ? currentItems = [] : currentItems = localStorage.items.split(',');

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

    localStorage.removeItem("items");

    populateList();
}

const shuffleItems = () => {
    let orderedItems = [];
    let usedIndexes = [];
    let currentIndex;

    if (localStorage.items !== undefined) {

        for (let i = 0; usedIndexes.length < localStorage.items.split(',').length; i++) {
            currentIndex = Math.floor((Math.random() * localStorage.items.split(',').length));

            if (usedIndexes.indexOf(currentIndex) === -1) {
                usedIndexes.push(currentIndex);
                orderedItems.push(localStorage.items.split(',')[currentIndex]);
            }

        }

        items = orderedItems;

        localStorage.setItem("items", orderedItems);

        populateList();
    }
}

clearBtn.addEventListener("click", clearItems);
addBtn.addEventListener("click", addItem);
shuffleBtn.addEventListener("click", shuffleItems);