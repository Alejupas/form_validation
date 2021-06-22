import React, { Component } from 'react';



class MainForm extends Component {
    state = { 
        account: {
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
            agreement: '',
        }
     };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('form stopped');
    }

    render() { 
        return ( <div className='main-form'>
            <h1>Main Form</h1>
            <form onSubmit={this.handleSubmit} autoComplete='off'>
                <input className='main-form' type="text" name="username" placeholder="Username" />
                <input className='main-form' type="text" name="email" placeholder="Email" />
                <input className='main-form' type="text" name="password" placeholder="Password" />
                <input className='main-form' type="text" name="repeatPassword" placeholder="repeat password" />
                <div className='check-group'>
                    <input type="checkbox" name="agreement" id='agreement'/>
                    <label htmlFor="agreement">Agree?</label>
                </div>
                    <button type='submit'>Send</button>
            </form>
        </div> );
    }
}
 
export default MainForm;