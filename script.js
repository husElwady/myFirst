/*global console, clear*/
var myText = 'I Love JavaScript every much, I want to be Developer of JavaScript.',
    i = 0,
    myColor = [
        '#a02a20',
        '#2060a0',
        '#22a020',
        '#91a020',
        '#cc1100'
    ],
    myPar = document.createElement('p');
document.body.appendChild(myPar);
myPar.style.fontSize = '25px';
function typing() {
    'use strict';
    var timingVeiw = setInterval(function () {
        myPar.textContent += myText[i];
        i = i + 1;
        if (i > myText.length - 1) {
            clearInterval(timingVeiw);
        }
        var randomColor = Math.floor(Math.random() * myColor.length);
        myPar.style.color = myColor[randomColor];
    }, 300);
    
}
typing();