import { sculptureList } from "./utils/componentWithStateData";
import { useState } from "react";

export default function SculptureGallery() {

    // let index = 0;
    const [index, setIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    function handleNextClick() {
        if(index < sculptureList.length){
            setIndex(index+1);
        }
        console.log(index);
    }

    function handleBackClick() {
        if(index < sculptureList.length && index > 0){
            setIndex(index-1);
        }
        console.log(index);
    }

    function handleShowDetails() {
        setShowDetails(!showDetails);
    }

    return (
        <>
            <button onClick={handleNextClick}>Next</button>
            {
                index > 0  && <button onClick={handleBackClick}>Back</button>
            }
            <h2>
                <i>{sculptureList[index].name} </i>
                by {sculptureList[index].artist}
            </h2>
            <h3>
                ({index} of {sculptureList.length})
            </h3>
            <img src={sculptureList[index].url}></img>
            <br></br>
            {
                <button type="button" onClick={handleShowDetails}>{
                    showDetails ? 'Hide Details' : 'Show Details'
                }</button>
            }
            {
                showDetails && <p>{sculptureList[index].description}</p>
            }
        </>
    )
}