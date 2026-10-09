# FlipPlay - Green Editorial

Versi untuk orang 3. Isi identitas berikut sebelum mengumpulkan.

Nama: ____________________
NIM: _____________________
Kelas: ___________________

## Menjalankan hasil jadi

1. Buka folder ini di VS Code.
2. Buka `src/index.html` dengan Live Server. Bisa juga klik dua kali file tersebut untuk membukanya langsung di browser.
3. CSS hasil kompilasi dan gambar sudah disertakan, sehingga tampilan dapat dibuka tanpa internet atau instalasi ulang.

## Mengubah kode sambil mengikuti modul

Pastikan Node.js dan npm sudah terpasang. Jalankan terminal dari folder ini, bukan dari `src`.

```bash
npm install
npm run dev
```

Biarkan terminal compiler tetap berjalan selama mengubah HTML. Buka `src/index.html` dengan Live Server. `npm run dev` menjalankan compiler Tailwind dengan `--watch`, bukan server web. Jika compiler berhenti, jalankan kembali perintah tersebut.

Untuk satu kali kompilasi:

```bash
npm run build
```

Perintah aslinya sama dengan modul:

```bash
npx @tailwindcss/cli -i ./src/main.css -o ./src/output.css --watch
```

## File yang dipelajari

| File | Fungsi |
| --- | --- |
| `src/index.html` | Struktur semantik, konten, dan utility Tailwind |
| `src/main.css` | Import Tailwind v4, konfigurasi warna `@theme`, dan gaya dasar |
| `src/output.css` | CSS yang dihasilkan compiler; jangan diedit langsung |
| `src/script.js` | Menu seluler dan pratinjau formulir |
| `src/assets/` | Ilustrasi utama dan empat ikon kategori lokal |
| `package.json` | Dependency Tailwind dan perintah compiler |
| `package-lock.json` | Versi dependency untuk instalasi yang konsisten |

## Ciri versi ini

Tema: Green Editorial. Judul hero: Dari layar ke lembar.

Konten kartu: Hutan Cahaya, Di Balik Jendela, Peta Pulau Rahasia, Perpustakaan Senja.

Versi ini memiliki struktur lengkap untuk dikerjakan dan dijelaskan secara mandiri. Nama tema, tata letak hero, komposisi kartu, serta judul dan deskripsi kartu berbeda dari dua versi lainnya.

## Alur demo sekitar 1-2 menit

1. Perkenalkan FlipPlay sebagai platform yang menggabungkan streaming video dan digital reading.
2. Tunjukkan navbar dan kedua tombol hero. Klik `Jelajahi koleksi` untuk berpindah ke konten.
3. Jelaskan empat kategori: anime, drama, manga, dan light novel. Setiap kartu memiliki gambar, judul, dan deskripsi sendiri.
4. Buka kode HTML. Tunjukkan `header`, `nav`, `main`, `section`, `article`, `figure`, `form`, dan `footer`.
5. Tunjukkan `src/main.css`. Jelaskan bahwa `@theme` memberi warna konsisten melalui utility seperti `bg-brand`, `text-brand`, dan `border-line`.
6. Kecilkan layar. Tunjukkan perubahan grid dan menu seluler. Jelaskan breakpoint `sm:`, `md:`, dan `lg:`.
7. Isi formulir. Klik `Pratinjau pesan`; jelaskan validasi wajib isi dan format email. Formulir ini simulasi dan belum mengirim pesan.
8. Akhiri dengan menunjukkan footer dan tautan kembali ke atas.

## Batas demo

Landing page ini menampilkan pengenalan platform. Pemutaran video, pembacaan manga/novel, akun, dan pengiriman pesan ke server belum dibuat karena tidak diminta dalam Modul 1. Seluruh judul koleksi adalah contoh fiktif. Formulir tidak menyimpan data atau menghubungi layanan eksternal.

Sumber tugas: `modul 1 web(1).pdf`, versi 1.3, September 2026; codelab halaman 20, demo halaman 21, rubrik halaman 22.

## Verifikasi hasil

HTML semantik, gambar lokal, navigasi, menu seluler, validasi formulir, dan pratinjau pesan berhasil diperiksa. Tampilan diuji pada lebar 320, 390, 768, dan 1440 piksel serta pembesaran teks 200% di layar ponsel tanpa scroll horizontal. Halaman diuji dengan dibuka langsung sebagai file lokal.
