#!/bin/bash
# Script pour créer rapidement un changeset intelligent

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}🎯 Quick Changeset Creator${NC}"

# Analyser les changements depuis main
COMPONENT_CHANGES=$(git diff --name-only origin/main...HEAD | grep -E "packages/utopia/src/components/" | wc -l)
TOKEN_CHANGES=$(git diff --name-only origin/main...HEAD | grep -E "packages/utopia/src/tokens/" | wc -l)
NEW_COMPONENTS=$(git diff --name-only --diff-filter=A origin/main...HEAD | grep -E "packages/utopia/src/components/.*\.vue$" | grep -v "demo/" | wc -l)

echo -e "${YELLOW}📊 Analysis:${NC}"
echo "- Components changed: $COMPONENT_CHANGES"
echo "- Tokens changed: $TOKEN_CHANGES"
echo "- New components: $NEW_COMPONENTS"

# Déterminer le type de changeset
if [ "$NEW_COMPONENTS" -gt 0 ]; then
    TYPE="minor"
    DESC="Add new component(s)"
elif [ "$COMPONENT_CHANGES" -gt 0 ] || [ "$TOKEN_CHANGES" -gt 0 ]; then
    TYPE="minor"
    DESC="Update components and tokens"
else
    TYPE="patch"
    DESC="General updates"
fi

echo -e "${BLUE}📝 Recommended: $TYPE - $DESC${NC}"

# Demander confirmation
read -p "Create changeset? (y/n): " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Créer le changeset
    CHANGESET_FILE=".changeset/auto-$(date +%s).md"
    
    cat > "$CHANGESET_FILE" << EOF
---
"@club-employes/utopia": $TYPE
---

$DESC

- Components changed: $COMPONENT_CHANGES
- Tokens changed: $TOKEN_CHANGES
- New components: $NEW_COMPONENTS
EOF

    echo -e "${GREEN}✅ Changeset created: $CHANGESET_FILE${NC}"
    
    # Ajouter et committer
    git add "$CHANGESET_FILE"
    git commit -m "chore: add changeset for $DESC"
    
    echo -e "${GREEN}✅ Changeset committed!${NC}"
    echo -e "${BLUE}📤 Ready to push: git push${NC}"
else
    echo -e "${YELLOW}⏭️  Skipped changeset creation${NC}"
fi