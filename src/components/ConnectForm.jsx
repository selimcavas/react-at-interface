import '../styles/ConnectForm.css';
import axios from 'axios';
import { useState } from 'react';
import FOInput from './FOInput';
import { Grid } from 'react-loader-spinner';

const ConnectForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    //pass credentials to backend using axios
    axios
      .post('http://localhost:3001/connect', {
        ip: e.target.IP.value,
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((res) => {
        if(res.data === 'Authentication error'){
          alert('Authentication error');
          setIsLoading(false);
          return;
        }
        else if(res.data === 'Error'){
          alert('Error');
          setIsLoading(false);
          return;
        }
        else {
          console.log(res);
          setIsSubmitted(true);
          setIsLoading(false);
          console.log(isSubmitted);
          //access terminal text area here and write to it
          const terminal = document.querySelector('.terminal-textarea');
          terminal.value += res.data;
          terminal.scrollTop = terminal.scrollHeight;
        }
      });
  };

  if (isSubmitted) {
    return null;
  }

  return (
    <div className="background-shadow">
      <div className="connect-div">
        <h1>Connect to Raspberry Pi</h1>
        <form onSubmit={handleSubmit}>
          <label>IP</label>
          <FOInput type="text" name="IP"/>
          <label>Username</label>
          <FOInput type="text" name="username"/>
          <label>Password</label>
          <FOInput type="password" name="password"/>
          <button type="submit" className="submit-button">
            {isLoading ? <Grid
                height="25"
                width="25"
                color="#ffffff"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              /> : 'Connect'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConnectForm;
