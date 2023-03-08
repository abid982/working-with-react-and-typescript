// How a Todos look like
// type
// interface
// class

// Working with TypeScript and Classes
// Vaniall JavaScript Class
class Todo {
  // Types
  // A Todos Object will always have an id and text field property
  // id field with type string
  // Type annotations on properties
  // TypeScript
  // To make it clear what types of filed should be we expect
  id: string;
  text: string;

  // Property 'id' has no initializer and is not definitely assigned in the constructor.ts(2564)
  // Property 'text' has no initializer and is not definitely assigned in the constructor.ts(2564)

  // Instantiate Classs
  // Todo text
  // Type annotations
  // When we creat a Todo Object id is generated automatically
  constructor(todoText: string) {
    this.id = new Date().toISOString();
    this.text = todoText;
  }
}

export default Todo;
