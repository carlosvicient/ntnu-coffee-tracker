import './Thermos.css';

const Thermos = ({ className, litersBrewed=2.2 }) => {
    //2.2l = 100 = 96%

    //0l = 0% 
    // 2.2 ----- 96%
    // level --- x
    
    // Limit value "litersBrewed" between 0 and 2.2"
    const normalisedLevel = Math.min(2.2, Math.max(0, litersBrewed));

    const levelPercent = normalisedLevel * 96 / 2.2;
    const liquidHeighStyle = {height: levelPercent+"%"};
    console.log(levelPercent);
    console.log(liquidHeighStyle);

    return (
        <div className={`Thermos ${className}`}>
            <div className="thermos-body">
                <div className="thermos-ring thermos-ring-upper"><span>COFFEE</span></div>
                <div className="thermos-handler"></div>
                <div className="thermos-ring thermos-ring-bottom"></div>
                <div className="thermos-window">
                    <span className="liquid" style={liquidHeighStyle}></span>
                    <ul>
                        <li>__ 2.2</li>
                        <li>__ 1.6</li>
                        <li>__ 1.1</li>
                        <li>__ 0.5</li>
                        <li>__ 0 &nbsp; &nbsp;</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Thermos;