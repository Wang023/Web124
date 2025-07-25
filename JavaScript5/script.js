const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value.trim();
    if (text === '') return;
    const item = {
        text,
        done: false
    };
    items.push(item);
    updateList();
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
            <button class="edit" data-index=${i}>Edit</button>
            <button class="delete" data-index=${i}>Delete</button>
        </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if (e.target.matches('input[type="checkbox"]')) {
        const index = e.target.dataset.index;
        items[index].done = !items[index].done;
        updateList();
    }
}

function deleteItem(index) {
    items.splice(index, 1);
    updateList();
}

function editItem(index) {
    const newText = prompt('Edit item:', items[index].text);
    if (newText !== null && newText.trim() !== '') {
        items[index].text = newText.trim();
        updateList();
    }
}

function handleButtonClick(e) {
    if (e.target.classList.contains('delete')) {
        const index = e.target.dataset.index;
        deleteItem(index);
    } else if (e.target.classList.contains('edit')) {
        const index = e.target.dataset.index;
        editItem(index);
    }
}

function updateList() {
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
itemsList.addEventListener('click', handleButtonClick);

populateList(items, itemsList);
