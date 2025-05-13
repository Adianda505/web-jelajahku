fetch('../TEXT/text-artikel-gunung/alamat-dan-rute-lokasi.txt')
.then(response => response.text())
.then(data => {
  document.getElementById('konten').innerText = data;
})
.catch(error => {
  document.getElementById('konten').innerText = 'Gagal memuat teks.';
  console.error('Error:', error);
});

//VIA VATAK

fetch('../TEXT/text-artikel-gunung/via-vatak-teks.txt')
.then(response => response.text())
.then(data => {
  document.getElementById('via-vatak-text').innerText = data;
})
.catch(error => {
  document.getElementById('via-vatak-text').innerText = 'Gagal memuat teks.';
  console.error('Error:', error);
});

//DIENG KULON
fetch('../TEXT/text-artikel-gunung/via-dieng-kulon-teks.txt')
.then(response => response.text())
.then(data => {
  document.getElementById('via-dieng-kulon-text').innerText = data;
})
.catch(error => {
  document.getElementById('via-dieng-kulon-text').innerText = 'Gagal memuat teks.';
  console.error('Error:', error);
});

//KALILEMBU
fetch('../TEXT/text-artikel-gunung/via-kalilembu-teks.txt')
.then(response => response.text())
.then(data => {
  document.getElementById('via-kalilembu-text').innerText = data;
})
.catch(error => {
  document.getElementById('via-kalilembu-text').innerText = 'Gagal memuat teks.';
  console.error('Error:', error);
});

//WATES
fetch('../TEXT/text-artikel-gunung/via-wates-teks.txt')
.then(response => response.text())
.then(data => {
  document.getElementById('via-wates-text').innerText = data;
})
.catch(error => {
  document.getElementById('via-wates-text').innerText = 'Gagal memuat teks.';
  console.error('Error:', error);
});