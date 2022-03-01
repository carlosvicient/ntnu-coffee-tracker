import './CoffeeButton.css';

const CoffeeButton = ({litersToBrew, onClick}) => {

    const liters = Math.min(2.2, Math.max(0, litersToBrew));

    const handleOnClick = () => {
        console.log("CoffeeButton evt: ", litersToBrew);
        onClick(litersToBrew);

    }

    return (
        <div className="CoffeeButton">
            <button onClick={handleOnClick}>
                <span>Prepare </span>
                {liters} 
                <span>liters</span>
            </button>
        </div>);
}

//Default props here to define empty function to lift state up
CoffeeButton.defaultProps = {
    litersToBrew: '2.2',
    onClick: () => {}
}

export default CoffeeButton;