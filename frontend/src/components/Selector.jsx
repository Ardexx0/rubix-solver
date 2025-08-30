import { useRubixContext } from "../contexts/RubixContext";
import "../css/Selector.css"

function Selector() {

    const selectorGrid = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];
    const {selColour, setSelColour, setSelColourNo} = useRubixContext();

    function onSelectorCLick(colour) {
        setSelColour(colour)
        switch (colour)
        {
            case 'red':
                setSelColourNo(0)
                break;
            case 'green':
                setSelColourNo(1)
                break;
            case 'blue':
                setSelColourNo(2)
                break;
            case 'orange':
                setSelColourNo(3)
                break;
            case 'yellow':
                setSelColourNo(4)
                break;
            case 'white':
                setSelColourNo(5)
                break;
        }
    }

    return (
        <div className="centre">
            <div className="selector">
                {selectorGrid.map((colour, index) => (
                    <button
                        key={index}
                        onClick={() => onSelectorCLick(colour)}
                        className={`selbtn sel${colour} ${(colour===selColour) ? "active" : ""}`}
                    >
                        {colour}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Selector