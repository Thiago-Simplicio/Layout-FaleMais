import React from 'react'

import { BoxCalculo } from './CalculoStyled'

import {IoIosArrowDown} from 'react-icons/io'

const Calculo = () => {


    function somaPlano(){

        var plano = document.querySelector('.planoMenu')
        if(plano.className === "planoMenu open-planoMenu"){
            plano.className = "planoMenu"
        }
       
    }


    function abrirPlano(){
        var plano = document.querySelector('.planoMenu')

        if(plano.className === "planoMenu"){
            plano.className += " open-planoMenu"
        }
    }

    return(
        <BoxCalculo id="calculo">
                <div className="textLeft">
                    <p>Faça o calculo do FaleMais</p>
                    <p>Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="boxSelect">
                    <div className="selectTop">
                        <div className="origem">
                            <label>Origem</label>
                        <select>
                            <option selected>Escolher origem</option>
                            <option>011-São Paulo</option>
                            <option>012-Lorem Ipsum</option>
                            <option>013-Lorem Ipsum</option>
                            <option>018-Lorem Ipsum</option>
                            <option>021-Lorem Ipsum</option>
                        </select>
                        </div>
                        <div className="destino">
                            <label>Destino</label>
                        <select>
                            <option selected>Escolher destino</option>
                            <option>011-São Paulo</option>
                            <option>024-Rio de Janeiro</option>
                            <option>013-Lorem Ipsum</option>
                            <option>018-Lorem Ipsum</option>
                            <option>021-Lorem Ipsum</option>
                        </select>
                        </div>
                        <div className="tempo">
                            <label>Tempo</label>
                        <select>
                            <option selected>Escolher Tempo</option>
                            <option>60 min</option>
                            <option>30 min</option>
                            <option>15 min</option>
                            <option>45 min</option>
                            <option>10 min</option>
                        </select>
                        </div>
                    </div>
                    <div className="selectMed">
                    <div className="plano">
                        <div onClick={abrirPlano} className="top">
                            <label>Planos</label>
                            <IoIosArrowDown />
                        </div>
                            <ul className="planoMenu">
                                <span>Escolha um ou mais planos:</span>
                                <div>
                                    <div>
                                        <input className="checked" type="checkbox"/>
                                        <span>FaleMais 30</span>
                                    </div>
                                    <div>
                                        <input className="checked" type="checkbox"/>
                                        <span>FaleMais 60</span>
                                    </div>
                                    <div>
                                        <input className="checked" type="checkbox"/>
                                        <span>FaleMais 120</span>
                                    </div>
                                </div>
                                <div className="buttonBox">
                                    <button onClick={somaPlano}>Aplicar</button>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="totalPlano">
                        <div>
                            <span>Total</span>
                        </div>
                        <div>
                            <span>R$ 00,00</span>
                        </div>
                    </div>
                    <div className="buttonContratar">
                        <button>Contratar</button>
                    </div>
                </div>
            </BoxCalculo>
    )
}

export default Calculo