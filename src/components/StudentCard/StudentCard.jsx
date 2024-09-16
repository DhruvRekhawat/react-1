import React from 'react'


import './studentCard.css'


const StudentCard = (users) => {

    console.log(users)
   

  return (
  
            <>
            {
                users.map((el,index)=>{
                    return (
                        <div className='card-parent'>
                        <div className='card-child-image'>
                        <img src={users[index].image} alt="" />
                        </div>
                
                        <div className='card-child-desc'>
                            <h2>{users[index].username}</h2>
                            <p>{users[index].userDescription}</p>
                            <button>Read More</button>
                        </div>
                        </div>
                        
                    )
                })
            }

            </> 


       
  
  )
}

export default StudentCard