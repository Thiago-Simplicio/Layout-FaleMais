import React from 'react'

import { PlanosContainer } from './PlanosStyled'

import Logo2 from '../../../imagens/logo2.png'
import Logo3 from '../../../imagens/logo3.png'
import Logo4 from '../../../imagens/logo4.png'
import Logo5 from '../../../imagens/logo5.png'

import {BsCheck} from 'react-icons/bs'

const Planos = () => {
    return(
        <PlanosContainer id="contratar">
            <div className="text">
                <h2>Planos</h2>
                <p>Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="containerPlanos">
                <div className="div1">
                    <div>
                        <img src={Logo2}/>
                        <span>FaleMais 30</span>
                    </div>
                    <div className="valorPlano">
                        <div>
                        <span>00,</span>
                        </div>
                        <div className="boxMes">
                            <p>00</p>
                            <p>/mês</p>
                        </div>
                    </div>
                    <div className="info">
                        <span>For organizing every corner 
                        of your life.
                        </span>
                        <p>Everything in Personal, plus</p>
                    </div>
                    <div className="infoPlanos">
                        <div>
                        <BsCheck className="verefied"/><p>Unlimited file uploads</p>
                        </div>
                        <div>
                        <BsCheck className="verefied"/><p>Unlimited file uploads</p>
                        </div>
                        <div>
                        <BsCheck className="verefied"/><p>Unlimited file uploads</p>
                        </div>
                    </div>
                    <div className="button">
                        <a href="/contratar">Contratar</a>
                    </div>
                </div>
                <div className="div1">
                    <div>
                        <img src={Logo3}/>
                        <span>FaleMais 60</span>
                    </div>
                    <div className="valorPlano">
                        <div>
                        <span>00,</span>
                        </div>
                        <div className="boxMes">
                            <p>00</p>
                            <p>/mês</p>
                        </div>
                    </div>
                    <div className="info">
                        <span>For organizing every corner 
                        of your life.
                        </span>
                        <p>Everything in Personal, plus</p>
                    </div>
                    <div className="infoPlanos">
                        <div>
                        <BsCheck className="verefied"/><p>Unlimited file uploads</p>
                        </div>
                        <div>
                        <BsCheck className="verefied"/><p>Unlimited file uploads</p>
                        </div>
                        <div>
                        <BsCheck className="verefied"/><p>Unlimited file uploads</p>
                        </div>
                    </div>
                    <div className="button">
                        <a href="/contratar">Contratar</a>
                    </div>
                </div>
                <div className="div1">
                    <div>
                        <img src={Logo4}/>
                        <span>FaleMais 120</span>
                    </div>
                    <div className="valorPlano">
                        <div>
                        <span>00,</span>
                        </div>
                        <div className="boxMes">
                            <p>00</p>
                            <p>/mês</p>
                        </div>
                    </div>
                    <div className="info">
                        <span>For organizing every corner 
                        of your life.
                        </span>
                        <p>Everything in Personal, plus</p>
                    </div>
                    <div className="infoPlanos">
                        <div>
                        <BsCheck className="verefied"/><p>Unlimited file uploads</p>
                        </div>
                        <div>
                        <BsCheck className="verefied"/><p>Unlimited file uploads</p>
                        </div>
                        <div>
                        <BsCheck className="verefied"/><p>Unlimited file uploads</p>
                        </div>
                    </div>
                    <div className="button">
                        <a href="/contratar">Contratar</a>
                    </div>
                </div>
                <div className="div1">
                    <div>
                        <img src={Logo5}/>
                        <span>Personalizado</span>
                    </div>
                    <div className="valorPlano">
                        <div>
                        <span className="custom">Customize o plano do seu jeito</span>
                        </div>
                    </div>
                    <div className="info">
                        <span>For organizing every corner 
                        of your life.
                        </span>
                        <p>Everything in Personal, plus</p>
                    </div>
                    <div className="infoPlanos">
                        <div>
                        <BsCheck className="verefied"/><p>Unlimited file uploads</p>
                        </div>
                        <div>
                        <BsCheck className="verefied"/><p>Unlimited file uploads</p>
                        </div>
                        <div>
                        <BsCheck className="verefied"/><p>Unlimited file uploads</p>
                        </div>
                    </div>
                    <div className="button">
                        <a href="/contratar">Contratar</a>
                    </div>
                </div>
            </div>
        </PlanosContainer>  
    )
}

export default Planos