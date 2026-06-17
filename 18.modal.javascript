document.getElementById("submitBtn").addEventListener("click", function () {
  document.getElementById("paymentModal").style.display = "flex";
});

function processPayment() {
  let pin = document.getElementById("paymentPin").value;

  if (pin.length !== 4) {
    alert("Enter 4 digit Pin");
    return;
  }

  document.querySelector(".payment-box").innerHTML = `
    <h2>Processing Payment</h2>
    <div class="loader"></div>
    <p>Please wait...</p>
  `;

  setTimeout(showSuccess, 3000),300;
}

function showSuccess() {
  document.querySelector(".payment-box").innerHTML = `
    <h1>✓</h1>
    <h2>Payment Success</h2>
    <p>Your transaction has been approved.</p>
  `;

  setTimeout(showBookingConfirmation, 2000);
}

function showBookingConfirmation() {
  document.getElementById("paymentModal").style.display = "none";
  document.getElementById("confirmationModal").style.display = "flex";

  document.getElementById("bookingID").innerText = generateBookingID(); 
}

function generateBookingID() {
  return "MH-" + Math.floor(10000 + Math.random() * 900000);
}

function closeConfirmation() {
  document.getElementById("confirmationModal").style.display = "none";
}
