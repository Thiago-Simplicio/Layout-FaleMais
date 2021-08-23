import React from 'react'

import Walpaper from '../../imagens/banner.png'

import { BannerContainer } from './BannerStyled'

const Banner = () => {
    return(
        <BannerContainer>
            <div className="boxImg">
                <img src={Walpaper} alt="Banner"/>
            </div>
            <div className="boxText">
                <h1>Pague menos,</h1>
                <h2>Fale Mais</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua.</p>
                <button>Saiba Mais</button>
            </div>
        </BannerContainer>
    )
}

export default Banner