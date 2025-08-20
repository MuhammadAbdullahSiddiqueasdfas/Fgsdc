#!/usr/bin/env node

/**
 * Website Restructure Validation Script
 * Validates that all internal links and asset references are working correctly
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    reset: '\x1b[0m'
};

function log(message, color = 'reset') {
    console.log(colors[color] + message + colors.reset);
}

function checkFileExists(filePath) {
    try {
        return fs.existsSync(filePath);
    } catch (error) {
        return false;
    }
}

function validateHtmlFile(htmlPath) {
    log(`\nValidating: ${htmlPath}`, 'blue');
    
    if (!checkFileExists(htmlPath)) {
        log(`❌ HTML file not found: ${htmlPath}`, 'red');
        return false;
    }
    
    const content = fs.readFileSync(htmlPath, 'utf8');
    const basePath = path.dirname(htmlPath);
    let isValid = true;
    
    // Check CSS links
    const cssMatches = content.match(/href="([^"]*\.css)"/g);
    if (cssMatches) {
        cssMatches.forEach(match => {
            const cssPath = match.match(/href="([^"]*)"/)[1];
            const fullPath = path.resolve(basePath, cssPath);
            if (!checkFileExists(fullPath)) {
                log(`❌ CSS file not found: ${cssPath}`, 'red');
                isValid = false;
            } else {
                log(`✅ CSS file found: ${cssPath}`, 'green');
            }
        });
    }
    
    // Check JavaScript files
    const jsMatches = content.match(/src="([^"]*\.js)"/g);
    if (jsMatches) {
        jsMatches.forEach(match => {
            const jsPath = match.match(/src="([^"]*)"/)[1];
            if (!jsPath.startsWith('http')) { // Skip external scripts
                const fullPath = path.resolve(basePath, jsPath);
                if (!checkFileExists(fullPath)) {
                    log(`❌ JS file not found: ${jsPath}`, 'red');
                    isValid = false;
                } else {
                    log(`✅ JS file found: ${jsPath}`, 'green');
                }
            }
        });
    }
    
    // Check image files
    const imgMatches = content.match(/src="([^"]*\.(jpg|jpeg|png|gif|webp))"/gi);
    if (imgMatches) {
        imgMatches.forEach(match => {
            const imgPath = match.match(/src="([^"]*)"/)[1];
            const fullPath = path.resolve(basePath, imgPath);
            if (!checkFileExists(fullPath)) {
                log(`❌ Image file not found: ${imgPath}`, 'red');
                isValid = false;
            } else {
                log(`✅ Image file found: ${imgPath}`, 'green');
            }
        });
    }
    
    // Check video files
    const videoMatches = content.match(/src="([^"]*\.mp4)"/g);
    if (videoMatches) {
        videoMatches.forEach(match => {
            const videoPath = match.match(/src="([^"]*)"/)[1];
            const fullPath = path.resolve(basePath, videoPath);
            if (!checkFileExists(fullPath)) {
                log(`❌ Video file not found: ${videoPath}`, 'red');
                isValid = false;
            } else {
                log(`✅ Video file found: ${videoPath}`, 'green');
            }
        });
    }
    
    return isValid;
}

function validateProject() {
    log('🔍 Starting Website Restructure Validation...', 'blue');
    
    const htmlFiles = [
        'index.html',
        'pages/university.html',
        'pages/facilities.html',
        'pages/faculty.html',
        'pages/gallery.html'
    ];
    
    let allValid = true;
    
    htmlFiles.forEach(htmlFile => {
        const isValid = validateHtmlFile(htmlFile);
        if (!isValid) {
            allValid = false;
        }
    });
    
    // Check folder structure
    log('\n📁 Validating folder structure...', 'blue');
    const requiredFolders = [
        'assets',
        'assets/images',
        'assets/images/gallery',
        'assets/images/faculty',
        'assets/images/facilities',
        'assets/images/logos',
        'assets/images/backgrounds',
        'assets/videos',
        'assets/videos/promotional',
        'assets/videos/events',
        'assets/videos/university',
        'assets/documents',
        'css',
        'css/pages',
        'css/components',
        'js',
        'js/pages',
        'js/components',
        'pages'
    ];
    
    requiredFolders.forEach(folder => {
        if (checkFileExists(folder)) {
            log(`✅ Folder exists: ${folder}`, 'green');
        } else {
            log(`❌ Folder missing: ${folder}`, 'red');
            allValid = false;
        }
    });
    
    if (allValid) {
        log('\n🎉 All validations passed! Website restructure is complete.', 'green');
    } else {
        log('\n❌ Some validations failed. Please check the errors above.', 'red');
    }
    
    return allValid;
}

// Run validation
validateProject();