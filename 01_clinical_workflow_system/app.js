let appointments = [];

function add() {
  const name = document.getElementById("name").value;
  const time = document.getElementById("time").value;

  appointments.push({ id: Date.now(), name, time, status: "pending" });
  render();
}

function complete(id) {
  appointments = appointments.map(a =>
    a.id === id ? { ...a, status: "done" } : a
  );
  render();
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  appointments.forEach(a => {
    list.innerHTML += `
      <li>
        ${a.name} - ${a.time} - ${a.status}
        <button onclick="complete(${a.id})">Done</button>
      </li>
    `;
  });
}let appointments = [];

function addAppointment(name, time) {
  appointments.push({
    id: Date.now(),
    name,
    time,
    status: "pending"
  });
  render();
}

function completeAppointment(id) {
  appointments = appointments.map(a =>
    a.id === id ? { ...a, status: "done" } : a
  );
  render();
}

function render() {
  console.log(appointments);
}