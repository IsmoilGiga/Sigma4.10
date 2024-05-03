let son1 = Number(prompt("Birinchi soni kiriting: "));
let son2 = Number(prompt("Ikkinchi soni kiriting: "));

function kattami () {
    if (son1 > son2) {
            alert(son1 + " katta " + son2 + " dan");
    } else {
            alert(son1 + " kichik " + son2 + " dan");
    }
} 

kattami();