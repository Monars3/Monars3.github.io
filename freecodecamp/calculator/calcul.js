const addBtn = document.getElementById("add")
const addBtn1 = document.getElementById("minus")
const addBtn2 = document.getElementById("multiply")
const addBtn3 = document.getElementById("divide")
const inputela = document.getElementById("input-ela")
const inputelb = document.getElementById("input-elb")
const fResult = document.getElementById("final")



addBtn.addEventListener("click" , function(){
 

    let finalResult = parseFloat(inputela.value) + parseFloat(inputelb.value)
    
    fResult.value = finalResult;
})

addBtn1.addEventListener("click" , function(){
    
    let finalResult = parseFloat(inputela.value) - parseFloat(inputelb.value)

    fResult.value = finalResult;
})

addBtn2.addEventListener("click" , function(){
    
    let finalResult = parseFloat(inputela.value) * parseFloat(inputelb.value)

    fResult.value = finalResult;
})

addBtn3.addEventListener("click" , function(){
    
    let finalResult = parseFloat(inputela.value) / parseFloat(inputelb.value)

    fResult.value = finalResult;
})



