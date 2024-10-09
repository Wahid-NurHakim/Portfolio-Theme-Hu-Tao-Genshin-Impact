document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah pengiriman formulir

        const username = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validasi input
        if (!username || !email || !message) {
            alert("Harap isi semua kolom.");
            return;
        }

        // Menampilkan informasi yang dimasukkan
        alert(`Username: ${username}\nEmail: ${email}\nPesan: ${message}`);

        // Mengatur ulang formulir
        form.reset();
    });
});
