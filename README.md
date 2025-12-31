# PWSK-Tugas-Team - Website Toko Buku Online

## 📖 Deskripsi Proyek
Website Toko Buku Online dengan fokus pada halaman **Kategori Buku**. Proyek ini dibuat untuk memenuhi tugas kelompok mata kuliah Pemrograman Web Sisi Klien (PWSK) dengan menerapkan konsep Interaksi Manusia dan Komputer.

## ✨ Fitur Utama
- ✅ Tampilan kategori buku yang menarik dan interaktif
- ✅ Desain responsif (mobile-friendly)
- ✅ Animasi hover dan fade-in pada setiap kategori
- ✅ Fetch data dari file JSON
- ✅ Error handling yang baik
- ✅ Loading state saat memuat data
- ✅ Interaksi klik pada setiap kategori
- ✅ Console logging untuk debugging
- ✅ SEO optimized dengan Open Graph meta tags

## 🗂️ Struktur Proyek
```
PWSK-Tugas-Team/
│
├── index.html              # Halaman utama dengan meta tags lengkap
├── README.md              # Dokumentasi proyek
├── TODO.md                # Tracking progress
│
├── css/
│   └── style.css          # Styling, animasi, dan responsive design
│
├── js/
│   └── kategoi.js         # JavaScript dengan console logging
│
└── data/
    └── kategori.json      # Data kategori buku
```

## 🎨 Kategori Buku yang Tersedia
1. **Fiksi** - Novel, cerita pendek, dan karya fiksi lainnya
2. **Non-Fiksi** - Biografi, sejarah, dan fakta
3. **Teknologi** - Buku tentang programming, IT, dan teknologi
4. **Pendidikan** - Buku pelajaran dan referensi akademik
5. **Agama** - Buku keagamaan dan spiritual

## 🚀 Cara Menjalankan
1. Clone atau download repository ini
2. Buka file `index.html` di browser
3. Atau gunakan live server untuk development

### Menggunakan Command Line:
```bash
cd PWSK-Tugas-Team
start index.html
```

### Menggunakan Live Server (VSCode):
1. Install extension "Live Server"
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

## 💻 Teknologi yang Digunakan
- **HTML5** - Struktur halaman web
- **CSS3** - Styling dan animasi
  - Flexbox & Grid Layout
  - Gradient backgrounds
  - Responsive design
  - Hover effects & transitions
  - Keyframe animations (fadeInUp)
- **JavaScript (ES6+)** - Interaktivitas
  - Fetch API
  - DOM Manipulation
  - Event Listeners
  - Error Handling
  - Console Logging

## 🎯 Aspek Interaksi Manusia dan Komputer (IMK)
1. **Usability** - Interface yang mudah dipahami dan digunakan
2. **Visual Design** - Warna gradient yang menarik dan konsisten
3. **Feedback** - Hover effects, click interactions, dan animasi
4. **Responsiveness** - Adaptif di berbagai ukuran layar
5. **Error Handling** - Pesan error yang jelas jika gagal memuat data
6. **Loading State** - Indikator loading saat memuat data
7. **Animation** - Fade-in animation untuk user experience yang lebih baik

## 📱 Responsive Design
Website ini dioptimalkan untuk berbagai ukuran layar:
- 🖥️ Desktop (> 768px) - Grid 4 kolom
- 📱 Tablet (768px - 480px) - Grid responsif
- 📱 Mobile (< 480px) - Grid 1 kolom

## 🔧 Perbaikan yang Dilakukan

### Bug Fixes:
1. ✅ Perbaiki path fetch dari `"../data/kategori.json"` ke `"data/kategori.json"`
2. ✅ Perbaiki ID element dari `"kategori"` ke `"kategori-list"`
3. ✅ Perbaiki script reference dari `"js/kategori.js"` ke `"js/kategoi.js"`
4. ✅ Perbaiki layout agar kategori ke-5 (Agama) berada di tengah

### Improvements:
1. ✅ Tambah file CSS dengan styling modern
2. ✅ Tambah meta tags untuk SEO dan Open Graph
3. ✅ Tambah header dan footer
4. ✅ Tambah loading state
5. ✅ Tambah error handling
6. ✅ Tambah event listener untuk interaksi
7. ✅ Implementasi responsive design
8. ✅ Tambah console logging untuk debugging
9. ✅ Tambah fade-in animation dengan staggered delay
10. ✅ Set width tetap 250px untuk konsistensi cards

## 📝 Git Commits History

Proyek ini dikembangkan dengan **8 commit** yang menunjukkan proses development:

### Foundation (Commit 1-3):
1. **fix: Bug Fixes** (b135ec8)
   - Perbaiki script reference dan ID elements
   - Perbaiki path fetch JSON
   - Tambah error handling dan loading state

2. **feat: Styling** (08997f5)
   - Implementasi CSS modern dengan gradient
   - Grid layout responsif
   - Hover effects dan animasi

3. **docs: Documentation** (248fb7c)
   - Update README dengan dokumentasi lengkap
   - Tambah TODO tracking

### Improvements (Commit 4-8):
4. **fix: Layout Center** (be516fe)
   - Perbaiki layout agar kategori Agama di tengah
   - Ubah grid dari auto-fit ke 4 kolom tetap

5. **style: Consistent Width** (0ccb799)
   - Tambah width tetap 250px untuk semua cards
   - Memastikan ukuran seragam

6. **feat: Open Graph Tags** (488b4b5)
   - Tambah meta tags untuk social media sharing
   - Meningkatkan SEO

7. **feat: Console Logging** (bbd8d10)
   - Tambah logging untuk debugging
   - Monitor fetch process dan user interactions

8. **feat: Fade-in Animation** (840dea9)
   - Implementasi fadeInUp keyframe animation
   - Staggered animation delay untuk setiap card

## 🎨 Fitur Desain Terbaru
- **Centered Layout**: Kategori ke-5 (Agama) berada di tengah baris kedua
- **Consistent Sizing**: Semua cards memiliki width 250px
- **Fade-in Animation**: Cards muncul dengan animasi dari bawah
- **Staggered Delay**: Setiap card muncul dengan delay berbeda (0.1s - 0.5s)
- **Smooth Transitions**: Semua animasi menggunakan ease-out timing

## 👥 Tim Pengembang
PWSK Tugas Team

## 📄 Lisensi
Proyek ini dibuat untuk keperluan edukasi.

## 🔗 Referensi
- [Project Frontend Reference](https://angsagd.github.io/project-frontend/project04/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Gradient Generator](https://cssgradient.io/)

---
**© 2025 Toko Buku Online - PWSK Tugas Team**
