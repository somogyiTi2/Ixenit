import React from 'react'
import { useState } from 'react'
import Mybook from './Mybook'

export const Form = ({MyBooks}) => {
   const [usern, setUsername] = useState('')
    const [fname, setFname] = useState('')
    const [sname, setSname] = useState('')
    const [mail, setMail] = useState('')

const onSubmit = (e)=> {
    e.preventDefault()
    if(!usern){
        alert('Kérlek írj be felhasználó nevet')
        return
      }
    if(!mail){
      alert('Kérlek írj be e-mail címet')
      return
    }
  }
  
    // const konyvneve="Ide a kiválasztott könyv neve";

  return (
    <form style={{backgroundColor:'lightgray'}} 
    onSubmit={onSubmit}>
        <div >
            <label Felhasználó név />
            <input type='text' placeholder='Pl: kiss_bela' 
            value={usern} onChange={(e)=>setUsername(e.target.value)}

            />
        </div>
        <div>
            <label Első név/>
            <input type='text' placeholder='Pl: Kiss' 
            value={fname}  onChange={(e)=>setFname(e.target.value)}

            />
        </div>
        <div>
            <label Utó név />
            <input type='text' placeholder='Pl: Béla' 
            value={sname} onChange={(e)=>setSname(e.target.value)}
            />
        </div>
        <div>
            <label e-mail />
            <input type='mail' placeholder='Pl: belaKiss_Test@gmail.com' 
            value={mail} onChange={(e)=>setMail(e.target.mail)}
            />
        </div>
        <div>
            <p>Az álltalad megrendelt könyvek</p>
            { MyBooks.map((MyBooks) =>
            /* <h1> {MyBooks} </h1>*/
            <Mybook MyBooks={MyBooks}/>)}
        </div>
        <input type='submit' value='Megrendel'/>
    </form>
  )
}
export default Form
