document.getElementById("hamburger").addEventListener("click", function() {
    const navbarMenu = document.getElementById("navbarMenu");
    navbarMenu.classList.toggle("open"); 
});

const menuItems = document.querySelectorAll("#navbarMenu a");
menuItems.forEach(item => {
    item.addEventListener("click", function() {
        const navbarMenu = document.getElementById("navbarMenu");
        navbarMenu.classList.remove("open"); 
    });
});

document.getElementById("btnRegistroNav").addEventListener("click", function(e) {
    e.preventDefault();
    const registroSection = document.getElementById("registro");
    registroSection.style.display = registroSection.style.display === "none" || registroSection.style.display === "" ? "block" : "none";
});


document.getElementById("listarUsuariosNav").addEventListener("click", function(e) {
    e.preventDefault();
    const tablaUsuarios = document.getElementById("tablaUsuarios");
    tablaUsuarios.style.display = tablaUsuarios.style.display === "none" || tablaUsuarios.style.display === "" ? "block" : "none";
});


document.getElementById("btnRegistro").addEventListener("click", function() {
    const registroSection = document.getElementById("registro");
    registroSection.style.display = registroSection.style.display === "none" || registroSection.style.display === "" ? "block" : "none";
});

document.getElementById("listarUsuarios").addEventListener("click", function() {
    const tablaUsuarios = document.getElementById("tablaUsuarios");
    tablaUsuarios.style.display = tablaUsuarios.style.display === "none" || tablaUsuarios.style.display === "" ? "block" : "none";
});

document.getElementById("listarUsuariosNav").addEventListener("click", function() {
    const usuarios = [
        { nombre: "Juan Pérez", email: "juan@example.com", cedula: "123456789", telefono: "5555555", direccion: "Calle 123" },
        { nombre: "María López", email: "maria@example.com", cedula: "987654321", telefono: "5551234", direccion: "Avenida 456" },
        { nombre: "Pedro Gómez", email: "pedro@example.com", cedula: "456789123", telefono: "5556789", direccion: "Carrera 789" }
    ];

    const tbody = document.querySelector("#usuariosTable tbody");
    tbody.innerHTML = ""; // Limpiar la tabla antes de listar

    usuarios.forEach(usuario => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td data-label="Nombre">${usuario.nombre}</td>
            <td data-label="Correo Electrónico">${usuario.email}</td>
            <td data-label="Cédula">${usuario.cedula}</td>
            <td data-label="Teléfono">${usuario.telefono}</td>
            <td data-label="Dirección">${usuario.direccion}</td>
        `;
        tbody.appendChild(row);
    });
});

document.getElementById("listarUsuarios").addEventListener("click", function() {
    const usuarios = [
        { nombre: "Juan Pérez", email: "juan@example.com", cedula: "123456789", telefono: "5555555", direccion: "Calle 123" },
        { nombre: "María López", email: "maria@example.com", cedula: "987654321", telefono: "5551234", direccion: "Avenida 456" },
        { nombre: "Pedro Gómez", email: "pedro@example.com", cedula: "456789123", telefono: "5556789", direccion: "Carrera 789" }
    ];

    const tbody = document.querySelector("#usuariosTable tbody");
    tbody.innerHTML = ""; 

    usuarios.forEach(usuario => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td data-label="Nombre">${usuario.nombre}</td>
            <td data-label="Correo Electrónico">${usuario.email}</td>
            <td data-label="Cédula">${usuario.cedula}</td>
            <td data-label="Teléfono">${usuario.telefono}</td>
            <td data-label="Dirección">${usuario.direccion}</td>
        `;
        tbody.appendChild(row);
    });
});

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nuevoUsuario = {
        nombre: e.target.nombre.value,
        email: e.target.email.value,
        cedula: e.target.cedula.value,
        telefono: e.target.telefono.value,
        direccion: e.target.direccion.value
    };

    const tbody = document.querySelector("#usuariosTable tbody");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td data-label="Nombre">${nuevoUsuario.nombre}</td>
        <td data-label="Correo Electrónico">${nuevoUsuario.email}</td>
        <td data-label="Cédula">${nuevoUsuario.cedula}</td>
        <td data-label="Teléfono">${nuevoUsuario.telefono}</td>
        <td data-label="Dirección">${nuevoUsuario.direccion}</td>
    `;
    tbody.appendChild(row);
    e.target.reset();
});
