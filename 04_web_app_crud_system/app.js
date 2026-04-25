let items = [];

function createItem(text) {
  items.push({ id: Date.now(), text });
  render();
}

function deleteItem(id) {
  items = items.filter(i => i.id !== id);
  render();
}

function render() {
  console.log(items);
}