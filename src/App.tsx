import Todos from './components/Todos';

function App() {
  return (
    <div>
      {/* We're using this component in an incorrect way */}
      {/* <Todos /> */}
      {/* Property 'items' is missing in type '{}' but required in type '{ items: string[]; }'.ts(2741) */}

      <Todos items={['Learn React', 'Learn TypeScript']} />
    </div>
  );
}

export default App;
