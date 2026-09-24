(async () => {
    try {
        const { generateFrontendConfigJS, generateAddonConfigJS } = await import('./loader.js');
        const targetPath = generateFrontendConfigJS();
        generateAddonConfigJS();
        console.log(`[export-abis] Successfully generated central configuration at ${targetPath}`);
    } catch (e) {
        console.error('[export-abis] Error generating config:', e);
        process.exit(1);
    }
})();
