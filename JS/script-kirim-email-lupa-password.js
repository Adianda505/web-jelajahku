// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// // setelah berhasil buat akun dengan Firebase Auth:
// const db = getFirestore(app);
// await setDoc(doc(db, "users", user.uid), {
//   email: user.email
// });

// const firebaseConfig = {
//   apiKey: "AIzaSyB87nR4cNNbWOJMcJ_GB4lQdIR-y1yRjeo",
//   authDomain: "jelajahku-login-goggle.firebaseapp.com",
//   projectId: "jelajahku-login-goggle",
//   storageBucket: "jelajahku-login-goggle.firebasestorage.app",
//   messagingSenderId: "613984185039",
//   appId: "1:613984185039:web:27fabd76a14fda394de5ba"
// };

// // Inisialisasi Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const gantiBtn = document.querySelector('.ganti');

// gantiBtn.addEventListener('click', function (e) {
//   e.preventDefault();

//   const emailInput = document.querySelector('.input-field');
//   const email = emailInput.value.trim();

//   if (email === '') {
//     alert("Email tidak boleh kosong.");
//     return;
//   }

//   sendPasswordResetEmail(auth, email)
//     .then(() => {
//       // Tampilkan modal sukses
//       document.getElementById('successModal').style.display = 'block';

//       setTimeout(() => {
//         window.location.href = "../HTML/permintaan-password.html";
//       }, 2000);
//     })
//     .catch((error) => {
//       console.error("Error:", error.message);
//       alert("Terjadi kesalahan: " + error.message);
//     });
// });

// export function redirectToLogin() {
//   window.location.href = "../HTML/permintaan-password.html";
// }



// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
// import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// // Konfigurasi Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyB87nR4cNNbWOJMcJ_GB4lQdIR-y1yRjeo",
//   authDomain: "jelajahku-login-goggle.firebaseapp.com",
//   projectId: "jelajahku-login-goggle",
//   storageBucket: "jelajahku-login-goggle.appspot.com", // Perbaikan domain storage
//   messagingSenderId: "613984185039",
//   appId: "1:613984185039:web:27fabd76a14fda394de5ba"
// };

// // Inisialisasi Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Tangkap tombol
// const gantiBtn = document.querySelector('.ganti');

// if (!gantiBtn) {
//   console.error("Tombol .ganti tidak ditemukan!");
// }

// // Tambahkan event listener
// gantiBtn?.addEventListener('click', async (e) => {
//   e.preventDefault();

//   const emailInput = document.querySelector('.input-field');
//   if (!emailInput) {
//     alert("Input email tidak ditemukan di halaman.");
//     return;
//   }

//   const email = emailInput.value.trim().toLowerCase();

//   if (email === '') {
//     alert("Email tidak boleh kosong.");
//     return;
//   }

//   try {
//     // Debug log
//     console.log("Mengecek Firestore untuk email:", email);

//     const q = query(collection(db, "users"), where("email", "==", email));
//     const querySnapshot = await getDocs(q);

//     if (querySnapshot.empty) {
//       alert("Email tidak ditemukan. Pastikan email sudah terdaftar.");
//       console.warn("Email tidak ditemukan di Firestore.");
//       return;
//     }

//     // Kirim email reset password
//     await sendPasswordResetEmail(auth, email);
//     console.log("Reset password email berhasil dikirim.");

//     // Tampilkan modal sukses
//     const modal = document.getElementById('successModal');
//     if (modal) {
//       modal.style.display = 'block';
//     }

//     setTimeout(() => {
//       window.location.href = "../HTML/permintaan-password.html";
//     }, 2000);

//   } catch (error) {
//     console.error("Error saat reset password:", error.code, error.message);
//     let errorMsg = "Terjadi kesalahan. Silakan coba lagi.";
//     if (error.code === "auth/user-not-found") {
//       errorMsg = "Email belum terdaftar di Authentication.";
//     } else if (error.code === "auth/invalid-email") {
//       errorMsg = "Format email tidak valid.";
//     }
//     alert(errorMsg);
//   }
// });



// script-kirim-email-lupa-password.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Ganti ini dengan konfigurasi Firebase milikmu
const firebaseConfig = {
  apiKey: "AIzaSyB87nR4cNNbWOJMcJ_GB4lQdIR-y1yRjeo",
  authDomain: "jelajahku-login-goggle.firebaseapp.com",
  projectId: "jelajahku-login-goggle",
  storageBucket: "jelajahku-login-goggle.appspot.com", // Perbaikan domain storage
  messagingSenderId: "613984185039",
  appId: "1:613984185039:web:27fabd76a14fda394de5ba"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.querySelector('.ganti').addEventListener('click', async () => {
  const email = document.querySelector('.input-field').value;

  if (!email) {
      alert("Email tidak boleh kosong!");
      return;
  }

  try {
      await sendPasswordResetEmail(auth, email);
      // Tampilkan modal sukses
      document.getElementById('successModal').style.display = "block";
  } catch (error) {
      console.error("Gagal mengirim email reset:", error.message);
      alert("Terjadi kesalahan: " + error.message);
  }
});



