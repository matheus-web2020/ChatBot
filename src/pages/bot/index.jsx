import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Cadastro from './cadastro';
import Login from './login';
import {Link} from 'react-router-dom';

const config = {
  width: "400px",
  height: "500px",
  floating: true,
  placeholder: 'Digite sua Mensagem...',
  userDelay: 0,
  recognitionEnable: true,
  recognitionLang: 'pt',
  headerTitle: 'Assistente Virtual BRQ',
  // botAvatar : <img src="https://www.hexacta.com.br/wp-content/uploads/2017/03/logo-brq.png" />


};

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial',
  headerBgColor: '#5A90BF',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#77C7D9',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#000',
};
class Mostrar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      cpf: '',
      email: '',
      senha: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { nome, cpf, email, senha } = steps;

    this.setState({ nome, cpf, email, senha });
  }

  render() {
    const { nome, cpf, email} = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Sumário:</h3>
        <table>
          <tbody>
            <tr>
              <td>Nome:</td>
              <td>{nome.value}</td>
            </tr>
            <tr>
              <td>CPF:</td>
              <td>{cpf.value}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{email.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class BOT extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot

          steps={[
            {
              id: '1',
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
              message: 'Mas Antes, preciso que você me informe se tem Cadastro!',
              trigger: '4'
            },
            {
              id: '4',
              options: [
                { value: 'yes', label: 'Sim', trigger: '6' },
                { value: 'no', label: 'Não', trigger: '8' },
              ],
            },
            {
              id: '6',
              message: 'Maravilha! Primeiramente, peço que me diga seu email.',
              trigger: 'emailLogin'
            },
            {
              id: 'emailLogin',
              user: true,
              trigger: '7',
            },
            {
              id: '7',
              message: 'Maravilha! Segundamente, peço que me diga sua senha.',
              trigger: 'senhaLogin'
            },
            {
              id: 'senhaLogin',
              user: true,
              trigger: 'logar',
            },
            {
              id: 'logar',
              component: <Login />,
              asMessage: true,
              trigger: '12',
            },
            {
              id: '8',
              message: 'Vamos fazer seu Cadastro? Primeiramente, peço que me diga seu nome.',
              trigger: 'nome',
            },
            {
              id: 'nome',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)) {
                  return true;
                }
                else {
                  return 'Por Favor informe um nome válido.';
                }
              },
              trigger: '9',
            },
            {
              id: '9',
              message: 'Digite o seu CPF:',
              trigger: 'cpf',
            },
            {
              id: 'cpf',
              user: true,
              validator: (value) => {
                if (/^[0-9]{11}/.test(value) 
                // && (this.state.cpf.length == 11)
                ){  
                    return true;
                }
                else {
                  return 'Informe um CPF válido.';
                }
              },
              trigger: '10',
            },
            {
              id: '10',
              message: 'Informe seu E-mail.',
              trigger: 'email',
            },
            {
              id: 'email',
              user: true,
              validator: (value) => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                  return true;
                }
                else {
                  return 'Por Favor informe um email válido.';
                }
              },
              trigger: '11',
            },
            {
              id: '11',
              message: 'Agora, preciso que você me informe sua senha!',
              trigger: 'senha',
            },
            {
              id: 'senha',
              user : true,
              trigger: 'dados',
            },
            {
              id: 'dados',
              message: 'Esses são seus dados:',
              trigger: 'mostrar',
            },
            {
              id: 'mostrar',
              component: <Mostrar />,
              asMessage: true,
              trigger: 'confirmarDados',
            },
            {
              id: 'confirmarDados',
              message: 'Gostaria de alterar seus dados?',
              trigger: 'alterarOpcao',
            },
            {
              id: 'alterarOpcao',
              options: [
                { value: 'sim', label: 'Sim', trigger: 'alterarDados' },
                { value: 'nao', label: 'Não', trigger: '12' },
              ],
            },
            {
              id: 'alterarDados',
              message: 'O que você gostaria de alterar?',
              trigger: 'alterar',
            },
            {
              id: 'alterar',
              options: [
                { value: 'mudarNome', label: 'Nome', trigger: 'adulterarNome' },
                { value: 'mudarCpf', label: 'cpf', trigger: 'adulterarCpf' },
                { value: 'mudarEmail', label: 'Email', trigger: 'adulterarEmail' },
                { value: 'mudarSenha', label: 'Senha', trigger: 'adulterarSenha' },
              ],
            },
            {
              id: 'adulterarNome',
              message: 'Perfeito, pode fazer a alteração de seu Nome.',
              trigger: 'alterarNome'
            },
            {
              id: 'adulterarCpf',
              message: 'Perfeito, pode fazer a alteração de seu CPF.',
              trigger: 'alterarCpf'
            },
            {
              id: 'adulterarEmail',
              message: 'Perfeito, pode fazer a alteração de seu Email.',
              trigger: 'alterarEmail'
            },
            {
              id: 'adulterarSenha',
              message: 'Perfeito, pode fazer a alteração de sua senha!',
              trigger: 'alterarSenha'
            },
            {
              id: 'alterarNome',
              update: 'nome',
              trigger: 'confirmarAlterado',
            },
            {
              id: 'alterarCpf',
              update: 'cpf',
              trigger: 'confirmarAlterado',
            },
            {
              id: 'alterarEmail',
              update: 'email',
              trigger: 'confirmarAlterado',
            },
            {
              id: 'alterarSenha',
              update: 'senha',
              trigger: 'confirmarAlterado',
            },
            {
              id: 'confirmarAlterado',
              message: 'Gostaria de alterar mais alguma coisa?',
              trigger: 'alterado'
            },
            {
              id: 'alterado',
              options: [
                { value: 'sim', label: 'Sim', trigger: 'alterarDados' },
                { value: 'nao', label: 'Não', trigger: 'mostrar' },
              ],
            },
            {
              id: 'cadastrar',
              component: <Cadastro />,
              asMessage: true,
              trigger: '20',
            },
            {
              id: '12',
              message: 'Primeiramente, peço que me diga sobre qual desses assuntos você deseja conversar: ',
              trigger: 'problema',
            },
            {
              id: 'problema',
              options: [
                { value: 'Consorcio', label: 'Consorcios', trigger: 'cadastrar' },
                { value: 'Conta Corrente', label: 'Conta Corrente', trigger: 'cadastrar' },
                { value: 'Empréstimo e Financiamento', label: 'Empréstimos e Financiamntos', trigger: 'cadastrar' },
                { value: 'Investimento', label: 'Investimentos', trigger: 'cadastrar' },
                { value: 'Seguros', label: 'Seguros', trigger: 'cadastrar' },
                { value: 'Vida e Previdência', label: 'Vida e Previdência', trigger: 'cadastrar' },
              ],
            },
            {
              id: 'pos-cadastrar',
              message: 'Você foi cadastrado em nossa plataforma, viu como foi rápido. :)',
              trigger: '12',
            },
            {
              id: '20',
              message: 'Captei seu problema, e já vou te enviar para o atendente!',
              trigger: 'semi-final'
            },
            {
              id: 'semi-final',
              message: 'Estou lhe enviando para um atendente, que vai auxilia-lô em seu problema!',
              trigger: 'final'
            },
            {
              id: 'final',
              component: <div>
                            <Link to={'/HomePage'}>Redirect</Link>
                        </div>,
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

