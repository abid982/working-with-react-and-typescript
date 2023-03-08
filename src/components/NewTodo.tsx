// const NewTodo = () => {
//   return (
//     <form>
//       <label htmlFor="">Todo text</label>
//       <input type="text" id="text" />
//       <button>Add Todo</button>
//     </form>
//   );
// };

// Just focus on React and TypeScript
// Handle form submission and prevent browser default
// I wanna also get the user input
// For getting input we of course learned about two main approaches.
// We can either listen to every keystroke with useState, or we use a Ref to then get the user input once the form is submitted.

import React from 'react';
// Import useRef hook from react
import { useRef } from 'react';
const NewTodo = () => {
  // Create a ref by calling useRef() hook
  //   const todoTextInputRef = useRef();
  // Add the angle bracket to explicitly set the concrete type of ref we wanna creates in this instance
  // So now we are making it clear that the ref we're creating here will actually be connected to an HTMLInputElement.
  // And we're getting this error because actually we have to set a default value here because this ref could already be a sign to some other element maybe, out of the box by default. And that's why we should provide a starting value here and at the beginning, we have no connection and therefore, the starting value is null.
  //   const todoTextInputRef = useRef<HTMLInputElement>();
  // With no initial value
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // For button
  //   const todoTextInputRef = useRef<HTMLButtonElement>();
  // For paragraph
  //   const todoTextInputRef = useRef<HTMLParagraphElement>();
  // mdn input

  // Form submit handler
  // Now we're getting red squiggly lines, because TypeScript has no idea which type of data this event thing will be.
  // We as a developer know that it will actually be such an event object which is emitted and passed automatically when we connect this function to the appropriate event listener.
  // But that's not something TypeScript can know. So we have to add a type annotation here. And here, since we'll add this function to the submit event through React. So with help of React. With help of React's onSubmit property later. Since we'll do that, the type here will be the React.formEvent.
  // And you can actually omit this import as you learned. That's a special type provided by our React package in the end, which is this event object type, which we'll get automatically when listening to the form submission. There also is a MouseEvent, for example, which you would get if you add onClick listener. That's then the event object you get. But for the form submission, it's the FormEvent. And then here we can call preventDefault. You now see I get auto completion, because now I'm clearly describing which type of data we'll get here. Now we can connect this here and pass the submitHandler to onSubmit. By the way, if I would be using MouseEvent here, you see I'm now getting an error down there with a very long message basically telling me that the type of function I'm pointing at it here for onSubmit is not the type of function React is expecting. Because for the onSubmit prop, React is expecting a pointer and a function that actually gets the argument of type FormEvent, not of type MouseEvent. So that's an extra little check, which we get here, which is great. And now with that turn back to FormEvent, everything is working again. Now we wanna extract the entered input. And we'll do that with help of Refs here.

  //   const submitHandler = event => {
  //     event.preventDefault();
  //   };

  // React is expecting a pointer and a function that actually gets the argument of type FormEvent, not of type MouseEvent. So that's an extra little check, which we get here, which is great.
  //   const submitHandler = (event: React.MouseEvent) => {
  //     event.preventDefault();
  //   };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //   Get the entered text by referring to the todoTextInputRef.current
    //   'todoTextInputRef.current' is possibly 'null'.ts(18047)
    // const enteredText = todoTextInputRef.current?.value;
    //   Solution
    //   const enteredText: string | undefined
    // const enteredText = todoTextInputRef.current?.value;
    // Will never be null 100% sure
    //   Regular operators ?, ! (Generally important operators in TypeScript)
    const enteredText = todoTextInputRef.current!.value;

    //   Validtaing text entered by user
    // if (enteredText?.trim().length === 0) {
    if (enteredText.trim().length === 0) {
      //   throw an error
      return;
    }

    //   Communicate with App component
  };

  return (
    //   Connect form with handler
    <form onSubmit={submitHandler}>
      <label htmlFor="">Todo text</label>
      {/* Connect ref to an input element or a textarea or something like this */}
      {/* Set the special ref property and point at our ref in this case todoTextInputRef */}
      {/* Hover over and we get an error ref is receiving the wrong type of data. */}
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
