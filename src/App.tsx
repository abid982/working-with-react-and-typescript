// Import useState from React
import { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // Create some dummy Todos Objects/Instances
  // Array of Objects
  // Get rid of those dummy todos and instead we'll call useState here.
  // const todos = [new Todo('Learn JavaScript'), new Todo('Learn TypeScript')];

  // Managing State in TypeScript
  // So it's time to for useState because of course we need to manage todos array with state so that when we change it, this component re-renderes and therefore this todos items also re-renders and is updated.
  // const setTodos: React.Dispatch<React.SetStateAction<undefined>>
  // To change state to dispatch a state update so to say.
  // Pass initial vlaue to useState() and that could be an array which is empty.
  // But here we actually now introduced a subtile problem if we write it like this.
  // The problem is that we're passing in an empty array as a default value but TypeScript is not able to infer which types of values should be accepted in that array eventually.
  // That's why if hover on todos we see const todos: never[], never array which basically means it always must be an empty array, no values are allowed in there and that's of course not what we want.
  // const [todos, setTodos] = useState([]);
  // To make it clear that we initially have an empty array but that eventually we wanna have an array full of todo items we again need to tell TypeScript somehow.
  // And we can tell TypeScript because useState function out of the box is a generic function so that we can set the type of data we wanna eventually store in this state.
  // So we add angle brackets again and now we wanna make it clear that the kind of data managed by the state will be an array of todos. We do this by using our Todo type from that models folder and then square brackets.
  // That means that this state will manage an array of todos of type Todo which defines the shape of data.
  // Initially it's an empty array but if we do add items to this array eventually they have be todo items, not strings, not numbers, tood items which have the shape of the todo object class here, we created here and now that's the proper way of defining this state.
  // And then in addTodoHandler we wanna create our newTodo
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState<Todo[]>([]);

  // Define function
  // Now the shape of this function is that it shouldn't return anything. So not having a return statement here is fine but it should accept the parameter. It should get the actual todoText which should be a type of string.

  const addTodoHandler = (text: string) => {
    // Manipulate array
    // State manage

    // Create new todo by calling newTodo and passing in the todo text as a value to the constructor function to create an object/instance and then we wanna call setTodos and update our state.
    const newTodo = new Todo(text);

    // setTodos(newTodo);

    // Update state based on previous state we should use function for updating state and in this function we get the previous state and then we need to return our updated state
    // Concat is a method which we can call that will create a new array, which we sould do because we should not mutate the existing array and we should return a new array which then will be used as a new state by React and this new array contains this newTodo.
    // That's how we can properly update the state here.
    setTodos(prevState => {
      return prevState.concat(newTodo);
    });
  };

  // But this function definition is not correct
  // In the end here I need some identification criteria and for Todos since every todo has a unique id
  const removeTodoHandler = (todoId: string) => {
    console.log('Todo remove handler');
    // How would we know which todo to remove?
    console.log('Todo Id:');
    console.log(todoId);

    // Update state
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div>
      {/* Add NewTodo Component */}
      {/* And ofcourse the todos array here should now be managed with the help of this NewTodo component. Whenever a new Todo is added there it should be added to this array here so that this array is not hard coded but dynamic. */}
      {/* Couple of steps:
        1. We need to use state to manage this array so this App component will rerender when this array changes.
        2. And we need a way of communicating back from NewTodo into this App component.
        // In NewTodo Component call a function which will be stored in App Component. We can pass pointers at functions to our components.
      */}

      {/* <NewTodo /> */}
      {/* Error */}
      {/* Property 'onAddTodo' is missing in type '{}' but required in type '{ onAddTodo: (text: string) => void; }'.ts(2741) */}

      {/* Pass a function with proper structure/shape so define a functin in App.tsx */}
      {/* Type '(text: number) => void' is not assignable to type '(text: string) => void'.
       */}
      <NewTodo onAddTodo={addTodoHandler} />

      {/* We're using this component in an incorrect way */}
      {/* <Todos /> */}
      {/* Property 'items' is missing in type '{}' but required in type '{ items: string[]; }'.ts(2741) */}

      {/* <Todos items={['Learn React', 'Learn TypeScript']} /> */}
      {/* Note: We also have to change the type to accept array of objects instead array of strings */}
      {/* <Todos items={['Learn React', 'Learn TypeScript']} /> */}
      {/* PASS TODOS AS A VALUE TO THE ITEMS PROP TO THE TODO COMPONENT */}
      {/* Hover over items property */}
      {/* Type 'Todo' is not assignable to type 'string'. */}

      {/* Property 'onDeleteTodo' is missing in type '{ items: Todo[]; }' but required in type '{ items: Todo[]; onDeleteTodo: () => void; }'.ts(2741)
       */}
      <Todos items={todos} onDeleteTodo={removeTodoHandler} />
    </div>
  );
  /*
    Result: We're making it very clear which shape our data should have and that simply allows us a developer to ensure that this code is clean that it has a clear structure and that it's way harder to misuse our components and that errors can be prevented during development instead of at runtime when we test the app.
  */
}

export default App;

/**
 * ADDING A DATA MODEL
 */

/*
Let's refine our it
const Todos: React.FC<{ items: string[] }> = props => { }

It would be unrealistic that every Todo is an object, an object with an ID maybe, with a Todo text, maybe a title and a subtitle and maybe also more metadata that is attached to a Todo, like the author, the time when it was created, if it's currently active or not? There are endless ways of incorporating Todos

Describe our data model
models folder
*/
