# 🧪 Testing Plan — AI Agent Ecosystem

> Comprehensive testing plan for the AI Agent Ecosystem project.

---

## 📋 Table of Contents

| Section | Description |
|:--------|:------------|
| [🎯 Test Objectives](#-test-objectives) | What we aim to verify |
| [📐 Test Scope](#-test-scope) | What's being tested |
| [🖥️ Test Environments](#️-test-environments) | Where to test |
| [✅ Functional Tests](#-functional-tests) | Feature verification |
| [🔗 Link Validation](#-link-validation) | URL verification |
| [🏷️ Metadata Validation](#-metadata-validation) | YAML structure check |
| [🌐 Internationalization Tests](#-internationalization-tests) | i18n verification |
| [📱 Compatibility Tests](#-compatibility-tests) | Platform compatibility |
| [⚡ Performance Tests](#️-performance-tests) | Load and response time |
| [🛡️ Security Tests](#️-security-tests) | Safety checks |
| [📊 Test Results Template](#-test-results-template) | Reporting format |

---

## 🎯 Test Objectives

### Primary Goals

| # | Objective | Success Criteria |
|:--|:----------|:-----------------|
| 1 | **Functional Verification** | All 57 agents load correctly |
| 2 | **Link Integrity** | All Raw URLs are accessible |
| 3 | **Metadata Consistency** | All YAML blocks are valid |
| 4 | **Cross-Platform** | Works on iOS, Android, Web |
| 5 | **i18n Coverage** | EN/ZH documentation complete |

### Secondary Goals

| # | Objective | Success Criteria |
|:--|:----------|:-----------------|
| 6 | **Response Time** | Agents respond within 5 seconds |
| 7 | **Content Quality** | All prompts are coherent |
| 8 | **Template Compliance** | All files follow templates |

---

## 📐 Test Scope

### In Scope

| Category | Items | Count |
|:---------|:------|:-----|
| **Agents** | All agent files | 57 |
| **Templates** | All template files | 3 |
| **Documentation** | README, guides | 10+ |
| **Metadata** | YAML validation | All agents |

### Out of Scope

| Item | Reason |
|:-----|:-------|
| AI model behavior | Not controllable |
| Network latency | Environment dependent |
| Third-party services | External dependencies |

---

## 🖥️ Test Environments

### Supported Platforms

| Platform | Browser | Version | Priority |
|:---------|:--------|:--------|:---------|
| **iOS** | Safari | 16+ | 🔴 High |
| **Android** | Chrome | 112+ | 🔴 High |
| **Web** | Chrome | Latest | 🔴 High |
| **Web** | Firefox | Latest | 🟡 Medium |
| **Web** | Edge | Latest | 🟡 Medium |

### Test Scenarios

| Scenario | Environment | Frequency |
|:---------|:------------|:---------|
| Fresh clone | Clean environment | Per PR |
| Modified files | Changed files only | Per commit |
| Full suite | All files | Weekly |

---

## ✅ Functional Tests

### Test Case 1: Agent File Loading

```markdown
## TC-001: Agent File Loading

**Objective:** Verify each agent file can be read

**Steps:**
1. Clone repository
2. Navigate to agents directory
3. Open each .md file
4. Verify file is not empty
5. Verify file contains YAML header

**Expected Result:**
- All 57 files readable
- All files have YAML metadata block
- No corrupted files

**Status:** ⏳ Pending
```

### Test Case 2: YAML Metadata Validation

```markdown
## TC-002: YAML Metadata Structure

**Required Fields:**
- agent_id (string, unique)
- category (string, matches directory)
- language (string: zh/en)
- description (string, 1-2 sentences)
- best_for (string, use cases)
- activation_prompt (string, with placeholder)

**Validation Script:**
```bash
# Pseudo-code for validation
for each .md file:
    extract yaml block between ```yaml and ```
    verify all required fields exist
    verify agent_id matches filename
    verify category matches parent directory
    verify no placeholder text remaining
```

**Status:** ⏳ Pending
```

### Test Case 3: Agent Content Verification

```markdown
## TC-003: Agent Content Quality

**Required Sections (per template):**
- Role / Identity
- Core Mission
- Core Strengths / Capabilities
- Personality / Style
- Task Handling Method
- Output Style
- Boundaries / Constraints

**Verification:**
```bash
for each .md file:
    for each required section:
        verify section header exists
        verify section has content
```

**Status:** ⏳ Pending
```

---

## 🔗 Link Validation

### Test Case 4: Raw URL Format

```markdown
## TC-004: Raw URL Placeholder Replacement

**Issue:** Previously used `[Raw链接]` placeholder

**Current Format:** `{RAW_URL}`

**Verification:**
```bash
# Check no old placeholders remain
grep -r "\[Raw链接\]" agents/

# Verify new format exists
grep -r "{RAW_URL}" agents/

# Expected: 0 old, 57+ new occurrences
```

**Status:** ✅ Fixed (57 files updated)
```

### Test Case 5: GitHub Raw URL Pattern

```markdown
## TC-005: GitHub Raw URL Construction

**URL Pattern:**
```
https://raw.githubusercontent.com/badhope/mobile-skills/main/agents/{category}/{filename}
```

**Test Cases:**
| Category | Filename | Expected URL |
|:---------|:---------|:-------------|
| functional | smart-planner.md | .../functional/smart-planner.md |
| healthcare | medical-advisor.md | .../healthcare/medical-advisor.md |
| entertainment-character | kaguya.md | .../entertainment-character/kaguya.md |

**Verification:**
```bash
# Verify URL format in activation_prompt
# User should replace {RAW_URL} with actual URL
```

**Status:** ⏳ Pending (User action required)
```

### Test Case 6: Internal Link Validation

```markdown
## TC-006: Cross-Reference Links

**Check Links In:**
- README.md
- README.zh-CN.md
- CONTRIBUTING.md
- docs/*.md

**Validation:**
```bash
# Find all markdown links
grep -r "\[.*\](.*\.md)" .

# Verify linked files exist
for each link:
    if link starts with . or /:
        verify target file exists
```

**Status:** ⏳ Pending
```

---

## 🏷️ Metadata Validation

### Test Case 7: Category-Directory Matching

```markdown
## TC-007: Category Field Consistency

**Rule:** The `category` field must match the directory containing the file.

**Examples:**
| File Path | category value | Match? |
|:----------|:---------------|:-------|
| agents/functional/smart-planner.md | functional | ✅ |
| agents/healthcare/medical-advisor.md | healthcare | ✅ |
| agents/entertainment-character/kaguya.md | entertainment-character | ✅ |

**Verification:**
```bash
for each .md file in agents/:
    get parent directory name
    extract category from yaml
    if parent != category:
        REPORT MISMATCH
```

**Status:** ⏳ Pending
```

### Test Case 8: Agent ID Uniqueness

```markdown
## TC-008: Agent ID Duplication Check

**Rule:** Each agent_id must be unique across all agents.

**Verification:**
```bash
# Extract all agent_ids
grep -rh "^agent_id:" agents/ | sort

# Check for duplicates
if duplicate found:
    REPORT ERROR
```

**Status:** ⏳ Pending
```

---

## 🌐 Internationalization Tests

### Test Case 9: README Language Coverage

```markdown
## TC-009: i18n Completeness

**Required Files:**
| File | Language | Status |
|:-----|:---------|:-------|
| README.md | English | ✅ Primary |
| README.zh-CN.md | Chinese | ✅ Complete |

**Verification Checklist:**
- [ ] All agent listings translated
- [ ] All section headers translated
- [ ] All navigation links work
- [ ] Language toggle functions

**Status:** ✅ Complete
```

### Test Case 10: Template Language Consistency

```markdown
## TC-010: Template Translation

**Template Files:**
- templates/role-template.md
- templates/professional-role-template.md
- templates/character-role-template.md

**Note:** Templates use Chinese as primary language.

**Verification:**
- [ ] Placeholder text is language-agnostic
- [ ] Examples are clear for both EN/ZH users

**Status:** ✅ Acceptable
```

---

## 📱 Compatibility Tests

### Test Case 11: Mobile Rendering

```markdown
## TC-011: Mobile UI Compatibility

**Test Devices:**
| Device | Resolution | Browser |
|:-------|:-----------|:--------|
| iPhone 14 | 1170x2532 | Safari |
| Pixel 7 | 1080x2400 | Chrome |
| iPad Pro | 1024x1366 | Safari |

**Test Content:**
- README.md rendering
- Agent listings
- Table formatting
- Code blocks

**Expected:** No horizontal overflow, readable text

**Status:** ⏳ Pending
```

### Test Case 12: Dark Mode

```markdown
## TC-012: Dark Mode Compatibility

**Check:**
- [ ] Emoji render in dark mode
- [ ] Code blocks have proper contrast
- [ ] Links are visible
- [ ] Tables are readable

**Status:** ⏳ Pending
```

---

## ⚡ Performance Tests

### Test Case 13: Repository Clone Time

```markdown
## TC-013: Clone Performance

**Metric:** Time to clone repository

**Test Command:**
```bash
time git clone https://github.com/badhope/mobile-skills.git
```

**Baseline:** < 30 seconds on broadband

**Status:** ⏳ Pending
```

### Test Case 14: File Search Performance

```markdown
## TC-014: Search Performance

**Test:** Finding all agents by category

**Command:**
```bash
find agents -name "*.md" | wc -l
```

**Expected:** 57 files found

**Status:** ✅ Verified (57 agents)
```

---

## 🛡️ Security Tests

### Test Case 15: No Sensitive Data

```markdown
## TC-015: Security Scan

**Checks:**
- [ ] No API keys in repository
- [ ] No passwords or secrets
- [ ] No personal information
- [ ] No sensitive environment variables

**Tools:**
```bash
# Scan for common secrets
git log --all --full-history -S "API_KEY"
git log --all --full-history -S "password"

# Check for .env files
find . -name ".env"
```

**Status:** ⏳ Pending
```

### Test Case 16: License Compliance

```markdown
## TC-016: License Verification

**File:** LICENSE (MIT)

**Checks:**
- [ ] License file present
- [ ] Copyright year correct (2026)
- [ ] Copyright holder correct (badhope)
- [ ] MIT license text complete

**Status:** ✅ Verified
```

---

## 📊 Test Results Template

### Individual Test Report

```markdown
## Test Report: [Test ID]

| Field | Value |
|:------|:------|
| **Test ID** | TC-XXX |
| **Test Name** | [Name] |
| **Executed By** | [Name] |
| **Date** | YYYY-MM-DD |
| **Result** | ✅ PASS / ❌ FAIL / ⚠️ WARNING |
| **Duration** | Xm Xs |

### Findings
[List any issues found]

### Evidence
[Screenshots, logs, etc.]

### Recommendations
[Any suggested fixes]
```

### Summary Report

```markdown
## 📊 Test Summary

| Metric | Value |
|:-------|:------|
| Total Tests | XX |
| Passed | XX |
| Failed | XX |
| Warnings | XX |
| Pass Rate | XX% |

### Critical Issues
[List any blocking issues]

### Next Steps
[Actions required]
```

---

## 🚀 Quick Test Commands

### Run All Checks

```bash
# 1. Verify file count
find agents -name "*.md" | wc -l  # Expected: 57

# 2. Check for old placeholders
grep -r "\[Raw链接\]" agents/  # Expected: no output

# 3. Check for new placeholders
grep -r "{RAW_URL}" agents/ | wc -l  # Expected: 57+

# 4. Verify YAML blocks
grep -l "```yaml" agents/*/*.md | wc -l  # Expected: 57

# 5. Check category consistency
# (Requires script execution)
```

### Pre-PR Checklist

- [ ] All agent files have valid YAML
- [ ] No `[Raw链接]` placeholders remain
- [ ] `{RAW_URL}` placeholders present
- [ ] Category fields match directories
- [ ] Agent IDs are unique
- [ ] README updated (if adding agents)
- [ ] Tests pass locally

---

## 📅 Test Schedule

| Phase | Description | Frequency |
|:------|:------------|:----------|
| **CI/CD** | Automated checks on PR | Per PR |
| **Weekly** | Full test suite | Weekly |
| **Release** | Complete validation | Per release |

---

<p align="center">

**🧪 This testing plan ensures quality and reliability.**

*Last Updated: 2026-03-23*

</p>