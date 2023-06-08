// 1.   Difference between a Component and an Element?
//      React Element :
//         1. It is an object representation of virtual DOM node. 
//         2. React elements contains both type and Property. 
//         3. It may contain other elements in its props 
//         4. React elements does not have any method and are stateless, making it lighter and faster to render components. 
//         5. We cannot use React Hooks with elements as elements are immutable. 
//         Syntax: 
            const element = createElement(type, props, ...children)

        // Example:
        const reactElement = React.createElement('h1', {id:'name'}, "Lokesh");

    // React Component 
    //     1. Component can be class or functional that optionally takes input and returns an element. 
    //     2. Each component have life cycle methods.
    //     3. State in a component is mutable
    //     4. Comparitevley slower than elements
    //     5. Component encapsulates a DOM Tree 

    //  A React component is a JavaScript function that you can sprinkle with markup.
    //  React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app.
    //  React Open source communities for pre built components - Chakra UI and Material UI.
    //  React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
    //  Components can render other components, but you must never nest their definitions

// 2.   What is JSX?
        // It is a type of Syntax that lets us embed markup inside javascript
        // Components return JSX markup.
            return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;

// 3.   Imports and Exports    
        // Two ways to export values: default exports and named exports.
        // A file can have no more than one default export, but it can have as many as named exports.
        // How do you export your component dictates how you should import it.
        // Example: 
            export default function Button(){}  
            import Button from 'Button.js';

            export function Button(){}
            import { Button } from 'Button.js'
            
// 4.   Writing markup in JSX
        // JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.
        // Rules of JSX:
            // 1. Return a single root element:
                // 1.1 To return multiple elements from a component, wrap them with a single parent tag like <div>...</div>

                // 1.2 Using Fragments <>...</> -> This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.

                // 1.3 You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.
             
            // 2. Close all the tags
                // 2.1 JSX requires to be explicitly closed: self closing <img/> must become <img>.</img> and wrapping tags like <li>oranges must become <li>oranges</li>

            // 3. camelCase all most of the things! 
                // 3.1 JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects.

                // 3.2 Attributes like : stroke-width becomes stroeWidth and class becomes className

// 5.   JavaScript in JSX with Curly Braces
        // 

