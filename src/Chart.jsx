

// import { onValue, push, ref } from 'firebase/database';
// import React, { useEffect, useState } from 'react'
// import { db , auth } from './config.js';
// import {  onAuthStateChanged } from "firebase/auth";
// import {useNavigate } from 'react-router-dom';
// import Login from './Authentication/Login.jsx';

//       const user = auth.currentUser;
      
// function Chart() {
//     const [input , setinput] = useState("")
//     const [arr , setarr] = useState([])
//     const [currentuser , setcurrentuser] = useState("")
//     const [username , setusername] = useState("")
//       const navigate = useNavigate("")
    
//     useEffect(()=>{
//         onAuthStateChanged(auth, (user) => {
//   if (user) {
//     setcurrentuser(user)
//     const uid = user.uid;
//     console.log(uid);
//     console.log(user.email);
//     console.log(user.displayName);
//     setusername(user.displayName)    
    
//   } else {
//     alert("please login")

//    navigate("/")
//     // ...
//   }
// });
//     },[])

  


//     function Send() {
//         console.log(input);
//         if (input.trim()) {

//             const msgref = ref(db, "input");
//             push(msgref,{
//                 username : username,
//                 email: currentuser.email, // 👈 sending user email
//                 text : input,
//                 id  : Date.now()
//             }) 
//             setinput("")
// }}
 



// useEffect(()=>{

//     const msgref = ref(db, "input");
//     onValue(msgref, (snapshot) => {
//         const data = snapshot.val();
//         if (data) {
//             const mydata = Object.values(data)  //  ya object ko array may convert karay ga 
//             setarr(mydata)

            
            
//         }
//       });
      
// },[])
  




  
  
//     return (
//     <>


{/* <h2>💬 Real-time Chat</h2>

<div
  style={{
    border : "1px solid black",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    height: "300px",
    overflowY: "auto",
  }}
 >

     {arr.map((items) => (
    <div
      key={items.id}
      style={{
        backgroundColor:
          currentuser.email === items.email ? "lightgreen" : "white",
        padding: "10px",
        margin: "5px",
        borderRadius: "10px",
        maxWidth: "50%",
        alignSelf:
          currentuser.email === items.email ? "flex-end" : "flex-start",
      }}
    >
      <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
        {items.username}
      </p>
      <p>{items.text}</p>
    </div>
  ))}
</div> */}



// <div style={{marginLeft:"10%" , 
//     marginTop : "10px"
// } } >

//   <input onChange={(e)=> setinput(e.target.value) } type="text" placeholder='Enter Text...' value={input}/>
//     <button onClick={Send}>Send</button>
// </div>
 



    
//     </>
//   )
// }

// export default Chart





// import React, { useState } from 'react'
// import {  onAuthStateChanged , signOut   } from "firebase/auth";
// import { push, ref , onValue  } from "firebase/database";
// import {auth ,  db } from './config';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';



// function Chart() {
//   const [input , setinput] = useState("");
//   const [username , setusername] = useState("");
//   const [useremail , setuseremail] = useState("");
//   const [arr , setarr] = useState([])
//   const navigate = useNavigate("")



//   function logout(e) {
//     e.preventDefault()
//   console.log("hellow ");

//   signOut(auth).then(() => {
//     alert("Logout SucessFull");

//     navigate("/")
  

// }).catch((error) => {
//   console.log(error);
  

// });
  
  
// }






//   useEffect(()=>{
//     onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const user = auth.currentUser;
//     console.log(user.displayName);
//     setusername(user.displayName)
//     console.log(user.email);
//     setuseremail(user.email)

    
//     const uid = user.uid;
//     console.log(uid);
    

//   } else {

//     navigate("/")
//   }
// });
//   },[])

//   useEffect(()=>{

//     const msgref = ref(db, "input");
//     onValue(msgref, (snapshot) => {
//         const data = snapshot.val();
//         if (data) {
//             const mydata = Object.values(data)  //  ya object ko array may convert karay ga 
//             setarr(mydata)
//             // console.log(arr);
            

            
            
//         }
//       });
      
// },[])

//   function btn(e) {
//     e.preventDefault()
//     console.log(input)
    
//     if (input.trim()) {
//       const msgref = ref(db,"input");
//       push(msgref , {
//         name : username,
//         email : useremail,
//         text : input,
//         id  : Date.now()
// })
//       setinput("")
// }



    
    
//   }
//   return (
   

//     <>

//     <h1>Chart App  <span>{username}</span>   </h1>


//     <div style={{
//       border : "1px solid black",
//       display : "flex",
//       flexDirection : "column",
//       gap : "15px",
//        overflowY: "auto",
//     }}>




//     {arr.map((items)=>{

//       return <div key={items.id} style={{
//         backgroundColor : useremail === items.email ?  "lightgreen" : "white",
//          alignSelf : useremail === items.email ? "flex-end" : "flex-start"
//       }}>

       
// <div  >
//   <p>{items.name}</p>
//   <h3>{items.text}</h3>
//    <span className="message-time">
//                             {new Date(items.id).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                         </span>
// </div>

//       </div>
      
//     })}
//     </div>

//     <form >
//       <input onChange={(e)=> setinput(e.target.value)}  type="text" placeholder='Enter Message' value={input}/><br />
//       <button onClick={btn}>Send</button>
//       <button onClick={logout}>Logout</button>
//     </form>


//     </>
//   )
// }

// export default Chart

//   messanger ui 

// import React, { useState, useEffect } from 'react';
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { push, ref, onValue } from "firebase/database";
// import { auth, db } from './config';
// import { useNavigate } from 'react-router-dom';
// import './index.css'; // Create this CSS file

// function Chat() {
//   const [input, setinput] = useState("");
//   const [username, setusername] = useState("");
//   const [useremail, setuseremail] = useState("");
//   const [arr, setarr] = useState([]);
//   const navigate = useNavigate();

//   function logout(e) {
//     e.preventDefault();
//     signOut(auth).then(() => {
//       alert("Logout Successful");
//       navigate("/");
//     }).catch((error) => {
//       console.log(error);
//     });
//   }

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const user = auth.currentUser;
//         setusername(user.displayName);
//         setuseremail(user.email);
//       } else {
//         navigate("/");
//       }
//     });
//   }, []);

//   useEffect(() => {
//     const msgref = ref(db, "input");
//     onValue(msgref, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const mydata = Object.values(data);
//         setarr(mydata);
//       }
//     });
//   }, []);

//   function btn(e) {
//     e.preventDefault();
//     if (input.trim()) {
//       const msgref = ref(db, "input");
//       push(msgref, {
//         name: username,
//         email: useremail,
//         text: input,
//         id: Date.now()
//       });
//       setinput("");
//     }
//   }

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       btn(e);
//     }
//   };

//   return (
//     <div className="messenger-app">
//       {/* Header */}
//       <div className="chat-header">
//         <div className="header-content">
//           <div className="user-info">
//             <div className="user-avatar">{username.charAt(0).toUpperCase()}</div>
//             <div className="user-details">
//               <h2>{username}</h2>
//               <span className="status">Online</span>
//             </div>
//           </div>
//           <button className="logout-btn" onClick={logout}>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
//               <path fill="currentColor" d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9z"/>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Chat Messages */}
//       <div className="chat-messages">
//         {arr.map((items) => (
//           <div 
//             key={items.id} 
//             className={`message ${useremail === items.email ? 'sent' : 'received'}`}
//           >
//             {useremail !== items.email && (
//               <div className="message-sender">{items.name}</div>
//             )}
//             <div className="message-bubble">
//               <div className="message-text">{items.text}</div>
//               <div className="message-time">
//                 {new Date(items.id).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Message Input */}
//       <div className="message-input-container">
//         <form onSubmit={btn}>
//           <input 
//             onChange={(e) => setinput(e.target.value)}
//             onKeyPress={handleKeyPress}
//             type="text" 
//             placeholder="Type a message..." 
//             value={input}
//           />
//           <button type="submit" disabled={!input.trim()}>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
//               <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
//             </svg>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Chat;





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
          <button className="logout-btn" onClick={logout} title="Logout">
            <i className="fas fa-sign-out-alt"></i>
          </button>
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