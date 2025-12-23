import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directories = [
  path.join(__dirname, '../public/4 floor_webp'),
  path.join(__dirname, '../public/5 floor_webp')
];

async function convertImages() {
  for (const dir of directories) {
    if (!fs.existsSync(dir)) {
      console.log(`Directory not found: ${dir}`);
      continue;
    }

    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (path.extname(file).toLowerCase() === '.png') {
        const inputPath = path.join(dir, file);
        const outputPath = path.join(dir, file.replace(/\.png$/i, '.webp'));

        try {
          await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);

          console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);

          // Remove the original png file from the copy folder
          fs.unlinkSync(inputPath);
          console.log(`Deleted original: ${file}`);
        } catch (err) {
          console.error(`Error converting ${file}:`, err);
        }
      }
    }
  }
}

convertImages();
