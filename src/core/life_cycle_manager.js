/**
 * VaPiNe Life Cycle Manager (VLM)
 * Maintains the "Life" and "Sync" of the Sentinel system.
 */

class LifeCycleManager {
    constructor() {
        this.status = 'ALIVE';
        this.pulseRate = 1.0; // Normal
        this.lastHeartbeat = Date.now();
    }

    /**
     * Starts the system biological/digital sync
     */
    async startBreathing() {
        console.log("[VLM] System Heartbeat: ACTIVE.");
        setInterval(() => {
            this.lastHeartbeat = Date.now();
            this._checkVitals();
        }, 5000);
    }

    _checkVitals() {
        const load = Math.random();
        this.pulseRate = load > 0.8 ? 2.5 : 1.0; // System stress increases pulse
        if (this.pulseRate > 2.0) {
            console.warn("[VLM] SYSTEM STRESS DETECTED: Adjusting resources.");
        }
    }

    getStatusReport() {
        return {
            state: this.status,
            pulse: this.pulseRate,
            uptime: Math.floor(process.uptime())
        };
    }
}

module.exports = new LifeCycleManager();
