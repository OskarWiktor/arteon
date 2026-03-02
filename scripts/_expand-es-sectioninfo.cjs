/**
 * Differentiate "in practice" sectionInfo in ES converter files.
 */
const fs = require('fs');
const path = require('path');
const TOOLS = path.join(__dirname, '..', 'data', 'es', 'tools');

const P = {
  'png-to-webp': [
    'Diseñadores web y propietarios de tiendas en España y Latinoamérica usan PNG para logos, recortes de productos y elementos de interfaz con transparencia. Al pasar a WebP, la transparencia se mantiene intacta mientras el tamaño se reduce un 25–35% – mejora directa en tiempos de carga y Core Web Vitals.',
    'Los gráficos con grandes áreas de color sólido (logos, iconos) se benefician más: archivos de 200–500 KB a menudo bajan de 100 KB. Para recortes de productos en Amazon.es, Wallapop, MercadoLibre o tiendas Shopify, esto significa páginas de categoría más rápidas y mejor experiencia móvil.',
    'Todo el procesamiento se realiza localmente en tu navegador – ideal para agencias y empresas que necesitan cumplir con el RGPD. Las imágenes de productos o gráficos de clientes nunca salen de tu dispositivo.',
  ],
  'png-to-jpg': [
    'Los archivos PNG con transparencia suelen pesar varios megabytes. Cuando no se necesita transparencia – fotos de currículum, escaneos de documentos o publicaciones en redes sociales – la conversión a JPG reduce drásticamente el tamaño.',
    'Muchas plataformas como InfoJobs, LinkedIn o portales de empleo solo aceptan JPG. Los adjuntos de correo también se benefician: una captura PNG de 3 MB en JPG ocupa solo 200–400 KB. La calidad al 85% ofrece el mejor equilibrio entre tamaño y calidad visual.',
    'Para documentos de candidatura y archivos confidenciales, el procesamiento local en el navegador es esencial – tus archivos nunca abandonan tu dispositivo.',
  ],
  'png-to-avif': [
    'AVIF es el formato más eficiente de la generación actual y puede reducir archivos PNG hasta un 50%. Para proyectos web donde cada kilobyte cuenta, PNG a AVIF es la conversión óptima.',
    'AVIF soporta transparencia, HDR y hasta 12 bits por canal. Chrome, Firefox y Safari 16+ lo soportan nativamente. Para navegadores antiguos, un fallback con <code>&lt;picture&gt;</code> y PNG o WebP es recomendable.',
    'Las empresas españolas que buscan optimizar sus puntuaciones PageSpeed se benefician especialmente: AVIF mejora mediblemente el Largest Contentful Paint (LCP). El procesamiento local garantiza el cumplimiento del RGPD.',
  ],
  'png-to-gif': [
    'Gráficos simples como iconos, logos o diagramas con paleta de colores limitada se almacenan más compactamente en GIF que en PNG. La conversión es útil cuando la plataforma exige formato GIF.',
    'El GIF solo soporta 256 colores. Las imágenes PNG fotorrealistas pierden calidad visible al convertir. La transparencia solo es binaria (visible/invisible), no alfa gradual como en PNG.',
    'Para presentaciones, gráficos de newsletters o sistemas que solo aceptan GIF, esta conversión es una solución rápida – completamente local y sin subida de archivos.',
  ],
  'png-to-tiff': [
    'Imprentas, editoriales y sistemas de archivo a menudo exigen TIFF en lugar de PNG. La conversión preserva la calidad completa, la transparencia y añade soporte profesional de metadatos.',
    'Los archivos TIFF son más grandes que los PNG, pero ofrecen ventajas para flujos profesionales: soporte de capas en Photoshop, espacios de color CMYK para impresión y metadatos completos. TIFF es el estándar de la industria para archivo a largo plazo.',
    'Las imprentas en España y Latinoamérica trabajan frecuentemente con TIFF. La conversión local permite procesar diseños confidenciales sin subida a la nube.',
  ],
  'jpg-to-webp': [
    'JPEG es el formato estándar para fotos digitales, pero para sitios web los tamaños suelen ser excesivos. WebP comprime las imágenes JPEG un 25–35% adicional sin pérdida visible de calidad, mejorando directamente los tiempos de carga.',
    'Para tiendas en PrestaShop, Shopify o WooCommerce, el cambio de JPG a WebP acelera mediblemente las páginas de producto. Google PageSpeed recomienda WebP como formato de nueva generación. A calidad 80–85%, la diferencia es imperceptible.',
    'En España, donde las exigencias del RGPD son estrictas, el procesamiento local de imágenes en el navegador es especialmente valioso. Las fotos de productos no salen de tu dispositivo.',
  ],
  'jpg-to-png': [
    'A veces un JPEG necesita convertirse a un formato con soporte de transparencia o almacenamiento sin pérdida – por ejemplo para edición en Photoshop, Figma o Canva.',
    'La conversión de JPG a PNG no restaura los detalles perdidos por la compresión JPEG, pero evita pérdidas adicionales en ediciones futuras. PNG es ideal cuando la imagen sirve como base para collages, superposiciones o maquetas de impresión.',
    'Para diseñadores y agencias en España, el procesamiento local es ideal: el material de clientes permanece en tu propio equipo sin que un servicio externo acceda a él.',
  ],
  'jpg-to-avif': [
    'AVIF logra hasta un 50% mejor compresión que JPEG a calidad visual comparable. Para sitios con muchas fotos – portales inmobiliarios, revistas online, webs de viajes – los tiempos de carga se reducen considerablemente.',
    'Plataformas como Idealista, Booking.com o Wallapop adoptan cada vez más AVIF para mejorar la experiencia móvil. Chrome, Firefox y Safari 16+ lo soportan nativamente. Para navegadores antiguos, un fallback WebP o JPG es recomendable.',
    'La conversión local en el navegador protege tus imágenes: fotos inmobiliarias, de productos o retratos – nada se sube a ningún servidor. Conforme al RGPD.',
  ],
  'jpg-to-gif': [
    'La conversión de JPG a GIF es útil cuando se necesita una foto como gráfico simple con paleta limitada – miniaturas en sistemas antiguos o newsletters que solo soportan GIF.',
    'El GIF limita la paleta a 256 colores. En fotos, esto causa pérdida visible por dithering. Para la mayoría de usos, WebP o PNG son mejores opciones.',
    'Si tu flujo de trabajo exige exclusivamente GIF, la conversión local ofrece una solución rápida y conforme con la protección de datos.',
  ],
  'jpg-to-tiff': [
    'Imprentas profesionales y agencias de imagen a menudo exigen TIFF en lugar de JPEG. La conversión preserva la calidad actual y la almacena sin pérdida para procesamiento posterior.',
    'Los detalles ya perdidos por la compresión JPEG no se restauran, pero TIFF evita pérdidas adicionales en retoques. Soporta CMYK, capas y metadatos extendidos – ideal para flujos de impresión profesionales.',
    'Fotógrafos y agencias en España se benefician del procesamiento local: fotos de clientes y archivos de impresión permanecen en tu dispositivo.',
  ],
  'heic-to-jpg': [
    'Los usuarios de iPhone conocen el problema: las fotos HEIC no se abren en todas partes. PCs Windows, dispositivos Android, muchos formularios web y clientes de correo no soportan HEIC. La conversión a JPG resuelve este problema de compatibilidad inmediatamente.',
    'A calidad 85–90%, la diferencia entre el original HEIC y el resultado JPG es visualmente imperceptible. El tamaño es comparable, ya que ambos formatos usan compresión con pérdida. Especialmente práctico: convertir varias fotos de iPhone simultáneamente.',
    'Para fotos de currículum, escaneos de documentos de identidad o documentos personales, el procesamiento local es esencial – los datos sensibles nunca abandonan tu dispositivo.',
  ],
  'heic-to-png': [
    'Si quieres reutilizar fotos de iPhone sin pérdida – como bases en Photoshop, Figma o para proyectos de impresión – PNG es el formato destino ideal. La conversión preserva la calidad completa del original HEIC.',
    'PNG soporta transparencia y almacenamiento sin pérdida, a diferencia de JPG. Sin embargo, los archivos PNG son significativamente más grandes que HEIC o JPG. Para edición en programas gráficos no es inconveniente – para uso web se recomienda convertir después a WebP.',
    'Agencias creativas y fotógrafos se benefician del procesamiento local: las fotos de iPhone de clientes o sesiones permanecen confidenciales en tu propio equipo.',
  ],
  'heic-to-webp': [
    '¿Usar fotos iPhone HEIC directamente en sitios web? WebP es el puente ideal: combina la compresión eficiente de HEIC con compatibilidad universal de navegadores (Chrome, Firefox, Safari 14+, Edge).',
    'La conversión HEIC a WebP es especialmente eficiente, ya que ambos formatos usan algoritmos de compresión modernos. El tamaño se mantiene compacto, la calidad alta. Para blogs, tiendas online y portfolios, es la forma más rápida de publicar fotos iPhone optimizadas.',
    'Bloggers y e-commerce en España pueden convertir sus fotos iPhone localmente y conforme al RGPD – sin servicios cloud ni herramientas externas.',
  ],
  'heic-to-avif': [
    'AVIF ofrece eficiencia de compresión similar a HEIC, pero como formato abierto no está ligado al ecosistema Apple. HEIC a AVIF permite la compresión más moderna con amplio soporte multiplataforma.',
    'Chrome, Firefox y Safari 16+ soportan AVIF nativamente. Para proyectos web críticos en rendimiento – galerías, portfolios, portales inmobiliarios – AVIF ofrece el mejor equilibrio entre tamaño y calidad.',
    'La conversión local es especialmente relevante para fotógrafos y creativos: sesiones de iPhone se convierten directamente al formato web más eficiente – sin pasar por la nube.',
  ],
  'heic-to-tiff': [
    'Fotógrafos profesionales que trabajan con iPhone a menudo necesitan TIFF para post-producción en Lightroom, Capture One o Photoshop. HEIC a TIFF preserva la calidad completa en un formato estándar de la industria.',
    'TIFF soporta 16 bits de profundidad, capas y metadatos EXIF/IPTC extendidos. Para impresión, archivo y retoque profesional, TIFF es el formato preferido. Los archivos son considerablemente más grandes que HEIC.',
    'En España, donde muchas imprentas y agencias fotográficas exigen TIFF como estándar, la conversión local ofrece un flujo de trabajo seguro para sesiones confidenciales.',
  ],
  'webp-to-jpg': [
    'WebP es óptimo para la web, pero servicios de impresión, Microsoft Office, software antiguo y algunas redes sociales requieren JPG.',
    'WebP a JPG asegura compatibilidad máxima. A calidad 85–90%, la calidad visual es casi idéntica. Práctico para enviar imágenes por correo a destinatarios que no pueden abrir WebP.',
    'Para agencias que deben entregar imágenes en formatos universales, la conversión local es ideal – rápida, segura y conforme al RGPD.',
  ],
  'webp-to-png': [
    'Las imágenes WebP con transparencia a veces necesitan convertirse a PNG – para programas gráficos sin soporte WebP o archivos de impresión que requieren calidad sin pérdida.',
    'La conversión preserva transparencia y calidad completamente. Los PNG son más grandes pero más adecuados para Photoshop, Illustrator, InDesign y plataformas sin soporte WebP.',
    'Los diseñadores en España pueden convertir localmente assets WebP en PNG listos para impresión – sin cloud y conforme al RGPD.',
  ],
  'webp-to-avif': [
    'AVIF ofrece compresión aún mejor que WebP – el siguiente paso lógico para sitios que buscan optimizar más sus tiempos de carga.',
    'A calidad comparable, los archivos AVIF son 20–30% más pequeños que WebP. Para sitios con cientos de imágenes, el ahorro es considerable. Un fallback WebP via <code>&lt;picture&gt;</code> cubre navegadores antiguos.',
    'Los e-commerce españoles que optimizan Core Web Vitals se benefician especialmente de AVIF. La conversión local evita la subida a la nube.',
  ],
  'webp-to-gif': [
    'El formato GIF es necesario a veces – sistemas antiguos, herramientas de newsletter o plataformas que solo aceptan GIF. WebP a GIF es la solución más rápida.',
    'El GIF solo soporta 256 colores. Las imágenes fotorrealistas pierden calidad. La conversión es más adecuada para gráficos simples, iconos o logos.',
    'El procesamiento local ofrece una alternativa rápida y segura a los servicios de conversión en línea.',
  ],
  'webp-to-tiff': [
    'Los flujos de impresión profesionales a menudo exigen TIFF como formato de entrada. WebP a TIFF permite preparar imágenes web-optimizadas para impresión.',
    'TIFF almacena sin pérdida con soporte completo de metadatos. Los detalles perdidos por la compresión WebP no se restauran – para mejor calidad, partir del original.',
    'Para agencias e imprentas en España, la conversión local ofrece un medio seguro de preparar assets web para proyectos de impresión.',
  ],
  'svg-to-jpg': [
    'Los SVG no se aceptan en todas partes: redes sociales, marketplaces y muchos CMS solo aceptan formatos ráster. La conversión a JPG crea archivos universalmente compatibles.',
    'La rasterización convierte el vector en píxeles a resolución fija. Las zonas transparentes se rellenan con color de fondo (blanco por defecto). Para uso web, se recomienda 1200–2000px de ancho.',
    'Para publicaciones en redes sociales y anuncios en Wallapop, MercadoLibre o Amazon.es, SVG a JPG es un requisito habitual.',
  ],
  'svg-to-png': [
    'Los SVG se convierten a menudo a PNG para redes sociales, mensajería y firmas de correo – preservando la transparencia con amplia compatibilidad.',
    'La rasterización a PNG preserva las zonas transparentes completamente – ideal para logos sobre diferentes fondos. También excelente para capturas de documentación y presentaciones.',
    'Para agencias que entregan logos en diferentes formatos, SVG a PNG es un flujo de trabajo rápido y conforme con la protección de datos.',
  ],
  'svg-to-webp': [
    'Para sitios que no pueden integrar SVG directamente – CMS con soporte limitado – WebP ofrece una representación píxel compacta con tamaño mínimo.',
    'Los WebP desde SVG son típicamente muy ligeros (5–30 KB) y cargan instantáneamente. Para iconos y logos en sitios web, es la solución más pragmática cuando el SVG directo no es posible.',
    'WordPress, PrestaShop y muchos CMS en España soportan WebP nativamente – permitiendo usar gráficos vectoriales incluso en estos entornos.',
  ],
  'svg-to-avif': [
    'AVIF ofrece la mejor compresión disponible para gráficos vectoriales rasterizados. Para sitios críticos en rendimiento, SVG a AVIF es la opción óptima cuando no se puede integrar SVG directamente.',
    'Los AVIF desde SVG son extremadamente compactos (3–15 KB). Cada kilobyte cuenta para Core Web Vitals: tiempos de carga más rápidos mejoran el LCP y el ranking en Google.',
    'Desarrolladores web y especialistas SEO en España usan cada vez más AVIF como estándar – la conversión local simplifica la transición.',
  ],
  'svg-to-gif': [
    'El GIF es necesario a veces para iconos en sistemas antiguos, templates de email o foros. SVG a GIF crea archivos compatibles y ligeros.',
    'El GIF limita a 256 colores. Para logos monocromos es suficiente; para ilustraciones complejas con degradados, no. Transparencia solo binaria.',
    'Para templates de newsletters y plataformas antiguas que solo aceptan GIF, es una solución local rápida.',
  ],
  'svg-to-tiff': [
    'Las imprentas necesitan a menudo imágenes TIFF en lugar de vectores. SVG a TIFF crea archivos de alta resolución sin pérdida para impresión profesional.',
    'TIFF almacena en calidad máxima con plena profundidad de color y metadatos. Para tarjetas de visita, flyers y pósters, se recomienda 300 DPI mínimo.',
    'Las imprentas en España y Latinoamérica aceptan TIFF como estándar. La conversión local protege diseños y logos confidenciales.',
  ],
  'gif-to-jpg': [
    'Las imágenes GIF antiguas a veces necesitan convertirse a JPG – plataformas que solo aceptan JPEG u optimización para correo. Solo la primera imagen de un GIF animado se convierte.',
    'JPG ofrece 16,7 millones de colores en lugar de los 256 del GIF. Las fotos guardadas accidentalmente como GIF se benefician de la profundidad de color completa.',
    'Para archivar gráficos antiguos en un formato moderno y universal, la conversión local es rápida y conforme con la protección de datos.',
  ],
  'gif-to-png': [
    'Convertir GIF a PNG es útil para almacenamiento sin pérdida o edición en programas gráficos. PNG soporta colores de 32 bits y transparencia alfa gradual.',
    'En GIF animados, solo se convierte la primera imagen. La calidad se preserva sin pérdida. PNG es ideal como formato intermedio para edición en Photoshop, Figma o Canva.',
    'Para actualizar gráficos web antiguos, la conversión local ofrece una solución rápida y segura sin servicios externos.',
  ],
  'gif-to-webp': [
    'WebP ofrece compresión mucho mejor que GIF. La modernización de GIF a WebP acelera perceptiblemente los sitios web.',
    'Los GIF estáticos se reducen 30–60% como WebP, con millones de colores en lugar de 256, mejorando la calidad visual a tamaño igual o menor.',
    'Para optimizar sitios antiguos en España, el cambio de GIF a WebP es un modo simple de mejorar los Core Web Vitals.',
  ],
  'gif-to-avif': [
    'AVIF supera al GIF en todo: mejor compresión, millones de colores, animación moderna. Para modernizar contenidos web antiguos, GIF a AVIF es lo más eficiente.',
    'Los AVIF desde GIF son drásticamente más pequeños y visualmente mejores. Los navegadores antiguos aún no soportan AVIF – un fallback via <code>&lt;picture&gt;</code> es recomendable.',
    'Para maximizar tiempos de carga, el cambio de GIF a AVIF ofrece la mayor ganancia individual de todos los cambios de formato.',
  ],
  'tiff-to-jpg': [
    'Los archivos TIFF de fotografía profesional o escáneres suelen pesar 20–100 MB. La conversión a JPG crea archivos compactos para web, correo y redes sociales – reducción típica de más del 95%.',
    'La transparencia y capas se pierden al convertir. Para fotografía pura, no es problemático. A calidad 85–90%, la calidad visual sigue siendo excelente con tamaños de unos cientos de KB.',
    'Fotógrafos y usuarios de escáneres en España pueden convertir sus TIFF localmente y conforme al RGPD en JPG listos para enviar – ideal para presentaciones a clientes.',
  ],
  'tiff-to-png': [
    'Cuando los TIFF se necesitan para edición en programas gráficos o sitios con transparencia, PNG es el formato adecuado – sin pérdida y universalmente compatible.',
    'PNG preserva la calidad completa y transparencia del TIFF. Los archivos son más pequeños que TIFF pero más grandes que JPEG/WebP. Para Figma, Canva o Photoshop, PNG es ideal.',
    'Para preparar salidas de escáner e imágenes de archivo para uso online, la conversión local ofrece un flujo seguro y rápido.',
  ],
  'tiff-to-webp': [
    'TIFF a WebP ofrece la mayor reducción: archivos de 20–100 MB pasan a 200 KB – 2 MB. Para publicar fotos profesionales en la web, es lo más eficiente.',
    'A calidad 80–85%, WebP mantiene excelente calidad visual. Para galerías, portfolios y revistas online: calidad profesional a una fracción del tamaño original.',
    'Fotógrafos y agencias en España pueden convertir resultados de sesiones de alta resolución en formatos web-optimizados localmente – sin cloud, conforme al RGPD.',
  ],
  'tiff-to-avif': [
    'AVIF ofrece la compresión más eficiente para archivos TIFF grandes. Fotos y escaneos de alta resolución se reducen drásticamente con mínima pérdida de calidad.',
    'Para galerías y portfolios web que buscan los mejores tiempos de carga, TIFF a AVIF es el flujo óptimo. Chrome, Firefox y Safari 16+ soportan AVIF; fallback WebP para navegadores antiguos.',
    'Fotógrafos y agencias fotográficas en España se benefician del procesamiento local: fotos de clientes optimizadas de forma segura y conforme al RGPD.',
  ],
  'bmp-to-jpg': [
    'Los archivos BMP provienen a menudo de aplicaciones Windows antiguas o escáneres. No comprimidos y muy grandes, la conversión a JPG reduce el tamaño más de un 95%.',
    'Un BMP de 10 MB se convierte típicamente en 200–400 KB como JPG. Para correo, documentación y archivo, es la forma más simple de ahorrar espacio y asegurar compatibilidad.',
    'Para migrar archivos de imágenes antiguos y preparar salidas de escáner, la conversión local es rápida y conforme con la protección de datos.',
  ],
  'bmp-to-png': [
    'BMP a PNG reduce el tamaño mediante compresión sin pérdida – la calidad completa se preserva. Ideal para gráficos con bordes nítidos, texto o capturas de pantalla.',
    'A diferencia de JPG, PNG preserva la calidad píxel exacta sin artefactos. Para documentaciones técnicas y capturas con texto, PNG es la mejor opción.',
    'La conversión local es adecuada para documentos confidenciales y capturas internas – nada se envía a un servidor externo.',
  ],
  'bmp-to-webp': [
    'Los BMP son inadecuados para la web moderna – no comprimidos y enormes. WebP reduce el tamaño hasta un 97% con buena calidad, modernizando imágenes antiguas para la web.',
    'La conversión moderniza archivos antiguos de Windows para sitios, CMS y tiendas actuales. WebP es soportado por todos los navegadores modernos y mejora los tiempos de carga.',
    'Para empresas españolas que preparan archivos antiguos para su presencia web, la conversión local es eficiente y conforme al RGPD.',
  ],
  'bmp-to-avif': [
    'AVIF ofrece la mejor compresión para BMP no comprimidos: reducciones de más del 98%. Para modernizar archivos antiguos, BMP a AVIF es lo más eficiente.',
    'AVIF soporta HDR, espacios de color amplios y hasta 12 bits – la calidad original se preserva al máximo. Chrome, Firefox y Safari 16+ lo soportan nativamente.',
    'La conversión local permite migrar archivos completos sin cloud – rápida, segura y conforme con la protección de datos.',
  ],
  'bmp-to-gif': [
    'BMP a GIF es útil para sistemas que solo aceptan GIF o gráficos simples con pocos colores donde GIF es más compacto.',
    'El GIF solo soporta 256 colores. Las imágenes fotorrealistas pierden calidad. Para fotos, JPG o WebP son preferibles. GIF solo para gráficos simples.',
    'Para requisitos de compatibilidad de sistemas antiguos, la conversión local ofrece una solución rápida y segura.',
  ],
  'bmp-to-tiff': [
    'BMP a TIFF es útil para soporte profesional de metadatos – archivo, preimpresión o procesamiento en software profesional.',
    'TIFF preserva la calidad completa del BMP y añade: metadatos EXIF, CMYK y capas. Para archivo a largo plazo, TIFF es claramente superior a BMP.',
    'Archivos, bibliotecas y empresas españolas que digitalizan fondos antiguos se benefician de la conversión local sin dependencia cloud.',
  ],
  'avif-to-jpg': [
    'AVIF aún no es soportado por dispositivos antiguos, software de edición y algunas plataformas. La conversión a JPG asegura compatibilidad máxima.',
    'A calidad 85–90%, la calidad es casi idéntica al original AVIF. Útil para correo a destinatarios con sistemas antiguos o servicios de impresión que solo aceptan JPEG.',
    'Para empresas que necesitan imágenes weboptimizadas (AVIF) y universales (JPG), la conversión local es un flujo de trabajo eficiente.',
  ],
  'avif-to-png': [
    'Las imágenes AVIF con transparencia a veces necesitan convertirse a PNG – para edición en programas gráficos o plataformas sin soporte AVIF.',
    'PNG preserva transparencia y calidad sin pérdida. Los archivos son más grandes que AVIF pero adecuados para Photoshop, Figma, Canva e impresión.',
    'Los diseñadores en España usan la conversión local para preparar assets AVIF para diferentes canales – seguro y conforme al RGPD.',
  ],
  'avif-to-webp': [
    'WebP ofrece mayor soporte de navegadores que AVIF (Safari 14+ vs 16+) con buena compresión. Si tu audiencia usa navegadores antiguos, WebP es más seguro.',
    'AVIF a WebP es relevante para CMS y CDN sin soporte AVIF. WebP es soportado nativamente por WordPress, Shopify, Cloudflare y todos los navegadores modernos.',
    'Para proyectos web en España que necesitan máxima cobertura de navegadores, WebP sigue siendo el formato moderno más fiable.',
  ],
};

function extractFormats(f) {
  const m = f.match(/converter-(\w+)-to-(\w+)\.json/);
  return m ? { key: `${m[1]}-to-${m[2]}` } : null;
}
let updated = 0,
  skipped = 0;
const files = fs.readdirSync(TOOLS).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));
for (const file of files) {
  const fmt = extractFormats(file);
  if (!fmt || !P[fmt.key]) {
    skipped++;
    continue;
  }
  const [p1, p2, p3] = P[fmt.key];
  const fp = path.join(TOOLS, file);
  const data = JSON.parse(fs.readFileSync(fp, 'utf-8'));
  const block = data.contentBlocks.find((b) => b.type === 'sectionInfo' && !b.html.includes('<table') && (b.title.includes('práctica') || b.title.includes('en la práctica')));
  if (!block) {
    skipped++;
    continue;
  }
  block.html = `<p class="text-mid mb-4">${p1}</p><p class="text-mid mb-4">${p2}</p><p class="text-mid">${p3}</p>`;
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updated++;
}
console.log(`ES sectionInfo: Updated: ${updated}, Skipped: ${skipped}`);
