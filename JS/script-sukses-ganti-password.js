
// const gantiBtn = document.querySelector('.ganti');

// gantiBtn.addEventListener('click', function (e) {
//   e.preventDefault();

//   const emailInput = document.querySelector('.input-field');

//   if (emailInput.value.trim() !== '') {
//     // Tampilkan modal
//     document.getElementById('successModal').style.display = 'block';

//     // Redirect otomatis setelah 2 detik
//     setTimeout(() => {
//       window.location.href = "../HTML/login.html";
//     }, 2000);
//   } else {
//     alert("Email tidak boleh kosong.");
//   }
// });

// function redirectToLogin() {
//   window.location.href = "../HTML/login.html";
// }

// --- Firebase SDK ---
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js";

// // --- Konfigurasi Firebase ---
// const firebaseConfig = {
//   apiKey: "AIzaSyB87nR4cNNbWOJMcJ_GB4lQdIR-y1yRjeo",
//   authDomain: "jelajahku-login-goggle.firebaseapp.com",
//   databaseURL: "https://jelajahku-login-goggle-default-rtdb.firebaseio.com",
//   projectId: "jelajahku-login-goggle",
//   storageBucket: "jelajahku-login-goggle.firebasestorage.app",
//   messagingSenderId: "613984185039",
//   appId: "1:613984185039:web:27fabd76a14fda394de5ba"
// };

// // --- Inisialisasi Firebase ---
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // --- Tombol Ganti Password ---
// const gantiBtn = document.querySelector('.ganti');

// gantiBtn.addEventListener('click', function (e) {
//   e.preventDefault();

//   const passwordInput = document.querySelectorAll('.input-field')[0];
//   const confirmInput = document.querySelectorAll('.input-field')[1];
//   const newPassword = passwordInput.value.trim();
//   const confirmPassword = confirmInput.value.trim();

//   if (newPassword === '' || confirmPassword === '') {
//     alert("Kata sandi tidak boleh kosong.");
//     return;
//   }

//   if (newPassword.length < 8) {
//     alert("Kata sandi harus minimal 8 karakter.");
//     return;
//   }

//   if (newPassword !== confirmPassword) {
//     alert("Konfirmasi kata sandi tidak cocok.");
//     return;
//   }

//   const user = auth.currentUser;

//   if (user) {
//     user.updatePassword(newPassword)
//       .then(() => {
//         document.getElementById('successModal').style.display = 'block';
//         setTimeout(() => {
//           window.location.href = "../HTML/login.html";
//         }, 2000);
//       })
//       .catch((error) => {
//         alert("Gagal memperbarui kata sandi: " + error.message);
//       });
//   } else {
//     alert("Tidak ada pengguna yang login. Harap login terlebih dahulu.");
//     window.location.href = "../HTML/login.html";
//   }
// });

// // Fungsi untuk tombol di modal
// function redirectToLogin() {
//   window.location.href = "../HTML/login.html";
// }



// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js";

// // --- Konfigurasi Firebase ---
// const firebaseConfig = {
//   apiKey: "AIzaSyB87nR4cNNbWOJMcJ_GB4lQdIR-y1yRjeo",
//   authDomain: "jelajahku-login-goggle.firebaseapp.com",
//   databaseURL: "https://jelajahku-login-goggle-default-rtdb.firebaseio.com",
//   projectId: "jelajahku-login-goggle",
//   storageBucket: "jelajahku-login-goggle.firebasestorage.app",
//   messagingSenderId: "613984185039",
//   appId: "1:613984185039:web:27fabd76a14fda394de5ba"
// };

// // --- Inisialisasi Firebase ---
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // --- Tombol Ganti Password ---
// const gantiBtn = document.querySelector('.ganti');

// gantiBtn.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log("Tombol Ganti Password Diklik");

//   const passwordInput = document.querySelectorAll('.input-field')[0];
//   const confirmInput = document.querySelectorAll('.input-field')[1];
//   const newPassword = passwordInput.value.trim();
//   const confirmPassword = confirmInput.value.trim();

//   console.log("Password Baru:", newPassword);
//   console.log("Konfirmasi Password:", confirmPassword);

//   if (newPassword === '' || confirmPassword === '') {
//     alert("Kata sandi tidak boleh kosong.");
//     return;
//   }

//   if (newPassword.length < 8) {
//     alert("Kata sandi harus minimal 8 karakter.");
//     return;
//   }

//   if (newPassword !== confirmPassword) {
//     alert("Konfirmasi kata sandi tidak cocok.");
//     return;
//   }

//   const user = auth.currentUser;

//   if (user) {
//     console.log("Pengguna ditemukan, memperbarui kata sandi...");
//     user.updatePassword(newPassword)
//       .then(() => {
//         console.log("Kata sandi berhasil diperbarui");
//         document.getElementById('successModal').style.display = 'block';
//         setTimeout(() => {
//           window.location.href = "../HTML/login.html";
//         }, 2000);
//       })
//       .catch((error) => {
//         console.error("Terjadi kesalahan saat memperbarui kata sandi:", error);
//         alert("Gagal memperbarui kata sandi: " + error.message);
//       });
//   } else {
//     alert("Tidak ada pengguna yang login. Harap login terlebih dahulu.");
//     window.location.href = "../HTML/login.html";
//   }
// });

// // Fungsi untuk tombol di modal
// function redirectToLogin() {
//   window.location.href = "../HTML/login.html";
// }



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js";

// --- Konfigurasi Firebase ---
const firebaseConfig = {
  apiKey: "AIzaSyB87nR4cNNbWOJMcJ_GB4lQdIR-y1yRjeo",
  authDomain: "jelajahku-login-goggle.firebaseapp.com",
  databaseURL: "https://jelajahku-login-goggle-default-rtdb.firebaseio.com",
  projectId: "jelajahku-login-goggle",
  storageBucket: "jelajahku-login-goggle.appspot.com",
  messagingSenderId: "613984185039",
  appId: "1:613984185039:web:27fabd76a14fda394de5ba"
};

// --- Inisialisasi Firebase ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.addEventListener('DOMContentLoaded', () => {
  onAuthStateChanged(auth, (user) => {
    document.addEventListener('DOMContentLoaded', () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("User login:", user.email);
          const gantiBtn = document.querySelector('.ganti');
    
          if (gantiBtn) {
            gantiBtn.addEventListener('click', (e) => {
              e.preventDefault();
              console.log("Tombol diklik!");
    
              // ... logika validasi dan update password ...
            });
          } else {
            console.error("Tombol .ganti tidak ditemukan di halaman.");
          }
        } else {
          alert("Anda belum login. Silakan login terlebih dahulu.");
          window.location.href = "../HTML/login.html";
        }
      });
    });
    
  });
});

// --- Cek apakah user sedang login ---
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User sedang login:", user.email);

    const gantiBtn = document.querySelector('.ganti');
    gantiBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const passwordInput = document.querySelectorAll('.input-field')[0];
      const confirmInput = document.querySelectorAll('.input-field')[1];
      const newPassword = passwordInput.value.trim();
      const confirmPassword = confirmInput.value.trim();

      if (newPassword === '' || confirmPassword === '') {
        alert("Kata sandi tidak boleh kosong.");
        return;
      }

      if (newPassword.length < 8) {
        alert("Kata sandi harus minimal 8 karakter.");
        return;
      }

      if (newPassword !== confirmPassword) {
        alert("Konfirmasi kata sandi tidak cocok.");
        return;
      }

      user.updatePassword(newPassword)
        .then(() => {
          console.log("Kata sandi berhasil diperbarui");
          document.getElementById('successModal').style.display = 'block';
          setTimeout(() => {
            window.location.href = "../HTML/login.html";
          }, 2000);
        })
        .catch((error) => {
          console.error("Gagal memperbarui kata sandi:", error);
          alert("Gagal memperbarui kata sandi: " + error.message);
        });
    });

  } else {
    alert("Anda belum login. Silakan login terlebih dahulu.");
    window.location.href = "../HTML/login.html";
  }
});

// Fungsi tombol modal
window.redirectToLogin = function () {
  window.location.href = "../HTML/login.html";
}




