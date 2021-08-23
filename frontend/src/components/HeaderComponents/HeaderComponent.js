import React,{useEffect} from 'react'

import { HeaderContainer } from './HeaderStyled'

import Logo from '../../imagens/logo.png'

const Header = () =>{

    
    function openMenu(){
        var menuMobile = document.querySelector('.boxMenu')
        if(menuMobile.className === "boxMenu"){
            menuMobile.className += " open-boxMenu"
        }else{
            menuMobile.className = "boxMenu"
        }
    }


    return(
        <HeaderContainer id="header">
                <div className="boxLogo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div className="boxMenu">
                    <ul className="menu">
                        <li><a href="#vantagens">Vantagens</a></li>
                        <li><a href="#calculo">Cálculo</a></li>
                        <li><a href="#contratar">Contratar</a></li>
                    </ul>
                </div>
                <div onClick={openMenu} className="hamburguer">
                    <div className="linha"></div>
                    <div className="linha"></div>
                    <div className="linha"></div>
                </div>
        </HeaderContainer>
    )
}

export default Header