import React, { PropsWithChildren, useState } from 'react';

import Todo from '../models/todo';

// Type Alias
type TodosContextObj = {
  items: Todo[];
  // Add type definition
  // Note: It's a function that should get some text instead of no parameter
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

// Create TodosContext by calling createContext() function
// function React.createContext<unknown>(defaultValue: unknown): React.Context<unknown>
// Create context actually wants a default value

// Describe the shape of this todos context
// const TodosContext = React.createContext({
//   // We have items array

//   // Add TypeScript Logic
//   // Which kind of values should eventually endup in this array?
//   items: [],
//   addTodo: () => {},
//   removeTodo: (id: string) => {},
// });

// For that reason, create context is also a generic type so we can add those angle brackets here after create context in front of the parameter list to better describe our context object because here in between the curly braces {} we're not setting up some type definitions.
// This here is some concrete JavaScript code where we create a JavaScript object with some properties. So here we're not setting up some type.
// The only type we're setting up here is this argument type string because we're creating a concrete function.
// const TodosContext = React.createContext<>({
//   // We have items array

//   // Add TypeScript Logic
//   // Which kind of values should eventually endup in this array?
//   items: [],
//   addTodo: () => {},
//   removeTodo: (id: string) => {},
// });

// To define the overall type of this object here, we need to use this generic type feature between the angle brackets and then describe our context object type here.
/*
1. The items should be a type of Todo array i.e Todo[]
*/

// const TodosContext = React.createContext<{
//   items: Todo[]; // Import Todo from the models folder | Pure type definition
//   addTodo: () => void; // Function to add todo which returns nothing and also accept no parameter
//   removeTodo: (id: string) => void; // Function to remove todo which returns nothing but accept an argument of type string.
// }>({
//   // This is a concrete JavaScript code where we create a JavaScript Object with some properties.
//   // We have items array

//   // Add TypeScript Logic
//   // Which kind of values should eventually endup in this array?
//   items: [],
//   addTodo: () => {},
//   removeTodo: (id: string) => {},
// });

// TodosContextObj
// Use Type Alias
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

/*
Now I'll create such a context provider component which will be responsible for managing that context state.
*/

// It's a Function Component so set React.FC as a type to make it clear that we'll store a functional component in there so we should set this to React.FC as a type to make it clear that we'll store a functional componet in there.
// Return some rendereable content here because that makes up a functional component.
// The children is a default props
// Manage todo state in TodosContextProvider Component
// Because children is a default prop, so we don't need to describe this shape of props for that.
// I wanna manage my state for this context.
// So therefore in there we use useState and for that make sure you import useState from react and manage the state here as we did before in App.tsx file
const TodosContextProvider: React.FC<PropsWithChildren> = props => {
  // ADD STATE MANAGEMENT CODE AND HANDLERS FROM APP.TSX FILE

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos(prevState => {
      return prevState.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  // Constrct contextValue of that shape here so of these types and values and therefore here I can add data
  // We're getting red squiggly lines because actually our context value object doesn't have the shape that we describe up here when we create context
  // What's the difference?
  // The difference is addTodo because up here we define addTodo does not take any parameters but in handler it takes a parameter when we then create the concrete function for this object.

  // Add type annotation
  //   const contextValue: {
  //     items: Todo[];
  //     addTodo: () => void;
  //     removeTodo: (id: string) => void;
  //   } = {
  //     items: todos,
  //     addTodo: addTodoHandler, // Type '(text: string) => void' is not assignable to type '() => void'.ts(2322)
  //     removeTodo: removeTodoHandler,
  //   };

  // Use Type Alias
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler, // Type '(text: string) => void' is not assignable to type '() => void'.ts(2322)
    removeTodo: removeTodoHandler,
  };

  // And now we can set the value here equal to context value
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

// Now we wanna connect the our created context to the different components.

export default TodosContextProvider;
