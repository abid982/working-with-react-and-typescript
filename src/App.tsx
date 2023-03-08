import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // Create some dummy Todos Objects/Instances
  // Array of Objects
  const todos = [new Todo('Learn JavaScript'), new Todo('Learn TypeScript')];

  return (
    <div>
      {/* We're using this component in an incorrect way */}
      {/* <Todos /> */}
      {/* Property 'items' is missing in type '{}' but required in type '{ items: string[]; }'.ts(2741) */}

      {/* <Todos items={['Learn React', 'Learn TypeScript']} /> */}
      {/* Note: We also have to change the type to accept array of objects instead array of strings */}
      {/* <Todos items={['Learn React', 'Learn TypeScript']} /> */}
      {/* PASS TODOS AS A VALUE TO THE ITEMS PROP TO THE TODO COMPONENT */}
      {/* Hover over items property */}
      {/* Type 'Todo' is not assignable to type 'string'. */}
      <Todos items={todos} />
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
