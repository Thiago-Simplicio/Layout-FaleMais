import styled from 'styled-components'

export const BoxCalculo = styled('div')`
    
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 30px;
        background-color: #FFE8D3;
        margin-top: 55px;

        .textLeft{
            width: 400px;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            gap: 10px;

            p:nth-child(1){
                font-size: 31px;
                width: 60%;
                font-weight: bold;
                color: black;
                font-family: sans-serif;
            }
            p:nth-child(2){
                font-size: 19px;
                color: black;
            }
        }

        .boxSelect{
            position: relative;
            background-color: white;
            border-radius: 5px;
            width: 40%;
            padding: 20px 30px;
            display: flex;
            flex-direction: column;
            gap: 15px;

            .selectTop{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                label{
                    font-weight: bold;
                    font-family: sans-serif;
                }

                select{
                    margin-top: 9px;
                    margin-right: 8px;
                    border: none;
                    background-color: transparent;

                }
            }

            .selectMed{
                display: flex;
                justify-content: flex-start;
                flex-direction: column;
                height: 105px;

                .plano{
                    position: relative;
                    width: 100%;
                    height: 50%;
                    display: flex;
                    flex-direction: column;

                    .top{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        cursor: pointer;
                        padding: 10px;
                        border-radius: 5px;
                        border: 1px solid white;

                        label{
                            font-weight: bold;
                            font-family: sans-serif;
                        }
                    }
                    .top:hover{
                        border: 1px solid black;
                    }
                    .top:focus{
                        border: 1px solid black;
                    }

                    .planoMenu{
                        z-index: 32;
                        width: 100%;
                        height: 200px;
                        margin-top: 20px;
                        display: none;
                        background-color: white;
                        box-shadow: 0px 5px 7px rgba(0,0,0,0.5);

                        span{
                            font-family: sans-serif;
                        }
                        div{
                            display: flex;
                            justify-content: space-between;
                            flex-wrap: wrap;
                            padding: 6px;

                            div{
                                display: flex;
                                gap: 12px;
                            }
                        }
                        .buttonBox{
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            button{
                                z-index: 77;
                                border: 1px solid #AB49CE;
                                color: #AB49CE;
                                font-weight: bold;
                                padding: 7px 20px;
                                border-radius: 6px;
                                cursor: pointer;
                            }
                            button:hover{
                                background-color: #AB49CE;
                                color: white;
                                
                            }
                        }
                    }
                    .open-planoMenu{
                        display: block;
                    }
                }

            }

            .totalPlano{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                div{
                    span{
                        font-family: sans-serif;
                        font-weight: bold;
                        color: black;
                    }
                }
            }

            .buttonContratar{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                button{
                    padding: 12px 57px;
                    background-color: #AB49CE;
                    color: white;
                    border-radius: 6px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                button:hover{
                    opacity: 0.8;
                }
            }
        }

    /*RESPOSIVIDADE CALCULA PLANOS*/
    @media(max-width: 1142px){
        flex-direction: column;
        height: 500px;
        padding: 20px 0px;

        .textLeft{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
        }

        .boxSelect{
            width: 90%;
            height: 300px;
            
            .selectTop{
                flex-wrap: wrap;
                gap: 15px;
            }
            .selectMed{
                justify-content: center;
                align-items: center;
            }
        }
    }
    @media(max-width: 442px){
        .textLeft{
            p:nth-child(2){
                font-size: 15px;
                color: black;
            }
        }
    }
    
`