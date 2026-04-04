# Tax Autopilot - Gemini Prompts for Bianca

## How to Use

1. Open **Gemini Advanced** at [gemini.google.com](https://gemini.google.com)
2. Make sure **Gmail** and **Google Drive** extensions are enabled (click the extensions icon)
3. Run each prompt **in the same conversation** so Gemini keeps context
4. Complete Phase 1 before moving to Phase 2, etc.

---

## Phase 1: Document Gathering

> Copy everything below this line and paste into Gemini:

```
You are my tax preparation assistant. I need you to help me find ALL tax-relevant documents for my 2025 tax filing (tax year 2025, January 1 - December 31, 2025).

**STEP 1: Search my Gmail for these document types:**
- W-2 forms from employers
- 1099 forms (1099-NEC, 1099-MISC, 1099-INT, 1099-DIV, 1099-B, 1099-K, 1099-R, 1099-G)
- 1098 forms (mortgage interest, student loan interest, tuition)
- Health insurance forms (1095-A, 1095-B, 1095-C)
- Charitable donation receipts and acknowledgment letters
- Business expense receipts over $75
- Invoices I sent to clients
- Bank and investment account annual statements
- Property tax statements
- Medical/dental expense receipts
- Business mileage logs or fuel receipts
- Home office related bills (internet, utilities)
- Education expense receipts

Search using terms like: "W-2", "1099", "tax form", "annual statement", "invoice", "receipt", "tax document", year:2025, year:2026 (for docs sent in early 2026 about 2025)

**STEP 2: Search my Google Drive for:**
- Any folders named "taxes", "tax 2025", "receipts", "finances", "accounting"
- Spreadsheets with income or expense tracking
- Scanned receipts or PDFs of tax forms
- Any QuickBooks, FreshBooks, or Wave exports

**OUTPUT FORMAT:**
Create a structured summary table with these columns:
| Document | Source (Email/Drive) | Date Found | Status | Notes |

Then list any MISSING documents I should look for, based on common tax situations.

After the search, tell me:
1. Total documents found
2. Categories covered
3. Categories with NO documents (potential gaps)
4. Recommended next steps
```

---

## Phase 2: Analysis & Workbook Creation

> Continue in the **same Gemini conversation** and paste:

```
Now I need you to analyze all the documents we found and create a comprehensive tax workbook. Use the document list from our previous search.

**STEP 1: Extract and categorize all financial data into these categories:**

INCOME:
- W-2 wages (list each employer, gross wages, federal/state tax withheld)
- 1099-NEC / 1099-MISC freelance/contract income (list each payer and amount)
- 1099-INT interest income
- 1099-DIV dividend income (ordinary vs qualified)
- 1099-B capital gains/losses
- 1099-K payment platform income
- Any other income sources

DEDUCTIONS (organize by category):
- Mortgage interest (1098)
- State and local taxes paid (SALT)
- Charitable donations (cash vs non-cash, with recipient names)
- Medical/dental expenses (total)
- Student loan interest (1098-E)
- Business expenses (if self-employed):
  * Home office (square footage method or actual expenses)
  * Equipment and supplies
  * Software and subscriptions
  * Professional services
  * Travel and meals (50% deductible)
  * Mileage (67 cents/mile for 2025)
  * Marketing and advertising
  * Insurance (health, liability, E&O)

CREDITS TO CHECK:
- Child Tax Credit
- Earned Income Credit
- Education credits (American Opportunity, Lifetime Learning)
- Energy efficiency credits
- Estimated tax payments made

**STEP 2: Create a Google Sheets workbook** with these tabs:
1. "Income Summary" - all income by source with totals
2. "Deductions" - all deductions categorized with totals
3. "Receipts Log" - every receipt/invoice with date, vendor, amount, category
4. "Tax Estimates" - rough estimate of taxable income and potential tax owed
5. "Missing Items" - documents or info still needed
6. "Questions for CPA" - edge cases or things I'm unsure about

**STEP 3: Provide a preliminary analysis:**
- Total estimated gross income
- Total estimated deductions
- Standard deduction vs itemized: which is better?
- Estimated taxable income
- Any red flags or audit risk areas
- Estimated quarterly tax payments needed (if self-employed)
```

---

## Phase 3: CPA Handoff Package

> Continue in the **same Gemini conversation** and paste:

```
Now create a complete CPA handoff package. This should be professional, thorough, and save my CPA significant time.

**STEP 1: Create a Google Doc titled "2025 Tax Preparation - CPA Handoff Package" with:**

SECTION 1 - CLIENT OVERVIEW:
- My name and filing status
- Dependents (if any)
- State(s) of residence during 2025
- Any major life changes in 2025 (marriage, home purchase, new business, etc.)

SECTION 2 - INCOME SUMMARY:
- Table of ALL income sources with amounts
- Total gross income
- Note any income that may need special treatment

SECTION 3 - DEDUCTION SUMMARY:
- Standard vs itemized recommendation with amounts
- Detailed breakdown by category
- Supporting document reference for each deduction

SECTION 4 - ESTIMATED TAX POSITION:
- Estimated taxable income
- Estimated federal tax liability
- Estimated state tax liability
- Total withholdings and estimated payments made
- Estimated amount owed or refund expected

SECTION 5 - QUESTIONS AND FLAGS:
- Any items I'm unsure about the tax treatment
- Potential audit risk areas
- Year-over-year changes that may raise flags
- Items where I need CPA guidance

SECTION 6 - DOCUMENT INDEX:
- Numbered list of every document included
- For each: document name, type, what it covers, and file location in Drive

**STEP 2: Create a Google Drive folder structure:**
Bianca Tax 2025 - CPA Package/
  01 - Income Documents/
    W-2s/
    1099s/
    Other Income/
  02 - Deduction Documents/
    Mortgage & Property/
    Charitable/
    Medical/
    Business Expenses/
    Education/
  03 - Tax Forms Received/
  04 - Workbook & Analysis/
  05 - Prior Year Returns (if available)/
  CPA Handoff Summary (the doc from Step 1)

**STEP 3: Move/copy all the documents we found into the appropriate folders.**

**STEP 4: Create a cover email draft** to send to my CPA with:
- Brief intro
- Link to the shared Drive folder
- Summary of what's included
- List of specific questions
- Note about any missing items still being tracked down
- Request for estimated timeline and fees
```

---

## Tips

- **Stay in one conversation** - Gemini builds context across prompts
- **Verify numbers** - Always double-check income totals and large deductions against original documents
- **Privacy** - Gemini with extensions accesses your data within your Google account; nothing is shared externally
- **Timeline** - Plan to start this at least 2-3 weeks before your CPA meeting
- **This is not tax advice** - Always have your CPA review everything before filing
