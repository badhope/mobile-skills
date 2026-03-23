# Agent Validation Script - Simplified Version

$ErrorCount = 0
$WarningCount = 0
$SuccessCount = 0

Write-Host ""
Write-Host "========================================" -ForegroundColor Magenta
Write-Host "   AI Agent Ecosystem - Validation      " -ForegroundColor Magenta
Write-Host "========================================" -ForegroundColor Magenta
Write-Host ""

$AgentDir = "c:\Users\X1882\Desktop\mobile-skills\agents"
$AllMdFiles = Get-ChildItem -Path $AgentDir -Filter "*.md" -Recurse

Write-Host "Found $($AllMdFiles.Count) agent files" -ForegroundColor Cyan

Write-Host ""
Write-Host "----------------------------------------" -ForegroundColor DarkGray
Write-Host "TEST 1: Checking for old placeholders..." -ForegroundColor White
Write-Host "----------------------------------------" -ForegroundColor DarkGray

$OldPlaceholderFiles = $AllMdFiles | Where-Object { (Get-Content $_.FullName -Raw) -match '\[Raw链接\]' }
if ($OldPlaceholderFiles.Count -eq 0) {
    Write-Host "PASS: No old [Raw链接] placeholders found" -ForegroundColor Green
    $SuccessCount++
} else {
    Write-Host "FAIL: Found $($OldPlaceholderFiles.Count) files with old placeholders" -ForegroundColor Red
    $ErrorCount++
}

Write-Host ""
Write-Host "----------------------------------------" -ForegroundColor DarkGray
Write-Host "TEST 2: Checking for new placeholders..." -ForegroundColor White
Write-Host "----------------------------------------" -ForegroundColor DarkGray

$NewPlaceholderCount = ($AllMdFiles | Where-Object { (Get-Content $_.FullName -Raw) -match '\{RAW_URL\}' }).Count
if ($NewPlaceholderCount -eq $AllMdFiles.Count) {
    Write-Host "PASS: All $($AllMdFiles.Count) files have {RAW_URL} placeholder" -ForegroundColor Green
    $SuccessCount++
} else {
    Write-Host "WARN: Only $NewPlaceholderCount of $($AllMdFiles.Count) files have {RAW_URL}" -ForegroundColor Yellow
    $WarningCount++
}

Write-Host ""
Write-Host "----------------------------------------" -ForegroundColor DarkGray
Write-Host "TEST 3: Validating YAML blocks exist..." -ForegroundColor White
Write-Host "----------------------------------------" -ForegroundColor DarkGray

$FilesWithYaml = $AllMdFiles | Where-Object { (Get-Content $_.FullName -Raw) -match '```yaml' }
if ($FilesWithYaml.Count -eq $AllMdFiles.Count) {
    Write-Host "PASS: All files have YAML metadata blocks" -ForegroundColor Green
    $SuccessCount++
} else {
    Write-Host "FAIL: Only $FilesWithYaml of $($AllMdFiles.Count) files have YAML blocks" -ForegroundColor Red
    $ErrorCount++
}

Write-Host ""
Write-Host "----------------------------------------" -ForegroundColor DarkGray
Write-Host "TEST 4: Checking for required content..." -ForegroundColor White
Write-Host "----------------------------------------" -ForegroundColor DarkGray

$ContentIssueFiles = @()
foreach ($File in $AllMdFiles) {
    $Content = Get-Content $File.FullName -Raw
    $Issues = @()

    if ($Content.Length -lt 500) { $Issues += "Content too short" }
    if (-not ($Content -match "## ")) { $Issues += "No section headers" }
    if (-not ($Content -match "```yaml")) { $Issues += "No YAML block" }

    if ($Issues.Count -gt 0) {
        $ContentIssueFiles += [PSCustomObject]@{ File = $File.Name; Issues = $Issues -join "; " }
    }
}

if ($ContentIssueFiles.Count -eq 0) {
    Write-Host "PASS: All files have sufficient content" -ForegroundColor Green
    $SuccessCount++
} else {
    Write-Host "WARN: $($ContentIssueFiles.Count) files have content issues" -ForegroundColor Yellow
    $WarningCount++
}

Write-Host ""
Write-Host "----------------------------------------" -ForegroundColor DarkGray
Write-Host "TEST 5: Checking agent_id uniqueness..." -ForegroundColor White
Write-Host "----------------------------------------" -ForegroundColor DarkGray

$AgentIds = @{}
$DuplicateIds = @()

foreach ($File in $AllMdFiles) {
    $Content = Get-Content $File.FullName -Raw
    if ($Content -match 'agent_id:\s*(\S+)') {
        $AgentId = $Matches[1]
        if ($AgentIds.ContainsKey($AgentId)) {
            $DuplicateIds += $AgentId
        } else {
            $AgentIds[$AgentId] = $File.Name
        }
    }
}

if ($DuplicateIds.Count -eq 0) {
    Write-Host "PASS: All agent IDs are unique ($($AgentIds.Count) total)" -ForegroundColor Green
    $SuccessCount++
} else {
    Write-Host "FAIL: Found $($DuplicateIds.Count) duplicate agent IDs: $($DuplicateIds -join ', ')" -ForegroundColor Red
    $ErrorCount++
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Magenta
Write-Host "              SUMMARY                   " -ForegroundColor Magenta
Write-Host "========================================" -ForegroundColor Magenta
Write-Host ""
Write-Host "  Files Tested:  $($AllMdFiles.Count)" -ForegroundColor White
Write-Host "  PASSED:       $SuccessCount" -ForegroundColor Green
Write-Host "  WARNINGS:     $WarningCount" -ForegroundColor Yellow
Write-Host "  FAILURES:     $ErrorCount" -ForegroundColor Red
Write-Host ""

if ($ErrorCount -eq 0) {
    Write-Host "All critical tests passed!" -ForegroundColor Green
    exit 0
} else {
    Write-Host "Some tests failed. Please review." -ForegroundColor Red
    exit 1
}