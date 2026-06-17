const priceSlider = document.getElementById('price-range');
const currentValDisplay = document.getElementById('current-value');
const priceCards= document.querySelectorAll('.price-card');

priceSlider.addEventListener('input', (e) => {
  const maxPrice = Number(e.target.value);
  
  currentValDisplay.textContent = maxPrice.toLocaleString('ja-JP', {
    style: 'currency',
    currency: 'JPY'
  });
  roomCards.forEach(card => {
    const cardPrice = Number(card.getAttribute('data-price'));
    if (cardPrice <= maxPrice) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
});
