#!/usr/bin/env node
/**
 * Logo Optimization Script
 * Creates multiple sizes of the VashonMesh logo for responsive images
 */

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logoDir = path.join(__dirname, '..', 'public', 'logo');

// Configuration for logo sizes (width in pixels)
const sizes = [
    { width: 300, suffix: '-sm', quality: 90 },   // Mobile @ 2x (150px display)
    { width: 600, suffix: '-md', quality: 90 },   // Desktop @ 2x (280px display) and XL @ 1.5x
    { width: 1000, suffix: '-lg', quality: 85 },  // 2XL @ 2x (500px display)
];

async function optimizeLogo() {
    console.log('🖼️  Logo Optimization Tool\n');

    const svgPath = path.join(logoDir, 'VashonMesh.svg');
    const results = [];

    try {
        // Check if SVG exists
        await fs.access(svgPath);
        console.log(`✅ Found source: VashonMesh.svg\n`);
    } catch {
        console.error('❌ VashonMesh.svg not found in public/logo/');
        process.exit(1);
    }

    for (const { width, suffix, quality } of sizes) {
        const outputPath = path.join(logoDir, `VashonMesh${suffix}.webp`);

        try {
            await sharp(svgPath)
                .resize(width, null, {
                    fit: 'contain',
                    background: { r: 0, g: 0, b: 0, alpha: 0 }
                })
                .webp({ quality })
                .toFile(outputPath);

            const stats = await fs.stat(outputPath);
            console.log(
                `✅ VashonMesh${suffix}.webp\n` +
                `   ${width}px width, quality ${quality}\n` +
                `   ${(stats.size / 1024).toFixed(1)}KB\n`
            );

            results.push({
                file: `VashonMesh${suffix}.webp`,
                width,
                size: stats.size
            });
        } catch (error) {
            console.error(`❌ Failed to create ${suffix} version:`, error.message);
        }
    }

    if (results.length > 0) {
        const totalSize = results.reduce((sum, r) => sum + r.size, 0);
        console.log('\n' + '='.repeat(60));
        console.log('📊 Summary:');
        console.log(`   Versions created: ${results.length}`);
        console.log(`   Total size: ${(totalSize / 1024).toFixed(1)}KB`);
        console.log('\n💡 Next steps:');
        console.log('   Update index.astro to use responsive images with srcset\n');
    }
}

optimizeLogo().catch(console.error);
