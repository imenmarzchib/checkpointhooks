import React, { useState } from 'react'
import { Button } from "react-bootstrap";
function Add({addmovie}) {
    const [show, setShow] = useState(false);
    const[newmovie,setNewmovie]=useState({
        name: "",
        description: "",
        posterurl: "",
        rating: 0,
      });
    return (
        <div className='page1'>
            <div className='page2' >
                <button className="btn-add" onClick={() => setShow(!show)}>Add New Movie</button>
                <div className='modal-bg'>
                    {
                        show ? (
                           
                            <div className='modal-content'>
                                <input className='input' type="text" placeholder='enter name' onChange={(e)=>setNewmovie({...newmovie,name:e.target.value})} />
                                <input className='input' type="text" placeholder='enter description' onChange={(e)=>setNewmovie({...newmovie,description:e.target.value})} />
                                <input className='input' type="text" placeholder='enter Url' onChange={(e)=>setNewmovie({...newmovie,posterurl:e.target.value})} />
                                <input className='input' type="number" placeholder='click sur rate' onChange={(e)=>setNewmovie({...newmovie,rating:e.target.value})} />
                                <button className='modal-btn btn-add'  onClick={() => 
                                  addmovie(newmovie)}>Add Movie
                                </button>
                            </div>
                        ) : null
                    }
                </div>
            </div>

        </div>
    )
}

export default Add;