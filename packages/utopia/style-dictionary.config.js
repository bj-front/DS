import StyleDictionary from 'style-dictionary'

// Register a custom transform for assets
StyleDictionary.registerTransform({
  name: 'asset/url',
  type: 'value',
  filter: (token) => token.type === 'asset',
  transform: (token) => {
    // Convert the path to a proper URL for CSS
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
      transformGroup: 'js',
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
      transformGroup: 'js',
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
      transformGroup: 'js',
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
      transformGroup: 'js',
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
