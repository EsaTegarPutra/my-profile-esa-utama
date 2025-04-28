// Ambil tombol back-to-top
const topBtn = document.getElementById("back-to-top-btn");

// Tampilkan tombol saat scroll lebih dari 100px
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// Scroll ke atas dengan smooth saat tombol diklik
topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
