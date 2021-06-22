import React, { Component} from 'react';
import { singUpCliente } from '../../actions/authActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Cadastro extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { email, senha } = steps;

    this.state =  { email, senha }; 
  }

  
  componentDidMount() {
    const { singUpCliente } = this.props.singUpCliente
    const user = {
      email:this.state.email.value,
      senha:this.state.senha.value,
    };

    singUpCliente(user);
}
  render() {
    return (
      <div>Informações salvas com sucesso! :)</div>
      );
    }
  };  

  function mapStateToProps(state) {
    return {
      user: state.user
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      singUpCliente: bindActionCreators({singUpCliente}, dispatch)
    }
  }
  

  export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);