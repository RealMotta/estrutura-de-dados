// Cada alimento é um objeto com nome e categoria.
const listaAlimentos = [
  { nome: "Banana", categoria: "Frutas" },
  { nome: "Maçã", categoria: "Frutas" },
  { nome: "Laranja", categoria: "Frutas" },
  { nome: "Frango", categoria: "Carnes" },
  { nome: "Carne bovina", categoria: "Carnes" },
  { nome: "Carne suína", categoria: "Carnes" },
  { nome: "Cenoura", categoria: "Legumes" },
  { nome: "Abobrinha", categoria: "Legumes" },
  { nome: "Beterraba", categoria: "Legumes" },
  { nome: "Alface", categoria: "Verduras" },
  { nome: "Couve", categoria: "Verduras" },
  { nome: "Rúcula", categoria: "Verduras" }
];

// Mostra os alimentos no HTML, na mesma ordem da lista.
const lista = document.getElementById("lista-alimentos");

montarLista(listaAlimentos);

// Função para ordenar a lista de alimentos em ordem crescente (A->Z)
function ordenarCrescente() {
  // Ordena a lista de alimentos pelo nome em ordem crescente
  listaAlimentos.sort((a, b) => a.nome.localeCompare(b.nome));
  
  // Limpa a lista atual no HTML
  lista.innerHTML = "";
  
  // Adiciona os alimentos ordenados de volta à lista no HTML
  montarLista(listaAlimentos);
}

// Função para ordenar a lista de alimentos em ordem decrescente (Z->A)
function ordenarDecrescente() {
  // Ordena a lista de alimentos pelo nome em ordem decrescente
  listaAlimentos.sort((a, b) => b.nome.localeCompare(a.nome));
  
  // Limpa a lista atual no HTML
  lista.innerHTML = "";
  
  // Adiciona os alimentos ordenados de volta à lista no HTML
  montarLista(listaAlimentos);
}

function filtrarPorCategoria(categoria) {
  // Filtra a lista de alimentos pela categoria
  const alimentosFiltrados = listaAlimentos.filter(alimento => alimento.categoria === categoria);
  
  // Limpa a lista atual no HTML
  lista.innerHTML = "";
  
  // Adiciona os alimentos filtrados de volta à lista no HTML
  montarLista(alimentosFiltrados);
}

function filtrarPorNome(nome) {
  // Filtra a lista de alimentos pelo nome
  const alimentosFiltrados = listaAlimentos.filter(alimento => alimento.nome.toLowerCase().includes(nome.toLowerCase()));
  
  // Limpa a lista atual no HTML
  lista.innerHTML = "";
  
  // Adiciona os alimentos filtrados de volta à lista no HTML
  montarLista(alimentosFiltrados);
}

function filtrarAlimentos() {
  const filtroInput = document.getElementById("filtro");
  const filtro = filtroInput.value.trim();
  
  if (filtro === "") {
    // Se o filtro estiver vazio, mostra todos os alimentos
    montarLista(listaAlimentos);
  } else if(filtro.length < 3) {
    montarLista(listaAlimentos);
  }
  else {
    // Filtra os alimentos pelo nome
    filtrarPorNome(filtro);
  }
}

function montarLista(listaPronta){
  // Limpa a lista atual no HTML
  lista.innerHTML = "";
  
  // Adiciona os alimentos da lista pronta de volta à lista no HTML
  for (const alimento of listaPronta) {
    const item = document.createElement("li");
    item.textContent = alimento.nome + " — " + alimento.categoria;
    lista.appendChild(item);
  }
}