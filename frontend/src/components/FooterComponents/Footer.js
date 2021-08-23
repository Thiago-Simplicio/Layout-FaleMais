import React from 'react'

import { FooterContainer } from './FooterStyled'

import Logo from '../../imagens/logo.png'

const Footer = () => {
    return(
        <FooterContainer>
            <div className="containerCombo">

                <div className="combo">
                    <div className="title">
                        <span>Combo</span>
                    </div>
                    <div className="promo">
                        <span>Planos</span>
                        <span>Atendimentos</span>
                        <span>Serviços adicionais</span>
                    </div>
                </div>
                <div className="combo">
                    <div className="title">
                        <span>Combo</span>
                    </div>
                    <div className="promo">
                        <span>Planos</span>
                        <span>Atendimentos</span>
                        <span>Serviços adicionais</span>
                    </div>
                </div>
                <div className="combo">
                    <div className="title">
                        <span>Combo</span>
                    </div>
                    <div className="promo">
                        <span>Planos</span>
                        <span>Atendimentos</span>
                        <span>Serviços adicionais</span>
                    </div>
                </div>
                <div className="combo">
                    <div className="title">
                        <span>Combo</span>
                    </div>
                    <div className="promo">
                        <span>Planos</span>
                        <span>Atendimentos</span>
                        <span>Serviços adicionais</span>
                    </div>
                </div>
            </div>
            <div className="logoBottom">
                <div>
                    <img src={Logo}/><span>2021</span>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer