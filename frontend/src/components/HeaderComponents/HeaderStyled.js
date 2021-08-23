import styled from 'styled-components'

export const HeaderContainer = styled('header')`
    z-index: 35;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;

    .boxMenu{
    

        .menu{
            display: flex;

            li{
                margin-left: 25px;
                list-style: none;

                a{
                    text-decoration: none;
                    background-color: transparent;
                    color: black;
                    font-family: sans-serif;
                    font-weight: bold;
                    padding: 7px 10px;
                    border-radius: 6px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                a:hover{
                    background-color: #AB49CE;
                    color: white;
                }
            }
        }
    }

    .hamburguer{
        width: 45px;
        height: 45px;
        background-color: transparent;
        position: fixed;
        display: flex;
        right: 5%;
        top: 5%;
        justify-content: space-evenly;
        flex-direction: column;
        cursor: pointer;
        display: none;

        .linha{
            border-radius: 5px;
            width: 100%;
            height: .2rem;
            background-color: purple;
        }
    }

    @media(max-width: 531px){
        position: absolute;
        top: 0;

        .boxMenu{
            display: none;

            .menu{
                position: fixed;
                right: 0;
                top: 0;
                background-color: white;
                box-shadow: 0px 5px 7px rgba(0,0,0,0.5);
                width: 20rem;
                height: 700px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                animation: menu 1s forwards;
    
                li{
                    margin-bottom: 25px;
    
                    a{
                        font-size: 25px;
                    }
                }
            }
        }

        @keyframes menu{
            0%{opacity: 0; transform: translate(20rem)}
            100%{opacity: 1; transform: translate(1)}
        }

        .boxMenu.open-boxMenu{
            display: flex;
        }

        .hamburguer{
            display: flex;
        }
    }
`