import React, { useState } from 'react';
import axios from "axios"
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [reqresp , setreqresp] = useState([])
  //How to schedule dmv appointment
  const handleSendMessage = async (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    await axios.post("http://localhost:8080/dmvguide",{"question":message}).then((resp,err)=>{if(err){
        console.log("faced an issue as",err)
    
    }
    else{
        console.log(resp)
        setMessages([...messages, {question:message,answer:resp.data}]);
 
    }
    console.log("done")
})
    event.target.reset();
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <div>
        {messages.map((m, index) => (
          <p key={index}>question : {m.question} answer : {m.answer}</p>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input type="text" name="message" placeholder="Type your message here" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;