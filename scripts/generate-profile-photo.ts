import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const inputPath = resolve(process.cwd(), "public", "belicio.jpeg");

const portraitPath = resolve(process.cwd(), "public", "brand-portrait.webp");
const avatarPath = resolve(process.cwd(), "public", "brand-avatar.webp");
const faviconPath = resolve(process.cwd(), "public", "favicon.png");
const appleTouchIconPath = resolve(process.cwd(), "public", "apple-touch-icon.png");
const ogImagePath = resolve(process.cwd(), "public", "og-image.png");

async function main() {
  await mkdir(dirname(portraitPath), { recursive: true });

  const base = sharp(inputPath).rotate();

  // Main portrait used in hero.
  await base
    .clone()
    .resize(900, 1200, {
      fit: "inside",
      withoutEnlargement: true,
    })
    .modulate({ brightness: 1.02, saturation: 0.92 })
    .linear(1.015, -1.5)
    .sharpen(0.7)
    .flatten({ background: "#020617" })
    .webp({ quality: 92 })
    .toFile(portraitPath);

  // Small avatar for navbar/logo.
  await base
    .clone()
    .resize(160, 160, {
      fit: "contain",
      background: "#020617",
    })
    .modulate({ brightness: 1.02, saturation: 0.9 })
    .sharpen(0.6)
    .webp({ quality: 86 })
    .toFile(avatarPath);

  // Browser icons.
  await base
    .clone()
    .resize(64, 64, {
      fit: "contain",
      background: "#020617",
    })
    .png({ compressionLevel: 9 })
    .toFile(faviconPath);

  await base
    .clone()
    .resize(180, 180, {
      fit: "contain",
      background: "#020617",
    })
    .png({ compressionLevel: 9 })
    .toFile(appleTouchIconPath);

  // Social preview image.
  await base
    .clone()
    .resize(1200, 630, {
      fit: "contain",
      background: "#020617",
    })
    .modulate({ brightness: 0.95, saturation: 0.95 })
    .png({ compressionLevel: 9 })
    .toFile(ogImagePath);

  console.log("Branding gerado:");
  console.log(` - ${portraitPath}`);
  console.log(` - ${avatarPath}`);
  console.log(` - ${faviconPath}`);
  console.log(` - ${appleTouchIconPath}`);
  console.log(` - ${ogImagePath}`);
}

main().catch((error) => {
  console.error("Falha ao gerar foto de perfil:", error);
  process.exit(1);
});
