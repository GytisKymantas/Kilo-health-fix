import React from "react";
import PriceTag from "../../../assets/pricetag.svg";

import "./discount-header.scss";

//   const intervalRef = useRef(null);
//   const [timer, setTimer] = useState("00:00:00");

//   const GetTimeRemaining = (endtime) => {
//     const total = Date.parse(endtime) - Date.parse(new Date());
//     const seconds = Math.floor((total / 1000) % 60);
//     const minutes = Math.floor((total / 1000 / 60) & 60);
//     const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
//     const days = Math.floor(total / (1000 * 60 * 60 * 24));
//     return total, days, hours, minutes, seconds;
//   };

//   const StartTimer = (deadline) => {
//     let { total, days, hours, minutes, seconds } = GetTimeRemaining(deadline);
//     if (total >= 0) {
//       setTimer(
//         (hours > 9 ? hours : "0" + hours) +
//           ":" +
//           (minutes > 9 ? minutes : "0" + minutes) +
//           ":" +
//           (seconds > 9 ? seconds : "0" + seconds)
//       );
//     } else {
//       clearInterval(intervalRef.current);
//     }
//   };
//   const ClearTimer = (endtime) => {
//     setTimer("00:00:10");
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     const id = setInterval(() => {
//       StartTimer(endtime);
//     }, 1000);
//     intervalRef.current = id;
//   };

//   const GetDeadlineTime = () => {
//     let deadline = new Date();
//     deadline.setSeconds(deadline.getSeconds() + 10);
//     return deadline;
//   };

//   useEffect(() => {
//     ClearTimer(GetDeadlineTime());
//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, []);
const DiscountHeader = () => {
  return (
    <div className="discount__container header">
      <div className="image__wrapper">
        <img src={PriceTag} alt="pricetag" />
        <p className="discount">
          <strong>50%</strong> discount only valid for <strong>00:15:49</strong>
        </p>
      </div>
      {/* {timer} */}
    </div>
  );
};
export default DiscountHeader;
