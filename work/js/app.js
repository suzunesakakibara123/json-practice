document.addEventListener('DOMContentLoaded', () => {
  fetch('data/product.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const tbody = document.querySelector('#productTable tbody');
      data.forEach(product => {
        const row = document.createElement('tr');
        const cells = [product.id, product.name, product.price, product.description];
        cells.forEach(cellContent => {
          const cell = document.createElement('td');
          cell.textContent = cellContent; // XSS対策
          row.appendChild(cell);
        });
        tbody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('エラー:', error);
      alert('データの読み込みに失敗しました');
    });
});
