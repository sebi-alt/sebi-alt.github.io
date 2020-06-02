if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
} else {
    message(content.service_worker)
};
let btn = document.getElementById('a');
btn.addEventListener('click', async () => {
    try {
        await navigator.share(shareData)
        console.log('a');
    } catch (err) {
        console.log(err);
    }
});

// lang support
let text_elements = document.querySelectorAll('[text]');
for (let i = 0; i < text_elements.length; i++) {
    if (content[text_elements[i].getAttribute('text')] != undefined) {
        text_elements[i].innerHTML = content[text_elements[i].getAttribute('text')];
    }
}

const message = (msg) => {
    //code for message
}