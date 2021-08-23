import React from 'react'

import {MainContainer} from './MainStyled'

import {FiMapPin} from 'react-icons/fi'
import {AiOutlinePlus} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'

import Celular1 from '..//..//imagens/celular1.png'
import Celular2 from '..//..//imagens/celular2.png'

import Calculo from './CalculaPlano/Calculo'
import Planos from './PLanosComponent/Planos'

const Main = () => {
    return(
        <MainContainer id="vantagens">
                <div className="left">
                    <h3>Vantagens do FaleMais</h3>
                </div>
                <div className="med">
                    <div className="boxTop">
                        <div className="text">
                            <p>Lorem Ipsum doloe sit amet</p>
                            <p>Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex 
                            ea commodo consequat.
                            </p>
                        </div>
                        <div className="boxTel">
                            <img src={Celular1} alt="tel1"/>
                            <img src={Celular2} alt="tel2"/>
                        </div>
                    </div>
                    <div className="boxMed">
                        <div className="text">
                            <p>Lorem Ipsum doloe sit amet</p>
                            <p>Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex 
                            ea commodo consequat.
                            </p>
                        </div>
                        <div className="boxPlano">
                            <div className="boxIcons">
                                <FiMapPin className="icons"/>
                                <AiOutlinePlus className="icons"/>
                                <FiPhoneCall className="icons"/>
                            </div>
                            <div className="valor">
                                <span>00,</span>
                                <div>
                                <p>00</p>
                                <p>/mês</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="boxBottom">
                        <div className="text">
                            <p>Lorem Ipsum doloe sit amet</p>
                            <p>Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex 
                            ea commodo consequat.
                            </p>
                        </div>
                        <div className="infoPlanos">
                            <table >
                                <tr>
                                    <td className="title">Origem</td>
                                    <td className="title">Destino</td>
                                    <td className="title">$/min</td>
                                </tr>
                                <tr>
                                    <td>011</td>
                                    <td>016</td>
                                    <td>1.90</td>
                                </tr>
                                <tr>
                                    <td>016</td>
                                    <td>011</td>
                                    <td>2.90</td>
                                </tr>
                                <tr>
                                    <td>011</td>
                                    <td>017</td>
                                    <td>1.70</td>
                                </tr>
                                <tr>
                                    <td>017</td>
                                    <td>011</td>
                                    <td>2.70</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <Calculo />
                <Planos />
        </MainContainer>
    )
}

export default Main