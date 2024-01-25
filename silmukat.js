var puhelimet =["One plus", "IPhone", "Samsung"]
for (let i = 0; i < puhelimet.length; i =i+1) {
    console.log("Puhelin " + (i+1) + " on " + puhelimet[i])
} 
puhelimet.forEach( puhelimet=>
    console.log("Puhelin  on " + puhelimet)
)
puhelimet.map( p=>
    console.log("Puhelin  on " + p)
)