// ==========================
// Privacy & Security Enhancements
// ==========================

user_pref("privacy.resistFingerprinting", true);  // Resist browser fingerprinting
user_pref("privacy.firstparty.isolate", true);  // Enforce first-party isolation
user_pref("privacy.trackingprotection.enabled", true);  // Enable Tracking Protection
user_pref("network.cookie.cookieBehavior", 1);  // Block third-party cookies
user_pref("network.cookie.lifetimePolicy", 2);  // Session cookies only
user_pref("privacy.donottrackheader.enabled", true);  // Enable Do Not Track header
user_pref("network.idle.period", 60);  // Reduce the idle timeout to 60 seconds
user_pref("dom.security.https_only_mode", true);  // Force HTTPS everywhere
user_pref("security.tls.version.min", 3);  // Force TLS 1.2 or higher
user_pref("security.tls.version.max", 4);  // Enforce TLS 1.3

// =====================
// Block WebRTC & Geolocation
// =====================

user_pref("media.peerconnection.enabled", false);  // Disable WebRTC
user_pref("geo.enabled", false);  // Disable geolocation

// ==========================
// Fingerprinting Protection
// ==========================

user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);  // Block addons fingerprinting
user_pref("privacy.resistFingerprinting.letterboxing", true);  // Prevent screen size fingerprinting
user_pref("webgl.disabled", true);  // Disable WebGL to prevent GPU fingerprinting
user_pref("gfx.webrender.enabled", false);  // Disable WebRender to avoid system fingerprinting

// =========================
// Disable Telemetry & Data Collection
// =========================

user_pref("toolkit.telemetry.enabled", false);  // Disable telemetry
user_pref("toolkit.telemetry.unified", false);  // Disable unified telemetry
user_pref("toolkit.telemetry.server", "");  // Prevent sending telemetry data to Mozilla
user_pref("datareporting.policy.dataSubmissionEnabled", false);  // Disable crash reports
user_pref("datareporting.healthreport.uploadEnabled", false);  // Disable health reporting

// ==========================
// Disable Password Manager
// ==========================

user_pref("signon.rememberSignons", false);  // Disable password saving

// ==========================
// Disable Safe Browsing
// ==========================

user_pref("browser.safebrowsing.enabled", false);  // Disable safe browsing
user_pref("browser.safebrowsing.malware.enabled", false);  // Disable malware protection

// ==========================
// Disabling Sync (if necessary)
// ==========================

user_pref("services.sync.enabled", false);  // Disable sync
user_pref("identity.fxaccounts.enabled", false);  // Disable Firefox accounts

// ==========================
// Miscellaneous
// ==========================

user_pref("browser.startup.homepage", "about:blank");  // Set homepage to blank
user_pref("browser.cache.disk.enable", false);  // Disable disk cache
user_pref("browser.cache.memory.enable", false);  // Disable memory cache
user_pref("browser.download.manager.showWhenStarting", false);  // Hide download manager
user_pref("browser.download.dir", "/mnt/data/firefox_downloads");  // Set download location to persistent storage
user_pref("browser.download.folderList", 2);  // Use custom download location
user_pref("browser.urlbar.suggest.searches", false);  // Disable search suggestions
user_pref("browser.urlbar.suggest.history", false);  // Disable URL history suggestions
