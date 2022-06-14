import logo from './logo.svg';
import './App.css';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState, forwardRef } from 'react';
import { Tooltip, IconButton, Button } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


function App() {
  const [value, setValue] = useState(50)

  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh'
    }}>
      <div
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'skyblue',
          position: 'absolute',
          top: 0
        }}
      >

      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Tooltip title="Hello" arrow>
          <IconButton onClick={() => {
            window.alert('Dont touch me!');
          }}>
            <AccessAlarmIcon />
          </IconButton>
        </Tooltip>
        {!window.installPrompt ? null : (
          <Button variant='contained' onClick={() => {
            window.installPrompt.prompt();
          }}>Install App</Button>
        )}
        
      </div>
    </div>
  );
}

export default App;
