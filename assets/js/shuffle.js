const addBtn = document.getElementById("add-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const clearBtn = document.getElementById("clear-btn");
const addItemInput = document.getElementById("shuffle-item");
const shuffledItemDiv = document.getElementById("shuffled-items");
let items = [];
let usedIndexes = [];

const addItem = () => {
    addItemInput.focus();
    let addItemInputValue = addItemInput.value;

    if (addItemInputValue !== "") {
        document.getElementById("shuffled-items").innerHTML = "";
        items.push(addItemInputValue);

        for (let i = 0; i < items.length; i++) {
            usedIndexes.push(i);
            let newItemEl = document.createElement('p');
            newItemEl.id = "item" + i;
            newItemEl.innerHTML = (i + 1) + ". " + items[i];

            document.getElementById("shuffled-items").appendChild(newItemEl);
        }

    }
    addItemInput.value = "";
}

const clearItems = () => {
    addItemInput.focus();
    document.getElementById("shuffled-items").innerHTML = "";
    items = [];
    addItem();
}

const shuffleItems = () => {
    console.log("Shuffle Items clicked...");
    console.log(items.length);
}

clearBtn.addEventListener("click", clearItems);
addBtn.addEventListener("click", addItem);
shuffleBtn.addEventListener("click",shuffleItems);