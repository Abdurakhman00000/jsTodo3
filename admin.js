const inputs = document.querySelector('.inputs')
const name = document.querySelector('.name')
const last_name = document.querySelector('.last_name')
const image = document.querySelector('.image')
const btn_create = document.querySelector('.btn_create')
const btn_open = document.querySelector('.btn_open')



btn_create.addEventListener('click', () => {
    if(!name.value.trim()  || !last_name.value.trim()  || !image.value.trim() ) {
        alert('Please try again')
        return;
    }
    const newProduct = {
        name: name.value,
        last_name: last_name.value,
        image: image.value,
    }


    let data = JSON.parse(localStorage.getItem('todo')) || []
    data.push(newProduct)
    localStorage.setItem('todo', JSON.stringify(data))
})