---
"@club-employes/utopia": patch
---

fix: Update BalanceCardGroup interface and logic

- Change `spentAmount` to `amount` (remaining amount) in BalanceCardData interface
- Update progress bar calculation to show remaining amount percentage
- Fix component display logic to show remaining amount instead of spent amount
- Update documentation and examples to reflect new interface
- Added proper singular/plural handling for campaign count
- Fixed TypeScript errors related to grouped variant references
