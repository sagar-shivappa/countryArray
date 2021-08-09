const countryData=[
    {countryName:"India",currency:"ruppes",popu:130000000,capital:"New Delhi",continent:"Asia"},
    {countryName:"USA",currency:"DOLLORS",popu:150000,capital:"WASHINGTON",continent:"Europe"},
    {countryName:"SriLanka ",currency:"ruppes",popu:1300000,capital:"Columbo",continent:"Asia"},
    {countryName:"Bangladesh",currency:"durams",popu:97000000,capital:"Dhaka",continent:"Asia"},
    {countryName:"China",currency:"DOLLORS",popu:136000000,capital:"Beggeing",continent:"Asia"}
]

console.log(countryData)
let asianContinent=countryData.filter(data=>{
    if(data.continent=="Asia"){
        return data;
    }
})
console.log("Asian Countries Only",asianContinent)

let popLess=countryData.filter(data=>{
    if(data.popu<=200000){
        return data;
    }
})
console.log("Less Population Countries Only",popLess)
let details=[]
let countryDetails1= countryData.forEach(data=>{
    details.push(data.countryName,data.currency)
})

function countryDetails(data){
    return data.countryName
}

console.log("Country & Capital",details)

let pop=[]
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let totPopulation=countryData.forEach(data=>{
   pop.push(data.popu);
})

console.log("World Population",pop.reduce(reducer))

let dollorCountry=countryData.filter(data=>{
    if(data.currency=="DOLLORS"){
        return data;
    }
})

console.log("Dollor Countries",dollorCountry)
