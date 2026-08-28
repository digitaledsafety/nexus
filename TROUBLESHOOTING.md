# Troubleshooting Guide

This guide addresses common environment-specific errors encountered when setting up the brag.charity ecosystem.

## Error: "is not a valid Win32 application" (Hardhat 3 EDR)

If you see an error similar to this when running `npm run node`:
```text
Error: ...\node_modules\@nomicfoundation\edr-win32-x64-msvc\edr.win32-x64-msvc.node is not a valid Win32 application.
```

This is typically caused by a corrupted native binary or an architecture mismatch between your Node.js installation and the Hardhat Ethereum Development Runtime (EDR). This is frequently seen when projects are located in **OneDrive** or other cloud-syncing folders.

### Solution 1: Move the Project out of OneDrive (Recommended)
OneDrive's synchronization can interfere with the thousands of small files in `node_modules` and the loading of native `.node` binaries.

1.  Move your project folder to a location outside of OneDrive (e.g., `C:\Projects\brag.charity`).
2.  Delete the existing `node_modules` and `package-lock.json`.
3.  Run `npm install`.

### Solution 2: Verify Node.js Architecture
Ensure you are using the 64-bit version of Node.js if you are on a 64-bit Windows system.

1.  Open PowerShell or Command Prompt.
2.  Run: `node -p "process.arch"`
3.  If it returns `ia32`, you are using the 32-bit version. Download and install the **64-bit (x64)** version from [nodejs.org](https://nodejs.org/).

### Solution 3: Clean Reinstall of Dependencies
If the above steps don't apply, try a "nuclear" clean:

1.  Delete the `node_modules` folder and `package-lock.json`.
2.  Clean the npm cache: `npm cache clean --force`
3.  Reinstall: `npm install`

## Other Common Issues

### "EADDRINUSE: address already in use 127.0.0.1:8545"
This means another instance of Hardhat or a local Ethereum node is already running.

*   **Windows:** Run `Stop-Process -Id (Get-NetTCPConnection -LocalPort 8545).OwningProcess` in PowerShell (Admin).
*   **Linux/macOS:** Run `lsof -i :8545` to find the PID, then `kill <PID>`.

### "Module not found" or "Cannot find module"
Ensure you have run `npm run deploy:local` at least once, as this generates the contract ABIs and address exports required by the bridge and frontend.
