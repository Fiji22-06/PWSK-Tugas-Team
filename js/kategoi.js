// Fetch data kategori dari file JSON
fetch("data/kategori.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const kategoriList = document.getElementById("kategori-list");
        
        // Hapus loading message
        kategoriList.innerHTML = '';
        
        // Tambahkan setiap kategori ke dalam list
        data.kategori.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            
            // Tambahkan event listener untuk interaksi
            li.addEventListener('click', () => {
                alert(`Anda memilih kategori: ${item}`);
            });
            
            kategoriList.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Gagal Memuat Data Kategori:", error);
        const kategoriList = document.getElementById("kategori-list");
        kategoriList.innerHTML = '<li class="error">❌ Gagal memuat data kategori. Silakan refresh halaman.</li>';
    });
    