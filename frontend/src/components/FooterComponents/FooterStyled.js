import styled from "styled-components";

export const FooterContainer = styled('div')`
    background-color: #FFE8D3;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 40px;
    position: relative;
    flex-wrap: wrap;
    top: 785px;

    .containerCombo{
        position: relative;
        display: flex;
        justify-content: center;
        gap: 175px;
        width: 100%;

        .combo{
            display: flex;
            flex-direction: column;
            gap: 8px;
    
            .title{
                font-weight: bold;
                color: black;
                font-size: 20px;
            }
    
            .promo{
                display: flex;
                flex-direction: column;
                gap: 5px;
    
                span{
                    font-size: 15px;
                    font-family: sans-serif;
                }
            }
        }
    }
    .containerCombo::after{
        position: absolute;
        content: '';
        border: 1px solid #ccc;
        bottom: -25%;
        width: 90%;
    }

    .logoBottom{
        margin-top: 35px;
        position: relative;
        bottom: 0;

        div{
            display: flex;
            justify-content: center;
            align-items: center;

            span{
                font-family: sans-serif;
            }
        }
    }

    /*RESPONSIVIDADE FOOTER*/
    @media(max-width: 899px){
        height: 700px;

        .containerCombo{
            height: 500px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;

            .combo{
                justify-content: center;
                align-items: center;
                text-align: center;
            }
        }
    }
    
`