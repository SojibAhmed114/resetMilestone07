import {
  add,
  multi,
  divideTheFirstNumberByTheSecondNumber as divide,
} from "../../Utility/Calculate";
import Water from "../Water/Water";

const Sunglass = () => {
  const first = 45;
  const second = 60;
  const sum = add(first, second);
  const mul = multi(first, second);
  const vaag = divide(first, second);
  return (
    <div>
      <Water></Water>
    </div>
  );
};

export default Sunglass;
