
import FlipCountdown from "@rumess/react-flip-countdown";

function Countdown() {
  const size = window.innerWidth;
  var clocksize="medium"
  if(size<768){
    clocksize="small";
  }
  else{
    clocksize="medium";
  }
  return (
    <div className="text=[#8486A9] countdown-text">
      <FlipCountdown
        id="timer"
        hideYear
        hideMonth
        theme="dark"
        size={clocksize}
        titlePosition="bottom"
       
        endAt={new Date(
          Date.now() +
            1000 /* sec */ *
              60 /* min */ *
              60 /* hour */ *
              48 /* day */ *
              30 /* month */ *
              12 /* year */ *
              2
        ).toUTCString()}
        dayTitle="DAYS"
        hourTitle="HOURS"
        minuteTitle="MINUTES"
        secondTitle="SECONDS"

      />
    </div>
  );
}
export default Countdown;
