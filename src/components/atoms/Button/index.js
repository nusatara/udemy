import React from 'react'

const Button = ({title, onClick, loading})=>{
    if(loading){
        return <button className=' disable s24 fontb cfff' >Loading...</button>
    }
    return <button className='button s24 fontb cfff' onClick={onClick}>{title}</button>
}
export default Button;
