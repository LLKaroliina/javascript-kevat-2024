var puhelimet =["One plus", "IPhone", "Samsung"]
for (let i = 0; i < puhelimet.length; i =i+1) {
    console.log("Puhelin " + (i+1) + " on " + puhelimet[i])
} 
puhelimet.forEach( p=>
    console.log("Puhelin  on " + p)
)
puhelimet.map( p=>
    console.log("Puhelin  on " + p)
)