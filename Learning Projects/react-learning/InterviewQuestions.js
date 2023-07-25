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
    // React components pass props to communicate with each other.
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
    
// Keeping Components Pure

    // A pure function is a function with the following characteristics:
        // 1. It minds its own business. It does not change any objects or variables that existed before it was called.
        // 2. Same inputs, same output. Given the same inputs, a pure function should always return the same result.
        // Example:
            function double(number){
                return 2 * number;
            }
    
    // React is designed around this concept. React assumes that every component you write is a pure function. This means that React components you write must always return the same JSX given the same inputs:

    // Detecting impure calculations with StrictMode 
            // 1. In React there are three kinds of inputs that you can read while rendering: props, state, and context.
            // 2. You should always treat these inputs as read-only.
            // 3. When you want to change something in response to user input, you should set state instead of writing to a variable. You should never change preexisting variables or objects while your component is rendering.

            // React offers a “Strict Mode” in which it calls each component’s function twice during development. By calling the component functions twice, Strict Mode helps find components that break these rules.

            // Strict Mode has no effect in production, so it won’t slow down the app for your users. To opt into Strict Mode, you can wrap your root component into <React.StrictMode>. Some frameworks do this by default.

            // Local mutation: Your component’s little secret:
                // it’s completely fine to change variables and objects that you’ve just created while rendering.

// -------------------- ADDING INTERACTIVITY -----------------------------------------------

    // Responding to Events
        // 1. React lets you add event handlers to your JSX.
        // 2. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

        // Adding Event Handlers
            // 1. To add an event handler, you will first define a function and then pass it as a prop to the appropriate JSX tag. For example:
              export default function Button() {
                  function handleClick() {
                    alert('You clicked me!');
                  }
                
                  return (
                    <button onClick={handleClick}>
                      Click me
                    </button>
                  );
                }

            // 2. You defined the handleClick function and then passed it as a prop to <button>.  handleClick is an event handler. Event handler functions:
                // 2.1 Are usually defined inside your components.
                // 2.2 Have names that start with handle, followed by the name of the event.

                // SEE CODE in EventHandlers.js file for Better Understanding

        // Event propagation 
                // Event handlers will also catch events from any children your component might have. We say that an event “bubbles” or “propagates” up the tree: it starts with where the event happened, and then goes up the tree.
              
                export default function Toolbar() {
                    return (
                      <div className="Toolbar" onClick={() => {
                        alert('You clicked on the toolbar!');
                      }}>
                        <button onClick={() => alert('Playing!')}>
                          Play Movie
                        </button>
                        <button onClick={() => alert('Uploading!')}>
                          Upload Image
                        </button>
                      </div>
                    );
                  }
                //   If you click on either button, its onClick will run first, followed by the parent <div>’s onClick. So two messages will appear. If you click the toolbar itself, only the parent <div>’s onClick will run.
                
                  // All events propagate in React except onScroll, which only works on the JSX tag you attach it to.
                  
        // Stopping propagation 
            // 1. Event handlers receive an event object as their only argument. By convention, it’s usually called e, which stands for “event”. You can use this object to read information about the event.
            // 2. That event object also lets you stop the propagation. If you want to prevent an event from reaching parent components, you need to call e.stopPropagation() like this Button component does:

                function Button({ onClick, children }) {
                    return (
                      <button onClick={e => {
                        e.stopPropagation();
                        onClick();
                      }}>
                        {children}
                      </button>
                    );
                }

        // Preventing default behavior 
            //   Some browser events have default behavior associated with them. For example, a <form> submit event, which happens when a button inside of it is clicked, will reload the whole page by default:
                export default function Signup() {
                    return (
                      <form onSubmit={e => {
                        e.preventDefault();
                        alert('Submitting!');
                      }}>
                        <input />
                        <button>Send</button>
                      </form>
                    );
                }
                
        // Don’t confuse e.stopPropagation() and e.preventDefault(). They are both useful, but are unrelated:
        // e.stopPropagation() stops the event handlers attached to the tags above from firing.
        // e.preventDefault() prevents the default browser behavior for the few events that have it.

// State: a component’s memory 
    // 1. In React, component-specific memory is called state.
    // 2. You can add state to a component with a useState Hook. Hooks are special functions that let your components use React features (state is one of those features).
    // 3. The useState Hook lets you declare a state variable. It takes the initial state and returns a pair of values: the current state, and a state setter function that lets you update it.

        const [index, setIndex] = useState(0);
        const [showMore, setShowMore] = useState(false);

    // Why a regular variable isn’t enough 
      // 1. Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
      // 2. Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

    // To update a component with new data, two things need to happen:
      // 1. Retain the data between renders.
      // 2. Trigger React to render the component with new data (re-rendering).

      // The useState Hook provides those two things:
        // A state variable to retain the data between renders.
        // A state setter function to update the variable and trigger React to render the component again.
          import { useState } from 'react';

        // The [ and ] syntax here is called array destructuring and it lets you read values from an array. The array returned by useState always has exactly two items.

    // Hooks
      // useState()

        // In React, useState, as well as any other function starting with ”use”, is called a Hook.
        // Hooks are special functions that are only available while React is rendering (which we’ll get into in more detail on the next page). They let you “hook into” different React features.
        // State is just one of those features, but you will meet the other Hooks later.
        // The only argument to useState is the initial value of your state variable. In this example, the index’s initial value is set to 0 with useState(0).
          const [variable, setterFunction] = useState(0);

      // Note :
        // Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks.
        // The convention is to name this pair like const [something, setSomething]. You could name it anything you like, but conventions make things easier to understand across projects.

    // State is isolated and private 
      // 1. State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.
      // 2. Unlike props, state is fully private to the component declaring it. 

  // Q. How to share stare between two components?
  // A. The right way to do it in React is to remove state from child components and add it to their closest shared parent.

// Rendering and Commiting
  // Steps of Rendering
    // 1. Triggering a render 
      // Reasons for rendering:
        // It’s the component’s initial render.
        // The component’s (or one of its ancestors’) state has been updated.

    // 2. Rendering a component
      // On initial render, React will call the root component.
      // For subsequent renders, React will call the function component whose state update triggered the render.
      
    // 3. Commiting a update to the DOM
      // After rendering (calling) your components, React will modify the DOM.
      // For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
      // For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.
      
// State as a Snapshot

// React Router
  // To use react-router-dom, we need to wrap our entire App component in BrowserRouter. There are two types of routers:
    // BrowserRouter - makes pretty URLs like example.com/about.
    // HashRouter - makes URLs with the octothorpe (or hashtag, if you will) that would look like example.com/#about.

// Queueing a Series of State Updates
  // Setting a state variable will queue another render. But sometimes you might want to perform multiple operations on the value before queueing the next render. To do this, it helps to understand how React batches state updates.

  // Updating the same state multiple times before the next render
              export default function Counter(){

                const [counter, setCounter] = useState(0)

                // Instead of passing the state directly, using it in a function that calculates the next state based on the previous one
                  // React queues this function to be processed after all the other code in the event handler has run.
                  // During the next render, React goes through the queue and gives you the final updated state.
                function increment(){
                    setCounter(num => num + 1);
                    setCounter(num => num + 1);
                    setCounter(num => num + 1);
                }
                // Output 3 after render
                function decrement(){
                    setCounter(counter-1)
                }

                return (
                    <div>
                        <button onClick={() => increment()}>+</button>
                        <input value={counter}></input>
                        <button onClick={() => decrement()}>-</button>
                    </div>
                )
              }

              // To summarize, here’s how you can think of what you’re passing to the setNumber state setter:

              // An updater function (e.g. n => n + 1) gets added to the queue.
              // Any other value (e.g. number 5) adds “replace with 5” to the queue, ignoring what’s already queued.

              // Setting state does not change the variable in the existing render, but it requests a new render.
              // React processes state updates after event handlers have finished running. This is called batching.
              // To update some state multiple times in one event, you can use setNumber(n => n + 1) updater function.

// Updating Objects in State

      // State can hold any kind of JavaScript value, including objects. But you shouldn’t change objects that you hold in the React state directly. Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.
      // So far you’ve been working with numbers, strings, and booleans. These kinds of JavaScript values are “immutable”, meaning unchangeable or “read-only”. You can trigger a re-render to replace a value:
      // The x state changed from 0 to 5, but the number 0 itself did not change. It’s not possible to make any changes to the built-in primitive values like numbers, strings, and booleans in JavaScript.
      // However, although objects in React state are technically mutable, you should treat them as if they were immutable—like numbers, booleans, and strings. Instead of mutating them, you should always replace them.

       // SEE UpdatingObjectsInState dir in src/

      const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com',
        address: {
          addLine1: 'Sant Nagar',
          addLine2: 'Burari',
        }
      });

      // You can use the ... object spread syntax so that you don’t need to copy every property separately.
        setPerson({
          ...person, // Copy the old fields
          firstName: e.target.value // But override this one
        });

      // Setting State for nested objects
      // Spread syntax is shallow: it only copies one level deep.
      // To update a nested object, you need to create copies all the way up from the place you’re updating.
      // To reduce repetitive copying code, use Immer.
      setPerson({
        ...person,
        address:{
          ...person.address,
          addLine1 : e.target.value,
          addLine2 : e.target.value,
        }
      })

// Setting state with immer
  // To try Immer:
    // Run npm install use-immer to add Immer as a dependency
    // Then replace import { useState } from 'react' with import { useImmer } from 'use-immer'

    // The draft provided by Immer is a special type of object, called a Proxy, that “records” what you do with it. This is why you can mutate it freely as much as you like! Under the hood, Immer figures out which parts of the draft have been changed, and produces a completely new object that contains your edits.

    //Update Logic using Immer 
      updatePerson(draft => {
        draft.artwork.city = 'Lagos';
      });

// Updating arrays without mutation 
  // In JavaScript, arrays are just another kind of object. Like with objects, you should treat arrays in React state as read-only. This means that you shouldn’t reassign items inside an array like arr[0] = 'bird', and you also shouldn’t use methods that mutate the array, such as push() and pop().
      // 
  // Instead, every time you want to update an array, you’ll want to pass a new array to your state setting function. To do that, you can create a new array from the original array in your state by calling its non-mutating methods like filter() and map(). Then you can set your state to the resulting new array.                            

  // Example:
    setArtists([
      ...artists,
      { id: nextId++, name: name }
    ]);

    // The array spread syntax also lets you prepend an item by placing it before the original ...artists:
      setArtists([
        { id: nextId++, name: name },
        ...artists // Put old items at the end
      ]);

//Making other changes to an array 
  // There are some things you can’t do with the spread syntax and non-mutating methods like map() and filter() alone. For example, you may want to reverse or sort an array. The JavaScript reverse() and sort() methods are mutating the original array, so you can’t use them directly.

// Write concise update logic with Immer 
    // Updating nested arrays without mutation can get a little bit repetitive. Just as with objects:
    // Generally, you shouldn’t need to update state more than a couple of levels deep. If your state objects are very deep, you might want to restructure them differently so that they are flat.
    // If you don’t want to change your state structure, you might prefer to use Immer, which lets you write using the convenient but mutating syntax and takes care of producing the copies for you.

          updateMyTodos(draft => {
            const artwork = draft.find(a => a.id === artworkId);
            artwork.seen = nextSeen;
          });