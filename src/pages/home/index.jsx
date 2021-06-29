import React, { Component } from 'react';
import { Jumbotron, Container, Col } from 'react-bootstrap';
// import Menu from './../../components/menu';
import { Button } from 'bootstrap';
import './../home/home.css';

//imagens
import Banner1 from '../../img/Banner1.png';
import Banner2 from '../../img/Banner2.png';
import Bradesco from '../../img/bradesco.png';
import Itau from '../../img/itau.png';
import Trabalho from '../../img/Trabalho.png';
import Eduardo from '../../img/Eduardo.png';
import Fusca from '../../img/Fusca.png';
import Gustavo from '../../img/Gustavo.png';
import Henrique from '../../img/Henrique.png';
import Makoto from '../../img/Makoto.png';
import Milena from '../../img/Milena.png';
import Samanta from '../../img/Samanta.png';


import Libras from '././../../components/acessibilidade';

import ChatBot from '../bot';



class home extends Component {

  constructor() {
    super();
    this.state = {
      className: 'hidden'
    }
  }
  handleScroll() {
    if (document.documentElement.scrollTop > 430) {
      this.setState({
        className: 'show'
      })
    }
  }
  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }



  render() {

    return (
      <Jumbotron fluid>


<Libras/>


        <Container style={{ color: '#fffff' }}>
          <div id="home">
          <div id="Home">
            {/* <Menu /> */}
             <img style={{ width: '100%' }} src={Banner1} /> 
            <div className="textoHome">

            </div>
          </div>
          </div>
        </Container>

        <Container id="Quemsomos">
          <div className='quemSomos'>
             <img className="coletividade" src={Trabalho} />
            <div className="textinho" >
              <h1>Quem somos?</h1>
              <p>
                Com mais de 28 anos de experiência no mercado, somos uma das principais empresas de serviços e soluções de tecnologia no Brasil.
                A nossa missão é construir jornadas de transformação com robustez e segurança, entrega de inovação, produtividade e valor para seguradoras, bancos, telecom, varejo, serviços e outras empresas líderes de mercado.
            </p>
            </div>
          </div>
        </Container>

<ChatBot></ChatBot>
        <Container>
          <div id="Servicos" >
            <img style={{ width: '100%' }} src={Banner2} />
          </div>
        </Container>

        <Container style={{ color: 'grey' }}>
          <div id="Integrantes">
            <h1>Integrantes  <hr className='hezinho' /> </h1>
            <div>
              <div className="grupo1">
                <div id="Samanta">
                  <img className="inte" src={Samanta} />
                  <div className='caixaTexto'>
                  <p>Samanta Melissa</p>
                  <a href="https://www.linkedin.com/in/samanta-nascimento-593057173/"><img className='linkedin' src="https://image.flaticon.com/icons/png/512/49/49656.png" class="media-object  img-responsive img-thumbnail" /></a>
                  </div>
                </div>

                <div id="Makoto">
                  <img className="inte" src={Makoto} />
                  <div className='caixaTexto'>
                  <p>Marcelo Makoto</p>
                  <a href="https://www.linkedin.com/in/marcelo-santos1/"><img className='linkedin' src="https://image.flaticon.com/icons/png/512/49/49656.png" class="media-object  img-responsive img-thumbnail" /></a>
                  </div>
                </div>

                <div id="Fusca">
                  <img className="inte" src={Fusca} />
                  <div className='caixaTexto'>
                  <p >Matheus Fuscaldi</p>
                  <a href="https://www.linkedin.com/in/matheus-fuscaldi-lima-283a05203/"><img className='linkedin' src="https://image.flaticon.com/icons/png/512/49/49656.png" class="media-object  img-responsive img-thumbnail" /></a>
                  </div>
                </div>

              </div>
              <div className="grupo2">

                <div id="Milena">
                  <img className="inte" src={Milena} />
                  <div className='caixaTexto'>
                  <p >Milena Akamine</p>
                  <a href="https://www.linkedin.com/in/milena-akamine-7a12041b2/"><img className='linkedin' src="https://image.flaticon.com/icons/png/512/49/49656.png" class="media-object  img-responsive img-thumbnail" /></a>
                  </div>
                </div>

                <div>
                  <div id="Gustavo">
                    <img className="inte" src={Gustavo} />
                    <div className='caixaTexto'>
                    <p >Gustavo Acacio</p>
                    <a href="https://www.linkedin.com/in/gustavo-acacio-078a011a3/"><img className='linkedin' src="https://image.flaticon.com/icons/png/512/49/49656.png" class="media-object  img-responsive img-thumbnail" /></a>
                    </div>
                  </div>


                  <div id="Henrique">
                    <img className="inte" src={Henrique} />
                    <div className='caixaTexto'>
                    <p >Henrique Oliveira</p>
                    <a href="https://www.linkedin.com/in/henrique-oliveira-118081211/"><img className='linkedin' src="https://image.flaticon.com/icons/png/512/49/49656.png" class="media-object  img-responsive img-thumbnail" /></a>
                    </div>
                  </div>

                </div>
                <div id="Eduardo">
                  <img className="inte" src={Eduardo} />
                  <div className='caixaTexto'>
                  <p >Eduardo Almeida</p>
                  <a href="https://www.linkedin.com/in/eduardo-almeida-6496321b1/"><img className='linkedin' src="https://image.flaticon.com/icons/png/512/49/49656.png" class="media-object  img-responsive img-thumbnail" /></a>
                  </div>
                </div>

              </div>
            </div>


          </div>



<div className='Rodape'>
          <hr />
          <div className="divimg">
            <img className='logoRodape' src="https://www.brq.com/images/logo-brq.png"></img>

          </div>
          </div>


        </Container>
      </Jumbotron>

    )

  }
}


export default home;