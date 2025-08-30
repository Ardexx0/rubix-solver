import { useRubixContext } from "../contexts/RubixContext";
import "../css/RubixSide.css"

function RubixSide() {

    //const colour = selectorColour()
    const colourGrid = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];
    const {sideNo, selColourNo, sideColours, setSideColours} = useRubixContext();
    

    function onBtnClick(index) {
        const newGrid = sideColours.map((row, i) =>
            i === sideNo ? row.map((block, j) => (j === index ? selColourNo : block)) : row
        );
        setSideColours(newGrid);
    }

    return (
        <div className="centre">
            <div className="rubix-side">
                {sideColours[sideNo].map((colour, index) => (
                    <button
                        key={index}
                        onClick={() => onBtnClick(index)}
                        className={`rubix-btn side${colourGrid[colour]}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default RubixSide

