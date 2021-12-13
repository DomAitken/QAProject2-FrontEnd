"use strict";

const getOutput = document.querySelector("#getOutput");

document.querySelector("#deleteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = this;

    const itemName = form.itemName.value;
    axios
        .delete(`http://localhost:8080/ProjectDatabase/deleteItem/${itemName}`)
        .then(res => {
            console.log(res);
            form.reset();
            form.itemName.focus();
            getItems();
        })
        .catch(err => console.error(err));
});

document.querySelector("#itemForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("THIS:", this);

    const form = this;

    console.log("ITEM NAME: ", form.itemName);

    const data = {
        itemName: form.itemName.value,
        itemPrice: form.itemPrice.value,
        aisleNumber: form.aislenumber.value,
    };

    console.log("DATA: ", data);

    axios
        .post("http://localhost:8080/ProjectDatabase/createItem", data)
        .then(res => {
            getItems();
            form.reset();
            form.itemName.focus();
            console.log(res);
        })
        .catch(err => console.error(err));
});

const getItems = () => {
    axios
        .get("http://localhost:3306/ProjectDatabase/getAll")
        .then(res => {
            console.log(res);
            const item = res.data;
            getOutput.innerHTML = "";
            for (let item of ProjectDatabase) {
                const itemCol = document.createElement("div");
                itemCol.classList.add("col");

                const itemCard = document.createElement("div");
                itemCard.style = `background-color: ${ProjectDatabase.itemName}`;
                itemCard.classList.add("card");

                const itemBody = document.createElement("div");
                itemBody.classList.add("card-body");

                const itemName = document.createElement("h5");
                itemName.classList.add("card-title");
                itemName.innerText = `Player Name: ${ProjectDatabase.itemName}`;
                itemBody.appendChild(itemName);

                const itemPrice = document.createElement("p");
                itemPrice.classList.add("card-text");
                itemPrice.innerText = `Item Price: ${ProjectDatabase.itemPrice}`;
                itemBody.appendChild(itemPrice);

                const aisleNumber = document.createElement("p");
                aisleNumber.classList.add("card-text");
                aisleNumber.innerText = `Aisle Number: ${ProjectDatabase.aisleNumber}`;
                itemBody.appendChild(aisleNumber);

                const itemDelete = document.createElement("button");
                itemDelete.innerText = "DELETE";
                itemDelete.classList.add("btn", "btn-danger");
                itemDelete.addEventListener("click", () => {
                    axios
                        .delete(`http://localhost:3306/ProjectDatabase/deleteItem/${ProjectDatabase.itemName}`)
                        .then(res => getItems())
                        .catch(err => console.error(err))
                });
                itemBody.appendChild(itemDelete);
                itemCard.appendChild(itemBody);
                itemCol.appendChild(itemCard);

                getOutput.appendChild(itemCol);
            }
        })
        .catch(err => console.error(err));
}

getItems();