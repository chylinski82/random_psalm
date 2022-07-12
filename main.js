import { loadingImage } from './images.js';

import { psalmsBulk } from './psalmsBulk.js';

const separatePsalms = text => {           //function formats and divides into individual Psalms one string with all Psalms
                                        // from http://www.sacredbible.org/. Then it generates one of the Psalms at random.                                       
    let separator = [];                    
    for(let i=1; i<=150; i++) {
        separator.push(`[Psalm ${i}]`)
    }
    for(let i=1; i<=150; i++) {
        text = text.toString().split(separator[i])
    }
    text = text.toString().split('\n');
    text = text.filter(el => el !== ',');
    let individualPsalms = [''];
    for(let i=1; i<=150; i++) {
        let psalm;
        psalm = '\n' + `Psalm ${i}`.toString() + '\n' + text.filter(el => el.startsWith(`\{${i}:`)).toString().replaceAll(',{', '\n').replaceAll('{', '').replaceAll('}','').replaceAll(`${i}:`, '');
        individualPsalms.push(psalm);
    }
    return individualPsalms;
}

let psalms = separatePsalms(psalmsBulk);

const randomPsalm = () => {
    return psalms[Math.ceil(Math.random() * 150)];
}

let thePsalm = randomPsalm();

let lastIndex = () => {
    if(psalms.indexOf(thePsalm)<10) {
        return 2
    } else if(psalms.indexOf(thePsalm)<100) {
        return 3
    } else return 4
}

let strHeading = thePsalm.slice(0, thePsalm.indexOf(psalms.indexOf(thePsalm))+lastIndex());
let strScripture = thePsalm.slice(thePsalm.indexOf(psalms.indexOf(thePsalm))+lastIndex());
document.getElementById("choose").value = psalms.indexOf(thePsalm);

document.getElementById('heading').innerHTML = strHeading;
document.getElementById('psalm').innerHTML = strScripture;

const selectPsalm = () => {
    loadingImage();
    let selectedPsalmIndex = document.getElementById("choose").value;
    let lastIndex = () => {
        if(psalms.indexOf(psalms[selectedPsalmIndex])<10) {
            return 2
        } else if(psalms.indexOf(psalms[selectedPsalmIndex])<100) {
            return 3
        } else return 4
    }
    strHeading = psalms[selectedPsalmIndex].slice(0, psalms[selectedPsalmIndex].indexOf(psalms.indexOf(psalms[selectedPsalmIndex]))+lastIndex());
    strScripture = psalms[selectedPsalmIndex].slice(psalms[selectedPsalmIndex].indexOf(psalms.indexOf(psalms[selectedPsalmIndex]))+lastIndex());
    document.getElementById('heading').innerHTML = strHeading;           
    document.getElementById('psalm').innerHTML = strScripture;     
    alert(strHeading);
}


let newRandomPsalm = () => {
    loadingImage(); 
    thePsalm = randomPsalm();
    document.getElementById("choose").value = psalms.indexOf(thePsalm);
    strHeading = thePsalm.slice(0, thePsalm.indexOf(psalms.indexOf(thePsalm))+lastIndex());
    strScripture = thePsalm.slice(thePsalm.indexOf(psalms.indexOf(thePsalm))+lastIndex());
    document.getElementById('heading').innerHTML = strHeading;
    document.getElementById('psalm').innerHTML = strScripture;
};

//document.getElementById("random").addEventListener('click', newRandomPsalm);
//document.getElementById("choose").addEventListener('click', selectPsalm);

$('document').ready(function(){
    $('#random').on('click', newRandomPsalm);
    $('#choose').on('click', selectPsalm); 
})
