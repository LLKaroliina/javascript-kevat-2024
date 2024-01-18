// let ekaluku = 6
// let tokaluku = 13


// console.log( ekaluku + " + " + tokaluku + " = " + (ekaluku + tokaluku))

// console.log(ekaluku + " - " + tokaluku + " = " + (ekaluku-tokaluku))

// console.log(ekaluku + " * " + tokaluku + " = " + (ekaluku*tokaluku))

// console.log(ekaluku + " / " + tokaluku + " = " + (ekaluku/tokaluku))

// let summa = 0
// //määritellään proces.stdin standardiksi input-objektiksi
// var standard_input = process.stdin;
// //asetetaan input merkistö
// standard_input.setEncoding('utf-8')
// //aloitetaan sovellut ja kirjoitetaan käyttäjälle ohjeet
// console.log("JavaScript laskin")
// console.log("Sovellus suljetaan kirjoittamalla exit")
// process.stdout.write("Anna ensimmäinen luku")
// //seuraavaa rutiinia kutsutaan aina, kun käyttäjä kirjoittaa jotain ja/tai painaa enter
// standard_input.on('data' , function (data){
//     if (summa=summa+parseInt(data)) { //lasketaan yhteenlasku
//           //annetun luvun tulostus consolille
//           console.log('Annoit luvun: ' +  data.trim() + '  summa on ' + summa)
//           process.stdout.write("Anna uusi luku: ")
//     }
//     else { //sovellus suljetaan kun painetaan exit
//         (data === 'exit\r\n')
//         console.log("Käyttäjä sulki laskimen")
//         process.exit()
//     }
    
// })
let kaava = ""
let tulos = 0
var standard_input =process.stdin;
//asetaan input merkistö
standard_input.setEncoding('utf-8')
//ohjeet käyttäjälle
console.log("JavaSript laskin")
console.log("Sovellus suljetaan kirjoittamalla exit")
process.stdout.write("Anna laskukaava: ")
//seuraavaa rutiinia kutsutaan aina kun käyttäjä kirjoittaa jotain ja/tai painaa exit
standard_input.on('data' , function (data){
    if(data === 'exit\r\n'){
        console.log("Käyttäjä sulki laskimen")
        process.exit()
    }
    else{ //muussa tapauksessa lasketaan laskukaavan tulos
        kaava= data.trim()
        tulos = eval(kaava)
        console.log(kaava + ' = ' + tulos)
        process.stdout.write("Anna uusi laskukaava: ")
    }
})
 