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

    res.innerHTML= " "

    var num=[n1,n2,n3,n4,n5];

    for(var i = 0; i<=num.length-1 ; i++){
        for(var j = 0; j<=num.length-1 ; j++){
            if(num[i]<num[j]){
                var troca = num[i]
                num[i] = num[j]
                num[j] = troca
            }
        }       
    }

    for(var c = 0; c<5;c++){
        res.innerHTML+= num[c]+", "
    }

}

const celulas = document.querySelectorAll(".casa")

let checarTurno = true;

const Player1 = "X"
const Player2 = "O"

const vitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

addEventListener("click", (event)=>{
    if(event.target.matches(".casa")){

        const posicoesDisponiveis = [];
        for (index in celulas){
            if(!isNaN(index)){
                if(
                    !celulas[index].classList.contains("X")
                    &&
                    !celulas[index].classList.contains("O")
                ){
                    jogar(event.target.id)                    
                }
            }
        }

        checarVencedor(turno);
    }

})

function jogar(id){
    const casa = document.getElementById(id)
    turno = checarTurno ? Player1 : Player2;

    casa.textContent = turno;
    casa.classList.add(turno)
}

function checarVencedor(turno){
    const vencedor = vitoria.some((comb)=>{
        return comb.every((index)=>{
            return celulas[index].classList.contains(turno);
        })
    })

    if(vencedor){
        fimDeJogo(turno)
    } else if (checarEmpate()){
        fimDeJogo()
    } else{        
    checarTurno = !checarTurno
    }
}

function checarEmpate(){
    let X = 0
    let O = 0

    for(index in celulas){
        if(!isNaN(index)){
            if(celulas[index].classList.contains(Player1)){
                X++
            } 
            if(celulas[index].classList.contains(Player2)){
                O++
            }
        }
        
    }
    
    return X + O === 9 ? true : false;
}

function fimDeJogo(vencedor = null){
    const telaEscura = document.getElementById("tela-escura")

    const h2 = document.createElement("h2")
    const h3 = document.createElement("h3")


    telaEscura.style.display="block"
    telaEscura.appendChild(h2)
    telaEscura.appendChild(h3)

    if(vencedor){
        h2.innerHTML=`O Jogador <span>${vencedor}</span> venceu`
    } else{
        h2.innerHTML=`Empatou`
    }

    let contador = 3;
    setInterval(()=>{
        h3.innerHTML=`Reiniciando em ${contador--}`
    }, 1000)

    setTimeout(()=> location.reload(),4000)
}

