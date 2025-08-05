#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ICONS_DIR = path.join(__dirname, '../src/assets/icons-processed')
const OUTPUT_FILE = path.join(__dirname, '../src/assets/icons-list.json')

console.log('🎯 Génération de la liste des icônes...')

try {
    // Lire le contenu du dossier icons-processed
    const files = fs.readdirSync(ICONS_DIR)

    // Filtrer uniquement les fichiers .svg et retirer l'extension
    const iconNames = files
        .filter(file => file.endsWith('.svg'))
        .map(file => file.replace('.svg', ''))
        .sort()

    // Créer l'objet de sortie
    const output = {
        generated: new Date().toISOString(),
        count: iconNames.length,
        icons: iconNames
    }

    // Créer le dossier assets s'il n'existe pas
    const outputDir = path.dirname(OUTPUT_FILE)
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true })
    }

    // Écrire le fichier JSON
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2))

    console.log(`✅ Liste générée avec succès !`)
    console.log(`📊 ${iconNames.length} icônes trouvées`)
    console.log(`📁 Fichier sauvegardé : ${OUTPUT_FILE}`)

} catch (error) {
    console.error('❌ Erreur lors de la génération :', error)
    process.exit(1)
}