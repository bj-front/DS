import StyleDictionary from 'style-dictionary';
import { clubEmployesLight, clubEmployesDark, gifteoLight, gifteoDark } from '../style-dictionary.config.js';

console.log('🚀 Building design tokens...');

// Build Club Employés themes
console.log('💙 Building Club Employés Light theme...');
const sdClubLight = new StyleDictionary(clubEmployesLight);
await sdClubLight.buildAllPlatforms();

console.log('🌙 Building Club Employés Dark theme...');
const sdClubDark = new StyleDictionary(clubEmployesDark);
await sdClubDark.buildAllPlatforms();

// Build Gifteo themes
console.log('❤️ Building Gifteo Light theme...');
const sdGifteoLight = new StyleDictionary(gifteoLight);
await sdGifteoLight.buildAllPlatforms();

console.log('🌙 Building Gifteo Dark theme...');
const sdGifteoDark = new StyleDictionary(gifteoDark);
await sdGifteoDark.buildAllPlatforms();

console.log('✅ Design tokens build completed!');
console.log('📁 Generated files:');
console.log('  Club Employés:');
console.log('    - src/tokens/generated/club-employes/light.css');
console.log('    - src/tokens/generated/club-employes/light.js');
console.log('    - src/tokens/generated/club-employes/dark.css');
console.log('    - src/tokens/generated/club-employes/dark.js');
console.log('  Gifteo:');
console.log('    - src/tokens/generated/gifteo/light.css');
console.log('    - src/tokens/generated/gifteo/light.js');
console.log('    - src/tokens/generated/gifteo/dark.css');
console.log('    - src/tokens/generated/gifteo/dark.js'); 