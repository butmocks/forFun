// import { useState } from 'react';
// import React from 'react';
// import { Modal, Button } from '@joshdschneider/formation';

// // import { Modal, Button } from '@joshdschneider/formation'

// // import ShowOver from './ShowOver';

// function App() {
//   const [open, setOpen] = useState(false);

//   function handleOpen() {
//     setOpen(true);
//   }

//   function handleClose() {
//     setOpen(false);
//   }

//   return (
//     <div>
//       <Button onClick={handleClick}>Open modal</Button>
//       <Modal isOpen={open} onClose={handleClose}>
//         <p>Hello from the modal!</p>
//       </Modal>
//     </div>
//   );
// }

// export default App

import React from 'react';

import { Button, Modal } from '@joshdschneider/formation';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return;

  <Modal isOpen={open} onClose={handleClose}>
    <p>Hello from the modal!</p>
  </Modal>;
}

export default App;
