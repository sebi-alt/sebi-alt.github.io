
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
} else {
    message(content.service_worker)
};

const message = (msg) => {
    //code for message
}