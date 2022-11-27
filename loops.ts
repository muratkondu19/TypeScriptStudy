//LOOPS - DONGULER
let sehirler = ["Ankara", "İstanbul", "İzmir"]

for (let i in sehirler) {
    //i olarak indexi döner -> 0,1,2
    console.log(i);
}

for (let i of sehirler) {
    //i olarak datayı döner ->"Ankara","İstanbul","İzmir"
    console.log(i);
}