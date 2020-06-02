var lang = navigator.language;
var content = {};
lang = lang.toLocaleLowerCase();
lang = lang.split('-')[0];
switch (lang) {
    case 'de':
        content = {
            service_worker: "Ihr Computer unterstützt keine Service Worker. Die Seite funktioniert daher nicht ordnungsgemäß.",
            music: "Musik",
            programming: "Software",
            notes: "Noten",
            about: "Über",
            home: "Home",
            home_h2: "Lorem ipsum dolor",
            home_p: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis venenatis ipsum. Donec a iaculis felis, commodo vulputate elit. Pellentesque mi libero, elementum eget posuere quis, vestibulum sed turpis. Aliquam vel est sit amet dolor posuere rutrum. Morbi sed purus ac est pulvinar aliquet. In mollis orci et eros vestibulum commodo. Curabitur suscipit risus quis magna suscipit, a scelerisque odio auctor. Suspendisse eu facilisis risus. Nunc hendrerit venenatis molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vitae sagittis nisi. Sed eu iaculis velit.Ut massa risus, ornare vel elit eu, rhoncus efficitur ex.Curabitur sodales congue lorem, id pulvinar velit porttitor ac.Quisque vitae dui sit amet felis convallis laoreet.Vestibulum dictum commodo nibh, sed venenatis mi ornare id.Suspendisse aliquet faucibus elit, consequat facilisis ipsum malesuada eget.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus ornare erat quis tortor euismod, molestie varius felis tempus.Nullam vestibulum dolor ut bibendum semper.Aliquam erat volutpat.Sed eget mauris sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed dictum blandit mauris ut lobortis.Nunc eget euismod tortor.Donec blandit, neque ac pellentesque faucibus, neque dolor porta lectus, et rhoncus velit nibh at urna.Aliquam id urna faucibus, venenatis nibh id, tempor eros.Sed semper condimentum purus aliquet molestie.Aliquam sed nunc erat.Etiam rutrum vitae leo vitae mattis.In gravida interdum ipsum sed feugiat.Vestibulum nec blandit leo.Nunc non sapien a nunc imperdiet iaculis.Vestibulum eget hendrerit neque, et tempor dui.Aliquam ultrices nunc ac magna suscipit, vitae placerat turpis posuere.Duis vitae nisi dignissim, tempus tellus eleifend, efficitur neque.Integer ut blandit nisi, ac vehicula est.Curabitur laoreet nunc sed volutpat semper.Vestibulum eleifend, nisl vitae pharetra rutrum, dui arcu porta enim, sed feugiat nisi tortor vitae dui.Nullam hendrerit porttitor lacinia.Nullam vel nibh vel risus molestie lobortis nec ac leo.Nullam eu urna vehicula, tempor turpis non, lacinia nisi.Mauris lacinia, nunc in bibendum blandit, ante urna tempus elit, eu varius lectus tellus non lacus.Curabitur dignissim, tellus in scelerisque imperdiet, leo magna tincidunt est, eu laoreet turpis sem ut lectus.Donec imperdiet rutrum lacus ac malesuada.Nullam a cursus nisl, id suscipit odio.Quisque ut gravida magna.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Fusce pulvinar lacus a ante molestie, at ultricies magna dignissim.Mauris laoreet ut dui luctus condimentum.Aenean ullamcorper mi eu auctor rutrum.Proin nec ante sit amet est molestie ornare in tincidunt ex.Donec vitae sodales augue.Morbi non turpis id tortor tincidunt sagittis sed sit amet tortor.Aliquam erat volutpat.Quisque ornare tincidunt placerat.Etiam venenatis rhoncus nisi, quis fermentum lectus tempor sit amet.Phasellus ut diam non mauris luctus tincidunt in nec turpis.Sed nec nisi et augue pellentesque hendrerit.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
            error_h2: "Error 404",
            error_p: "Seite nicht gefunden"
        }
        break;
    default: //en
        content = {
            service_worker: "Your machine does not support serice workers. Therefore, the site is not working properly.",
            music: "Music",
            programming: "Software",
            notes: "Sheet music",
            about: "About",
            home: "Home",
            home_h2: "Lorem ipsum dolor",
            home_p: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis venenatis ipsum. Donec a iaculis felis, commodo vulputate elit. Pellentesque mi libero, elementum eget posuere quis, vestibulum sed turpis. Aliquam vel est sit amet dolor posuere rutrum. Morbi sed purus ac est pulvinar aliquet. In mollis orci et eros vestibulum commodo. Curabitur suscipit risus quis magna suscipit, a scelerisque odio auctor. Suspendisse eu facilisis risus. Nunc hendrerit venenatis molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vitae sagittis nisi. Sed eu iaculis velit.Ut massa risus, ornare vel elit eu, rhoncus efficitur ex.Curabitur sodales congue lorem, id pulvinar velit porttitor ac.Quisque vitae dui sit amet felis convallis laoreet.Vestibulum dictum commodo nibh, sed venenatis mi ornare id.Suspendisse aliquet faucibus elit, consequat facilisis ipsum malesuada eget.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vivamus ornare erat quis tortor euismod, molestie varius felis tempus.Nullam vestibulum dolor ut bibendum semper.Aliquam erat volutpat.Sed eget mauris sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed dictum blandit mauris ut lobortis.Nunc eget euismod tortor.Donec blandit, neque ac pellentesque faucibus, neque dolor porta lectus, et rhoncus velit nibh at urna.Aliquam id urna faucibus, venenatis nibh id, tempor eros.Sed semper condimentum purus aliquet molestie.Aliquam sed nunc erat.Etiam rutrum vitae leo vitae mattis.In gravida interdum ipsum sed feugiat.Vestibulum nec blandit leo.Nunc non sapien a nunc imperdiet iaculis.Vestibulum eget hendrerit neque, et tempor dui.Aliquam ultrices nunc ac magna suscipit, vitae placerat turpis posuere.Duis vitae nisi dignissim, tempus tellus eleifend, efficitur neque.Integer ut blandit nisi, ac vehicula est.Curabitur laoreet nunc sed volutpat semper.Vestibulum eleifend, nisl vitae pharetra rutrum, dui arcu porta enim, sed feugiat nisi tortor vitae dui.Nullam hendrerit porttitor lacinia.Nullam vel nibh vel risus molestie lobortis nec ac leo.Nullam eu urna vehicula, tempor turpis non, lacinia nisi.Mauris lacinia, nunc in bibendum blandit, ante urna tempus elit, eu varius lectus tellus non lacus.Curabitur dignissim, tellus in scelerisque imperdiet, leo magna tincidunt est, eu laoreet turpis sem ut lectus.Donec imperdiet rutrum lacus ac malesuada.Nullam a cursus nisl, id suscipit odio.Quisque ut gravida magna.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Fusce pulvinar lacus a ante molestie, at ultricies magna dignissim.Mauris laoreet ut dui luctus condimentum.Aenean ullamcorper mi eu auctor rutrum.Proin nec ante sit amet est molestie ornare in tincidunt ex.Donec vitae sodales augue.Morbi non turpis id tortor tincidunt sagittis sed sit amet tortor.Aliquam erat volutpat.Quisque ornare tincidunt placerat.Etiam venenatis rhoncus nisi, quis fermentum lectus tempor sit amet.Phasellus ut diam non mauris luctus tincidunt in nec turpis.Sed nec nisi et augue pellentesque hendrerit.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
            error_h2: "Error 404",
            error_p: "Page not found"
        }
        break;
}

