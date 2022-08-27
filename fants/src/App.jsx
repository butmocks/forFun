import { useState } from 'react';
import React from 'react';

import { Modal, Button } from '@joshdschnneider/formation';
import ShowOver from './ShowOver';
function App() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleClick}>Open modal</Button>
      <Modal isOpen={open} onClose={handleClose}>
        <p>Hello from the modal!</p>
      </Modal>
    </div>
  );
}

export default App