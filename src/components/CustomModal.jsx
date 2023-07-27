
import React, { useState } from 'react';
import '../styles/CustomModal.css';
import FOInput from './FOInput';
import axios from 'axios';
import { Grid } from 'react-loader-spinner';

const CustomModal = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if(props.smsMode === "text"){
            axios.post
                ('http://localhost:3001/4', {
                    phone: document.querySelector('.phone-input').value,
                    message: document.querySelector('.message-input').value
                }).then((res) => {
                    console.log(res);
                    const terminal = document.querySelector('.terminal-textarea');
                    terminal.value += res.data;
                    terminal.scrollTop = terminal.scrollHeight;
                    setIsLoading(false);
                    props.onClose();
                }
            ).catch((err) => {
                console.log(err);
                }
            );
        }
        else if(props.smsMode === "pdu"){
            axios.post
                ('http://localhost:3001/5', {
                    cmgs: document.querySelector('.cmgs-input').value,
                    pdu: document.querySelector('.pdu-input').value
                }).then((res) => {
                    console.log(res);
                    const terminal = document.querySelector('.terminal-textarea');
                    terminal.value += res.data;
                    terminal.scrollTop = terminal.scrollHeight;
                    setIsLoading(false);
                    props.onClose();
                }
            ).catch((err) => {
                console.log(err);
                }
            );
        }
    };
      
    return (
        <div className="background-shadow">
            <div className="modal-div">
            <button className="close-button" onClick={props.onClose}>
            X
            </button>
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>
                <form onSubmit={handleSubmit}>
                    <label>{props.label1}</label>
                    <FOInput type="text" className={props.input1class}/>
                    <label>{props.label2}</label>
                    <FOInput type="text" className={props.input2class}/>
                    <button type="submit" className="submit-button">
                        {isLoading ? <Grid
                            type="ThreeDots"
                            color="#ffffff"
                            height={20}
                            width={20}
                        /> : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CustomModal;