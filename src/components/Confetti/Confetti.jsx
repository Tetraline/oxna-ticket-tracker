import ReactConfetti from "react-confetti";
import "./Confetti.scss";

const Confetti = ({ run }) => {
  return <ReactConfetti numberOfPieces={run ? 100 : 0} className="confetti" />;
};
export default Confetti;
