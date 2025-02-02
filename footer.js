var lastModificationDate = new Date(document.lastModified);
var dayLetters = '';
var day = lastModificationDate.getUTCDate();
var dayMOD10 = day % 10;
if (dayMOD10 == 1) {
    dayLetters = 'st';
} else if (dayMOD10 == 2){
    dayLetters = 'nd';
} else if (dayMOD10 == 3){
    dayLetters = 'rd';
} else {
    dayLetters = 'th';
}
// Gets current month. +1 because getMonth is 0 indexed
var month = lastModificationDate.getMonth() + 1;
var monthString = '';
switch (month) {
    case 1: 
        monthString = 'January';
        break;
    case 2: 
        monthString = 'February';
        break;
    case 3: 
        monthString = 'March';
        break;
    case 4: 
        monthString = 'April';
        break;
    case 5: 
        monthString = 'May';
        break;
    case 6: 
        monthString = 'June';
        break;
    case 7: 
        monthString = 'July';
        break;
    case 8: 
        monthString = 'August';
        break;
    case 9: 
        monthString = 'September';
        break;
    case 10: 
        monthString = 'October';
        break;
    case 11: 
        monthString = 'November';
        break;
    case 12: 
        monthString = 'December';
        break;
}
document.getElementById("footer").innerHTML = '&copy ' + lastModificationDate.getFullYear() + '. All rights reserved. Webpage updated on ' + monthString + ' ' + lastModificationDate.getDate() + dayLetters + ', ' + lastModificationDate.getFullYear() + '.';

// Easter egg image for footer
var img = create('<a href="easter-egg.html"><img src="images/crown.png" width="1%" style="float: right;"></a>');
document.getElementById("footer").insertBefore(img, document.getElementById("footer").childNodes[1]);