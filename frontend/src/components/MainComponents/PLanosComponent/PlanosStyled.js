import styled from "styled-components";

export const PlanosContainer = styled('div')`
    width: 100%;
    height: 652px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .text{
        text-align: center;
        margin-top: 35px;
        width: 40%;

        h2{
            font-size: 31px;
            font-family: sans-serif;
            color: black;
        }
        p{
            font-family: sans-serif;
            margin-top: 15px;
        }
    }

    .containerPlanos{
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 45px;
        flex-wrap: wrap;

        .div1{
            position: relative;

            div{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
            .valorPlano{
                margin-top: 15px;
                width: 100%;
                display: flex;
                flex-direction: row;

                div{
                    span{
                        font-size: 41px;
                        color: black;
                        font-weight: bold;
                        font-family: sans-serif;
                    }

                    .custom{
                        width: 70%;
                        font-size: 15px;
                        text-align: center;
                    }
                }
                div{
                    p{
                        font-family: sans-serif;
                        line-height: 5px;
                    }
                }
            }

            .info{
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 100%;
                margin-top: 15px;

                span{
                    text-align: center;
                    width: 60%;
                    font-family: sans-serif; 
                    font-size: 14px;
                }
                p{
                    color: black;
                    font-weight: bold;
                    font-family: sans-serif;
                    font-size: 12px;
                }
            }

            .infoPlanos{
                margin-top: 15px;

                div{
                    display: flex;
                    flex-direction: row;

                    .verefied{
                        color: green;
                    }

                    p{
                        color: rgba(0,0,0,0.5);
                    }
                }
            }

            .button{
                margin-top: 15px;
                display: flex;
                justify-content: center;
                align-items: center;

                a{
                    border: 1px solid purple;
                    background: transparent;
                    color: purple;
                    width: 45%;
                    padding: 12px 0px;
                    border-radius: 5px;
                    font-family: sans-serif;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    text-align: center;
                    text-decoration: none;
                }
                a:hover{
                    color: white;
                    background: purple;
                    border: 1px solid transparent;
                }
            }
        }
        
    }

    /*RESPONSIVIDADE PLANOS*/
    @media(max-width: 1065px){
        height: 1000px;
    }
    @media(max-width: 842px){
        height: 1200px;

        .text{
            padding: 0px 10px;
            width: 100%;

            p{
                width: 100%;
            }
        }
    }
    @media(max-width: 508px){
        height: 2000px;

        .containerPlanos{
            margin-top: 35px;
        }
    }
`