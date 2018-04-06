Bleacon = require('bleacon');
const uuid = 'b9407f30f5f8466eaff925556b57fe6d';
const major = 3;
const minor = 99;
const measuredPower = -59;

Bleacon.startScanning(uuid);
Bleacon.on('discover', function(bleacon) {
   console.log(JSON.stringify(bleacon));
});
Bleacon.startAdvertising(uuid, major, minor, measuredPower);