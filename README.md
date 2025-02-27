---

# Template Next.js dengan Bun.js dan ShadCN

Template **Next.js** menggunakan **Bun.js** sebagai bundler dan **ShadCN** untuk komponen UI berbasis Tailwind CSS. Template ini memberikan kemudahan dalam membangun aplikasi web dengan performa tinggi dan antarmuka pengguna yang modern dan responsif.

Dibuat oleh [Ararya](https://github.com/Araryarch).

## Fitur

- **Next.js**: Framework React untuk pengembangan aplikasi web dan situs statis.
- **Bun.js**: Bundler dan runtime JavaScript yang lebih cepat, mengoptimalkan kecepatan build dan startup.
- **ShadCN**: Komponen UI untuk membangun antarmuka pengguna dengan mudah, menggunakan **Tailwind CSS** untuk desain yang responsif dan dapat disesuaikan.
- **Optimasi Kecepatan**: Bun.js mengurangi waktu build dan startup secara signifikan dibandingkan dengan bundler tradisional seperti Webpack.

## Prasyarat

Pastikan Anda sudah menginstal hal-hal berikut:

- [Node.js](https://nodejs.org/) (versi LTS disarankan)
- [Bun.js](https://bun.sh/)

Jika Bun.js belum terinstal, Anda dapat menginstalnya dengan cara:

```bash
curl -fsSL https://bun.sh/install | bash
```

Atau menggunakan Homebrew (untuk macOS atau Linux):

```bash
brew install bun
```

### Instalasi ShadCN

Untuk menggunakan **ShadCN** dalam proyek ini, pastikan Anda menginstal dependensi yang diperlukan:

```bash
bun add @shadcn/ui tailwindcss
```

## Instalasi

Ikuti langkah-langkah berikut untuk memulai menggunakan template ini:

1. **Clone repository ini**

   Clone repositori ini ke mesin lokal Anda:

   ```bash
   git clone https://github.com/Araryarch/template-next-bun.git
   cd template-next-bun
   ```

2. **Instal dependensi menggunakan Bun.js**

   Instal semua dependensi yang diperlukan untuk proyek ini:

   ```bash
   bun install
   ```

3. **Menjalankan Development Server**

   Jalankan server pengembangan untuk melihat aplikasi Anda:

   ```bash
   bun dev
   ```

   Akses aplikasi Anda di [http://localhost:3000](http://localhost:3000).

## Struktur Proyek

Berikut adalah struktur dasar dari proyek ini:

```
/template-next-bun
├── /pages                 # Halaman Next.js
├── /public                # Berkas statis (gambar, favicon, dll.)
├── /styles                # File CSS atau SCSS
├── /components            # Komponen React dan ShadCN UI
├── /node_modules          # Modul-modul dependensi
├── bun.lockb              # File lock Bun.js
├── package.json           # Deskripsi proyek dan dependensi (jika menggunakan bun)
└── next.config.js         # Konfigurasi Next.js
```

## Penggunaan

Template ini sudah dilengkapi dengan ShadCN UI, yang memungkinkan Anda untuk dengan mudah membangun antarmuka pengguna modern dengan Tailwind CSS. Berikut adalah beberapa hal yang bisa Anda lakukan:

### 1. Menggunakan Komponen ShadCN

ShadCN menyediakan berbagai komponen UI siap pakai yang bisa langsung Anda gunakan dalam aplikasi. Beberapa contoh komponen yang sudah tersedia adalah:

- **Button**
- **Modal**
- **Card**
- **Input**
- **Checkbox**
- **Toast**

Berikut contoh penggunaan komponen **Button** dari ShadCN:

```tsx
import { Button } from '@shadcn/ui';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button variant="solid">Click Me</Button>
    </div>
  );
}
```

### 2. Menambahkan Halaman Baru

Tambahkan file di dalam folder `pages` untuk membuat halaman baru. Misalnya, jika Anda ingin membuat halaman **About**, cukup buat file `about.tsx` di folder `pages`:

```tsx
// pages/about.tsx
export default function About() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4">This is a simple page built with Next.js and ShadCN.</p>
    </div>
  );
}
```

### 3. Menambahkan Komponen Baru

Untuk menambahkan komponen baru, buat file di dalam folder `components`, misalnya `ButtonComponent.tsx`:

```tsx
// components/ButtonComponent.tsx
import { Button } from '@shadcn/ui';

export default function ButtonComponent() {
  return <Button variant="outline">Outline Button</Button>;
}
```

Kemudian impor komponen tersebut ke dalam halaman yang sesuai.

### 4. Mengonfigurasi Tailwind CSS

Tailwind CSS sudah terpasang secara otomatis bersama dengan ShadCN, sehingga Anda dapat mulai menulis kode CSS berbasis utility dengan mudah. Untuk menyesuaikan Tailwind CSS, buka file `tailwind.config.js` dan sesuaikan sesuai kebutuhan.

Contoh konfigurasi Tailwind CSS:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Menggunakan Bun.js

Dengan menggunakan **Bun.js**, Anda bisa mendapatkan kecepatan build dan pengelolaan dependensi yang lebih baik. Berikut beberapa perintah Bun.js yang bisa Anda gunakan:

- **Perintah `bun dev`**: Untuk menjalankan server pengembangan.
- **Perintah `bun build`**: Untuk membangun aplikasi untuk produksi.
- **Perintah `bun install`**: Untuk menginstal dependensi proyek.

## Pengembangan Lebih Lanjut

Template ini siap untuk pengembangan lebih lanjut. Anda dapat menambahkan fitur baru atau mengubah desain sesuai dengan kebutuhan proyek Anda. Berikut adalah beberapa referensi yang dapat membantu Anda:

- [Dokumentasi Next.js](https://nextjs.org/docs)
- [Dokumentasi Bun.js](https://bun.sh/docs)
- [Dokumentasi ShadCN UI](https://shadcn.dev/docs)

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork repositori ini dan ajukan pull request. Kami menyambut setiap kontribusi yang dapat meningkatkan kualitas proyek ini.

## Lisensi

Template ini dilisensikan di bawah **MIT License**.

---

Dengan README ini, Anda sekarang memiliki dokumentasi yang lengkap untuk proyek Anda yang menggunakan **Next.js**, **Bun.js**, dan **ShadCN UI**. Anda bisa mulai menggunakan template ini untuk membangun aplikasi web yang cepat, responsif, dan modern!
