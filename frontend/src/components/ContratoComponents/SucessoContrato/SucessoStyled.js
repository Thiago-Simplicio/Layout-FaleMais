import styled from "styled-components";

export const SucessoContainer = styled('div')`
    width: 100%;
    height: 100%;

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

    .boxSucesso{
        width: 100%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 35px;

        div{
            display: flex;
            align-items: center;

            h2{
                font-family: sans-serif;
                font-weight: bold;
            }
            .icons{
                color: #9C49CE;
                font-size: 31px;
            }
        }
        div{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            p{
                width: 60%;
                font-family: sans-serif;
                font-size: 16px;
            }
        }
    }
`