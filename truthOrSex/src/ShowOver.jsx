// import { useState } from 'react';
// import { Overlay, Button } from '@joshdschnneider/formation';
// import React from 'react';
// // import ReactDOM from 'react-dom';


// function ShowOver() {
//   const [open, setOpen] = useState(false);

//   function handleOpen() {
//     setOpen(true);
//   }

//   function handleClose() {
//     setOpen(false);
//   }

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open overlay</Button>
//       <Overlay isOpen={open} onClose={handleClose}>
//         <p>Overlaid content</p>
//       </Overlay>
//     </div>
//   );
// }

// export default ShowOver

import { useState } from 'react';
import React from 'react';
import { Modal, Button } from '@joshdschneider/formation';


// import { Modal, Button } from '@joshdschneider/formation'

// import ShowOver from './ShowOver';

function ShowOver() {
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

export default ShowOver;