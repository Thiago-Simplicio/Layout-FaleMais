import styled from "styled-components";

export const ContainerContrato = styled('div')`
    width: 100%;
    height: 100%;
    padding-bottom: 80px;
    
    header{
        width: 100%;
        padding: 10px 30px;
        box-shadow: 0px 5px 7px rgba(0,0,0,0.5);
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .voltar{
            width: 50%;
            display: flex;
            align-items: center;

            .icons{
                color: purple;
            }

            a{
                text-decoration: none;
                color: purple;
                font-family: sans-serif;
                font-weight: bold;
            }
        }
    }

    form{
        width: 100%;
        margin-top: 65px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h2{
            font-family: sans-serif;
            font-weight: bold;
            margin-bottom: 35px;
        }
        .dados{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            h3{
                margin-bottom: 15px;
                font-family: sans-serif;
                font-weight: 100;
            }
            .boxField{
                display: flex;
                flex-wrap: wrap;

                input{
                    margin: 15px;
                    padding: 7px 10px;
                    font-family: sans-serif;
                    color: black;
                    background-color: rgba(0,0,0,0.1);
                    border: none;
                    transition: all 0.3s ease;
                    outline: 0;
                    border-radius: 2px;
                }
                input:hover{
                    background-color: rgba(0,0,0,0.2);
                }
                input::placeholder{
                    color: black;
                }
            }
        }

        .endereco{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 35px;

            h3{
                font-family: sans-serif;
                font-weight: 100;
            }
            .descubraCep{
                a{
                    text-decoration: none;
                    cursor: pointer;
                    color: purple;
                    font-weight: bold;
                }
            }
            .boxField{
                display: flex;
                margin: 25px;
                flex-wrap: wrap;

                input{
                    margin: 15px;
                padding: 7px 10px;
                font-family: sans-serif;
                color: black;
                background-color: rgba(0,0,0,0.1);
                border: none;
                transition: all 0.3s ease;
                outline: 0;
                border-radius: 2px;
                }
                input:hover{
                    background-color: rgba(0,0,0,0.2);
                }
                input::placeholder{
                    color: black;
                }

                select{
                    margin: 15px;
                    height: 35px;
                    background-color: rgba(0,0,0,0.1);
                    border: none;
                    outline: 0;
                }
            }
        }

        .detalhes{
            background-color: #FFE8D3;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 70%;
            padding: 30px;
            gap: 25px;
            margin-top: 25px;

            h3{
                width: 100%;
                text-align: center;
                font-family: sans-serif;
                font-weight: bold;
                font-size: 21px;
            }
            .infoPlano{
                width: 80%;
                display: flex;
                gap: 25px;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;

                span{
                    font-family: sans-serif;
                    font-weight: bold;
                    font-size: 15px;
                    color: rgba(0,0,0,0.6);
                }
                .totalPlano{
                    display: flex;
                    gap: 6px;

                    span{
                        font-weight: bold;
                        color: black;
                        font-family: sans-serif;
                    }
                    p{
                        font-family: sans-serif;
                        color: rgba(0,0,0,0.6);
                    }
                }
            }
        }

        .pagamento{
            margin-top: 55px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            width: 60%;

            h3{
                color: black;
                font-weight: bold;
                font-family: sans-serif;
            }

            .boxField{
                width: 60%;
                display: flex;
                flex-direction: column;

                input{
                padding: 7px 10px;
                font-family: sans-serif;
                color: black;
                background-color: rgba(0,0,0,0.1);
                border: none;
                transition: all 0.3s ease;
                outline: 0;
                border-radius: 2px;
                }
                input:hover{
                    background-color: rgba(0,0,0,0.2);
                }
                input::placeholder{
                    color: black;
                }

                .div1{
                    display: flex;
                    margin-bottom: 25px;

                    input{
                    padding: 7px 10px;
                    font-family: sans-serif;
                    color: black;
                    background-color: rgba(0,0,0,0.1);
                    border: none;
                    transition: all 0.3s ease;
                    outline: 0;
                    border-radius: 2px;
                    }
                    input:hover{
                        background-color: rgba(0,0,0,0.2);
                    }
                    input::placeholder{
                        color: black;
                    }
                }
                .div2{
                    display: flex;
                    flex-wrap: wrap;

                    input{
                    margin: 15px;
                    padding: 7px 10px;
                    font-family: sans-serif;
                    color: black;
                    background-color: rgba(0,0,0,0.1);
                    border: none;
                    transition: all 0.3s ease;
                    outline: 0;
                    border-radius: 2px;
                    }
                    input:hover{
                        background-color: rgba(0,0,0,0.2);
                    }
                    input::placeholder{
                        color: black;
                    }

                    .bandeiras{
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 15px;
                        flex-wrap: wrap;

                        div{
                            width: 100%;
                            justify-content: flex-end;
                            display: flex;
                            gap: 5px;

                            .icons{
                                font-size: 21px;
                            }
                            .icons:hover{
                                
                            }
                        }
                    }
                }
            }
        }
    }

    button{
        margin-top: 75px;
        padding: 17px 30px;
        background-color: #9C49CE;
        color: white;
        font-weight: bold;
        font-family: sans-serif;
        border: none;
        border-radius: 6px;
        outline: 0;
        margin-bottom: 35px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    button:hover{
        opacity: 0.8;
    }

    /*RESPONSIVIDADE CONTRATO*/
    @media(max-width: 500px){
        header{
            justify-content: space-between;

            .voltar{
                gap: 15px;
            }
        }
        .dados{
            
            .boxField{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 15px;
            }
        }

        .endereco{
            .boxField{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
        }

        .pagamento{
            width: 100%;

            .boxField{
                width: 100%;

                .div1{
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
                .div2{
                    justify-content: center;
                    align-items: center;
                    width: 100%;

                    input{
                        width: 70%;
                    }
                }
            }
        }
    }

`