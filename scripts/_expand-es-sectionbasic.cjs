/**
 * Expand thin "Why convert X to Y?" sectionBasic in ES converter files.
 */
const fs = require('fs');
const path = require('path');

const ES_TOOLS = path.join(__dirname, '..', 'data', 'es', 'tools');

const SOURCE = {
  png: 'Portable Network Graphics (PNG) es un formato de imagen sin pérdidas que admite millones de colores y transparencia alfa completa. PNG es especialmente adecuado para logotipos, iconos, capturas de pantalla y gráficos con bordes nítidos o texto, donde cada píxel importa.',
  jpg: 'JPEG (JPG) es el formato de imagen más utilizado en el mundo para fotografías digitales. Emplea compresión con pérdidas para obtener archivos compactos, pero no admite transparencia ni almacenamiento sin pérdidas.',
  heic: 'High Efficiency Image Container (HEIC) es el formato predeterminado para fotos en dispositivos Apple desde iOS 11. HEIC ofrece archivos más ligeros que JPEG con calidad comparable, pero no es compatible de forma nativa fuera del ecosistema Apple: ni en Windows, ni en Android, ni en muchas plataformas web.',
  webp: 'WebP es un formato de imagen moderno desarrollado por Google que admite tanto compresión con pérdidas como sin pérdidas. Produce archivos significativamente más ligeros que PNG y JPEG con calidad visual comparable y es compatible con todos los navegadores actuales.',
  svg: 'Scalable Vector Graphics (SVG) es un formato vectorial basado en XML para gráficos bidimensionales. Los archivos SVG son independientes de la resolución y se mantienen nítidos a cualquier tamaño, ideales para logotipos, iconos e ilustraciones.',
  gif: 'Graphics Interchange Format (GIF) admite animaciones y una paleta de máximo 256 colores. GIF es muy utilizado para contenido animado en redes sociales y aplicaciones de mensajería, pero su limitación de colores lo hace inadecuado para imágenes fotorrealistas.',
  bmp: 'Bitmap (BMP) es un formato de imagen antiguo de Windows que almacena datos de píxeles sin compresión. Los archivos BMP son extremadamente grandes y resultan inadecuados para el uso moderno en la web, correo electrónico o dispositivos móviles.',
  tiff: 'Tagged Image File Format (TIFF) es el estándar de la industria para fotografía profesional, impresión y archivado. TIFF almacena imágenes sin pérdidas con profundidad de color completa, capas y metadatos, aunque requiere archivos proporcionalmente grandes.',
  avif: 'AV1 Image File Format (AVIF) es un formato de imagen de nueva generación basado en el códec de vídeo AV1. AVIF ofrece actualmente la mejor compresión disponible: archivos hasta un 50% más ligeros que WebP con calidad visual comparable.',
};

const TARGET = {
  webp: 'WebP reduce el tamaño de archivo entre un 30 y un 35% respecto a formatos anteriores, sin pérdida de calidad visible. Todos los navegadores modernos (Chrome, Firefox, Safari 14+, Edge) son totalmente compatibles con WebP. Para sitios web, esto significa tiempos de carga más rápidos, mejores Core Web Vitals y un mejor posicionamiento en Google.',
  avif: 'AVIF ofrece la compresión más eficiente de todos los formatos de imagen actuales, reduciendo el tamaño hasta un 50% respecto a JPEG. Chrome, Firefox y Safari 16+ son compatibles con AVIF. Es la opción óptima para proyectos web críticos en rendimiento y uso móvil.',
  jpg: 'JPEG es el formato de imagen más universal, compatible con todos los dispositivos, navegadores y plataformas del mundo. La conversión a JPG garantiza que sus imágenes puedan visualizarse sin problemas en cualquier lugar: desde adjuntos de correo electrónico hasta publicaciones en redes sociales y servicios de impresión.',
  png: 'PNG preserva la calidad de imagen completa sin artefactos de compresión y admite transparencia alfa completa. Este formato sin pérdidas es ideal para gráficos que necesitan ser editados posteriormente y para imágenes donde deben conservarse las áreas transparentes.',
  gif: 'GIF es el formato estándar para animaciones cortas, memes y gráficos simples con paleta de colores limitada. Con compatibilidad universal en navegadores, GIF es especialmente adecuado para contenido animado en redes sociales, aplicaciones de mensajería y firmas de correo electrónico.',
  tiff: 'TIFF preserva la calidad de imagen completa sin ninguna pérdida de datos y admite capas y metadatos extensos. Como estándar de la industria para impresión y archivado, TIFF es adecuado para fotógrafos profesionales, imprentas y todos los que deseen conservar imágenes en máxima calidad.',
};

const PAIR = {
  'png-to-webp':
    'WebP admite transparencia alfa exactamente igual que PNG: todas las áreas transparentes de su imagen se conservan íntegramente. Puede elegir entre compresión con y sin pérdidas para encontrar el equilibrio óptimo entre tamaño de archivo y calidad de imagen.',
  'png-to-jpg':
    'Al convertir PNG a JPG, la transparencia se pierde: las áreas transparentes se rellenan con un color de fondo (blanco por defecto). A cambio, obtiene archivos significativamente más ligeros, más adecuados para fotos y contenidos web que no requieren transparencia.',
  'png-to-avif':
    'AVIF ofrece una compresión aún mejor que WebP y puede reducir el tamaño de sus imágenes PNG hasta un 50%. La transparencia alfa se admite completamente. Tenga en cuenta que los navegadores más antiguos pueden no ser compatibles con AVIF.',
  'png-to-gif':
    'La conversión reduce la paleta a un máximo de 256 colores. El resultado es adecuado para gráficos simples, iconos y logotipos, pero menos para imágenes fotorrealistas. La transparencia se admite, pero solo en modo binario (visible o invisible), no de forma gradual.',
  'png-to-tiff':
    'La conversión preserva la calidad de imagen completa y la transparencia del PNG original en formato TIFF. TIFF es especialmente adecuado para el procesamiento posterior en programas como Photoshop o para la impresión profesional. Tenga en cuenta que los archivos TIFF pueden ser significativamente más grandes que los PNG.',
  'jpg-to-webp':
    'WebP puede reducir el tamaño de sus fotos JPEG entre un 25 y un 35% sin pérdida de calidad visible. Como JPEG no admite transparencia, no se pierde ninguna información de imagen en esta conversión.',
  'jpg-to-png':
    'La conversión de JPG a PNG transforma su imagen a un formato sin pérdidas. Sin embargo, los detalles ya perdidos por la compresión JPEG no pueden restaurarse. PNG es adecuado si desea editar la imagen sin arriesgar pérdidas de calidad adicionales.',
  'jpg-to-avif':
    'AVIF logra una compresión hasta un 50% mejor que JPEG con calidad visual comparable. Este formato de nueva generación es ideal para sitios web críticos en rendimiento y es compatible con Chrome, Firefox y Safari 16+.',
  'jpg-to-gif':
    'La paleta de colores se reduce a 256, lo que provoca pérdidas de calidad visibles en fotografías. Esta conversión es adecuada principalmente para gráficos simples o cuando el formato GIF es necesario por razones de compatibilidad.',
  'jpg-to-tiff':
    'La conversión preserva la calidad actual de su JPEG y la almacena sin pérdidas en formato TIFF. Los detalles ya perdidos por la compresión JPEG no pueden restaurarse, pero TIFF permite la edición posterior sin pérdidas de calidad adicionales.',
  'heic-to-jpg':
    'La conversión de HEIC a JPG transforma el formato propietario de Apple al formato JPEG universalmente compatible. La transparencia eventual y la información HDR se pierden, pero la calidad de imagen permanece prácticamente idéntica al original con ajustes a partir del 85%.',
  'heic-to-png':
    'La conversión preserva la calidad de imagen completa de su original HEIC sin pérdidas en formato PNG. PNG es compatible con todos los dispositivos y plataformas y es especialmente adecuado si desea editar la imagen o conservar la transparencia.',
  'heic-to-webp':
    'WebP ofrece un excelente equilibrio entre tamaño de archivo y calidad. La conversión de HEIC a WebP produce archivos compactos compatibles con todos los navegadores modernos, ideal para sitios web y plataformas en línea.',
  'heic-to-avif':
    'AVIF ofrece una eficiencia de compresión similar a HEIC, pero como formato abierto tiene un soporte mucho más amplio. La conversión permite usar compresión moderna sin las restricciones del ecosistema Apple.',
  'heic-to-tiff':
    'La conversión transforma sus fotos de iPhone al formato TIFF profesional. Ideal para fotógrafos que desean archivar sus capturas móviles en un formato sin pérdidas y editarlas en programas profesionales como Photoshop o Lightroom.',
  'webp-to-jpg':
    'La conversión de WebP a JPEG asegura la máxima compatibilidad. JPG es compatible con todos los dispositivos y software, indispensable para enviar imágenes por correo electrónico o subirlas a plataformas que no aceptan WebP.',
  'webp-to-png':
    'La conversión de WebP a PNG preserva la transparencia de su imagen y la almacena sin pérdidas. PNG es especialmente adecuado para la edición posterior en programas gráficos y para plataformas que no admiten el formato WebP.',
  'webp-to-avif':
    'AVIF ofrece una compresión aún mejor que WebP con calidad visual comparable. Si desea optimizar sus imágenes para los estándares web de nueva generación, la conversión de WebP a AVIF es un paso lógico.',
  'webp-to-gif':
    'La conversión reduce la paleta a 256 colores. Es adecuada principalmente para gráficos simples o cuando el formato GIF es necesario para animaciones o por razones de compatibilidad.',
  'webp-to-tiff':
    'La conversión transforma sus archivos WebP al formato TIFF profesional. Ideal para producción de impresión y archivado a largo plazo, donde se requiere calidad sin pérdidas y soporte completo de metadatos.',
  'svg-to-jpg':
    'La rasterización de SVG a JPG convierte la imagen vectorial escalable en una imagen de píxeles con resolución fija. Las áreas transparentes se rellenan con un color de fondo. El resultado es adecuado para plataformas y aplicaciones que no aceptan SVG.',
  'svg-to-png':
    'La rasterización de SVG a PNG convierte la imagen vectorial en una imagen de píxeles preservando íntegramente la transparencia. PNG es especialmente adecuado para redes sociales, mensajería y firmas de correo que no admiten SVG.',
  'svg-to-webp':
    'La conversión produce imágenes de píxeles compactas a partir de sus gráficos vectoriales en formato WebP moderno. WebP es ideal para sitios web donde archivos ligeros y tiempos de carga rápidos son determinantes.',
  'svg-to-avif':
    'AVIF ofrece la mejor compresión para la rasterización de sus archivos SVG. Ideal para sitios web críticos en rendimiento donde cada kilobyte contribuye a mejores tiempos de carga y Core Web Vitals.',
  'svg-to-gif':
    'La conversión transforma su imagen vectorial en una imagen de píxeles con un máximo de 256 colores. GIF es adecuado para iconos simples y gráficos animados, pero no para ilustraciones complejas con muchos colores o degradados.',
  'svg-to-tiff':
    'La rasterización de SVG a TIFF produce una imagen de píxeles sin pérdidas en máxima calidad. Ideal para la impresión profesional de gráficos vectoriales cuando se necesita una resolución de píxeles fija.',
  'gif-to-jpg':
    'Al convertir GIF a JPG, se pierden los frames de animación y la transparencia; solo se convierte la primera imagen. A cambio, obtiene un formato fotográfico universalmente compatible con profundidad de color completa (16,7 millones de colores).',
  'gif-to-png':
    'La conversión preserva la calidad de imagen sin pérdidas y admite transparencia binaria. En GIF animados, solo se convierte el primer frame. PNG es especialmente adecuado para el retrabajo de gráficos GIF.',
  'gif-to-webp':
    'WebP admite tanto imágenes fijas como animaciones con una compresión significativamente mejor que GIF. Para GIF estáticos, la conversión produce archivos más ligeros con calidad visual igual o superior.',
  'gif-to-avif':
    'AVIF ofrece una compresión superior a GIF y admite millones de colores en lugar de solo 256. Ideal para modernizar gráficos GIF antiguos en sitios web para mejores tiempos de carga.',
  'tiff-to-jpg':
    'La conversión reduce los archivos TIFF, a menudo muy voluminosos, a tamaños JPEG compactos. La transparencia eventual y la información de capas se pierden, pero obtiene archivos universalmente compatibles para web, correo electrónico y redes sociales.',
  'tiff-to-png':
    'La conversión preserva la calidad de imagen sin pérdidas y conserva la transparencia si está presente. Los archivos PNG son significativamente más ligeros que los TIFF y son compatibles con todos los dispositivos, navegadores y plataformas.',
  'tiff-to-webp':
    'WebP reduce drásticamente el tamaño de sus archivos TIFF, a menudo en más del 90%. Ideal para optimizar fotografías profesionales o escaneos de alta resolución para su uso en la web.',
  'tiff-to-avif':
    'AVIF ofrece la compresión más eficiente para la conversión de archivos TIFF grandes. Ideal para la optimización web de fotografía profesional y escaneos de alta resolución con una pérdida de calidad mínima.',
  'bmp-to-jpg':
    'Los archivos BMP no están comprimidos y son extremadamente grandes. La conversión a JPEG reduce drásticamente el tamaño (a menudo más del 95%) y produce archivos universalmente compatibles para todos los usos modernos.',
  'bmp-to-png':
    'La conversión de BMP a PNG reduce considerablemente el tamaño mediante compresión sin pérdidas. A diferencia de JPEG, se preserva la calidad de imagen completa, ideal para gráficos con bordes nítidos y texto.',
  'bmp-to-webp': 'WebP reduce los enormes tamaños BMP hasta un 97% con buena calidad visual. La conversión moderniza sus imágenes legacy para su uso en sitios web y aplicaciones modernas.',
  'bmp-to-avif':
    'AVIF ofrece la mejor compresión para la modernización de archivos BMP sin comprimir. El tamaño se reduce hasta un 98%, ideal para la migración de antiguos fondos de imágenes a formatos modernos.',
  'bmp-to-gif':
    'La conversión reduce la paleta a 256 colores y comprime considerablemente el archivo. Adecuado para gráficos simples de sistemas antiguos, pero para imágenes BMP fotorrealistas se recomienda JPG o WebP.',
  'bmp-to-tiff':
    'La conversión de BMP a TIFF preserva la calidad de imagen completa y añade soporte profesional de metadatos. TIFF es más adecuado que BMP para el archivado a largo plazo y flujos de trabajo de impresión profesionales.',
  'avif-to-jpg':
    'La conversión de AVIF a JPEG asegura la máxima compatibilidad. JPG es compatible con todos los dispositivos y software, necesario cuando los destinatarios o plataformas aún no pueden procesar el formato AVIF más reciente.',
  'avif-to-png':
    'La conversión preserva la calidad de imagen sin pérdidas en el formato PNG universalmente compatible. PNG es especialmente adecuado si desea conservar la transparencia o editar la imagen en programas gráficos.',
  'avif-to-webp':
    'WebP ofrece una compatibilidad de navegadores más amplia que AVIF con buena compresión. La conversión tiene sentido cuando su plataforma objetivo admite WebP pero aún no AVIF, un escenario frecuente con navegadores y CMS más antiguos.',
};

const PRIVACY =
  'Este convertidor funciona completamente en local en su navegador: sus archivos nunca abandonan su dispositivo. Sin subidas, sin servidores, sin registro. Totalmente conforme con el RGPD y gratuito sin ninguna limitación.';

function extractFormats(filename) {
  const m = filename.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { source: m[1], target: m[2], key: `${m[1]}-to-${m[2]}` } : null;
}

let updated = 0,
  skipped = 0;
const files = fs.readdirSync(ES_TOOLS).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));

for (const file of files) {
  const fmt = extractFormats(file);
  if (!fmt) {
    skipped++;
    continue;
  }
  const s = SOURCE[fmt.source],
    t = TARGET[fmt.target],
    p = PAIR[fmt.key];
  if (!s || !t || !p) {
    console.log(`SKIP: ${file}`);
    skipped++;
    continue;
  }

  const filePath = path.join(ES_TOOLS, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const block = data.contentBlocks.find((b) => b.type === 'sectionBasic');
  if (!block) {
    skipped++;
    continue;
  }

  block.html = `<p class="text-mid mb-4">${s}</p>` + `<p class="text-mid mb-4">${t}</p>` + `<p class="text-mid mb-4">${p}</p>` + `<p class="text-mid">${PRIVACY}</p>`;

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`ES: Updated: ${updated}, Skipped: ${skipped}`);
