

function UpcomingEvents(props) {

    function event(dateNum, dateMon, timeString, title, loc) {

        return(
            <div Style = "display: flex; height: 25%; border-bottom: solid #5f7385;">
                <div>
                    <p Style = "height: 1.2rem;" className = "cta">{dateNum}</p> <p Style = "font-size: 1.2rem;">{dateMon}</p>
                </div>
                <div Style = "margin-left: 4rem;">
                    <p Style = "font-size: 2rem; margin-bottom: 0rem;">{title}</p>
                    <p Style = "font-size: 1rem;">{loc}</p>
                </div>
                <p Style = "position: absolute; right:0; font-size: 1.2rem; margin-right:1rem;"> {timeString} </p>
            </div>
        )
    }

    const events = props.nextEvents.map(
        (para) => {
            return event(para[0], para[1], para[2], para[3], para[4]);
        }
    );

    return (
        <div Style = "border: solid; border-radius: 2rem; border-color: #5f7385; border-width:100%; width:100%; height:100%; background-color: rgb(5, 37, 66, .59); border-opacity: 100%; padding:2rem;">
            {/* {events} */}
            <h3 Style = "text-align: center; text-indent: 0pt;">No upcoming events scheduled!</h3>
        </div>

    );
}

export default UpcomingEvents;