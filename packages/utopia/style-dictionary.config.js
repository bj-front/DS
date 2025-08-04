import fs from 'fs';
import path from 'path';
import StyleDictionary from 'style-dictionary';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Register a custom transform for assets
StyleDictionary.registerTransform({
  name: 'asset/url',
  type: 'value',
  filter: (token) => token.type === 'asset',
  transform: (token) => {
    // Si c'est un SVG, l'encoder en data URL
    if (token.value.endsWith('.svg')) {
      try {
        // Chemin depuis src/assets vers le fichier SVG
        const svgPath = path.join(__dirname, 'src', token.value.replace(/^\/assets\//, 'assets/'))
        const svgContent = fs.readFileSync(svgPath, 'utf-8')

        // Nettoyer le SVG et l'encoder en base64
        const cleanSvg = svgContent.replace(/[\r\n\t]/g, ' ').replace(/\s+/g, ' ').trim()
        const base64 = Buffer.from(cleanSvg).toString('base64')
        return `url('data:image/svg+xml;base64,${base64}')`
      } catch (error) {
        console.warn(`Warning: Could not read SVG file ${token.value}:`, error.message)
        return `url('${token.value}')`
      }
    }

    // Pour les autres assets, utiliser l'URL normale
    return `url('${token.value}')`
  }
})

// Configuration pour le mode Light
export const clubEmployesLight = {
  source: [
    'src/tokens/core/**/*.json',
    'src/tokens/brands/club-employes/colors.json',
    'src/tokens/themes/club-employes-light.json'
  ],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/kebab', 'time/seconds', 'size/rem', 'color/css', 'asset/url'],
      buildPath: 'src/tokens/generated/club-employes/',
      files: [
        {
          destination: 'light.css',
          format: 'css/variables'
        }
      ]
    },
    js: {
      transforms: ['attribute/cti', 'name/camel', 'color/hex', 'asset/url'],
      buildPath: 'src/tokens/generated/club-employes/',
      files: [
        {
          destination: 'light.js',
          format: 'javascript/es6'
        }
      ]
    }
  }
};

// Configuration pour le mode Dark
export const clubEmployesDark = {
  source: [
    'src/tokens/core/**/*.json',
    'src/tokens/brands/club-employes/colors-dark.json',
    'src/tokens/themes/club-employes-dark.json'
  ],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/kebab', 'time/seconds', 'size/rem', 'color/css', 'asset/url'],
      buildPath: 'src/tokens/generated/club-employes/',
      files: [
        {
          destination: 'dark.css',
          format: 'css/variables'
        }
      ]
    },
    js: {
      transforms: ['attribute/cti', 'name/camel', 'color/hex', 'asset/url'],
      buildPath: 'src/tokens/generated/club-employes/',
      files: [
        {
          destination: 'dark.js',
          format: 'javascript/es6'
        }
      ]
    }
  }
};

// Configuration pour Gifteo Light
export const gifteoLight = {
  source: [
    'src/tokens/core/**/*.json',
    'src/tokens/brands/gifteo/colors.json',
    'src/tokens/themes/gifteo-light.json'
  ],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/kebab', 'time/seconds', 'size/rem', 'color/css', 'asset/url'],
      buildPath: 'src/tokens/generated/gifteo/',
      files: [
        {
          destination: 'light.css',
          format: 'css/variables'
        }
      ]
    },
    js: {
      transforms: ['attribute/cti', 'name/camel', 'color/hex', 'asset/url'],
      buildPath: 'src/tokens/generated/gifteo/',
      files: [
        {
          destination: 'light.js',
          format: 'javascript/es6'
        }
      ]
    }
  }
};

// Configuration pour Gifteo Dark
export const gifteoDark = {
  source: [
    'src/tokens/core/**/*.json',
    'src/tokens/brands/gifteo/colors-dark.json',
    'src/tokens/themes/gifteo-dark.json'
  ],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/kebab', 'time/seconds', 'size/rem', 'color/css', 'asset/url'],
      buildPath: 'src/tokens/generated/gifteo/',
      files: [
        {
          destination: 'dark.css',
          format: 'css/variables'
        }
      ]
    },
    js: {
      transforms: ['attribute/cti', 'name/camel', 'color/hex', 'asset/url'],
      buildPath: 'src/tokens/generated/gifteo/',
      files: [
        {
          destination: 'dark.js',
          format: 'javascript/es6'
        }
      ]
    }
  }
};

export default clubEmployesLight; 