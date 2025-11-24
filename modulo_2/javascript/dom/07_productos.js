const productos = [
  { nombre: "Desarrollo de Software", descripcion: "Programación, bases de datos y aplicaciones web", precio: 1200, existencia: 30, ubicacion: "Edificio A" },
  { nombre: "Marketing Digital", descripcion: "Publicidad, redes sociales y analítica", precio: 900, existencia: 40, ubicacion: "Edificio B" },
  { nombre: "Administración de Empresas", descripcion: "Gestión, finanzas y liderazgo", precio: 1100, existencia: 25, ubicacion: "Edificio C" },
  { nombre: "Contabilidad", descripcion: "Costos, auditoría y tributación", precio: 950, existencia: 20, ubicacion: "Edificio D" },
  { nombre: "Diseño Gráfico", descripcion: "Branding, ilustración y diseño visual", precio: 1300, existencia: 15, ubicacion: "Edificio E" },
  { nombre: "Enfermería", descripcion: "Cuidados de salud y laboratorio clínico", precio: 1500, existencia: 18, ubicacion: "Edificio F" },
  { nombre: "Gastronomía", descripcion: "Cocina internacional y administración culinaria", precio: 1400, existencia: 12, ubicacion: "Edificio G" },
  { nombre: "Electricidad", descripcion: "Instalaciones y mantenimiento eléctrico", precio: 1000, existencia: 22, ubicacion: "Edificio H" },
  { nombre: "Mecánica Automotriz", descripcion: "Motores, sistemas eléctricos y diagnóstico", precio: 1200, existencia: 17, ubicacion: "Edificio I" },
  { nombre: "Turismo", descripcion: "Guianza, hotelería y servicios turísticos", precio: 800, existencia: 28, ubicacion: "Edificio J" }
];

  
  const tabla = document.getElementById('cuerpoTabla');
  productos.forEach(p => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${p.nombre}</td>
      <td>${p.descripcion}</td>
      <td>$${p.precio.toFixed(2)}</td>
      <td>${p.existencia}</td>
      <td>${p.ubicacion}</td>
    `;
    tabla.appendChild(fila);
  });
  