const mediaQuery = window.matchMedia('(orientation: portrait)')

let background = Math.floor(Math.random()*10);
if(mediaQuery.matches) {
    switch(background) {
        case 0:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/portraits/p1.jpg')";
            break;
        case 1:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/portraits/pexels-roberto-nickson-2486168.jpg')";
            break;
        case 2:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/portraits/p4.jpg')";
            break;
        case 3:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/portraits/p5.jpg')";
            break;
        case 4:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/portraits/p6.jpg')";
            break;
        case 5:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/portraits/p7.jpg')";
            break;
        case 6:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/portraits/p8.jpg')";
            break;
        case 7:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/portraits/p9.jpg')";
            break;
        case 8:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/portraits/p10.jpg')";
            break;
        case 9:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/portraits/p11.jpg')";
            break;
        default:
            window.alert('error');
            break;
    } 
} else {
    switch(background) {
        case 0:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/landscapes/l01.jpg')";
            break;
        case 1:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/landscapes/pexels-roberto-nickson-landscape.jpg')";
            break;
        case 2:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/landscapes/l04.jpg')";
            break;
        case 3:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/landscapes/l05.jpg')";
            break;
        case 4:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/landscapes/l06.jpg')";
            break;
        case 5:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/landscapes/l07.jpg')";
            break;
        case 6:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/landscapes/l08.jpg')";
            break;
        case 7:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/landscapes/l09.jpg')";
            break;
        case 8:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/landscapes/l10.jpg')";
            break;
        case 9:
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,.65), rgba(255,255,255,.65)), url('./resources/images/landscapes/l11.jpg')";
            break;
        default:
            window.alert('error');
            break;
    } 
}

