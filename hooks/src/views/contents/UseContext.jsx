import './UseContext.css'
import React, { useContext } from 'react'

import { AppContexto } from '../../data/Store'

const UseContext = props => {

  

    return (
        <div> 
         <h1>Trofeus</h1>
         <br></br>
            <div className="conteudo">

            <h3>Atualmente, a representar a equipe Mercedes, Hamilton tem o maior número de vitórias em corridas de Fórmula 1 com 103 triunfos, e também é o primeiro em número de títulos mundiais de Fórmula 1, juntamente com Schumacher. Detém ainda outros recordes absolutos, como o de maior número de pontos na carreira, o maior número de pole positions, maior número de volta lideradas, o maior número de pódios, o maior número de Grand Chelem em uma temporada e o maior número de pontos em uma temporada </h3>
            <p><center><img src=" https://images.rr.sapo.pt/2020_10_25t150741z_11898e397defaultlarge_1024.jpg" width="600" heigth="400"></img></center></p>
           
            </div>
        </div>
    )
}
export default UseContext