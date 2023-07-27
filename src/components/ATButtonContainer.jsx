
import axios from 'axios';
import '../styles/ATButtonContainer.css';

const clearTerminal = () => {
    const terminal = document.querySelector('.terminal-textarea');
    terminal.value = '';
};

const executeOption = (o) => {
    switch(o){
        case 1:
            const atCommand = document.querySelector('.at-input').value;
            console.log(atCommand);
            axios.post
                ('http://localhost:3001/1', {
                    command: atCommand
                }).then((res) => {
                    console.log(res);
                    const terminal = document.querySelector('.terminal-textarea');
                    terminal.value += res.data;
                    terminal.scrollTop = terminal.scrollHeight;
                }
            ).catch((err) => {
                console.log(err);
            }
        );
        break;
        case 2:
            axios
                .get('http://localhost:3001/2')
                .then((res) => {
                    console.log(res);
                    const terminal = document.querySelector('.terminal-textarea');
                    terminal.value += res.data;
                    terminal.scrollTop = terminal.scrollHeight;
                }
            ).catch((err) => {
                console.log(err);
            }
        );
        break;
        case 3:
            axios
                .get('http://localhost:3001/3')
                .then((res) => {
                    console.log(res);
                    const terminal = document.querySelector('.terminal-textarea');
                    terminal.value += res.data;
                    terminal.scrollTop = terminal.scrollHeight;
                }
            ).catch((err) => {
                console.log(err);
            }
        );
        break;
        case 4:
            const phone = document.querySelector('.phone-input').value;
            const message = document.querySelector('.message-input').value;
            console.log(phone + " " + message);
            axios.post
                ('http://localhost:3001/4', {
                    phone: phone,
                    message: message
                }).then((res) => {
                    console.log(res);
                    const terminal = document.querySelector('.terminal-textarea');
                    terminal.value += res.data;
                    terminal.scrollTop = terminal.scrollHeight;
                }
            ).catch((err) => {
                console.log(err);
            }
        );
        break;
        case 5:
            const cmgs = document.querySelector('.cmgs-input').value;
            const pdu = document.querySelector('.pdu-input').value;
            console.log(cmgs + " " + pdu);
            axios.post
                ('http://localhost:3001/5', {
                    cmgs: cmgs,
                    pdu: pdu
                }).then((res) => {
                    console.log(res);
                    const terminal = document.querySelector('.terminal-textarea');
                    terminal.value += res.data;
                    terminal.scrollTop = terminal.scrollHeight;
                }
            ).catch((err) => {
                console.log(err);
            }
        );
        break;
        default:
            console.log('default case');
    };
};


const ATButtonContainer = (props) => {
    return (
        <div className="button-container">
            <button className="at-button" onClick={() => executeOption(1)}>Execute</button>
            <button className="at-button" onClick={() => executeOption(2)}>Get Unread SMS</button>
            <button className="at-button" onClick={() => executeOption(3)}>Get All SMS</button>
            <button className="at-button" onClick={props.onSendSMSTextClick}>Send Text SMS</button>
            <button className="at-button" onClick={props.onSendSMSPDUClick}>Send PDU SMS</button>
            <button className="at-button" onClick={clearTerminal} style={{backgroundColor: "rgb(210, 15, 57)"}}>Clear</button>
        </div>
    );
};

export default ATButtonContainer;
    