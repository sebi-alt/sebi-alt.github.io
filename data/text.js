var lang = navigator.language;
var content = {};
lang = lang.toLocaleLowerCase();
lang = lang.split('-')[0];
console.log(lang);
switch (lang) {
    case 'de':
        content = {
            service_worker: "Ihr Computer unterstützt keine Service Worker. Die Seite funktioniert daher nicht ordnungsgemäß.",
            music: "Musik",
            programming: "Software",
            about: "Über",
        }
        break;
    default: //en
        content = {
            service_worker: "Your machine does not support serice workers. Therefore, the site is not working properly.",
            music: "Music",
            programming: "Software",
            about: "About",
        }
        break;
}

