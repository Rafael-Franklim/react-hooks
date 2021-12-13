import './UseState.css'
import React, { useState, useContext } from 'react'



const UseState = props => {

    

    return (
        <div>
            <h1>Deixe um comentario!</h1>
            <br></br>
            <div className="conteudo">
            <form>

    <label>

        E-mail:

        <br></br>

        <input type="email" required="required" name="email"

        id="text2" size="61" placeholder="Digite seu email aqui"

        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" autofocus=""></input>

        <br></br>

        <input type="reset" value="Limpar"></input>

        &nbsp;

        <input type="submit" value="Confirmar"></input>

       

    </label>  
<br></br>
<br></br>
    </form>

    <form>

<label>

    <textarea id="textarea" name="textarea "

    required="required" rows="15" cols="60"

    placeholder="Deixe aqui sua mensagem aqui." autofocus="" ></textarea>

    <br></br>

    <input type="reset" value="Limpar"/>

    &nbsp;

    <input type="submit" value="Confirmar"/>

</label>

</form>
                
            </div>
        </div>
    )
}
export default UseState