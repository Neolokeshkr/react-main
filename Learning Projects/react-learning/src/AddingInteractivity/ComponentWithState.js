import { sculptureList } from "./utils/componentWithStateData";

export default function SculptureGallery() {

    let index = 0;

    function handleClick(){
        index = index + 1;
    }

    return(
        <>
            <button onClick={handleClick}>Next</button>
            {
                <h2>
                    <i>{sculptureList[index].name}</i>
                    by {sculptureList[index].artist}
                </h2>
            }
            
        </>
    )
}