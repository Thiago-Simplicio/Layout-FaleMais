import styled from 'styled-components'

export const BannerContainer = styled('div')`
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;

    .boxImg{
        width: 100%;
        height: 100%;
        position: relative;

        img{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

    }

    .boxText{
        position: absolute;
        left: 10%;
        width: 445px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 15px;

        h1{
            font-family: sans-serif;
            color: black;
            font-size: 55px;
            font-weight: normal;
        }
        h2{
            font-family: sans-serif;
            color: black;
            font-size: 55px;
            font-weight: bold;
        }
        p{
            font-family: sans-serif;
            color: black;
        }

        button{
            background-color: transparent;
            border: 1px solid purple;
            color: purple;
            padding: 12px 30px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        button:hover{
            background-color: purple;
            color: white;
            border: 1px solid transparent;
        }
    }

    /*RESPONSIVIDADE BANNER*/
    @media(max-width: 493px){
        .boxText{
            left: 0%;
            padding-left: 15px;
            width: 100%;

            h1{
                font-size: 31px;
            }
            h2{
                font-size: 32px;
            }
            p{
                width: 60%;
            }
        }
    }
`