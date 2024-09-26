
 import "./Reminder.css"; 
 import React, { useState } from 'react';


const Reminder = () => {
  const [reminder,setReminder] = useState('');
  const [remins, setRemins] = useState([]);



  function AddtoList(){
    if(reminder.trim()!==''){
      setRemins([... remins,reminder]);
      setReminder('');
    }
  
  }
  return (
    
      
   
    <div>
      
        <h1>ReminderApp</h1>
        <div class="reminder-container">
        <input type="text" id="reminder-input" placeholder="Enter your reminder" value={reminder} onChange={(e)=>setReminder(e.target.value)} />
        <button id="submit-btn" onClick={AddtoList}>Add Reminder</button>
        <ul className="ul">
          
            {
              remins.map((remind,index)=>(
              <li className="li" key={index}>{remind}</li>
              ))
            }
          
        </ul>
        
    </div>
    

    </div>
   
  )
}

export default Reminder