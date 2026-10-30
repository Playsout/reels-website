param(
    [string]$Version = (Get-Date -Format "yyyyMMdd")
)

$ErrorActionPreference = "Stop"

$siteRoot = $PSScriptRoot
$distRoot = Join-Path $siteRoot "dist"
$packageName = "reelsbuddy-site-$Version"
$stageRoot = Join-Path $distRoot $packageName
$archivePath = Join-Path $distRoot "$packageName.zip"
$checksumPath = Join-Path $distRoot "$packageName.sha256"

$runtimeFiles = @(
    "index.html",
    "privacy.html",
    "terms.html",
    "styles.css",
    "legal.css",
    "app.js",
    "legal.js",
    "site-config.js",
    "site.webmanifest",
    "robots.txt",
    "sitemap.xml",
    "_headers"
)

$runtimeDirectories = @(
    "assets",
    "deploy"
)

foreach ($file in $runtimeFiles) {
    if (-not (Test-Path -LiteralPath (Join-Path $siteRoot $file) -PathType Leaf)) {
        throw "Required release file is missing: $file"
    }
}

foreach ($directory in $runtimeDirectories) {
    if (-not (Test-Path -LiteralPath (Join-Path $siteRoot $directory) -PathType Container)) {
        throw "Required release directory is missing: $directory"
    }
}

New-Item -ItemType Directory -Path $distRoot -Force | Out-Null
$resolvedDistRoot = (Resolve-Path -LiteralPath $distRoot).Path
$resolvedSiteRoot = (Resolve-Path -LiteralPath $siteRoot).Path
if (-not $resolvedDistRoot.StartsWith($resolvedSiteRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Release output must stay inside the web-site directory."
}

if (Test-Path -LiteralPath $stageRoot) {
    Remove-Item -LiteralPath $stageRoot -Recurse -Force
}
if (Test-Path -LiteralPath $archivePath) {
    Remove-Item -LiteralPath $archivePath -Force
}
if (Test-Path -LiteralPath $checksumPath) {
    Remove-Item -LiteralPath $checksumPath -Force
}

New-Item -ItemType Directory -Path $stageRoot -Force | Out-Null

foreach ($file in $runtimeFiles) {
    Copy-Item -LiteralPath (Join-Path $siteRoot $file) -Destination $stageRoot
}

foreach ($directory in $runtimeDirectories) {
    Copy-Item -LiteralPath (Join-Path $siteRoot $directory) -Destination $stageRoot -Recurse
}

Compress-Archive -Path (Join-Path $stageRoot "*") -DestinationPath $archivePath -CompressionLevel Optimal

$hash = Get-FileHash -LiteralPath $archivePath -Algorithm SHA256
$checksumLine = "{0}  {1}" -f $hash.Hash.ToLowerInvariant(), (Split-Path $archivePath -Leaf)
Set-Content -LiteralPath $checksumPath -Value $checksumLine -Encoding ascii

$fileCount = (Get-ChildItem -LiteralPath $stageRoot -File -Recurse).Count
$byteCount = (Get-ChildItem -LiteralPath $stageRoot -File -Recurse | Measure-Object -Property Length -Sum).Sum

Write-Output "Release directory: $stageRoot"
Write-Output "Release archive:   $archivePath"
Write-Output "Checksum file:     $checksumPath"
Write-Output "Files:             $fileCount"
Write-Output "Uncompressed bytes: $byteCount"
Write-Output "SHA-256:           $($hash.Hash.ToLowerInvariant())"
