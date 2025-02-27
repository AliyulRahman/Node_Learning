const os = require('os');

exports.getOSProperties = (property, callback) => {
    const properties = {
        platform: os.platform(), // OS platform
        arch: os.arch(), // CPU architecture
        // cpus: os.cpus(), // CPU details
        freeMemory: os.freemem(), // Free memory in bytes
        totalMemory: os.totalmem(), // Total memory in bytes
        homeDir: os.homedir(), // Home directory
        hostName: os.hostname(), // Hostname
        // networkInterfaces: os.networkInterfaces(), // Network details
        release: os.release(), // OS release version
        tmpDir: os.tmpdir(), // Temp directory
        type: os.type(), // OS type
        uptime: os.uptime(), // System uptime in seconds
        // userInfo: os.userInfo(), // Current user info
    };

    if (property) {
        try{
            callback(null, properties[property].toString())
        }
        catch {
            callback("Invalid Property. Please provide proper input", null)
        }
    }
    else {
        callback("Please provide property input", null)
    }
}