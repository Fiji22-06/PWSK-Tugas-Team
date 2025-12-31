// ambil data dari json
fetch("data/kategori.json")
    .then(response => response.json())
    .then(data => {
        const kategoriList = document.getElementById("kategori-list");
        
        // hapus loading
        kategoriList.innerHTML = '';
        
        // tampilin semua kategori
        data.kategori.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            
            // kalo di klik
            li.addEventListener('click', function() {
                alert('Anda memilih kategori: ' + item);
            });
            
            kategoriList.appendChild(li);
        });
    })
    .catch(error => {
        console.log("Error:", error);
        const kategoriList = document.getElementById("kategori-list");
        kategoriList.innerHTML = '<li class="error">Gagal memuat data</li>';
    });
    