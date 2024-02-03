let suret = +prompt('Suretiniz nechedir?');
let netice;

if (suret > 120) {
    netice = '300 AZN cerme ve masin cerme meydancasina qedir';
} else if (suret > 100) {
    netice = '100 AZN cerme';
} else if (suret > 80) {
    netice = '40 AZN cerme';
} else if (suret > 60 ) {
    netice = '20 AZN cerme';
} else if (suret < 60) {
    netice = 'Yaxsi yol';
}

document.getElementById('suret').innerHTML = netice;