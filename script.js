let dados = [];

// Carrega o CSV ao iniciar
Papa.parse("auxAR.csv", {
  download: true,
  header: true,
  complete: function (results) {
    dados = results.data;
  }
});

function filtrar() {
  const kmInicial = parseFloat(document.getElementById("kmInicial").value);
  const kmFinal = parseFloat(document.getElementById("kmFinal").value);

  if (isNaN(kmInicial) || isNaN(kmFinal)) {
    alert("Preencha ambos os campos corretamente.");
    return;
  }

  const filtrado = dados.filter(row => {
    const km = parseFloat(row["KM"]);
    return !isNaN(km) && km >= kmInicial && km <= kmFinal;
  });

  exibirTabela(filtrado);
}

function exibirTabela(data) {
  const tabela = document.getElementById("resultado");
  tabela.innerHTML = "";

  if (data.length === 0) {
    tabela.innerHTML = "<tr><td colspan='100%'>Nenhum resultado encontrado</td></tr>";
    return;
  }

  // Cabeçalho
  const cabecalho = Object.keys(data[0]);
  let thead = "<tr>" + cabecalho.map(col => `<th>${col}</th>`).join("") + "</tr>";
  tabela.innerHTML += thead;

  // Dados
  data.forEach(row => {
    let linha = "<tr>" + cabecalho.map(col => `<td>${row[col]}</td>`).join("") + "</tr>";
    tabela.innerHTML += linha;
  });
}