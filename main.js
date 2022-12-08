// let inputNumber = (function floatTester() {
//     x = prompt("Veuillez entrer un nombre entier", "");
//     x = Number(x);
//     if (Number.isInteger(+x)) {
//         console.log("OK");
//     }
//     else {
//         floatTester();
//     }
// } ());

// console.log(x);



// function calculTable() {
//     for (i = 1; i <= 10; i++) {
//         let resultat = i * x;
//         console.log (`${x} * ${i} = ${resultat}`);
//     }
// }


// document.write ("<table border>");

// for (i=1;i<=10;i++) {
//     document.write ("<tr>");
//     document.write ("<td>"+x+" x "+i+" =</td>");
//     document.write ("<td>" +x*i+ "</td>");
//     document.write ("</tr>");
// }

// document.write ("</table>");


let newArr = [1,2,3,4,5,6,7,8,9,10];

newArr.forEach(element => {
    document.write("<h4>Table de :" +element+ "</h4>");
for(let i=1; i<=10; i++) {
    document.write("<table border>");
    document.write("<tr>");
    document.write("<td>"+i+" x "+element+" =</td>");
    document.write("<td>"+i*element+"</td>");
    document.write("</tr>");
    document.write("</table>");
}
});

