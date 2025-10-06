Param(
  [Parameter(Mandatory = $false)]
  [string]$Branch
)

Write-Host "Repo sync starting..." -ForegroundColor Cyan

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path | Split-Path -Parent
Set-Location $repoRoot

# Ensure we're inside a Git repo
git rev-parse --is-inside-work-tree *> $null
if ($LASTEXITCODE -ne 0) {
  Write-Error "Not a git repository: $repoRoot"; exit 1
}

# Detect current branch if not provided
if (-not $Branch -or $Branch -eq '') {
  $Branch = (git rev-parse --abbrev-ref HEAD).Trim()
}

Write-Host "Target branch: $Branch" -ForegroundColor Yellow

# Stash local changes if any
if ((git status --porcelain).Length -gt 0) {
  Write-Host "Stashing local changes..." -ForegroundColor Yellow
  git stash push -u -m "sync-autostash-$(Get-Date -Format o)" | Out-Null
}

Write-Host "Fetching origin..." -ForegroundColor Cyan
git fetch origin --prune

# Create local tracking branch if missing (reliable check)
git show-ref --verify --quiet "refs/heads/$Branch"
$branchExists = ($LASTEXITCODE -eq 0)
if (-not $branchExists) {
  Write-Host "Creating local branch $Branch tracking origin/$Branch" -ForegroundColor Green
  git switch -c $Branch --track "origin/$Branch"
} else {
  git switch $Branch
}

Write-Host "Pulling latest (rebase)..." -ForegroundColor Cyan
git pull --rebase origin $Branch

# Detect dependency file changes
$beforeHash = git rev-parse HEAD~1 2>$null
$changedFiles = git diff --name-only $beforeHash HEAD 2>$null
$depFiles = @("package.json","pnpm-lock.yaml","package-lock.json","yarn.lock")
$needsInstall = $false
foreach ($f in $depFiles) { if ($changedFiles -contains $f) { $needsInstall = $true } }

if ($needsInstall -or -not (Test-Path "node_modules")) {
  if (Get-Command pnpm -ErrorAction SilentlyContinue) {
    Write-Host "Installing deps with pnpm..." -ForegroundColor Cyan
    pnpm install --color always
  } elseif (Get-Command npm -ErrorAction SilentlyContinue) {
    Write-Host "Installing deps with npm..." -ForegroundColor Cyan
    npm i --no-audit --no-fund
  } else {
    Write-Warning "pnpm/npm introuvable. Installez-les et relancez."
  }
}

# Restore stash if any
$stashes = git stash list | Select-String "sync-autostash-"
if ($stashes) {
  Write-Host "Restoring stashed changes..." -ForegroundColor Yellow
  git stash pop
}

Write-Host "Sync complete on branch $Branch" -ForegroundColor Green

