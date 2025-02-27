const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
    // Master process
    console.log(`Master process ${process.pid} is running`);

    // Get the number of CPU cores
    const numCPUs = os.cpus().length;

    // Fork worker processes equal to the number of CPU cores
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Restart workers if they die
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Starting a new one...`);
        cluster.fork();
    });
} else {
    // Worker process (Each worker runs its own instance of the server)
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Worker ${process.pid} handled the request`);
    }).listen(3000);

    console.log(`Worker ${process.pid} started`);
}