import React, {useState} from "react";

function StopWatch() {
    const [hr, setHr] = useState(0),
        [min, setMin] = useState(0),
        [sec, setSec] = useState(0);
    const [id, setId] = useState(null);

    

    function startTimer() {
        setId(setInterval(() => {
            
            if(sec < 59) {
                setSec(sec => sec + 1);
            }
            else if(min < 59) {
                setSec(0);
                setMin(min => min + 1);
            }
            else if(hr < 23) {
                setMin(0);
                setHr(hr => hr + 1);
            } else {
                setHr(0);
            }
        }, 1000));
    }

    return (
        <div>
            <h2>Stop Watch</h2>
            <h3>{hr} : {min} : {sec}</h3>
            <div>
                <button
                    onClick = {startTimer}
                >Start</button>

                <button
                    onClick = {() => {
                        clearInterval(id);
                    }}
                >Stop</button>

                <button
                    onClick = {() => {
                        clearInterval(id);
                        setHr(0);
                        setMin(0);
                        setSec(0);
                    }}
                >Reset</button>
            </div>
        </div>
    )
}

export default StopWatch;