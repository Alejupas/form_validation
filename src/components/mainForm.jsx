import React, { Component } from 'react';

class MainForm extends Component {
  state = {
    account: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      agreement: '',
    },
    errors: {

    }
  };

  //gali but ir ne arrow funkcija nes ne is paspaudimo kviesim, o is handleSUbmit
  validateForm(){
    if(this.state.account.username.length === 0){
        this.setState({errors: {username: 'Cannot be blank bitch. Fuck you.'}})
        return;
    }
    if(this.state.account.username.length <= 3){
        this.setState({errors: {username: 'Username should be at least 4 letters'}})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Stoped form');
    this.setState({errors: {} })
    this.validateForm()
  };

  handleChange = (event) => {
    console.log(event);
    this.setState({ account: { ...this.state.account, [event.target.name]: event.target.value } });
  };

  handleCheck = (event) => {
    console.log(event);
    this.setState({ account: { ...this.state.account, agreement: event.target.checked } });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="main-form">
        <h1>Main form</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <input
            onChange={this.handleChange}
            value={account.username}
            className={'input ' + (errors.username && 'is-invalid')}
            type="text"
            name="username"
            placeholder="Username"
          />
          {errors.username && <p className='err-msg'>{errors.username}</p>}
          
          <input
            onChange={this.handleChange}
            value={account.email}
            className="input"
            type="text"
            name="email"
            placeholder="email"
          />
          <input
            onChange={this.handleChange}
            value={account.password}
            className="input"
            type="text"
            name="password"
            placeholder="password"
          />
          <input
            onChange={this.handleChange}
            value={account.repeatPassword}
            className="input"
            type="text"
            name="repeatPassword"
            placeholder="repeatPassword"
          />
          <div className="check-group">
            <input
              onChange={this.handleCheck}
              value={account.agreement}
              type="checkbox"
              name="agreement"
              id="agreement"
            />
            <label htmlFor="agreement">Agree?</label>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default MainForm;