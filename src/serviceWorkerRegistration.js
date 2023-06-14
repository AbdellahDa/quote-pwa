// Check if service workers are supported in the browser
if ('serviceWorker' in navigator) {
    // Wait until the page is fully loaded
    window.addEventListener('load', async () => {
        try {
            // Register the service worker
            const registration = await navigator.serviceWorker.register('/service-worker.js');
            console.log('Service Worker registered:', registration);
        } catch (error) {
            console.error('Error registering the Service Worker:', error);
        }
    });
}
