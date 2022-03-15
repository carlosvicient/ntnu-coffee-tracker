import CoffeeButton from './CoffeeButton';
import './CoffeeControl.css';
import Thermos from './Thermos';

const CoffeeControl = (props) => {

    const handleOnClick = (newLiters) => {
        console.log("CoffeeControl (handleClick): ",  newLiters);
        props.onChange(newLiters);
    }

    return (
        <div className="CoffeeControl">
            <Thermos {...props} />

            <div className="flex-columns">
                <CoffeeButton litersToBrew='2.2' onClick={handleOnClick} />

                <CoffeeButton litersToBrew='1.1' onClick={handleOnClick} />

                <CoffeeButton litersToBrew='0.5' onClick={handleOnClick} />
            </div>
        </div>
    );
}

//Default props here to define empty function to lift state up
CoffeeControl.defaultProps = {
    onChange: () => {}
}

export default CoffeeControl;

