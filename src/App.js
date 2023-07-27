import ConnectForm from './components/ConnectForm';
import ATButtonContainer from './components/ATButtonContainer';
import Terminal from './components/Terminal';
import FOInput from './components/FOInput';
import CustomModal from './components/CustomModal';
import { useState } from 'react';

function App() {
  const [isSendSMSTextModalOpen, setIsSendSMSTextModalOpen] = useState(false);
  const [isSendSMSPDUModalOpen, setIsSendSMSPDUModalOpen] = useState(false);

  const handleSendSMSTextClick = () => {
    setIsSendSMSTextModalOpen(true);
    console.log(isSendSMSTextModalOpen);
    console.log(isSendSMSPDUModalOpen);
  };

  const handleSendSMSPDUClick = () => {
    setIsSendSMSPDUModalOpen(true);
    console.log(isSendSMSTextModalOpen);
    console.log(isSendSMSPDUModalOpen);
  };

  const handleCloseModal = () => {
    console.log(isSendSMSTextModalOpen);
    console.log(isSendSMSPDUModalOpen);
    setIsSendSMSTextModalOpen(false);
    setIsSendSMSPDUModalOpen(false);
  };

  return (
    <div className='App'>
      <h1 style={{ textAlign: 'center' }}>K4203 AT Command Interface</h1>
      <div style={{ width: '50%', margin: 'auto' }}>
        <FOInput className='at-input' placeholder='Enter AT Command Here' />
      </div>
      <ATButtonContainer
        onSendSMSTextClick={handleSendSMSTextClick}
        onSendSMSPDUClick={handleSendSMSPDUClick}
      />
      <ConnectForm />
      {isSendSMSTextModalOpen && (
        <CustomModal
          title='Send SMS'
          subtitle='Send SMS in text mode.'
          label1='Enter Phone Number:'
          label2='Enter Message:'
          input1class='phone-input'
          input2class='message-input'
          smsMode='text'
          onClose={handleCloseModal}
        />
      )}
      {isSendSMSPDUModalOpen && (
        <CustomModal
          title='Send SMS'
          subtitle='Send SMS in PDU mode.'
          label1='Enter CMGS Number:'
          label2='Enter PDU Message:'
          input1class='cmgs-input'
          input2class='pdu-input'
          smsMode='pdu'
          onClose={handleCloseModal}
        />
      )}
      <Terminal />
    </div>
  );
}

export default App;
