import "../css/RubixSide.css"

function RubixSide() {

    //const colour = selectorColour()
    const colourGrid = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];
    const rubixGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    function onBtnClick(index) {
        alert(`clicked ${index + 1}`)
    }

    return (
        <div className="centre">
            <div className="rubix-side">
                {rubixGrid.map((colour, index) => (
                    <button
                        key={index}
                        onClick={() => onBtnClick(index)}
                        className={`rubix-btn ${colourGrid[colour]}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default RubixSide

