//palvelut sivun näyttäminen, muodostettu palvelut niminen muuttuja 
function palvelut(){ 
    let palvelut = `<h2>Palvelumme</h2>
    
    <p>Eläinlääkäri</p>
    <p>Päivähoito</p>
    <p>Yöhoito</p>
    `
    document.getElementById("sisältö").innerHTML=palvelut
}
//yhteystiedot, luodaan elementti ilmaan, luodaan teksti, liitetään diviin h2, tällä saadaan yhteystiedot näkyviin
function yhteystiedot(){
    document.getElementById("sisältö").innerHTML="" //tyhjennetään sisältö div
    var otsikko = document.createElement("h2"); // luodaan teksti
    var teksti = document.createTextNode("Yhteystiedot") 
    otsikko.appendChild(teksti);    
    var sisältö= document.getElementById("sisältö")
    sisältö.appendChild(otsikko)

    var puhelin = document.createElement("h4"); // luodaan teksti
    var puhTeksti = document.createTextNode("P. 050000000") 
    puhelin.appendChild(puhTeksti); 
    // var sisältö= document.getElementById("sisältö")
    sisältö.appendChild(puhelin)

    
}

function tumma(){
    document.getElementById("sivu").style.backgroundColor = "black"
    document.getElementById("sivu").style.color = "silver"
    localStorage.setItem("teema", "tumma")
}

function vaalea(){
    document.getElementById("sivu").style.backgroundColor = "white"
    document.getElementById("sivu").style.color = "black"
    localStorage.setItem("teema", "vaalea")
}
//suoritetaan aina kun sivu latautuu
if (localStorage.getItem("teema") == "tumma"){
    tumma()
}

else{
    vaalea()
}
//localStorage.clear()



