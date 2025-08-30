import "../css/Selector.css"

function Selector() {

    const selectorGrid = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];

    function onSelectorCLick(colour) {
        alert(`clicked ${colour}`)
    }

    return (
        <div className="centre">
            <div className="selector">
                {selectorGrid.map((colour, index) => (
                    <button
                        key={index}
                        onClick={() => onSelectorCLick(colour)}
                        className={`selbtn ${colour}`}
                    >
                        {colour}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Selector