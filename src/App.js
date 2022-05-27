import { IconButton, FormControl, Input, InputLabel } from '@mui/material';
import React, {useEffect, useState} from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase/compat/app'
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]); 
  const [username, setUsername] = useState('');
  console.log(messages);
  const sendMessge = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
    })
  }, []);

  useEffect(() => {
      setUsername(prompt('Please enter your name'));
  },[])
  return (
    <div className="App">
        <img className='app__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/2048px-Facebook_Messenger_logo_2018.svg.png" alt="" />
        <h1>Coding with ZOOMIXinfo</h1>
        <h2>Welcome {username}</h2>
        <form className="app__form">
        <FormControl className='app__formControler'>
          <InputLabel>Type your message</InputLabel>
          <Input className='app__input' value={input} onChange={ event => setInput(event.target.value)}/>
          <IconButton className='app__button' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessge}> <SendIcon /></IconButton>
        </FormControl>
        </form>
        <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username = {username} message={message}/>
            ))
        }
        </FlipMove>
    </div>
  );
}

export default App;
