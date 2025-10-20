// Datos de ejemplo (puedes expandir esta lista)
const platos = [
  {
    nombre: "Pizza Margherita",
    pais: "Italia",
    region: "Europa",
    descripcion: "Pizza clásica italiana con salsa de tomate, mozzarella y albahaca fresca.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/800px-Pizza_Margherita_stu_spivack.jpg"
  },
  {
    nombre: "Sushi",
    pais: "Japón",
    region: "Asia",
    descripcion: "Plato japonés de arroz vinagrado combinado con pescado crudo, mariscos o vegetales.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Sushi_platter.jpg/800px-Sushi_platter.jpg"
  },
  {
    nombre: "Tacos al Pastor",
    pais: "México",
    region: "América",
    descripcion: "Tacos de carne de cerdo marinada, asada en trompo y servida con piña.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Tacos_al_pastor_2.jpg/800px-Tacos_al_pastor_2.jpg"
  },
  {
    nombre: "Tagine",
    pais: "Marruecos",
    region: "África",
    descripcion: "Guiso lento cocinado en una olla de barro cónica, con especias y frutas secas.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Chicken_tagine.jpg/800px-Chicken_tagine.jpg"
  },
  {
    nombre: "Pavlova",
    pais: "Australia / Nueva Zelanda",
    region: "Oceanía",
    descripcion: "Postre de merengue crujiente por fuera y suave por dentro, con frutas frescas.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pavlova_%284821484355%29.jpg/800px-Pavlova_%284821484355%29.jpg"
  }
];

// Elementos del DOM
const platosContainer = document.getElementById('platosContainer');
const detallePlato = document.getElementById('detallePlato');
const searchInput = document.getElementById('searchInput');
const regionFilter = document.getElementById('regionFilter');

// Mostrar todos los platos al cargar
mostrarPlatos(platos);

// Función para renderizar los platos
function mostrarPlatos(lista) {
  platosContainer.innerHTML = '';
  lista.forEach(plato => {
    const card = document.createElement('div');
    card.className = 'plato-card';
    card.innerHTML = `
      <img src="${plato.imagen}" alt="${plato.nombre}" onerror="this.src='https://via.placeholder.com/250x150?text=Sin+imagen'">
      <h3>${plato.nombre}</h3>
      <p><em>${plato.pais}</em></p>
    `;
    card.addEventListener('click', () => mostrarDetalle(plato));
    platosContainer.appendChild(card);
  });
}

// Mostrar detalle de un plato
function mostrarDetalle(plato) {
  detallePlato.style.display = 'block';
  detallePlato.innerHTML = `
    <img src="${plato.imagen}" alt="${plato.nombre}" onerror="this.src='https://via.placeholder.com/400x250?text=Sin+imagen'">
    <h2>${plato.nombre}</h2>
    <p><strong>País:</strong> ${plato.pais} (${plato.region})</p>
    <p>${plato.descripcion}</p>
  `;
  // Scroll automático al detalle
  detallePlato.scrollIntoView({ behavior: 'smooth' });
}

// Filtros
searchInput.addEventListener('input', aplicarFiltros);
regionFilter.addEventListener('change', aplicarFiltros);

function aplicarFiltros() {
  const busqueda = searchInput.value.toLowerCase();
  const region = regionFilter.value;

  const filtrados = platos.filter(plato => {
    const coincideBusqueda = plato.nombre.toLowerCase().includes(busqueda);
    const coincideRegion = region === '' || plato.region === region;
    return coincideBusqueda && coincideRegion;
  });

  mostrarPlatos(filtrados);
}