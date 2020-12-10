import React, {Component} from 'react'
import CountriesList from './Countries.js'
import NumericInput from '../comps/NumericInput'
import Cover from '../comps/Cover'
import Button from '../components/atoms/Button';

import { connect } from 'react-redux'
import { registerUserAPI } from '../config/redux/action'


class RegisterPage extends Component {
    state= {
        email: '',
        password:'',
    }
    handleChangeText = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleRegisterSubmit = async () =>{
        const{email, password} = this.state
        console.log('data before send: ', email, password)
        const res = await this.props.registerAPI({email, password}).catch(err=>err);
        if(res){
            this.setState({
                email: '',
                password: ''
            })
        }
    }
    render(){
    return(
        <div className='oauth-view rel'>
            

            <h1 className="s50 otitle fontb">Create Acount</h1>
        
            <input className="iput s24 fontb" id='email' placeholder='Email' type='text' onChange={this.handleChangeText} value={this.state.email} />
            <input className="iput s24 fontb" id='password' placeholder='Password' type='password' onChange={this.handleChangeText} value={this.state.password}/>

            
            <Button onClick={this.handleRegisterSubmit} title='Register' loading={this.props.isLoading}/>
        </div>
    )
    }
}
const reduxState = (state)=>({
    isLoading: state.isLoading
})
const reduxDispatch = (dispatch) =>({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})
export default connect(reduxState, reduxDispatch)(RegisterPage);