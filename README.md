# Paulus Simorangkir — Portofolio

Situs web portofolio pribadi untuk Paulus Simorangkir, Frontend Web Developer & AI Enthusiast.
Dibangun sebagai SPA satu halaman dengan kualitas desain dan performa setingkat produk SaaS premium.

## Ringkasan

- Single-page portfolio dengan 7 bagian: Hero, Tentang, Keahlian, Pengalaman, Pendidikan, Proyek, Kontak.
- Formulir kontak terhubung langsung ke Google Sheets lewat Google Apps Script — tanpa backend server.
- Mendukung mode gelap & terang, animasi scroll yang halus, dan navigasi keyboard penuh.
- Arsitektur berbasis fitur (feature-based) dengan TypeScript strict mode dan tanpa duplikasi kode.

## Susunan Teknologi

| Layer | Teknologi |
|---|---|
| Framework | React 19 + TypeScript (strict mode) |
| Build tool | Vite 6 |
| Styling | Tailwind CSS (strategi dark mode via class) |
| Animasi | Framer Motion |
| Ikon | react-icons |
| Backend kontak | Google Apps Script + Google Sheets |
| Deployment | GitHub Pages / Cloudflare Pages / Domainesia (static hosting) |

## Fitur

- **Hero** — pembuka dengan grid blueprint animasi dan entrance bertahap.
- **Tentang** — narasi perjalanan karier, dari pekerjaan non-teknis ke frontend engineering.
- **Keahlian** — dikelompokkan per kategori (Frontend, Backend, Data, Tools, AI) dengan indikator level.
- **Pengalaman** — ditampilkan sebagai "git log" karier: setiap peran adalah satu commit.
- **Pendidikan** — riwayat SMK & Diploma 3.
- **Proyek** — grid kartu proyek dengan stack, highlight, dan tautan.
- **Kontak** — formulir dengan validasi, honeypot anti-spam, status loading, dan feedback sukses/gagal — tersimpan otomatis ke Google Sheets.
- Mode gelap/terang dengan deteksi preferensi sistem + persist ke localStorage.
- Semua animasi menghormati `prefers-reduced-motion`.
- Code-splitting per bagian (lazy-loaded di bawah Hero & Tentang) untuk bundle awal yang kecil.

## Struktur Folder

```
src/
  components/
    ui/          → Atomik: Button, Input, Textarea, Card
    common/      → Container, SectionHeading, SocialIcon, ThemeToggle
    sections/    → Komposit: Hero, About, Skills, Experience, Education, Contact, ProjectCard
  features/
    contact/     → ContactForm (logika form + validasi + submit)
    projects/    → ProjectGrid (menyusun ProjectCard dari data proyek)
  layout/        → Header, Footer
  pages/         → Home (menyusun seluruh section + lazy loading)
  hooks/         → useTheme, useContactForm, usePrefersReducedMotion
  services/      → contactService (orkestrasi pengiriman pesan)
  integrations/
    google-sheets/ → contactSheetClient (detail fetch ke Apps Script)
  utils/         → cn (classnames), validateContactForm
  types/         → seluruh tipe domain bersama
  constants/     → profile, skills, experience, education, projects (data situs)
  styles/        → globals.css (Tailwind layers + utilitas custom)
  animations/     → variants Framer Motion bersama
  config/        → app.config (baca env var)

google-apps-script/
  Code.gs        → backend Apps Script (deploy terpisah, lihat bagian Sistem Kontak)

public/
  favicon.svg, robots.txt, sitemap.xml
```

## Instalasi

```bash
npm install
cp .env.example .env
# isi VITE_CONTACT_ENDPOINT dengan URL Web App Apps Script (lihat bagian Sistem Kontak)
npm run dev
```

## Pembuatan & Penerapan (Build & Deploy)

```bash
# Build untuk produksi
npm run build      # output ke folder dist/

# Preview hasil build secara lokal
npm run preview
```

**GitHub Pages** — workflow otomatis ada di `.github/workflows/deploy.yml`.
Ganti `VITE_BASE_PATH` di workflow tersebut menjadi `/nama-repo-kamu/`, lalu aktifkan
GitHub Pages di Settings > Pages > Source: GitHub Actions.

**Cloudflare Pages** — build command `npm run build`, output directory `dist`,
set `VITE_BASE_PATH=/` di environment variables.

**Domainesia (cPanel/static hosting)** — jalankan `npm run build` dengan
`VITE_BASE_PATH=/`, lalu upload seluruh isi folder `dist/` ke `public_html`.

> Catatan: situs ini 100% static build — tidak butuh Node.js di server produksi.

## Target Kinerja

Struktur kode disusun untuk mendukung target Lighthouse ≥95 di keempat kategori:

- **Performance** — code-splitting per section, lazy loading komponen di bawah fold, bundle Framer Motion & react-icons dipisah jadi chunk sendiri, tidak ada render ulang yang tidak perlu (memoization pada list besar).
- **Accessibility** — HTML semantik, heading hierarki benar, label ARIA pada elemen interaktif, status fokus terlihat (`:focus-visible`), navigasi keyboard penuh, kontras warna AA pada kedua mode tema.
- **SEO** — meta description per bagian penting, OpenGraph + Twitter Card, data terstruktur JSON-LD (schema Person), `robots.txt`, dan `sitemap.xml`.
- **Best Practices** — tidak ada console error, HTTPS-ready, tanpa dependency yang sudah deprecated.

Skor aktual tetap perlu diverifikasi lewat Lighthouse/PageSpeed Insights setelah deploy ke domain produksi, karena beberapa faktor (caching CDN, kompresi server, gambar nyata yang nanti ditambahkan) ditentukan oleh konfigurasi hosting, bukan kode aplikasi semata.

**Yang masih perlu kamu lengkapi sebelum publish:**
- Gambar `public/og-image.png` (1200×630px) untuk preview link di media sosial — bisa dibuat cepat lewat Canva.
- Tahun/periode yang sebenarnya di `src/constants/experience.ts` dan `src/constants/education.ts` (saat ini berisi placeholder "Periode kerja"/"Periode studi").
- Domain produksi sebenarnya di `index.html` (ganti `paulussimorangkir.com`) dan di `.env`.

## Sistem Kontak (Google Sheets via Apps Script)

Formulir kontak tidak memakai backend server — ia mengirim POST langsung ke
Google Apps Script Web App, yang lalu menulis baris baru ke Google Sheets.

**Langkah setup:**

1. Buat Google Sheet baru.
2. Buka **Extensions > Apps Script**, hapus isi default, tempel isi file `google-apps-script/Code.gs`.
3. Klik **Deploy > New deployment** → pilih tipe **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Salin URL hasil deploy, isi ke `VITE_CONTACT_ENDPOINT` di file `.env` (lokal) dan di **GitHub Secrets** (untuk deployment otomatis).
5. Setiap kali kode `Code.gs` diubah, buat **versi deployment baru** lewat *Manage deployments* — URL lama tidak otomatis terupdate.

**Keamanan & validasi yang sudah diimplementasikan:**
- Validasi input di sisi client (`utils/validateContactForm.ts`) dan sisi server (`Code.gs`).
- Honeypot field (`company`) tersembunyi dari pengguna — submission yang mengisinya dianggap bot dan diam-diam diabaikan.
- Sanitasi dasar terhadap formula-injection sebelum data ditulis ke Sheets.
- Endpoint Apps Script bersifat publik by design (tidak ada API key rahasia yang bisa dibocorkan), sehingga aman untuk diekspos di kode frontend.

## Lisensi konten

Kode boleh digunakan dan dimodifikasi bebas. Konten (nama, riwayat kerja, proyek) adalah milik Paulus Simorangkir.
