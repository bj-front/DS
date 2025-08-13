---
"@club-employes/utopia": minor
---

Improve mobile experience and touch interactions

- **Mobile Responsiveness**: Reduced paddings across all website pages for better mobile UX
  - HomePage, ColorsPage, LogosPage, PresentationPage, SpacingPage, IconsPage now have optimized mobile paddings
  - DefaultLayout main content padding reduced for mobile (768px: spacing-4, 480px: spacing-2)
  - ComponentLayout optimized for mobile (768px: spacing-2, 480px: spacing-1)

- **Touch Interactions**: Fixed mobile touch highlight issues
  - Removed webkit-tap-highlight-color artifacts on all interactive elements
  - Fixed mobile zoom issues on iOS by setting font-size: 16px on inputs
  - Improved touch experience for Button, Input, Checkbox, and navigation elements
  - Added comprehensive mobile-specific CSS resets in global styles

- **Technical Improvements**: 
  - Added missing release script in utopia package.json for proper CI/CD
  - Enhanced responsive design across all major design system pages
