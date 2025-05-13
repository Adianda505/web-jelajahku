// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyB87nR4cNNbWOJMcJ_GB4lQdIR-y1yRjeo",
//   authDomain: "jelajahku-login-goggle.firebaseapp.com",
//   projectId: "jelajahku-login-goggle",
//   storageBucket: "jelajahku-login-goggle.appspot.com",
//   messagingSenderId: "613984185039",
//   appId: "1:613984185039:web:27fabd76a14fda394de5ba"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// auth.languageCode = 'en';

// const provider = new GoogleAuthProvider();

// // Login dengan Google
// const googleLogin = document.getElementById("log-button-goggle");
// googleLogin.addEventListener("click", () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const user = result.user;
//       localStorage.setItem("user", JSON.stringify({
//         name: user.displayName,
//         email: user.email,
//         photo: user.photoURL
//       }));
//       window.location.href = "../HTML/beranda.html";
//     })
//     .catch((error) => {
//       console.error("Login error:", error.message);
//     });
// });

// // Login Manual (Email & Password)
// const loginButton = document.querySelector(".button-loggin");
// loginButton.addEventListener("click", async (e) => {
//   e.preventDefault();

//   const emailInput = document.querySelectorAll(".input-field")[0].value;
//   const passwordInput = document.querySelectorAll(".input-field")[1].value;

//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, emailInput, passwordInput);
//     const user = userCredential.user;

//     // Simpan info user lokal
//     localStorage.setItem("user", JSON.stringify({
//       email: user.email
//     }));

//     window.location.href = "../HTML/beranda.html";
//   } catch (error) {
//     alert("Login gagal: " + error.message);
//   }
// });




// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyB87nR4cNNbWOJMcJ_GB4lQdIR-y1yRjeo",
//   authDomain: "jelajahku-login-goggle.firebaseapp.com",
//   projectId: "jelajahku-login-goggle",
//   storageBucket: "jelajahku-login-goggle.appspot.com",
//   messagingSenderId: "613984185039",
//   appId: "1:613984185039:web:27fabd76a14fda394de5ba"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// auth.languageCode = 'en';

// const provider = new GoogleAuthProvider();

// const googleLogin = document.getElementById("log-button-goggle");
// googleLogin.addEventListener("click", () => {

//   signInWithPopup(auth, provider)
//   .then((result) => {
//     const user = result.user;
//     // Simpan user ke localStorage
//     localStorage.setItem("user", JSON.stringify({
//       name: user.displayName,
//       email: user.email,
//       photo: user.photoURL
//     }));
//     // Redirect ke halaman utama
//     window.location.href = "../HTML/beranda.html";
//   })
//   .catch((error) => {
//     console.error("Login error:", error.message);
//   });
// });

//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const user = result.user;
//       console.log(user);
//       // Redirect ke halaman utama
//       window.location.href = "../HTML/beranda.html";
//     })
//     .catch((error) => {
//       console.error("Login error:", error.message);
//     });
// });


// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyB87nR4cNNbWOJMcJ_GB4lQdIR-y1yRjeo",
//   authDomain: "jelajahku-login-goggle.firebaseapp.com",
//   projectId: "jelajahku-login-goggle",
//   storageBucket: "jelajahku-login-goggle.appspot.com",
//   messagingSenderId: "613984185039",
//   appId: "1:613984185039:web:27fabd76a14fda394de5ba"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Event tombol daftar
// const daftarBtn = document.querySelector('.daftar-button');

// daftarBtn.addEventListener("click", async () => {
//   const email = document.querySelectorAll('.input-field')[1].value;
//   const password = document.querySelectorAll('.input-field')[3].value;
//   const confirmPassword = document.querySelectorAll('.input-field')[4].value;

//   if (password !== confirmPassword) {
//     alert("Password tidak cocok!");
//     return;
//   }

//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // Sukses membuat akun, tampilkan modal atau redirect
//     document.getElementById("successModal").style.display = "block";

//   } catch (error) {
//     alert("Gagal daftar: " + error.message);
//     console.error(error);
//   }
// });



// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
// import{
//   getDatabase, ref, set, get, child
// } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
// const firebaseConfig = {
//   apiKey: "AIzaSyB87nR4cNNbWOJMcJ_GB4lQdIR-y1yRjeo",
//   authDomain: "jelajahku-login-goggle.firebaseapp.com",
//   projectId: "jelajahku-login-goggle",
//   storageBucket: "jelajahku-login-goggle.appspot.com",
//   messagingSenderId: "613984185039",
//   appId: "1:613984185039:web:27fabd76a14fda394de5ba"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getDatabase(app);

// // Event tombol login
// const emailInput = document.querySelectorAll('.input-field')[0];
// const passwordInput = document.querySelectorAll('.input-field')[1];
// const emailPasswordBtn = document.querySelector('.button-loggin');

// emailPasswordBtn.addEventListener('click', async (event) => {
//   event.preventDefault();

//   const email = emailInput.value;
//   const password = passwordInput.value;

//   if (!email || !password) {
//     alert("Email dan password harus diisi!");
//     return;
//   }

//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     alert("Login berhasil!");

//     localStorage.setItem('user', JSON.stringify({
//       name: user.displayName || 'Pengguna',
//       photoURL: user.photoURL || 'default-avatar.png'
//     }));

//     window.location.href = "../HTML/beranda.html";
//   } catch (error) {
//     alert("Login gagal: " + error.message);
//   }
// });

// // === Login dengan Google ===
// const googleLoginBtn = document.querySelector('#log-button-goggle');
// const provider = new GoogleAuthProvider();

// googleLoginBtn.addEventListener('click', async (event) => {
//   event.preventDefault();

//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;

//     alert("Login Google berhasil!");

//     localStorage.setItem('user', JSON.stringify({
//       name: user.displayName || 'Pengguna',
//       photoURL: user.photoURL || 'default-avatar.png'
//     }));
//     // Redirect ke halaman sebelumnya jika ada
//     const redirect = localStorage.getItem('redirectAfterLogin');
//     window.location.href = redirect ? redirect : "../HTML/beranda.html";

//   } catch (error) {
//     alert("Login dengan Google gagal: " + error.message);
//   }
// });

// // === Tombol keluar ===
// const exitButton = document.querySelector('.button-exit');
// exitButton.addEventListener('click', () => {
//   window.close();  // Menutup jendela login (bisa dikembangkan lebih lanjut untuk navigasi).
// });

// loginBtn.addEventListener('click', async () => {
//   const email = document.querySelectorAll('.input-field')[0].value;
//   const password = document.querySelectorAll('.input-field')[1].value;

//   if (!email || !password) {
//     alert("Email dan password harus diisi!");
//     return;
//   }

//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     alert("Login berhasil!");
//     // Arahkan ke halaman utama setelah login
//     window.location.href = "../HTML/beranda.html";

//   } catch (error) {
//     console.error(error.code, error.message);
//     alert("Login gagal: " + error.message);
//   }
// });

/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import {
  getDatabase,
  ref,
  get,
  child
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB87nR4cNNbWOJMcJ_GB4lQdIR-y1yRjeo",
  authDomain: "jelajahku-login-goggle.firebaseapp.com",
  databaseURL: "https://jelajahku-login-goggle-default-rtdb.firebaseio.com",
  projectId: "jelajahku-login-goggle",
  storageBucket: "jelajahku-login-goggle.appspot.com",
  messagingSenderId: "613984185039",
  appId: "1:613984185039:web:27fabd76a14fda394de5ba"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// ==== LOGIN DENGAN EMAIL/PASSWORD ====
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailPasswordBtn = document.querySelector('.button-loggin');

emailPasswordBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    alert("Email dan password harus diisi!");
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Ambil nama dari Realtime Database
    const snapshot = await get(child(ref(db), `users/${user.uid}`));
    const userData = snapshot.exists() ? snapshot.val() : {};

    localStorage.setItem('user', JSON.stringify({
      name: userData.name || 'Pengguna',
      photoURL: user.photoURL || 'default-avatar.png'
    }));

    alert("Login berhasil!");
    window.location.href = "../HTML/beranda.html";
  } catch (error) {
    alert("Login gagal: " + error.message);
  }
});

// ==== LOGIN DENGAN GOOGLE ====
const googleLoginBtn = document.querySelector('#log-button-goggle');
const provider = new GoogleAuthProvider();

googleLoginBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Simpan ke localStorage
    localStorage.setItem('user', JSON.stringify({
      name: user.displayName || 'Pengguna',
      photoURL: user.photoURL || 'default-avatar.png'
    }));

    alert("Login Google berhasil!");
    const redirect = localStorage.getItem('redirectAfterLogin');
    window.location.href = redirect ? redirect : "../HTML/beranda.html";
  } catch (error) {
    alert("Login dengan Google gagal: " + error.message);
  }
});

// ==== TOMBOL KELUAR ====
const exitButton = document.querySelector('.button-exit');
exitButton.addEventListener('click', () => {
  window.close();
});
*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB87nR4cNNbWOJMcJ_GB4lQdIR-y1yRjeo",
  authDomain: "jelajahku-login-goggle.firebaseapp.com",
  databaseURL: "https://jelajahku-login-goggle-default-rtdb.firebaseio.com",
  projectId: "jelajahku-login-goggle",
  storageBucket: "jelajahku-login-goggle.appspot.com",
  messagingSenderId: "613984185039",
  appId: "1:613984185039:web:27fabd76a14fda394de5ba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Login Email/Password
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    localStorage.setItem("user", JSON.stringify({
      name: user.displayName || email,
      photoURL: user.photoURL || "default-avatar.png"
    }));

    window.location.href = "../HTML/beranda.html";
  } catch (err) {
    alert("Login gagal: " + err.message);
  }
});

// Login Google
const googleBtn = document.getElementById("log-button-goggle");
googleBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Simpan ke Database jika pertama kali login
    const dbRef = ref(db);
    get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
      if (!snapshot.exists()) {
        set(ref(db, 'users/' + user.uid), {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        });
      }
    });

    // Simpan di localStorage
    localStorage.setItem("user", JSON.stringify({
      name: user.displayName,
      photoURL: user.photoURL
    }));

    window.location.href = "../HTML/beranda.html";
  } catch (err) {
    alert("Login dengan Google gagal: " + err.message);
  }
});
