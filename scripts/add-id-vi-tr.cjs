/**
 * Script to add id, vi, tr locale entries to tool-registry.ts TOOL_SECTIONS and TOOL_REGISTRY.
 * Also adds entries to all other files that use Record<Locale, ...>.
 */
const fs = require('fs');
const path = require('path');

// ─── TOOL_SECTIONS locale titles ───
const sectionTitles = {
  obrazy: { id: 'Gambar & favicon', vi: 'Hinh anh & favicon', tr: 'Gorseller ve faviconlar' },
  seo: { id: 'Meta & SEO', vi: 'Meta & SEO', tr: 'Meta & SEO' },
  email: { id: 'Email & komunikasi', vi: 'Email & giao tiep', tr: 'E-posta ve iletisim' },
  kolory: { id: 'Warna & aksesibilitas', vi: 'Mau sac & tiep can', tr: 'Renkler ve erisilebilirlik' },
  druk: { id: 'Cetak & materi', vi: 'In an & tai lieu', tr: 'Baski ve materyaller' },
};

// ─── TOOL_REGISTRY locale data ───
const toolData = {
  jpgToWebp: {
    id: { slug: 'konverter-jpg-png-ke-webp', title: 'Konverter JPG/PNG ke WebP', description: 'Kurangi ukuran file gambar tanpa kehilangan kualitas. Konversi JPG dan PNG ke WebP dan percepat situs web Anda.' },
    vi: { slug: 'chuyen-doi-jpg-png-sang-webp', title: 'Chuyen doi JPG/PNG sang WebP', description: 'Giam kich thuoc file hinh anh ma khong mat chat luong. Chuyen doi JPG va PNG sang WebP va tang toc trang web.' },
    tr: { slug: 'jpg-png-webp-donusturucu', title: 'JPG/PNG WebP donusturucu', description: 'Kalite kaybetmeden gorsel dosya boyutunu kucultun. JPG ve PNG dosyalarini WebP formatina donusturun ve web sitenizi hizlandirin.' },
  },
  imageResize: {
    id: { slug: 'editor-gambar', title: 'Editor gambar', description: 'Siapkan potongan sempurna untuk media sosial atau situs web Anda. Pilih format siap pakai atau masukkan dimensi kustom.' },
    vi: { slug: 'chinh-sua-hinh-anh', title: 'Chinh sua hinh anh', description: 'Chuan bi khung hinh hoan hao cho mang xa hoi hoac trang web cua ban. Chon dinh dang co san hoac nhap kich thuoc tuy chinh.' },
    tr: { slug: 'gorsel-duzenleyici', title: 'Gorsel duzenleyici', description: 'Sosyal medya veya web siteniz icin mukemmel kirpimi hazirlayim. Hazir bir format secin veya ozel boyutlar girin.' },
  },
  favicon: {
    id: { slug: 'generator-favicon-gratis', title: 'Generator favicon', description: 'Buat favicon.ico dan ikon PNG dari satu gambar, sesuai persyaratan browser dan Lighthouse.' },
    vi: { slug: 'tao-favicon-mien-phi', title: 'Tao favicon', description: 'Tao favicon.ico va bieu tuong PNG tu mot hinh anh duy nhat, phu hop voi yeu cau cua trinh duyet va Lighthouse.' },
    tr: { slug: 'ucretsiz-favicon-olusturucu', title: 'Favicon olusturucu', description: 'Tek bir gorseldem favicon.ico ve PNG simgeleri olusturun - tarayici ve Lighthouse gereksinimlerine uygun.' },
  },
  metaCounter: {
    id: { slug: 'pemeriksa-meta-judul-dan-deskripsi', title: 'Pemeriksa meta judul & deskripsi', description: 'Periksa jumlah karakter dan pratinjau halaman Anda di Google. Hindari judul dan deskripsi yang terpotong di hasil pencarian.' },
    vi: { slug: 'kiem-tra-meta-title-va-description', title: 'Kiem tra meta title & description', description: 'Kiem tra so ky tu va xem truoc trang cua ban tren Google. Tranh tieu de va mo ta bi cat trong ket qua tim kiem.' },
    tr: { slug: 'meta-baslik-ve-aciklama-kontrol', title: 'Meta baslik ve aciklama kontrolu', description: 'Karakter sayisini kontrol edin ve sayfanizin Google onizlemesini gorun. Arama sonuclarinda kesilen baslik ve aciklamalardan kacinin.' },
  },
  wordCounter: {
    id: { slug: 'penghitung-kata-dan-karakter', title: 'Penghitung kata & karakter', description: 'Periksa panjang teks dan evaluasi apakah sesuai untuk halaman utama, halaman layanan, artikel blog, atau deskripsi produk.' },
    vi: { slug: 'dem-tu-va-ky-tu', title: 'Dem tu va ky tu', description: 'Kiem tra do dai van ban va danh gia xem co phu hop voi trang chu, trang dich vu, bai blog hay mo ta san pham khong.' },
    tr: { slug: 'kelime-ve-karakter-sayaci', title: 'Kelime ve karakter sayaci', description: 'Metin uzunlugunu kontrol edin ve ana sayfa, hizmet sayfasi, blog yazisi veya urun aciklamasi icin uygun olup olmadigini degerlendirin.' },
  },
  emailSignature: {
    id: { slug: 'generator-tanda-tangan-email-gratis', title: 'Generator tanda tangan email', description: 'Buat tanda tangan email profesional dalam hitungan menit. Salin kode HTML siap pakai ke Gmail atau Outlook.' },
    vi: { slug: 'tao-chu-ky-email-mien-phi', title: 'Tao chu ky email', description: 'Tao chu ky email chuyen nghiep trong vai phut. Sao chep ma HTML san vao Gmail hoac Outlook.' },
    tr: { slug: 'ucretsiz-e-posta-imza-olusturucu', title: 'E-posta imza olusturucu', description: 'Dakikalar icinde profesyonel bir e-posta imzasi olusturun. Hazir HTML kodunu Gmail veya Outlook a kopyalayin.' },
  },
  contrastChecker: {
    id: { slug: 'pemeriksa-kontras-warna', title: 'Pemeriksa kontras warna', description: 'Periksa apakah warna teks dan latar belakang Anda mudah dibaca. Alat ini menghitung kontras sesuai WCAG dan membantu memilih warna yang tepat.' },
    vi: { slug: 'kiem-tra-do-tuong-phan-mau', title: 'Kiem tra do tuong phan mau', description: 'Kiem tra xem mau chu va mau nen cua ban co de doc khong. Cong cu tinh do tuong phan theo WCAG va giup chon mau phu hop.' },
    tr: { slug: 'renk-kontrast-kontrolu', title: 'Renk kontrast kontrolu', description: 'Metin ve arka plan renklerinizin okunakli olup olmadigini kontrol edin. Arac WCAG a gore kontrasti hesaplar ve dogru rengi secmenize yardimci olur.' },
  },
  paletteExtractor: {
    id: { slug: 'ekstraktor-warna-dari-gambar', title: 'Ekstraktor warna dari gambar', description: 'Unggah foto atau logo dan alat ini akan mengekstrak warna dominan. Salin kode warna yang dihasilkan dengan satu klik.' },
    vi: { slug: 'trich-xuat-mau-tu-hinh-anh', title: 'Trich xuat mau tu hinh anh', description: 'Tai len anh hoac logo va cong cu se trich xuat cac mau chu dao. Sao chep ma mau duoc tao voi mot lan nhan.' },
    tr: { slug: 'gorsel-renk-cikarici', title: 'Gorsel renk cikarici', description: 'Bir fotograf veya logo yukleyin ve arac baskun renkleri cikaracaktir. Olusturulan renk kodlarini tek tikla kopyalayin.' },
  },
  colorPalette: {
    id: { slug: 'generator-palet-warna', title: 'Generator palet warna', description: 'Pilih satu warna dan hasilkan 9 palet: monokromatik, komplementer, triadik, dan lainnya.' },
    vi: { slug: 'tao-bang-mau', title: 'Tao bang mau', description: 'Chon mot mau va tao 9 bang mau: don sac, bo sung, bo ba va nhieu hon.' },
    tr: { slug: 'renk-paleti-olusturucu', title: 'Renk paleti olusturucu', description: 'Bir renk secin ve 9 palet olusturun: monokromatik, komplementer, triadik ve daha fazlasi.' },
  },
  qrCode: {
    id: { slug: 'generator-kode-qr-gratis', title: 'Generator kode QR gratis', description: 'Buat kode QR untuk situs web, vCard, menu, atau brosur. Ekspor ke PNG dan SVG, tanpa login, tanpa batasan.' },
    vi: { slug: 'tao-ma-qr-mien-phi', title: 'Tao ma QR mien phi', description: 'Tao ma QR cho trang web, vCard, menu hoac to roi. Xuat ra PNG va SVG, khong can dang nhap, khong gioi han.' },
    tr: { slug: 'ucretsiz-qr-kod-olusturucu', title: 'Ucretsiz QR kod olusturucu', description: 'Web sitesi, vCard, menu veya brosur icin QR kod olusturun. PNG ve SVG olarak disari aktarin, giris veya sinir yok.' },
  },
};

// ─── Patch tool-registry.ts ───
let src = fs.readFileSync('lib/i18n/tool-registry.ts', 'utf8');

// Add to TOOL_SECTIONS
for (const [sectionKey, titles] of Object.entries(sectionTitles)) {
  const huPattern = new RegExp(`(hu: \\{ title: '[^']+' \\},\\n)(\\s+\\},\\n\\s+\\},\\n)`, 'g');
  // More targeted: find the section by looking for the key
  const sectionRegex = new RegExp(
    `(key: '${sectionKey}',[\\s\\S]*?hu: \\{ title: '[^']+' \\},\\n)(\\s+\\},)`,
  );
  const match = src.match(sectionRegex);
  if (match) {
    const indent = '      ';
    const addition = `${indent}id: { title: '${titles.id}' },\n${indent}vi: { title: '${titles.vi}' },\n${indent}tr: { title: '${titles.tr}' },\n`;
    src = src.replace(sectionRegex, `$1${addition}$2`);
  }
}

// Add to TOOL_REGISTRY
for (const [toolKey, locales] of Object.entries(toolData)) {
  const toolRegex = new RegExp(
    `(key: '${toolKey}',[\\s\\S]*?hu: \\{[\\s\\S]*?\\},\\n)(\\s+\\},\\n\\s+\\},)`,
  );
  const match = src.match(toolRegex);
  if (match) {
    const indent = '      ';
    let addition = '';
    for (const [loc, data] of Object.entries(locales)) {
      addition += `${indent}${loc}: {\n${indent}  slug: '${data.slug}',\n${indent}  title: '${data.title}',\n${indent}  description: '${data.description}',\n${indent}},\n`;
    }
    src = src.replace(toolRegex, `$1${addition}$2`);
  }
}

fs.writeFileSync('lib/i18n/tool-registry.ts', src, 'utf8');
console.log('✓ tool-registry.ts patched');

// ─── Patch locales.ts (add dicts import) ───
let localesSrc = fs.readFileSync('lib/i18n/locales.ts', 'utf8');
// Check if id/vi/tr dicts are already imported
if (!localesSrc.includes("import id from '@/dictionaries/id.json'")) {
  // Find where hu dict is imported and add after
  localesSrc = localesSrc.replace(
    /import hu from '@\/dictionaries\/hu\.json';/,
    "import hu from '@/dictionaries/hu.json';\nimport id from '@/dictionaries/id.json';\nimport vi from '@/dictionaries/vi.json';\nimport tr from '@/dictionaries/tr.json';",
  );
  // Add to dicts object
  localesSrc = localesSrc.replace(
    /hu,\n\} as const;/,
    "hu,\n  id,\n  vi,\n  tr,\n} as const;",
  );
  fs.writeFileSync('lib/i18n/locales.ts', localesSrc, 'utf8');
  console.log('✓ locales.ts patched');
}

console.log('Done. Run `npm run build` to verify.');
