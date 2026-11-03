import { readdir, mkdir, stat } from "node:fs/promises";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import sharp from "sharp";

const sourceRoot = resolve("assets-source", "img");
const outputRoot = resolve("public", "media");
const socialCardPath = resolve("public", "opengraph-image.png");
const appleIconPath = resolve("public", "apple-icon.png");
const faviconPath = resolve("public", "favicon.png");
const sourceFiles = [];

async function collectImages(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filePath = join(directory, entry.name);
    if (entry.isDirectory()) {
      await collectImages(filePath);
    } else if ([".jpeg", ".jpg", ".png"].includes(extname(entry.name).toLowerCase())) {
      sourceFiles.push(filePath);
    }
  }
}

function socialCardSvg() {
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
      <defs>
        <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#101c39"/>
          <stop offset="1" stop-color="#293b72"/>
        </linearGradient>
        <radialGradient id="glow">
          <stop offset="0" stop-color="#76539a" stop-opacity=".85"/>
          <stop offset="1" stop-color="#76539a" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#background)"/>
      <circle cx="1030" cy="90" r="430" fill="url(#glow)"/>
      <path d="M92 106h78" stroke="#52b8ff" stroke-width="5" stroke-linecap="round"/>
      <text x="92" y="185" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700">I&amp;T SOLUTIONS</text>
      <text x="92" y="276" fill="#eaf1ff" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700">Sua ideia, nossa tecnologia.</text>
      <text x="92" y="344" fill="#c6d1ed" font-family="Arial, Helvetica, sans-serif" font-size="25">Aplicativos e plataformas digitais sob medida.</text>
      <rect x="92" y="420" width="312" height="62" rx="31" fill="#f3e8ff"/>
      <text x="248" y="460" text-anchor="middle" fill="#54356b" font-family="Arial, Helvetica, sans-serif" font-size="21" font-weight="700">Conheça nossas soluções</text>
    </svg>
  `);
}

await collectImages(sourceRoot);
let originalBytes = 0;
let optimizedBytes = 0;

for (const sourcePath of sourceFiles) {
  const sourceRelative = relative(sourceRoot, sourcePath);
  const outputRelative = sourceRelative.slice(0, -extname(sourceRelative).length);
  const outputBase = join(outputRoot, outputRelative);
  const outputDirectory = dirname(outputBase);
  await mkdir(outputDirectory, { recursive: true });

  const image = sharp(sourcePath);
  const metadata = await image.metadata();
  if (!metadata.width || !metadata.height) {
    throw new Error(`Could not read image dimensions: ${sourcePath}`);
  }

  originalBytes += (await stat(sourcePath)).size;
  for (const width of [768, 1440]) {
    const outputPath = `${outputBase}-${width}.webp`;
    await image
      .clone()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 90, effort: 6, smartSubsample: true })
      .toFile(outputPath);
    optimizedBytes += (await stat(outputPath)).size;
  }
}

const logoPath = join(sourceRoot, "logotipo.jpeg");
await sharp(logoPath)
  .resize(180, 180, { fit: "cover" })
  .png()
  .toFile(appleIconPath);
await sharp(logoPath)
  .resize(48, 48, { fit: "cover" })
  .png()
  .toFile(faviconPath);
await sharp(socialCardSvg()).png().toFile(socialCardPath);

const relativePath = (path) => relative(process.cwd(), path).split(sep).join("/");
console.log(`Processed ${sourceFiles.length} source images.`);
console.log(`Original image bytes: ${originalBytes}`);
console.log(`Responsive WebP bytes: ${optimizedBytes}`);
console.log(`Optimized media directory: ${relativePath(outputRoot)}`);
