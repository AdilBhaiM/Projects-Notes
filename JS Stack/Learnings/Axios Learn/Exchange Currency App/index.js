const API_KEY= "c16eaa4685105e49964c941a";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

const dropdown1 = document.querySelector("#from")
const dropdown2 = document.querySelector("#to")
const btn = document.querySelector("#btn")
const amount_input = document.querySelector("#inp")
const exchanged_input = document.querySelector("#Exchange")

for(code in countryList){
    // dropdown2.innerHTML+= `<option value="${countryList[code]}" selected>${code}</option>`
    // console.log(countryList[code]);
    if (code === "USD"){
        dropdown1.innerHTML+= `<option value="${code}" selected>${code}</option>`
    } else{
        dropdown1.innerHTML+= `<option value="${code}">${code}</option>`
    }
    if(code === "PKR"){
        dropdown2.innerHTML+= `<option value="${code}" selected>${code}</option>`
    }else{
        dropdown2.innerHTML+= `<option value="${code}">${code}</option>`
    }
}
console.log(dropdown1.value); 

const Update_Flag = (to_or_from, code)=>{
    document.querySelector(`#${to_or_from}Flag`).src = `https://flagsapi.com/${countryList[code]}/flat/64.png`
}

dropdown1.addEventListener('change', ()=>{Update_Flag(dropdown1.name, dropdown1.value)})
dropdown2.addEventListener('change', ()=>{Update_Flag(dropdown2.name, dropdown2.value)})

btn.addEventListener('click', async (e)=>{
    e.preventDefault()
    let amount = amount_input.value;
    // let data = await fetch(`${BASE_URL}/${dropdown1.value.toLowerCase()}/${dropdown2.value.toLowerCase()}.json`)
    let data = await fetch(`${BASE_URL}/${dropdown1.value}`)
    let res = await data.json();
    let currencies = res.conversion_rates
    let toDropDown = dropdown2.value
    let total = currencies[toDropDown] * amount
    exchanged_input.value = total
    // console.log(res);
})



