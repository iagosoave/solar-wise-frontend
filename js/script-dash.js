// Alternar entre gráfico e calculadora
document.getElementById('graficoLink').addEventListener('click', function() {
    document.getElementById('graficoContent').classList.remove('d-none');
    document.getElementById('calculadoraContent').classList.add('d-none');
  });
  
  document.getElementById('calculadoraLink').addEventListener('click', function() {
    document.getElementById('calculadoraContent').classList.remove('d-none');
    document.getElementById('graficoContent').classList.add('d-none');
  });
  
  // Gráfico de energia gerada
  const ctxGerada = document.getElementById('energiaGeradaChart').getContext('2d');
  const energiaGeradaChart = new Chart(ctxGerada, {
    type: 'line',
    data: {
      labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      datasets: [{
        label: 'Energia Gerada (kWh)',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(0, 128, 0, 0.2)',
        borderColor: 'rgba(0, 128, 0, 1)',
        borderWidth: 2,
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  // Função da calculadora
  document.getElementById('calcularBtn').addEventListener('click', function() {
    const energiaGerada = parseFloat(document.getElementById('energiaGerada').value);
    const dias = parseInt(document.getElementById('dias').value);
    const valorPorKWh = 0.75; // Valor em R$ por kWh
    const economia = energiaGerada * dias * valorPorKWh;
    document.getElementById('resultadoEconomia').textContent = `R$ ${economia.toFixed(2)}`;
  });
  