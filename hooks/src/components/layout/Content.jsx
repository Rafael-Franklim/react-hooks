import './Content.css'
import React, { useEffect } from "react"
import { Switch, Route } from 'react-router-dom'
import Hooks from '../../views/contents/Hooks'
import UseState from '../../views/contents/UseState'
import UseEffect from '../../views/contents/UseEffect'
import UseContext from '../../views/contents/UseContext'
import NaoEncontrado from '../../views/contents//NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Hooks />
            </Route>
            <Route exact path="/UseState">
                <UseState />
            </Route>
            <Route exact path="/UseEffect">
                <UseEffect />
            </Route>
            <Route exact path="/UseContext">
                <UseContext />
            </Route>
            
            <Route path="*">
                <NaoEncontrado />
            </Route>            
        </Switch>
    </main>
)
export default Content
