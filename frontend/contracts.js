// Shim: CONTRACT_DATA is consolidated in window.APP_CONFIG inside config.js
const CONTRACT_DATA = (typeof window !== 'undefined' && window.APP_CONFIG) ? window.APP_CONFIG : (typeof module !== 'undefined' && module.exports ? module.exports : {});
if (typeof window !== 'undefined') window.CONTRACT_DATA = CONTRACT_DATA;
if (typeof module !== 'undefined' && module.exports) module.exports = CONTRACT_DATA;
