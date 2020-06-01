var lang = navigator.language;
var content = {};
lang = lang.toLocaleLowerCase();
lang = lang.split('-')[0];
switch (lang) {
    case 'de':
        content = {
            service_worker: "Ihr Computer unterstützt keine Service Worker. Die Seite funktioniert daher nicht ordnungsgemäß."
        }
        break;
    default: //en
    content = {
        service_worker: "Your machine does not support serice workers. Therefore, the site is not working properly."
    }
        break;
}

