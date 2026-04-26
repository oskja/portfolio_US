let items = [];

function add() {
  const value = document.getElementById("item").value;
  items.push({ id: Date.now(), value });
  render();
}

function remove(id) {
  items = items.filter(i => i.id !== id);
  render();
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  items.forEach(i => {
    list.innerHTML += `
      <li>
        ${i.value}
        <button onclick="remove(${i.id})">X</button>
      </li>
    `;
  });
}