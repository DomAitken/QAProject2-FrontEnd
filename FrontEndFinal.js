"use strict";

const getOutput = document.querySelector("#getOutput");
// const getAllItemsButton = document.querySelector("#getItemsButton");
const updateItemField = document.querySelector("#updateName");
const updatePriceField = document.querySelector("#updatePrice");
const updateAisleField = document.querySelector("#updateAisleNumber");
const updateFormButton = document.querySelector("#updateFormButton");

const insertIntoEditForm = (data) => {
    console.log(data);
    const item = data.data;
    updateItemField.value = item.itemName;
    updatePriceField.value = item.itemPrice;
    updateAisleField.value = item.aisleNumber;
    updateFormButton.setAttribute("data-id", item.itemId);
    
}

const getItems = () => {
    axios
        .get("http://localhost:8080/getAll")
        .then(res => {
            console.log(res);
            const items = res.data;
            getOutput.innerHTML = "";
            for (let item of items) {
                const itemCol = document.createElement("div");
                itemCol.classList.add("col");

                const itemCard = document.createElement("div");
                itemCard.style = `background-color: ${item.itemName}`;
                itemCard.classList.add("card");

                const itemBody = document.createElement("div");
                itemBody.classList.add("card-body");

                const itemName = document.createElement("h5");
                itemName.classList.add("card-title");
                itemName.innerText = `Item Name: ${item.itemName}`;
                itemBody.appendChild(itemName);

                const itemPrice = document.createElement("p");
                itemPrice.classList.add("card-text");
                itemPrice.innerText = `Item Price: ${item.itemPrice}`;
                itemBody.appendChild(itemPrice);

                const aisleNumber = document.createElement("p");
                aisleNumber.classList.add("card-text");
                aisleNumber.innerText = `Aisle Number: ${item.aisleNumber}`;
                itemBody.appendChild(aisleNumber);

                const itemDelete = document.createElement("button");
                itemDelete.innerText = "DELETE";
                itemDelete.classList.add("btn", "btn-danger");
                itemDelete.addEventListener("click", () => {
                    axios
                        .delete(`http://localhost:8080/remove/${item.itemId}`)
                        .then(res => getItems())
                        .catch(err => console.error(err))
                });

                const itemUpdate = document.createElement("button");
                itemUpdate.innerText = "UPDATE";
                itemUpdate.classList.add("btn", "btn-primary");
                itemUpdate.addEventListener("click", () => {
                    axios
                        .get(`http://localhost:8080/get/${item.itemId}`)
                        .then(res => insertIntoEditForm(res))
                        .catch(err => console.error(err))
                });
                itemBody.appendChild(itemUpdate);
                itemBody.appendChild(itemDelete);
                itemCard.appendChild(itemBody);
                itemCol.appendChild(itemCard);

                getOutput.appendChild(itemCol);
            }
        })
        .catch(err => console.error(err));
}

// getAllItemsButton.addEventListener("click", function(){getItems});

// document.querySelector("#deleteForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const form = this;

//     const itemId = form.itemId.value;
//     axios
//         .delete(`http://localhost:8080/remove/${itemId}`)
//         .then(res => {
//             console.log(res);
//             form.reset();
//             form.itemId.focus();
//             getItems();
//         })
//         .catch(err => console.error(err));
// });

updateFormButton.addEventListener("click", function(event){
    const id = event.target.getAttribute("data-id");
    event.preventDefault();
    const data = {
        itemName: updateItemField.value,
        itemPrice: updatePriceField.value,
        aisleNumber: updateAisleField.value
    };

    console.log("DATA: ", data);

    axios
        .put(`http://localhost:8080/replace/${id}`, data)
        .then(res => {
            getItems();
            document.querySelector("#updateForm").reset();
            console.log(res);
        })
        .catch(err => console.error(err));
})


document.querySelector("#itemForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("THIS:", this);

    const form = this;

    console.log("ITEM NAME: ", form.itemName);
    console.log("PRICE: ", form.itemPrice);
    console.log("AISLE NUMBER: ", form.aisleNumber);

    const data = {
        itemName: form.itemName.value,
        itemPrice: form.itemPrice.value,
        aisleNumber: form.aisleNumber.value
    };

    console.log("DATA: ", data);

    axios
        .post("http://localhost:8080/create", data)
        .then(res => {
            getItems();
            form.reset();
            form.itemName.focus();
            console.log(res);
        })
        .catch(err => console.error(err));
});

// const updateItem = () => {
//     axios
//         .get("http://localhost:8080/getItems")
//         .then(res => {
//             console.log(res);
//             const items = res.data;
//             getOutput.innerHTML = "";
//             for (let item of items) {
//                 const itemCol = document.createElement("div");
//                 itemCol.classList.add("col");

//                 const itemCard = document.createElement("div");
//                 itemCard.style = `background-color: ${item.itemName}`;
//                 itemCard.classList.add("card");

//                 const itemBody = document.createElement("div");
//                 itemBody.classList.add("card-body");

//                 const itemName = document.createElement("h5");
//                 itemName.classList.add("card-title");
//                 itemName.innerText = `Item Name: ${item.itemName}`;
//                 itemBody.appendChild(itemName);

//                 const itemPrice = document.createElement("p");
//                 itemPrice.classList.add("card-text");
//                 itemPrice.innerText = `Item Price: ${item.itemPrice}`;
//                 itemBody.appendChild(itemPrice);

//                 const aisleNumber = document.createElement("p");
//                 aisleNumber.classList.add("card-text");
//                 aisleNumber.innerText = `Aisle Number: ${item.aisleNumber}`;
//                 itemBody.appendChild(aisleNumber);

//                 const itemDelete = document.createElement("button");
//                 itemDelete.innerText = "DELETE";
//                 itemDelete.classList.add("btn", "btn-danger");
//                 itemDelete.addEventListener("click", () => {
//                     axios
//                         .delete(`http://localhost:8080/remove/${item.itemId}`)
//                         .then(res => getItems())
//                         .catch(err => console.error(err))
//                 });

//                 const itemUpdate = document.createElement("button");
//                 itemUpdate.innerText = "UPDATE";
//                 itemUpdate.classList.add("btn", "btn-danger");
//                 itemUpdate.addEventListener("click", () => {
//                     axios
//                         .get(`http://localhost:8080/get/${item.itemId}`)
//                         .then(res => console.log(res))
//                         .catch(err => console.error(err))
//                 });
//                 itemBody.appendChild(itemUpdate);
//                 itemBody.appendChild(itemDelete);
//                 itemCard.appendChild(itemBody);
//                 itemCol.appendChild(itemCard);

//                 getOutput.appendChild(itemCol);
//             }
//         })
//         .catch(err => console.error(err));
// }

// updateItemButton.addEventListener("click", function(){updateItem()});


getItems();



