
/* light */
const bgColor_on = getComputedStyle(document.documentElement).getPropertyValue('--on-bg-color');
const bgColor_two = getComputedStyle(document.documentElement).getPropertyValue('--two-bg-color');

/* dark */
const bgColor_dark_in = getComputedStyle(document.documentElement).getPropertyValue('--on-bg-dark-color');
const bgColor_dark_two = getComputedStyle(document.documentElement).getPropertyValue('--two-bg-dark-color');

let darkmode = false

function switchDark(){

    if(darkmode){

        document.documentElement.style.setProperty('--on-bg-color', bgColor_on)
        document.documentElement.style.setProperty('--two-bg-color', bgColor_two)
    }else{

        document.documentElement.style.setProperty('--on-bg-color', bgColor_dark_in)
        document.documentElement.style.setProperty('--two-bg-color', bgColor_dark_two)
    }
    darkmode = !darkmode;

}

