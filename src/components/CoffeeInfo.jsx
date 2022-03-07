import './CoffeeInfo.css';

import Moment from 'react-moment';
import moment from 'moment'
import 'moment-timezone';

const [ HOT_MINUTES, WARM_MINUTES, COLD_MINUTES] = [90, 150, 150];

function getCoffeeStatus(minutesSinceBrewed) {
    let status;
    switch (true) {
        case (minutesSinceBrewed < HOT_MINUTES):
            status = "Hot"
            break;
        case (minutesSinceBrewed >= HOT_MINUTES && minutesSinceBrewed < WARM_MINUTES):
            status = "Warm"
            break;
        case (minutesSinceBrewed >= COLD_MINUTES):
            status = "Cold"
            break;
    }

    return status;
}

const CoffeeInfo = (props) => {
    // another way of declaring the props- Destructuring, props.brewedAt, etc... vs all the props inside an object props.settings
    //const CoffeeInfo = ({ brewedAt=new Date(), litersBrewed='Unknown', typeOfCoffee='Unknown', coffeeLeft='Unknown' }) => {

    // storing props in local variables and giving them default values
    const { brewedAt = new Date(), litersBrewed = 'Unknown', typeOfCoffee = 'Unknown', coffeeLeft = 'Unknown' } = { ...props };

    const calendarStrings = {
        lastDay: '[Yesterday] ',
        sameDay: '[Today]',
        nextDay: 'DD/MM/YYYY',
        lastWeek: 'DD/MM/YYYY',
        sameElse: 'DD/MM/YYYY'
    };


    const diff = moment().diff(brewedAt, 'minutes');
    console.log("dif - ", diff);
    //Less than 90' -> hot
    //90' to 150' -> warm
    // >150' -> cold

    return (
        <div className="CoffeeInfo">
            <ul>
                <li><span>Brewed </span><Moment calendar={calendarStrings}>{brewedAt}</Moment></li>
                <li><span>Time </span><Moment format="hh:mm[h]">{brewedAt}</Moment></li>
                <li><span>Liters brewed </span>{litersBrewed}</li>
                <li><span>Type of coffee </span>{typeOfCoffee}</li>
                <li><span>Coffee left </span>{coffeeLeft}</li>
                <li>
                    <span>Status </span>
                    {/* Option a - declarative with JSX */}
                    {/* {diff < 90 && `Hot`}
                    {diff >= 90 && diff < 150 && `Warm`}
                    {diff >= 150 && `Cold`} */}
                    {/* Option b - using function */}
                    {getCoffeeStatus(diff)}
                </li>
            </ul>

        </div>);
}

export default CoffeeInfo;