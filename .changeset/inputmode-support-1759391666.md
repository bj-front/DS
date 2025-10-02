---
"@club-employes/utopia": minor
---

Add inputmode prop support to InputCode and InputText components

- Add `inputmode` prop to InputCode component for better mobile keyboard control
- Add `inputmode` prop to InputText component with automatic fallback
- Fix InputCode to properly pass maxlength to InputText
- Improve type="number" handling with maxlength by using type="text" + inputmode="numeric"
