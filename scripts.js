function calcular(){
    const peso = Number(document.querySelector("input#peso").value);
    const altura = Number(document.querySelector("input#altura").value);
    const res = document.querySelector("p#res");
    
    const conta = peso / (altura**2)
    const IMC = conta.toFixed(1)
    if(IMC<18.5){
        res.innerHTML=`Seu IMC é ${IMC}, isso indica magreza.`
    } 
    else if(IMC>=18.5 && IMC<=24.9){
        res.innerHTML=`Seu IMC é ${IMC}, isso indica normalidade.`
    } 
    else if(IMC>=25 && IMC<=29.9){
        res.innerHTML=`Seu IMC é ${IMC}, isso indica sobrepeso.`
    } 
    else if(IMC>=30 && IMC<=39.9){
        res.innerHTML=`Seu IMC é ${IMC}, isso indica obesidade.`
    } 
    else if(IMC>=40){
        res.innerHTML=`Seu IMC é ${IMC}, isso indica obesidade grave.`
    } 
}

function contar(){
    var n1 = Number(document.querySelector("input#num1").value);
    var n2 = Number(document.querySelector("input#num2").value);
    var n3 = Number(document.querySelector("input#num3").value);
    var n4 = Number(document.querySelector("input#num4").value);
    var n5 = Number(document.querySelector("input#num5").value);
    var res = document.querySelector("div.res")

    var num=[n1,n2,n3,n4,n5];

    for(var c = 0; c<5;c++){
        if(num[c]>num[c+1]){
            var troca = num[c]
            num [c] = num[c+1]
            num[c+1] = troca
        }
    }
    for(var c = 0; c<5;c++){
        res.innerHTML+= num[c]+", "
    }

} 

