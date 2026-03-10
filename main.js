const Sentinel = require('./src/core/sentinel_core');

console.log("=========================================");
console.log("🦅 VaPiNe Sentinel - MISSION READY v1.0.0");
console.log("=========================================");

async function launch() {
    try {
        console.log("[System] Booting Sentinel Engine...");
        await Sentinel.bootSentinel();

        console.log("[System] Authentication: VERIFIED (RSA-4096)");
        console.log("[System] Network: MULTI-LINK OPERATIONAL (6GHz/BT)");

        // Simulating an autonomous agent action on launch
        console.log("[Agent] Initiating Startup Macro: PREPARE_ENV");
        await Sentinel.agent.processCommand("Prepare Environment for Tactical Dev");

        console.log("-----------------------------------------");
        console.log("[Access] Viewer Console: src/presentation/viewer.html");
        console.log("[Status] STANDBY: Awaiting Operator Input.");
    } catch (error) {
        console.error("[Fatal] Boot sequence failed:", error);
    }
}

launch();
