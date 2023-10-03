// Getting every usable elements from DOM
const convertBtn = document.getElementById("convert-btn")
const metterRes = document.getElementById("metter-res")
const literRes = document.getElementById("liter-res")
const kiloRes = document.getElementById("kilo-res")

//Conversion ratios
const metterToFeetRatio = 3.280
const gallonToLiterRatio = 3.785
const kiloToPoundRatio = 2.20462

//Adding click listener to the button
convertBtn.addEventListener("click", function(){

    let amount = document.getElementById("unit-text")

    const amountTxt = amount.value

    //Check if the input is a number and convert it to one
    if(!isNaN(amountTxt)){  
      amount = Number(amountTxt)
    }

    //Conversions
    const metterFeetRes = convert(amount, metterToFeetRatio, 3)
    const gallonLiterRes = convert(amount, gallonToLiterRatio, 3)
    const kiloPoudRes = convert(amount, kiloToPoundRatio, 3)
        

    //Sring litteral creations
    const metterFeetResTxt = `${amount} metter = ${metterFeetRes[0]} feet | ${amount} feet = ${metterFeetRes[1]} metter`
    const gallonLiterResTxt = `${amount} gallon = ${gallonLiterRes[0]} liter | ${amount} liter = ${gallonLiterRes[1]} gallon `
    const kiloPoundResTxt = `${amount} kilo = ${kiloPoudRes[0]} pound |  ${amount} pound = ${kiloPoudRes[1]} kilo `

    //Filling
    metterRes.textContent = metterFeetResTxt;
    literRes.textContent = gallonLiterResTxt;
    kiloRes.textContent = kiloPoundResTxt;





})

function convert(amount, ratio, rounding){

    
    const littleToBig = (amount* ratio).toFixed(rounding)
    const bigToLittle = (amount * 1/ratio).toFixed(rounding)
    
    return [littleToBig, bigToLittle]
}