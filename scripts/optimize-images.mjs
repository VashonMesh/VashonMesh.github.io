#!/usr/bin/env node
/**
 * Image Optimization Script
 * Automatically resizes and optimizes images for web display
 * Run: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

// Configuration
const config = {
    // Floating images - displayed at ~88px on screen
    floatingImages: {
        inputDirs: ['hero-imgs/birds', 'hero-imgs/devices', 'hero-imgs/solar'],
        maxWidth: 132, // 1.5x display size (88px x 1.5) - Reduced from 2x for LCP savings
        maxHeight: 200, // Keep small for fast loading
        quality: 75, // Increased for better clarity
        format: 'webp'
    },
    // News images - displayed at ~280px max width
    newsImages: {
        inputDirs: ['news-imgs'],
        maxWidth: 560, // 2x display size for retina screens (280px × 2)
        quality: 85, // Increased for better clarity
        format: 'webp'
    }
};

async function getImageFiles(dir) {
    const fullPath = path.join(publicDir, dir);
    try {
        const files = await fs.readdir(fullPath);
        return files
            .filter(f => /\.(png|jpg|jpeg)$/i.test(f))
            .map(f => path.join(dir, f));
    } catch (error) {
        console.log(`⚠️  Directory not found: ${dir}`);
        return [];
    }
}

async function optimizeImage(inputPath, options) {
    const fullInputPath = path.join(publicDir, inputPath);
    const ext = path.extname(inputPath);
    const outputPath = inputPath.replace(ext, `.optimized.${options.format}`);
    const fullOutputPath = path.join(publicDir, outputPath);

    try {
        const input = sharp(fullInputPath);
        const metadata = await input.metadata();

        let pipeline = input;

        // Resize based on config
        if (options.maxWidth && options.maxHeight) {
            // Constrain floating images to max dimensions
            pipeline = pipeline.resize(options.maxWidth, options.maxHeight, {
                fit: 'inside', // Keep within bounds while maintaining aspect ratio
                withoutEnlargement: true
            });
        } else if (options.maxWidth) {
            // Width-based resize for news images
            pipeline = pipeline.resize(options.maxWidth, null, {
                fit: 'inside',
                withoutEnlargement: true
            });
        }

        // Convert to target format with quality
        if (options.format === 'webp') {
            pipeline = pipeline.webp({ quality: options.quality });
        } else if (options.format === 'avif') {
            pipeline = pipeline.avif({ quality: options.quality });
        }

        await pipeline.toFile(fullOutputPath);

        const stats = await fs.stat(fullInputPath);
        const optimizedStats = await fs.stat(fullOutputPath);
        const savings = ((1 - optimizedStats.size / stats.size) * 100).toFixed(1);

        console.log(
            `✅ ${inputPath}\n` +
            `   ${metadata.width}x${metadata.height} → optimized\n` +
            `   ${(stats.size / 1024).toFixed(1)}KB → ${(optimizedStats.size / 1024).toFixed(1)}KB (${savings}% savings)\n`
        );

        return {
            input: inputPath,
            output: outputPath,
            originalSize: stats.size,
            optimizedSize: optimizedStats.size,
            savings: parseFloat(savings)
        };
    } catch (error) {
        console.error(`❌ Failed to optimize ${inputPath}:`, error.message);
        return null;
    }
}

async function main() {
    console.log('🖼️  Image Optimization Tool\n');
    console.log('Installing sharp if needed...');

    const results = [];

    // Optimize floating images
    console.log('\n📦 Optimizing floating images (132x200px max, quality 75)...\n');
    for (const dir of config.floatingImages.inputDirs) {
        const files = await getImageFiles(dir);
        for (const file of files) {
            const result = await optimizeImage(file, config.floatingImages);
            if (result) results.push(result);
        }
    }

    // Optimize news images
    console.log('\n📰 Optimizing news images (560px max width, quality 85)...\n');
    for (const dir of config.newsImages.inputDirs) {
        const files = await getImageFiles(dir);
        for (const file of files) {
            const result = await optimizeImage(file, config.newsImages);
            if (result) results.push(result);
        }
    }

    // Summary
    if (results.length > 0) {
        const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
        const totalOptimized = results.reduce((sum, r) => sum + r.optimizedSize, 0);
        const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);

        console.log('\n' + '='.repeat(60));
        console.log('📊 Summary:');
        console.log(`   Images optimized: ${results.length}`);
        console.log(`   Original total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
        console.log(`   Optimized total: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
        console.log(`   Total savings: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)} MB (${totalSavings}%)`);
        console.log('   3. Delete the original large files after verification');
        console.log('   4. Update Layout.astro to reference .optimized.webp files\n');
    } else {
        console.log('\n⚠️  No images found to optimize\n');
    }
}

main().catch(console.error);
