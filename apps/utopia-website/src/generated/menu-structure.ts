// Ce fichier est généré automatiquement par generate-menu.js
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
    "type": "section",
    "name": "atoms",
    "label": "Atoms",
    "path": "atoms",
    "children": [
      {
        "type": "component",
        "name": "Badge",
        "label": "Badge",
        "path": "atoms/Badge"
      },
      {
        "type": "component",
        "name": "Button",
        "label": "Button",
        "path": "atoms/Button"
      },
      {
        "type": "component",
        "name": "Card",
        "label": "Card",
        "path": "atoms/Card"
      },
      {
        "type": "component",
        "name": "Icon",
        "label": "Icon",
        "path": "atoms/Icon"
      },
      {
        "type": "component",
        "name": "Input",
        "label": "Input",
        "path": "atoms/Input"
      },
      {
        "type": "component",
        "name": "InputSelect",
        "label": "Input Select",
        "path": "atoms/InputSelect"
      },
      {
        "type": "component",
        "name": "Logo",
        "label": "Logo",
        "path": "atoms/Logo"
      }
    ]
  },
  {
    "type": "component",
    "name": "demo",
    "label": "Demo",
    "path": "demo"
  },
  {
    "type": "section",
    "name": "layouts",
    "label": "Layouts",
    "path": "layouts",
    "children": [
      {
        "type": "section",
        "name": "DefaultLayout",
        "label": "Default Layout",
        "path": "layouts/DefaultLayout",
        "children": [
          {
            "type": "component",
            "name": "components",
            "label": "Components",
            "path": "layouts/DefaultLayout/components"
          }
        ]
      }
    ]
  },
  {
    "type": "section",
    "name": "molecules",
    "label": "Molecules",
    "path": "molecules",
    "children": [
      {
        "type": "component",
        "name": "SearchBox",
        "label": "Search Box",
        "path": "molecules/SearchBox"
      }
    ]
  },
  {
    "type": "section",
    "name": "organisms",
    "label": "Organisms",
    "path": "organisms",
    "children": [
      {
        "type": "component",
        "name": "DataTable",
        "label": "Data Table",
        "path": "organisms/DataTable"
      }
    ]
  },
  {
    "type": "component",
    "name": "pages",
    "label": "Pages",
    "path": "pages"
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
    "icon": "Component",
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
    "icon": "Component",
    "to": "/design-system/atoms/input"
  },
  {
    "key": "atoms-InputSelect",
    "label": "Input Select",
    "icon": "Component",
    "to": "/design-system/atoms/inputselect"
  },
  {
    "key": "atoms-Logo",
    "label": "Logo",
    "icon": "Image",
    "to": "/design-system/atoms/logo"
  },
  {
    "key": "demo",
    "label": "Demo",
    "icon": "Component",
    "to": "/design-system/root/demo"
  },
  {
    "key": "layouts-section",
    "type": "section",
    "label": "Layouts"
  },
  {
    "key": "molecules-section",
    "type": "section",
    "label": "Molecules"
  },
  {
    "key": "molecules-SearchBox",
    "label": "Search Box",
    "icon": "Component",
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
    "icon": "Component",
    "to": "/design-system/organisms/datatable"
  },
  {
    "key": "pages",
    "label": "Pages",
    "icon": "Component",
    "to": "/design-system/root/pages"
  }
]

// Fonction utilitaire pour obtenir les items d'une section
export function getItemsForSection(sectionName: string): MenuItem[] {
  return generatedMenuItems.filter(item => 
    'to' in item && item.key.startsWith(sectionName + '-')
  ) as MenuItem[]
}

// Dernière mise à jour: 2025-08-08T13:40:09.336Z
