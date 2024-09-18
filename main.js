let btn = document.querySelector("button") ;
let inp2 = document.querySelector(".result");

let fromunit = document.getElementById("unitSelect");
let tounit = document.getElementById("unitSelect2");

btn.onclick = function(){
let inp1= document.querySelector(".inp1");
let inp1value = inp1.value ; 

if (isNaN(inp1value)) {
    inp2.innerHTML = "Please enter a valid number.";
    return;
}

const conversionRates = {
    meter: 1,
    decameter: 0.1 ,
    millimeter: 1000 ,
    centimeter : 100   ,
    kilometer: 0.001 ,
    micrometer: 1000000 ,
    nanometer:1000000000 ,
    mile: 0.00062137,
    yard: 1.0936132983,
    foot: 3.280839895 ,
    inch: 39.37007874 ,
};

let result = inp1value * (conversionRates[tounit.value] / conversionRates[fromunit.value] ) ;
console.log(result.toFixed(4)) ;

inp2.innerHTML = result.toFixed(3) ;


}