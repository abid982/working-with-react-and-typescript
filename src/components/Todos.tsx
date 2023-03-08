// 'props' is declared but its value is never read.ts
// Parameter 'props' implicitly has an 'any' type.ts
// Which kind of props we're expect here?
// Object type {}
// We expect to get some items with type string
// items: string
// function Todos(props: { items: string[] }) {
//   return (
//     <ul>
//       {/* <li>Learn React</li>
//       <li>Learn TypeScript</li> */}
//     </ul>
//   );
// }

// And you can already see here that now I'm getting those red squiggly lines here. And if we hover over that, we see that prompts is declared but it's value is never read. So we're getting a warning that we're not using props and that's a little extra help we get into TypeScript project which we don't necessarily get in a vanilla JavaScript project.
// function Todos(props) {
//   return (
//     <ul>
//       <li></li>
//     </ul>
//   );
// }

// For the moment what we need to do here is we need to make it clear which kind of props we're getting here, what the type of props in this function should be. And of course, we can do this with a type assignment here. And now we could actually say that props is an object type. So we add those curly braces.
// And again, that's not a value here, that's a type definition. It's an object typeand we know that props in React will always be an object with all the attributes we added on our own element here in App.tsx as key value pairs. So here we could say that we expect to get some Todos or some items and then in turn could be an array of strings, let's say like this. That's how we could say that props is an object with the items key, which then itself holds an array of strings as a value. But that would actually not be 100% correct.
// Props does not just have the key value pairs. we added on our component when we use it in JSX. Instead, props is an object which does have those key value pairs. But remember that they're also always as a special prop, the children prop and we don't even know the type of that yet. Now we could find out which type that should be and then added like this but it would quickly become cumbersome if for every component that we're defining that is using props, we have to always add those built-in props to that object and then also our custom props. And because that's cumbersome, and because we have that base prop object which we get an every component, which for example includes this children prop, React gives us a different way here or React and TypeScript gives us a different way here. We can use such a generic type, which you might remember.

// function Todos(props: { items: string[], chilren: any}) {
//     return (
//       <ul>
//         <li></li>
//       </ul>
//     );
//   }

// function Todos(props: { items: string[], chilren: any}) {
//     return (
//       <ul>
//         <li></li>
//       </ul>
//     );
//   }

// import React from 'react';
// const Todos: React.FC = props => {
//   return <ul>{props.children}</ul>;
// };

// import React from 'react';

// // Generic type script <{}>
// // Proper type annotation
// const Todos: React.FC<{ items: string[] }> = props => {
//   return (
//     <ul>
//       {props.items.map(item => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// };

// function Todos(props) {
//     return <ul>
//     </ul>
// }

// Cumbersome
// function Todos(props: { items: [], children }) {
//   return <ul></ul>;
// }

import React from 'react';

// Missing our custom props
// const Todos: React.FC = props => {
//     return <ul>
//       {props.}
//   </ul>;
// };

const Todos: React.FC<{ items: string[] }> = props => {
  return (
    <ul>
      {/* {props.children} */}
      {props.items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
