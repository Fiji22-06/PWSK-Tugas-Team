// Fetch data kategori dari file JSON
console.log('🚀 Memulai fetch data kategori...');

fetch("data/kategori.json")
    .then(response => {
        console.log('📡 Response diterima:', response.status);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('✅ Data kategori berhasil dimuat:', data);
        const kategoriList = document.getElementById("kategori-list");
        
        // Hapus loading message
        kategoriList.innerHTML = '';
        console.log('🧹 Loading message dihapus');
        
        // Tambahkan setiap kategori ke dalam list
        data.kategori.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = item;
            
            // Tambahkan event listener untuk interaksi
            li.addEventListener('click', () => {
                console.log(`👆 Kategori diklik: ${item}`);
                alert(`Anda memilih kategori: ${item}`);
            });
            
            kategoriList.appendChild(li);
            console.log(`📚 Kategori ${index + 1} ditambahkan: ${item}`);
        });
        
        console.log('🎉 Semua kategori berhasil ditampilkan!');
    })
    .catch(error => {
        console.error("❌ Gagal Memuat Data Kategori:", error);
        const kategoriList = document.getElementById("kategori-list");
        kategoriList.innerHTML = '<li class="error">❌ Gagal memuat data kategori. Silakan refresh halaman.</li>';
    });
    