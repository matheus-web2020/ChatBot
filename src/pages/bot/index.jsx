import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Cadastro from './cadastro';

const config = {
  width: "400px",
  height: "500px",
  floating: true,
  placeholder: 'Digite sua Mensagem...',
  userDelay: 0,

};

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

class BOT extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          
          steps={[
            {
              id: '0',
              message: 'Olá! Sou o assistente virtual da BRQ Digital Solutions.',
              trigger: '2',
            },
            {
              id: '2',
              message: 'Estou aqui para ajuda-lô com alguns de nosso principais serviços!',
              trigger: '3',
            },
            {
              id: '3',
              message: 'Primeiramente, peço que me diga sobre qual desses assuntos você deseja conversar: ',
              trigger: '4',
            },
            {
              id: '4',
              options: [
                { value: '1', label: 'Opção 1', trigger: '5' },
                { value: '2', label: 'Opção 2', trigger: '5' },
                { value: '3', label: 'Opção 3', trigger: '5' },
                { value: '4', label: 'Opção 4', trigger: '5' },
                { value: '5', label: 'Opção 5', trigger: '5' },
                { value: '6', label: 'Opção 6', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: 'Escolha uma das opções:',
              trigger: '6'
            },
            {
              id: '6',
              options: [
                { value: '7', label: 'Opção 1', trigger: '7' },
                { value: '8', label: 'Opção 2', trigger: '7' },
                { value: '9', label: 'Opção 3', trigger: '7' },
                { value: '10', label: 'Opção 4', trigger: '7' },
                { value: '11', label: 'Opção 5', trigger: '7' },
                { value: '12', label: 'Opção 6', trigger: '7' },
              ],
            },
            {
              id: '7',
              message: 'Escolha uma das opções:',
              trigger: '8'
            },
            {
              id: '8',
              options: [
                { value: '13', label: 'Opção 1', trigger: '9' },
                { value: '14', label: 'Opção 2', trigger: '9' },
                { value: '15', label: 'Opção 3', trigger: '9' },
                { value: '16', label: 'Opção 4', trigger: '9' },
                { value: '17', label: 'Opção 5', trigger: '9' },
                { value: '18', label: 'Opção 6', trigger: '9' },
              ],
            },
            {
              id: '9',
              message: 'Captei seu problema, e já vou te enviar para o atendente!',
              trigger: '10'
            },
            {
              id: '10',
              message: 'Mas Antes, preciso que você me informe se tem Cadastro!',
              trigger: '11'
            },
            {
              id: '11',
              options: [
                { value: 'yes', label: 'Sim', trigger: '12' },
                { value: 'no', label: 'Não', trigger: '13' },
              ],
            },
            {
              id: '12',
              message: 'Maravilha! Me diga seu CPF, para eu poder te enviar para o atendente.',
              trigger: '14'
            },
            {
              id: '14',
              user: true,
              trigger: '16',
            },
            {
              id: '16',
              message: 'Estou lhe enviando para um atendente, que vai auxilia-lô em seu problema!',
              end: true,
            },
            {
              id: '13',
              message: 'Vamos fazer seu Cadastro? Primeiramente, peço que me diga seu email!',
              trigger: 'email',
            },
            {
              id: 'email',
              user: true,
              trigger: '15',
            },
            {
              id: '15',
              message: 'Agora, preciso que você me informe sua senha!',
              trigger: 'senha',
            },
            {
              id: 'senha',
              user: true,
              trigger: '17',
            },
            {
              id: '17',
              message: "Gostaria de alterar algum dado?",
              trigger: 'alterar',
            },
            {
              id: 'alterar',
              options: [
                { value: 'yes', label: 'Sim', trigger: 'sim' },
                { value: 'no', label: 'Não', trigger: 'end' },
              ],
            },
            {
              id: 'sim',
              message: 'O que você gostaria de alterar?',
              trigger: 'mudar',
            },
            {
              id: 'mudar',
              options: [
                { value: 'nome', label: 'Nome', trigger: 'alterar-nome' },
                { value: 'cpf', label: 'Cpf', trigger: 'alterar-cpf' },
              ],
            },
            {
              id: 'alterar-nome',
              update: 'nome',
              trigger: 'dados-alterados'
            },
            {
              id: 'alterar-cpf',
              update: 'cpf',
              trigger: 'dados-alterados'
            },
            {
              id: 'dados-alterados',
              message: 'seus dados foram alterados com sucesso!',
              trigger: 'end'
            },
            {
              id: 'end',
              component: <Cadastro />,
              asMessage: true,
              end: true
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    )
  }
}

export default BOT;

