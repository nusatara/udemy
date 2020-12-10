import React, {useState, useEffect} from 'react'
import CountriesList from './Countries.js'
import NumericInput from '../comps/NumericInput'
import Cover from '../comps/Cover'

function AccountPage(props){
    
    const [view, setView] = useState("numview");
    const [loading, setLoading] =useState(false);

    return(
        <div className='oauth-view rel'>
            
            {loading == true && <Cover />}

            <h1 className="s50 otitle fontb">Sing in</h1>
            <h1 className="s23 oline fontn">Enter Your Number</h1>
        
            <select defaultValue={+62} className="iput s24 fontb">
                {
                    CountriesList.map(e =>{
                        return(
                        <option value={e.dial_code}>{e.name} ({e.dial_code})</option>
                        )
                    })
                }
            </select>

            <NumericInput placeholder="0813 0000 0000" className="iput s24 fontb" />
            <button className="button s24 fontb cfff">Continue</button>
        </div>
    )
}
export default AccountPage;