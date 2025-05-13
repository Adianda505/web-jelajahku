const daftarBtn = document.querySelector('.daftar-button');
  
daftarBtn.addEventListener('click', function (e) {
  e.preventDefault(); // agar tidak reload

  // Validasi sederhana (bisa disesuaikan)
  const inputs = document.querySelectorAll('.input-field');
  let valid = true;
  inputs.forEach(input => {
    if (!input.value) valid = false;
  });

  if (valid && document.getElementById('syarat').checked) {
    // Tampilkan modal
    document.getElementById('successModal').style.display = 'block';
    
    // Auto redirect setelah 2 detik
    setTimeout(() => {
      window.location.href = "../HTML/login.html";
    }, 100000);
  } else {
    alert("Harap lengkapi semua data dan centang persetujuan.");
  }
});

function redirectToLogin() {
  window.location.href = "../HTML/login.html";
}