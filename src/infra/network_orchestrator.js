/**
 * VaPiNe Network Orchestrator
 * Secure P2P Mesh & VPN Integration
 */

const VPNManager = require('../../../master_software/src/core/vpn_manager');

class VaPiNeNetwork {
    constructor() {
        this.vpn = VPNManager;
        this.meshStatus = 'searching';
    }

    /**
     * Integrates the Master VPN logic into VaPiNe mesh
     */
    async establishConnection(peerId) {
        console.log(`[VaPiNe] Routing secure tunnel to peer: ${peerId}`);
        return this.vpn.createTunnel(peerId);
    }
}

module.exports = new VaPiNeNetwork();
