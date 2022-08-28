import React from 'react';
import { useState } from 'react';
import { Form, Input, Button, Popover } from '@joshdschneider/formation';



// function App() {
//   const [value, setValue] = useState('');

//   function handleChange(event) {
//     setValue(event.target.value);
//   }

//   function handleSubmit() {
//     alert(value);
//   }

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Input value={value} onChange={handleChange} />
//       <Button>Submit</Button>
//     </Form>
//   );
// }
function App() {
  const content = (
    <div>
      <p>Are you sure?</p>
      <Button>Delete</Button>
    </div>
  );

  return (
    <div>
      <Popover selector="#delete_button" content={content} />
      <Button id="delete_button">Delete</Button>
      <Button id="delete_button">Delete</Button>
    </div>
  );
} 

export default App