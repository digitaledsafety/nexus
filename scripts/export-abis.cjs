(async () => {
    try {
        const { syncRootConfigWithDeployments } = await import('./loader.js');
        const targetPath = syncRootConfigWithDeployments();
        console.log(`[export-abis] Successfully synced root configuration at ${targetPath}`);
    } catch (e) {
        console.error('[export-abis] Error generating config:', e);
        process.exit(1);
    }
})();
