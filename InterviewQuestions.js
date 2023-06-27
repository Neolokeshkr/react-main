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
                // 2.1 JSX requires to be explicitly closed: self closing <img> must become <img/> and wrapping tags like <li>oranges must become <li>oranges</li>

            // 3. camelCase all most of the things! 
                // 3.1 JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects.

                // 3.2 Attributes like : stroke-width becomes stroeWidth and class becomes className

// 5.   JavaScript in JSX with Curly Braces
        // 5.1 Passing strings with quotes:
            // When you want to pass a string attribute to JSX, you put it in single or double quotes:
            // To dynamically specify the src or alt text? You could use a value from JavaScript by replacing " and " with { and }
            // To pass objects in JSX, we need to wrap the object in another pair of curly braces -> {{name:'Lokesh'}}
                export default function Avatar(){
                    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
                    return(
                        <div>
                            <img
                                className="avatar"                      //string attribute passed to className
                                src={avatar}                            //js variable attribute passed to src
                                alt="Gregorio Y. Zara"                  //string attribute passed to alt
                                style={{
                                    // style object passed in {{}}
                                        border: '1px solid red',
                                        backgroundColor: 'black'
                                    }}       
                            />
                        </div>
                    )
                }

// 6. Passing props to a component
    // React components props to communicate with each other.
    // Every parent component can pass information to its child component by giving them props.
    // A component may receive different props over time, props are not static but they are imulateble.
    // One shouldnot change the props explictily they must be updated using the setState()
    // You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
    // Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.

    // Destructuring
        function Component({person = 'defaultValue', age}) {}
        // the above is eqvuivalent to 
        /* 
        function Component(props)(){
            let person = props.person
            let age = props.age
        } 
        */
    
// Conditional rendering
        // In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
        // In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.

// How to reduce code logic
    // 1. Check if you are repeating code {DRY - Don't repeat yourself}
    // 2. Stop putting unnecessary logic - {Make code simpler}
    // 3. See if you are repeating variables in logic.

// Rendering Lists
    // Keeping list items in order with key Keeping list items in order with key 
        // 1. You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array:
            <li key={person.id}>...</li>

        // 2. Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

        // 3. Rather than generating keys on the fly, you should include them in your data:

        // 4. You might be tempted to use an item’s index in the array as its key. In fact, that’s what React will use if you don’t specify a key at all. But the order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered. Index as a key often leads to subtle and confusing bugs.

    // Displaying several DOM nodes for each list item
        // The short <>...</> Fragment syntax won’t let you pass a key, so you need to either group them into a single <div>, or use the slightly longer and more explicit <Fragment> syntax:

            import { Fragment } from 'react';

            const listItems = people.map(person =>
              <Fragment key={person.id}>
                <h1>{person.name}</h1>
                <p>{person.bio}</p>
              </Fragment>
            );

        // Fragments disappear from the DOM, so this will produce a flat list of <h1>, <p>, <h1>, <p>, and so on.
    
