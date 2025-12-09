function openPayment(service) {
    document.getElementById("serviceTitle").innerText = service;
    document.getElementById("paymentBox").style.display = "block";
}

function closePayment() {
    document.getElementById("paymentBox").style.display = "none";
}

function pay(type) {
    alert("Pay using " + type + ". Then send the gift card code on WhatsApp.");
}