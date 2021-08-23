import React, { useState } from 'react';

import {AiOutlineLeft} from 'react-icons/ai'

import Logo from '../../imagens/logo.png'

import { ContainerContrato } from './ContratoStyled';

import {FaCcVisa} from 'react-icons/fa'
import {FaCcMastercard} from 'react-icons/fa'
import {GrAmex} from 'react-icons/gr'
import {FaCcDiscover} from 'react-icons/fa'
import {BsCreditCard} from 'react-icons/bs'

const Contrato = () => {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cidade, setCidade] = useState([
        {id: 1, name: "selecione a cidade"},
        {id: 2, name: "cidade 2"},
        {id: 3, name: "cidade 3"},
        {id: 4, name: "cidade 4"},
        {id: 5, name: "cidade 5"},
        {id: 6, name: "cidade 6"},
    ])
    const [estado, setEstado] = useState([
        {id: 1, name: 'selecione o estado'},
        {id: 2, name: "SP"},
        {id: 3, name: "SP"},
        {id: 4, name: "SP"},
        {id: 5, name: "SP"},
        {id: 6, name: "SP"},
    ])
    const [nomeCartao, setNomeCartao] = useState('')
    const [numeroCartao, setNumeroCartao] = useState('')
    const [vencCartao, setVenc] = useState('')
    const [codigo, setCodigo] = useState('')

    async function handleSubmit(e){
        e.preventDefault()

        if(!nome || !sobrenome || !email || !cep || !endereco || !numero || !cidade || !nomeCartao || !numeroCartao || !vencCartao || !codigo){
            alert("Prencha o formulario completo por favor")
        }else if(cep.length < 8){
            alert("Cep invalido")
        }else if(numeroCartao.length < 16){
            alert("Numero de cartão invalido")
        }else if(vencCartao.length < 4){
            alert("Numero de vencimento do cartão invalido")
        }else if(codigo.length < 3){
            alert("Numero do codigo do cartão invalido")
        }else{
            window.location.href = "/contratar/sucesso-contratação"
        }
    }


    return(
        <ContainerContrato>
            <header>
                <div className="voltar">
                    <AiOutlineLeft className="icons"/><a href="/">voltar para a pagina inicial</a>
                </div>
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
            </header>
            <form onSubmit={handleSubmit}>
                <h2>Finalizar contratação</h2>
                <div className="dados">
                    <h3>Dados pessoais</h3>
                    <div className="boxField">
                        <input placeholder="Nome" required value={nome} onChange={e => setNome(e.target.value)}/>
                        <input placeholder="Sobrenome" required value={sobrenome} onChange={e => setSobrenome(e.target.value)}/>
                    </div>
                    <div className="boxField">
                        <input placeholder="Telefone" required value={telefone} onChange={e => setTelefone(e.target.value)}/>
                        <input placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="endereco">
                    <h3>Endereco de cobrança</h3>
                    <div className="boxField">
                        <input placeholder="CEP" maxLength={8} required value={cep} onChange={e => setCep(e.target.value)}/>
                        <input placeholder="endereco" required value={endereco} onChange={e => setEndereco(e.target.value)}/>
                    </div>
                    <div className="descubraCep">
                        <a target="_blank" href="https://buscacepinter.correios.com.br/app/endereco/index.php">Não sei meu cep</a>
                    </div>
                    <div className="boxField">
                        <input placeholder="Número" required value={numero} onChange={e => setNumero(e.target.value)}/>
                        <input placeholder="Complemento" required value={complemento} onChange={e => setComplemento(e.target.value)}/>
                        <select>
                            {cidade.map(data => {
                                return <option onChange={e => setCidade(e.target.value)} required id={data.id}>{data.name}</option>
                            })}
                        </select>
                        <select>
                            {estado.map(data => {
                                return <option onChange={e => setEstado(e.target.value)} required id={data.id}>{data.name}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="detalhes">
                    <h3>Detalhes da contratação</h3>
                    <div className="infoPlano">
                        <span>Plano 120-lorem ipsum sit amet</span>
                        <div className="totalPlano">
                            <span>R$00,00</span>
                            <p>/mês</p>
                        </div>
                    </div>
                </div>
                <div className="pagamento">
                    <h3>Pagamento</h3>
                    <div className="boxField">
                        <input placeholder="Nome no cartão" required value={nomeCartao} onChange={e => setNomeCartao(e.target.value)}/>
                    </div>
                    <div className="boxField">
                        <div className="div1">
                            <input placeholder="Número do cartão" maxLength={16} required value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)}/>
                        </div>
                        <div className="div2">
                            <input placeholder="MM/YY" maxLength={4} required value={vencCartao} onChange={e => setVenc(e.target.value)}/>
                            <input placeholder="CVC" maxLength={3} required value={codigo} onChange={e => setCodigo(e.target.value)}/>
                            <div className="bandeiras">
                                <div>
                                    <FaCcVisa className="icons"/>
                                    <FaCcMastercard className="icons"/>
                                    <GrAmex className="icons"/>
                                    <FaCcDiscover className="icons"/>
                                </div>
                                <div>
                                    <BsCreditCard className="icons"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit">Finalizar e Contratar</button>
            </form>
        </ContainerContrato>
    )
}

export default Contrato