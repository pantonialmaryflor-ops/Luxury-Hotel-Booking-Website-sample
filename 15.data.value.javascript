document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('input[data-filter="room-type"]');
  const resultsContainer = document.querySelector('.results-container');
  const cards = document.querySelectorAll('.results-card');
  const promoDisplay = document.querySelector('.promo-display');

  function applyRoomFilters() {
    const selectedRooms = Array.from(checkboxes)
      .filter(input => input.checked)
      .map(input => input.value);

    if (selectedRooms.length === 0) {
      if (promoDisplay) promoDisplay.style.display = 'block';
      cards.forEach(card => card.style.display = 'none');
      return;
    }

    if (promoDisplay) promoDisplay.style.display = 'none';

    cards.forEach(card => {
      const cardRoomType = card.getAttribute('data-room-type');

      if (selectedRooms.includes(cardRoomType)) {
        card.style.display = 'grid';
      } else {
        card.style.display = 'none';
      }
    });
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', applyRoomFilters);
  });

  applyRoomFilters();
});
