import { useRubixContext } from "../contexts/RubixContext"
import "../css/SideSelect.css"

function SideSelect()
{
    const {side, setSide, sideNo, setSideNo } = useRubixContext() 
    const selectGrid = ['Front', 'Up', 'Down', 'Left', 'Right', 'Back']

    function onSelectCLick(selside)
    {
        setSide(selside)
        switch (selside)
        {
            case 'Front':
                setSideNo(0)
                break;
            case 'Up':
                setSideNo(1)
                break;
            case 'Down':
                setSideNo(2)
                break;
            case 'Left':
                setSideNo(3)
                break;
            case 'Right':
                setSideNo(4)
                break;
            case 'Back':
                setSideNo(5)
                break;
        }
    }

    return (
        <div className="centre">
            <div className="side-select">
                {selectGrid.map((selside, index) => (
                    <button
                        key={index}
                        onClick={() => onSelectCLick(selside)}
                        className={`selectbtn ${(selside===side) ? "active" : ""}`}
                    >
                        {selside}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SideSelect