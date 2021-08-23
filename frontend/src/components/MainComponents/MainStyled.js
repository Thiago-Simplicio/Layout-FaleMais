import styled from 'styled-components'

export const MainContainer = styled('div')`
    position: relative;
    top: 685px;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    

    .left{
        width: 255px;
        height: 100vh;
        position: relative;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        h3{
            width: 100%;
            font-size: 31px;
            font-weight: bold;
            font-family: sans-serif;
            position: absolute;
            top: 8%;
        }
    }

    .med{
        flex: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        .boxTop{
            height: 220px;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .boxTel{
                display: flex;
                img{
                    width: 150px;
                }
            }

            .text{
                width: 620px;

                p:nth-child(1){
                    font-family: sans-serif;
                    font-weight: bold;
                    font-size: 35px;
                    width: 100%;
                }
                p:nth-child(2){
                    margin-top: 5px;
                    font-family: sans-serif;
                    color: rgba(0,0,0,0.5);
                    width: 100%;
                }
            }
        }

        .boxMed{
            width: 100%;
            height: 220px;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .text{
                width: 570px;

                p:nth-child(1){
                    font-family: sans-serif;
                    font-weight: bold;
                    font-size: 35px;
                    width: 100%;
                }
                p:nth-child(2){
                    margin-top: 5px;
                    font-family: sans-serif;
                    color: rgba(0,0,0,0.5);
                    width: 100%;
                }
            }

            .boxPlano{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 25px;
                width: 360px;

                .boxIcons{
                    .icons{
                        font-size: 41px;
                        color: #ccc;
                        margin-right: 25px;
                    }
                }

                .valor{
                    display: flex;
                    align-items: center;

                    span{
                        font-size: 51px;
                        color: #AB49CE;
                        font-family: sans-serif;
                    }
                    div{
                        p{
                            font-family: sans-serif;
                            color: #AB49CE;
                        }
                    }
                }
            }

        }
        .boxBottom{
            width: 100%;
            height: 220px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 65px;
            
            .text{
                width: 50%;

                p:nth-child(1){
                    font-family: sans-serif;
                    font-weight: bold;
                    font-size: 35px;
                    width: 100%;
                }
                p:nth-child(2){
                    margin-top: 5px;
                    font-family: sans-serif;
                    color: rgba(0,0,0,0.5);
                    width: 70%;
                }
            }

            .infoPlanos{
                width: 400px;
                height: 200px;
                display: flex;
                justify-content: center;
                align-items: center;

                table{
                    margin-right: 55px;
                    width: 100%;
                    text-align: center;

                    .title{
                        color: #AB49CE;
                        font-weight: bold;
                        font-family: sans-serif;
                    }

                    td{
                        border-bottom: 1px solid #ccc;
                        height: 40px;
                    }
                }
            }
        }
    }

    /* RESPONSIVADO VANTAGENS*/

    @media(max-width: 1142px){
        .left{
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;

            h3{
                position: relative;
            }
        }

        .med{
            width: 100%;
            display: flex;
            height: 1000px;
            flex-direction: column;
            flex-wrap: wrap;

            .boxTop{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                flex-wrap: wrap;
                height: 300px;

                .text{
                    width: 100%;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
            }
            .boxMed{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                flex-wrap: wrap;
                height: 300px;

                .text{
                    width: 100%;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
            }
            .boxBottom{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                flex-wrap: wrap;
                height: 400px;
                gap: 15px;

                .text{
                    width: 100%;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                .infoPlanos{
                }
            }
        }
    }
    @media(max-width: 425px){
        .med{
            height: 1400px;

            .boxTop{
                width: 100%;
                height: 500px;

                .text{
                    width: 100%;
                    height: 300px;

                }
                
            }

            .boxMed{
                width: 100%;
                height: 400px;

                .text{
                    height: 200px;
                }

                .boxPlano{
                    width: 100%;
                    
                }
            }

            .boxBottom{
                height: 400px;
                flex-wrap: wrap;

                .text{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    text-align: center;
                    width: 100%;
                }

                .infoPlanos{
                    width: 100%;
                    

                    table{
                        margin-top: 75px;
                        width: 100%;
                        margin-right: 0;
                    }
                }
            }
        }
    }
`