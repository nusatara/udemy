import React, {Component} from 'react'
import CountriesList from './Countries.js'
import NumericInput from '../comps/NumericInput'
import Cover from '../comps/Cover'
import Button from '../components/atoms/Button';

import { connect } from 'react-redux'
import { loginUserAPI } from '../config/redux/action'
import {
    NavLink,    
} from "react-router-dom";

class LoginPage extends Component {
    state= {
        email: '',
        password:'',
    }
    handleChangeText = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleLoginSubmit = async () =>{
        const{email, password} = this.state
        const{history} = this.props;
        const res = await this.props.loginAPI({email, password}).catch(err => err);
        if(res){
            console.log("Login Success", res);
            localStorage.setItem('userData', JSON.stringify(res))
            this.setState({
                email: '',
                password: ''
            })
            history.push('/')
        }else{
            console.log("Login Failed")
        }
    }
    render(){
    return(
        <div className='oauth-view rel'>
            

            <h1 className="s50 otitle fontb">Sing in</h1>
            <h1 className="s23 oline fontn">Enter Your Email Addres</h1>
        
            <input className="iput s24 fontb" id='email' placeholder='Email' type='text' onChange={this.handleChangeText} value={this.state.email} />
            <input className="iput s24 fontb" id='password' placeholder='Password' type='password' onChange={this.handleChangeText} value={this.state.password}/>

            <NavLink to={"regis"} className={"aic link noul flex c333"}>
                    <h1 className="s20 oline fontn">Create Acount</h1>
            </NavLink>
            <Button onClick={this.handleLoginSubmit} title='Login' loading={this.props.isLoading}/>
        </div>
    )
    }
}
const reduxState = (state)=>({
    isLoading: state.isLoading
})
const reduxDispatch = (dispatch) =>({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})
export default connect(reduxState, reduxDispatch)(LoginPage);
// export default LoginPage;