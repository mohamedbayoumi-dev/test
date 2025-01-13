const ctx = document.getElementById('salesChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales',
      data: [3000, 4500, 5500, 7500, 8500, 9978],
      borderColor: '#8B5CF6',
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent successfully!');
  this.reset();
});

function handleResize() {
  const width = window.innerWidth;
}

window.addEventListener('resize', handleResize);
handleResize();