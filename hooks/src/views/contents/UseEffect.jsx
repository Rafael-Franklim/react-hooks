import './UseEffect.css'
import React, { useState, useEffect} from 'react'

function verificaSituacao(nota) {
    return nota >= 6 ? "Aprovado" : "Reprovado" 
}

const UseEffect = props => {
    

    return (
        <div>
            <h1>Lewis Hamilton</h1>
            <br></br>
            <h2>Lewis Carl Davidson Hamilton é um auitomobilista britanico nascido Stevenage, em 7 de janeiro de 1985. </h2>
            <p><center><img src="https://exame.com/wp-content/uploads/2021/04/iwc-lewishamilton-01-1.jpg?quality=70&strip=info.jpg" width="600" heigth="400"></img></center></p>
            <h3>Além de ser comparado com os grandes pilotos de Fórmula 1, tem como ídolo o ex-piloto Ayrton Senna. Isso ficou ainda mais evidente quando Lewis Hamilton se igualou em números de pole position a Ayrton Senna no Grande Prêmio do Canadá de 2017, no qual ganhou da família de Ayrton, ainda na pista, um capacete usado por Senna na corrida, não conseguindo conter as lágrimas. No mesmo ano no Grande Prêmio da Itália, Lewis marcou sua pole de número 69 superando àquela altura a marca de Michael Schumacher de 68 poles, se tornando assim o recordista de pole positions</h3>
        </div>
    )
}
export default UseEffect