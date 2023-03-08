import React from 'react';

// 'props' is declared but its value is never read.ts(6133)Parameter 'props' implicitly has an 'any' type.ts(7006)

// const TodoItem: React.FC = props => {
//   // Property 'text' does not exist on type '{}'.ts(2339)
//   return <li>{props.text}</li>;
// It has children props
{
  /* <li>{ props.children}</li> */
}
// Add angle bracket to merge our own props definitions with those base props. And here we now wanna setup an object type because props is always an object we always merge an object with thos base props.
// We wanna make clear which kind of props can expect here. And here it's upto to you. It could be string, array of objects, number, boolean etc.
// };

// When we create a new Functional Component, we learned that we sould add this React.FC type annotation
// TodoItem is a React Functional Component by adding this type annotation
const TodoItem: React.FC<{ itemText: string }> = props => {
  //   return <li key={item.id}>{item.text}</li>;
  // Type '(props: { itemText: string; }) => void' is not assignable to type 'FC<{ itemText: string; }>'.

  return <li>{props.itemText}</li>;
};

export default TodoItem;
