// // script-daftar-goggle.js
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// // Ganti ini dengan config Firebase kamu
// const firebaseConfig = {
//   apiKey: "AIzaSyB87nR4cNNbWOJMcJ_GB4lQdIR-y1yRjeo",
//   authDomain: "jelajahku-login-goggle.firebaseapp.com",
//   databaseURL: "https://jelajahku-login-goggle-default-rtdb.firebaseio.com",
//   projectId: "jelajahku-login-goggle",
//   storageBucket: "jelajahku-login-goggle.firebasestorage.app",
//   messagingSenderId: "613984185039",
//   appId: "1:613984185039:web:27fabd76a14fda394de5ba"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Tangkap elemen tombol daftar
// const daftarBtn = document.querySelector('.daftar-button');

// // Daftar saat tombol diklik
// daftarBtn.addEventListener('click', (event) => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const ulangiPassword = document.getElementById('ulangiPassword').value;
//     event.preventDefault();
//     if (password !== ulangiPassword) {
//         alert("Password tidak cocok! Silakan ulangi.");
//         document.getElementById('password').value = "";
//         document.getElementById('ulangiPassword').value = "";
//         document.getElementById('password').focus();
//         return;
//     }
    
//     if (!email || !password || !ulangiPassword) {
//         alert("Semua field harus diisi!");
//         return;
//     }
    
//     if (!document.getElementById('syarat').checked) {
//         alert("Kamu harus menyetujui syarat dan ketentuan.");
//         return;
//     }
    
//     // Coba membuat akun
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("User created:", user);
//         document.getElementById("successModal").style.display = "block";
//     })
//     .catch((error) => {
//         console.error(error.code, error.message);
//         alert("Gagal membuat akun: " + error.message);

//         document.getElementById('password').value = "";
//         document.getElementById('ulangiPassword').value = "";
//     });
//     // ... semua kode di atas tetap
//   });
  
//     // LOGIN DENGAN GOOGLE
//     const googleLoginBtn = document.querySelector('#reg-button-goggle');
//     const provider = new GoogleAuthProvider();
    
//     const db = getDatabase(app); // pastikan ini sudah ada di atas

// googleLoginBtn.addEventListener('click', async (event) => {
//   event.preventDefault();

//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;

//     // Ambil data dari Realtime Database
//     const dbRef = ref(db);
//     get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
//       if (snapshot.exists()) {
//         const userData = snapshot.val();

//         // Simpan ke localStorage
//         localStorage.setItem('user', JSON.stringify({
//           name: namaInput.name,
//           photoURL: userData.photoURL || 'default-avatar.png'
//         }));

//         window.location.href = "../HTML/beranda.html";
//       } else {
//         alert("Data pengguna tidak ditemukan di database!");
//       }
//     });
//   } catch (error) {
//     alert("Login dengan Google gagal: " + error.message);
//   }
// });

// // Fungsi redirect saat tombol 'Tutup' diklik di modal sukses
// window.redirectToLogin = function() {
//     window.location.href = "../HTML/login.html";
// };

// script-daftar-goggle.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

import { 
  getDatabase, 
  ref, 
  set, 
  get, 
  child 
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Firebase config kamu
const firebaseConfig = {
  apiKey: "AIzaSyB87nR4cNNbWOJMcJ_GB4lQdIR-y1yRjeo",
  authDomain: "jelajahku-login-goggle.firebaseapp.com",
  databaseURL: "https://jelajahku-login-goggle-default-rtdb.firebaseio.com",
  projectId: "jelajahku-login-goggle",
  storageBucket: "jelajahku-login-goggle.firebasestorage.app",
  messagingSenderId: "613984185039",
  appId: "1:613984185039:web:27fabd76a14fda394de5ba"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// 🔹 REGISTER EMAIL & PASSWORD
const daftarBtn = document.querySelector('.daftar-button');
daftarBtn?.addEventListener('click', (event) => {
  event.preventDefault();

  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const ulangiPassword = document.getElementById('ulangiPassword').value;

  if (password !== ulangiPassword) {
    alert("Password tidak cocok!");
    return;
  }

  if (!nama || !email || !password || !ulangiPassword) {
    alert("Semua field harus diisi!");
    return;
  }

  if (!document.getElementById('syarat').checked) {
    alert("Kamu harus menyetujui syarat dan ketentuan.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Simpan ke Realtime Database
      return set(ref(db, 'users/' + user.uid), {
        name: nama,
        email: email
      });
    })
    .then(() => {
      document.getElementById("successModal").style.display = "block";
    })
    .catch((error) => {
      alert("Gagal membuat akun: " + error.message);
    });
});

// 🔹 LOGIN DENGAN GOOGLE
const googleLoginBtn = document.querySelector('#reg-button-goggle');
const provider = new GoogleAuthProvider();

googleLoginBtn?.addEventListener('click', async (event) => {
  event.preventDefault();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `users/${user.uid}`));

    let userName = user.displayName || 'Pengguna';

    if (snapshot.exists()) {
      const data = snapshot.val();
      userName = data.name || userName;
    } else {
      // Jika belum ada di DB, tambahkan
      await set(ref(db, 'users/' + user.uid), {
        name: userName,
        email: user.email
      });
    }

    // Simpan ke localStorage
    localStorage.setItem('user', JSON.stringify({
      name: userName,
      photoURL: user.photoURL || 'default-avatar.png'
    }));

    window.location.href = "../HTML/beranda.html";
  } catch (error) {
    alert("Login dengan Google gagal: " + error.message);
  }
});

// 🔹 Redirect setelah sukses daftar
window.redirectToLogin = function() {
  window.location.href = "../HTML/login.html";
};
