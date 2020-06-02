if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
} else {
    message(content.service_worker)
};

// lang support
let text_elements = document.querySelectorAll('[text]');
for(let i = 0; i < text_elements.length; i++) {
    text_elements[i].innerHTML = content[text_elements[i].getAttribute('text')];
}
const message = (msg) => {
    //code for message
}