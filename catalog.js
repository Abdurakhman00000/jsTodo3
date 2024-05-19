const catalog = document.querySelector(".catalog");
readProduct();

function readProduct() {
  let data = JSON.parse(localStorage.getItem("todo")) || [];
  catalog.innerHTML = "";
  data.forEach((element, index) => {
    const block = document.createElement("div");
    const block_img = document.createElement("img");
    const text_content = document.createElement("div");
    const block_name = document.createElement("p");
    const lastName = document.createElement("p");
    const active_block = document.createElement("div");
    const btn_delete = document.createElement("button");
    const btn_favorite = document.createElement("button");
    const btn_edit = document.createElement("button");

    block.classList.add("block");
    block_img.classList.add("block_img");
    text_content.classList.add("text_content");
    block_name.classList.add("block_name");
    lastName.classList.add("lastName");
    active_block.classList.add("active_block");
    btn_delete.classList.add("btn_delete");
    btn_favorite.classList.add("btn_favorite");
    btn_edit.classList.add("btn_edit");

    // console.log( active_block.children[1]);

    block_img.src = element.image;
    block_name.innerText = `Name: ${element.name}`;
    lastName.innerText = `Last name: ${element.last_name}`;

    btn_delete.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;
    btn_favorite.innerHTML = `<ion-icon name="heart-outline"></ion-icon>`;
    btn_edit.innerHTML = `<ion-icon name="create-outline"></ion-icon>`;

    block.append(block_img);

    text_content.append(block_name);
    text_content.append(lastName);

    active_block.append(btn_delete);
    active_block.append(btn_favorite);
    active_block.append(btn_edit);

    block.append(text_content);
    block.append(active_block);

    catalog.append(block);

    //! ACTIONS

    btn_edit.addEventListener("click", () => {
      edit.style.display = "flex";
      editProduct(index);
    });

    btn_delete.addEventListener("click", () => {
      deleteProduct(index);
    });
  });
}

// EDIT

const edit = document.querySelector(".edit");

window.addEventListener("click", (event) => {
  if (event.target === edit) {
    edit.style.display = "none";
  }
});

// DELETE

function deleteProduct(id) {
  let data = JSON.parse(localStorage.getItem("todo")) || [];
  data.splice(id, 1);
  localStorage.setItem("todo", JSON.stringify(data));
  readProduct();
}

// EDITED

const edit_name = document.querySelector(".nameE");
const edit_last = document.querySelector(".last_nameE");
const edit_image = document.querySelector(".imageE");

function editProduct(index) {
  const data = JSON.parse(localStorage.getItem("todo")) || [];

  edit_name.value = data[index].name;
  edit_last.value = data[index].last_name;
  edit_image.value = data[index].image;

  edit_name.setAttribute("id", index);
  edit_last.setAttribute("id", index);
  edit_image.setAttribute("id", index);
}

const btn_save = document.querySelector(".btn_save");

btn_save.addEventListener("click", () => {
  const data = JSON.parse(localStorage.getItem("todo")) || [];

  const editedNewProduct = {
    name: edit_name.value,
    last_name: edit_last.value,
    image: edit_image.value,
  };

  let nameId = edit_name.id;
  let lastId = edit_last.id;
  let imageId = edit_image.id;

  data.splice(nameId, 1, editedNewProduct)
  data.splice(lastId, 1, editedNewProduct)
  data.splice(imageId, 1, editedNewProduct)

  localStorage.setItem('todo', JSON.stringify(data))
  readProduct()
  edit.style.display = "none";
});



// FAVORITE

btn_favorite.addEventListener('click', () => {
  let favorite_data = JSON.parse(localStorage.getItem('like')) || []
  let obj = data.find((el, id) => id === index)
  
  favorite_data.push(obj)
  
})