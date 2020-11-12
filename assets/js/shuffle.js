const addItem = () => {
    console.log("I clicked a button!");
    let addItemInputValue = addItemInput.value;
    console.log(addItemInputValue);

    addItemInput.value = "";
}

const shuffleBtn = document.getElementById("shuffle-btn");
const addItemInput = document.getElementById("shuffle-item");

shuffleBtn.addEventListener("click",addItem);