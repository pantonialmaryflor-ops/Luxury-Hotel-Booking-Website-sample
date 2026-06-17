const amenityCheckboxes = document.querySelectorAll('input[data-filter="amenity"]');
const roomCards = document.querySelectorAll('.results-card');

function filterByAmenities() {
const selectedAmenities = [];

amenityCheckboxes.forEach(checkbox => {
if (checkbox.checked) {
selectedAmenities.push(checkbox.value);
}
});

roomCards.forEach(card => {
const cardAmenity = card.getAttribute('data-amenities');

if (selectedAmenities.length === 0) {
card.style.display = 'flex';
return;
}

if (selectedAmenities.includes(cardAmenity)) {
card.style.display = 'flex';
} else {
card.style.display = 'none';
}
});
}

amenityCheckboxes.forEach(checkbox => {
checkbox.addEventListener('change', filterByAmenities);
});
