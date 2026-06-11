/**
 * Generates branded raster assets (OG image, PWA icons, apple-touch-icon)
 * from inline Noir-edition SVGs. Run: node scripts/gen-assets.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SERIF = "Georgia, 'Times New Roman', serif";
const MONO = "Menlo, 'Courier New', monospace";

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="48" y="48" width="1104" height="534" fill="none" stroke="#e8e8e6" stroke-width="1.5"/>
  <rect x="110" y="166" width="44" height="2" fill="#0d0d0c"/>
  <text x="172" y="175" font-family="${MONO}" font-size="21" letter-spacing="5" fill="#8a8a85">SEO CONSULTANT · SINCE 2012</text>
  <text x="104" y="372" font-family="${SERIF}" font-size="150" fill="#0d0d0c">Ana <tspan font-style="italic">Precup</tspan></text>
  <text x="108" y="452" font-family="${SERIF}" font-size="32" fill="#4a4a47">SEO, AI Search &amp; the freelance life — honest, from experience.</text>
  <text x="108" y="542" font-family="${MONO}" font-size="22" letter-spacing="2" fill="#8a8a85">anaprecup.com</text>
  <rect x="988" y="514" width="116" height="38" fill="#0d0d0c"/>
  <text x="1046" y="539" text-anchor="middle" font-family="${MONO}" font-size="16" letter-spacing="2" fill="#ffffff">DEBY.RO</text>
</svg>`;

const iconFull = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#0d0d0c"/>
  <text x="256" y="388" text-anchor="middle" font-family="${SERIF}" font-size="360" fill="#f4f4f1">A</text>
</svg>`;

const iconPadded = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#0d0d0c"/>
  <text x="256" y="356" text-anchor="middle" font-family="${SERIF}" font-size="280" fill="#f4f4f1">A</text>
</svg>`;

await mkdir("public", { recursive: true });

await sharp(Buffer.from(ogSvg)).png().toFile("public/og.png");
await sharp(Buffer.from(iconFull)).resize(512, 512).png().toFile("public/icon-512.png");
await sharp(Buffer.from(iconFull)).resize(192, 192).png().toFile("public/icon-192.png");
await sharp(Buffer.from(iconPadded)).resize(512, 512).png().toFile("public/icon-maskable-512.png");
await sharp(Buffer.from(iconPadded)).resize(180, 180).png().toFile("app/apple-icon.png");

console.log("Generated: og.png, icon-512/192, icon-maskable-512, app/apple-icon.png");
