Bleacon = require('bleacon');
const uuid = 'b9407f30f5f8466eaff925556b57fe6d';

Bleacon.startScanning(uuid);
Bleacon.on('discover', function(bleacon) {
   console.log(JSON.stringify(bleacon));
});