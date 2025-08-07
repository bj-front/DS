// Ce fichier est généré automatiquement par generate-complete-structure.js
// Ne pas modifier manuellement

export interface MenuItem {
  key: string
  label: string
  icon: string
  to: string
}

export interface MenuSection {
  key: string
  type: 'section'
  label: string
}

export type MenuItemOrSection = MenuItem | MenuSection

// Structure complète scannée du design system
export const designSystemStructure = [
  {
    "name": "atoms",
    "type": "section",
    "path": "atoms",
    "children": [
      {
        "name": "Badge",
        "type": "component",
        "path": "atoms/Badge"
      },
      {
        "name": "Button",
        "type": "component",
        "path": "atoms/Button"
      },
      {
        "name": "Card",
        "type": "component",
        "path": "atoms/Card"
      },
      {
        "name": "Icon",
        "type": "component",
        "path": "atoms/Icon"
      },
      {
        "name": "Input",
        "type": "component",
        "path": "atoms/Input"
      },
      {
        "name": "InputSelect",
        "type": "component",
        "path": "atoms/InputSelect"
      },
      {
        "name": "Logo",
        "type": "component",
        "path": "atoms/Logo"
      }
    ]
  },
  {
    "name": "layouts",
    "type": "section",
    "path": "layouts",
    "children": [
      {
        "name": "DefaultLayout",
        "type": "component",
        "path": "layouts/DefaultLayout"
      }
    ]
  },
  {
    "name": "molecules",
    "type": "section",
    "path": "molecules",
    "children": [
      {
        "name": "SearchBox",
        "type": "component",
        "path": "molecules/SearchBox"
      }
    ]
  },
  {
    "name": "organisms",
    "type": "section",
    "path": "organisms",
    "children": [
      {
        "name": "DataTable",
        "type": "component",
        "path": "organisms/DataTable"
      }
    ]
  }
] as const

// Menu items générés automatiquement
export const generatedMenuItems: MenuItemOrSection[] = [
  {
    "key": "home",
    "label": "Accueil",
    "icon": "Home",
    "to": "/"
  },
  {
    "key": "atoms-section",
    "type": "section",
    "label": "Atoms"
  },
  {
    "key": "atoms-Badge",
    "label": "Badge",
    "icon": "Tag",
    "to": "/design-system/atoms/badge"
  },
  {
    "key": "atoms-Button",
    "label": "Button",
    "icon": "Square",
    "to": "/design-system/atoms/button"
  },
  {
    "key": "atoms-Card",
    "label": "Card",
    "icon": "RectangleHorizontal",
    "to": "/design-system/atoms/card"
  },
  {
    "key": "atoms-Icon",
    "label": "Icon",
    "icon": "Smile",
    "to": "/design-system/atoms/icon"
  },
  {
    "key": "atoms-Input",
    "label": "Input",
    "icon": "Edit",
    "to": "/design-system/atoms/input"
  },
  {
    "key": "atoms-InputSelect",
    "label": "Input Select",
    "icon": "Atom",
    "to": "/design-system/atoms/inputselect"
  },
  {
    "key": "atoms-Logo",
    "label": "Logo",
    "icon": "Image",
    "to": "/design-system/atoms/logo"
  },
  {
    "key": "layouts-section",
    "type": "section",
    "label": "Layouts"
  },
  {
    "key": "layouts-DefaultLayout",
    "label": "Default Layout",
    "icon": "Layout",
    "to": "/design-system/layouts/defaultlayout"
  },
  {
    "key": "molecules-section",
    "type": "section",
    "label": "Molecules"
  },
  {
    "key": "molecules-SearchBox",
    "label": "Search Box",
    "icon": "Search",
    "to": "/design-system/molecules/searchbox"
  },
  {
    "key": "organisms-section",
    "type": "section",
    "label": "Organisms"
  },
  {
    "key": "organisms-DataTable",
    "label": "Data Table",
    "icon": "Table",
    "to": "/design-system/organisms/datatable"
  }
]

// Fonction utilitaire pour obtenir les items d'une section
export function getItemsForSection(sectionName: string): MenuItem[] {
  return generatedMenuItems.filter(item => 
    'to' in item && item.key.startsWith(sectionName + '-')
  ) as MenuItem[]
}

// Dernière mise à jour: 2025-08-07T12:41:21.374Z
