import React from 'react'

import Logo from '../../../imagens/logo.png'

import { AiOutlineLeft } from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'

import { SucessoContainer } from './SucessoStyled'

const Sucesso = () => {
    return(
        <SucessoContainer>
            <header>
                <div className="voltar">
                    <AiOutlineLeft className="icons"/><a href="/">voltar para a pagina inicial</a>
                </div>
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
            </header>
            <div className="boxSucesso">
                <div>
                    <h2>Contratação feita com sucesso!</h2>
                    <AiFillStar className="icons"/>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
            </div>
        </SucessoContainer>
    )
}

export default Sucesso