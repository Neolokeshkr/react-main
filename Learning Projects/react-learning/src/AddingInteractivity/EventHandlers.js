export function EventHandlers() {

    function handleClick(){
        alert('Button Clicked');
    }

    function handleMouseEnter(){
        console.log('Cursour on button');
    }

    function handleMouseOver(e){
        console.log('Hover');
    }

    return(
        <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseOver={handleMouseOver}>Click Me!</button>

        // <button onClick={function handleClick() {
        //     alert('You clicked me!');
        //   }}>Click Me!</button>

        // <button onClick={() => {
        //     alert('You clicked me!');
        //   }}>Click Me!</button>
    )
}

// Reading Props in EventHandlers
    // Because event handlers are declared inside of a component, they have access to the component’s props. Here is a button that, when clicked, shows an alert with its message prop:

function AlertButton({message, children}) {

    return(
        <button onClick={() => alert(message)}>
            {children}
        </button>
    )
}



export function Toolbar() {
    return (
        <div>
            <AlertButton message={'Playing!'}>Play Movie</AlertButton>
            <AlertButton message={'Uploading'}>Upload File</AlertButton>
        </div>
    )
}

// Passing event handlers as props 

function Button({onClick, children}){
    return(
        <button onClick={onClick}>
            {children}
        </button>
    )
}

function PlayButton({movieName}){
    
    function handlePlayClick(){
        alert(`Playing ${movieName}`)
    }

    return(
        <Button onClick={handlePlayClick}>
            Play "{movieName}""
        </Button>
    )
}

function UploadButton(){
    return(
        <Button onClick={() => alert('Uploading')}>
            Upload Image
        </Button>
    )
}

export function PassingEventhandlersAsProps(){
    return (
        <>
            <PlayButton movieName={'Chichi'} />
            <UploadButton />
        </>
    )
}

// Event Propagation
export function EventPropagation() {
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