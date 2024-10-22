// script.js

// Fungsi untuk mengaktifkan tombol pesan sekarang
function pesanSekarang() {
    alert("Pesanan Anda telah diterima!");
}

// Fungsi untuk mengaktifkan tombol beli sekarang
function beliSekarang() {
    alert("Produk telah ditambahkan ke keranjang!");
}

// Menambahkan event listener untuk tombol pesan dan beli
document.addEventListener("DOMContentLoaded", function() {
    // Mengambil semua tombol pesan
    const pesanButtons = document.querySelectorAll(".service button");
    pesanButtons.forEach(button => {
        button.addEventListener("click", pesanSekarang);
    });

    // Mengambil semua tombol beli
    const beliButtons = document.querySelectorAll(".product button");
    beliButtons.forEach(button => {
        button.addEventListener("click", beliSekarang);
    });
});