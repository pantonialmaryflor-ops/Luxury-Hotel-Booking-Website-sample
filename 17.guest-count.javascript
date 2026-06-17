const minusBtn = document.getElementById('guest-minus');
const plusBtn = document.getElementById('guest-plus');
const guestCountDisplay = document.querySelector('.guest-count');
const roomCards = document.querySelectorAll('.results-card');
let currentGuests = 1;

function updateGuests() {
if (guestCountDisplay){
 guestCountDisplay.textContent = `${currentGuests} Adult${currentGuests > 1 ? 's' : ''}`;
 }
if(roomCards && roomCards.length > 0){
  roomCards.forEach(card => {
    const cardGuestMax = Number(card.getAttribute('data-guest-count'));
  if(isNaN(cardGuestMax)) return;
  
    if (currentGuests <= cardGuestMax) {
      card.removeAttribute('data-guest-hidden');
    } else {
      card.setAttribute('data-guest-hidden','true');
    }
  });
}
}
if (plusBtn){
plusBtn.addEventListener('click', (e) => {
 e.preventDefault();
  if (currentGuests < 4) {
    currentGuests++;
    updateGuests();
  }
});
}

if(minusBtn){
minusBtn.addEventListener('click', (e) => {
 e.preventDefault();
  if (currentGuests > 1) {
    currentGuests--;
    updateGuests();
  }
});
}
