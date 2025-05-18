





import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { push, ref, onValue } from "firebase/database";
import { auth, db } from './config';
import { useNavigate } from 'react-router-dom';
import './chart.css'; // Create this CSS file

function Chart() {
  const [input, setinput] = useState("");
  const [username, setusername] = useState("");
  const [useremail, setuseremail] = useState("");
  const [arr, setarr] = useState([]);
  const [isOnline, setIsOnline] = useState(true);
  const navigate = useNavigate();

  function logout(e) {
    e.preventDefault();
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const user = auth.currentUser;
        setusername(user.displayName);
        setuseremail(user.email);
      } else {
        navigate("/");
      }
    });
  }, []);

  useEffect(() => {
    const msgref = ref(db, "input");
    onValue(msgref, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const mydata = Object.values(data);
        setarr(mydata);
      }
    });
  }, []);

  function sendMessage(e) {
    e.preventDefault();
    if (input.trim()) {
      const msgref = ref(db, "input");
      push(msgref, {
        name: username,
        email: useremail,
        text: input,
        id: Date.now()
      });
      setinput("");
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      sendMessage(e);
    }
  };

  return (
    <div className="whatsapp-vip">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="user-profile">
            <div className="avatar vip">
              {username.charAt(0).toUpperCase()}
              <div className="vip-badge">VIP</div>
            </div>
            <div className="user-status">
              <h3>{username}</h3>
              <span className={`status ${isOnline ? 'online' : 'offline'}`}>
                {isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>
          {/* <button className="logout-btn" onClick={logout} title="Logout">
            <i className="fas fa-sign-out-alt"></i>
          </button> */}
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search messages..." />
          <i className="fas fa-search"></i>
        </div>

        <div className="chat-list">
          {/* You can add chat list items here */}
          <div className="chat-list-item active">
            <div className="avatar">GC</div>
            <div className="chat-info">
              <div className="chat-name">Group  Chat App   </div>
              <div className="last-message">Welcome to VIP Chat</div>
            </div>
            <div className="chat-time">Now</div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        <div className="chat-header">
          <div className="chat-partner">
            <div className="avatar">GC</div>
            <div className="partner-info">
              <h3>Group  Chat</h3>
              <span className="status">Online</span>
            </div>
          </div>
          <div className="chat-actions">
            <button><i className="fas fa-phone"></i></button>
            <button><i className="fas fa-video"></i></button>
             <button className="logout-btn" onClick={logout} title="Logout">
            <i className="fas fa-sign-out-alt"></i>
          </button>
            <button><i className="fas fa-ellipsis-v"></i></button>
          </div>
        </div>

        <div className="messages-container">
          <div className="welcome-banner vip-gradient">
            <h3>Welcome to VIP Chat</h3>
            <p>Enjoy exclusive messaging features</p>
          </div>

          {arr.map((items) => (
            <div 
              key={items.id} 
              className={`message ${useremail === items.email ? 'sent' : 'received'}`}
            >
              {useremail !== items.email && (
                <div className="message-info">
                  <span className="sender-name">{items.name}</span>
                  <span className="message-time">
                    {new Date(items.id).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              )}
              <div className="message-content">
                <div className="message-text">{items.text}</div>
                <div className="message-status">
                  {useremail === items.email && (
                    <span className="time">
                      {new Date(items.id).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  )}
                  {useremail === items.email && (
                    <span className="status-icon">
                      <i className="fas fa-check-double"></i>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="message-input-area">
          <form onSubmit={sendMessage}>
            <div className="input-actions">
              <button type="button"><i className="fas fa-smile"></i></button>
              <button type="button"><i className="fas fa-paperclip"></i></button>
            </div>
            <input 
              type="text" 
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setinput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button type="submit" className="send-btn" disabled={!input.trim()}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chart;