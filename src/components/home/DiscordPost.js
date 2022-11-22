import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import env from "react-dotenv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const baseUrl = process.env.REACT_APP_BASE_URL;
console.log(`${baseUrl}/api/messages`)
const DiscordPost = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    console.log("ddddd")
    const fetchData = async () => {
      console.log("pppp")
    try {
        const result = await axios.get(`${baseUrl}/api/messages`)
        console.log(";;;", result.data);
        setMessages(result.data.reverse())
      } catch(err) {
        console.log("Error!");
      }
    
  }
  setInterval(fetchData, 1000);
}, [])
  return (
    <>
      <div className="container">
        <div className="discord-post d-flex flex-column">
          <div className="post-title mt-5">
            <h1>Discord Post</h1>
          </div>
          <div className="post-content shadow-lg mt-5">
            {messages.map((message, index) => (
                <div className="d-flex flex-row gap-5 mt-5 align-items-center">
                  <FontAwesomeIcon icon={faUserCircle} style={{fontSize:"48px", color:"#38444d"}}/>
                  <div className="msg-pane p-2 position-relative shadow">
                    <div className="msg-sender d-inline text-dark">{message.name}</div>
                    <div className="msg-send-date d-inline text-dark">{message.date}</div>
                    <div key={index} className="message">{message.content}</div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DiscordPost;
