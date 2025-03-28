
document.addEventListener('DOMContentLoaded', () => {
    const sensorStatus = document.getElementById('sensor-status');
    const proximityAlert = document.getElementById('proximity-alert');

    // Simulate sensor activation
    sensorStatus.textContent = 'Sensor Status: Active';

    // Simulate proximity detection
    setInterval(() => {
        let detected = Math.random() > 0.5; // Random detection
        if (detected) {
            proximityAlert.textContent = 'Threat detected!';
            proximityAlert.classList.add('alert');
        } else {
            proximityAlert.textContent = 'No threat detected';
            proximityAlert.classList.remove('alert');
        }
    }, 2000);
});
