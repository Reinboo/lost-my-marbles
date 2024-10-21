import { useDispatch } from "react-redux";
import { incrementMarbles, decrementMarbles, removeMarbleBox } from "@/store/marbles.slice";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HoldButton from "./HoldButton";

interface MarbleBoxProps {
    id: number;
    marbles: number;
}

export default function MarbleBox({id, marbles}: MarbleBoxProps) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementMarbles(id));
  };

  const handleDecrement = () => {
    dispatch(decrementMarbles(id));
  };

  const handleRemove = () => {
    dispatch(removeMarbleBox(id));
  };


  return (
    <Card>
      <div>
        <HoldButton onClick={handleDecrement}>-</HoldButton>
        <span>{marbles}</span>
        <HoldButton onClick={handleIncrement}>+</HoldButton>
        <Button onClick={handleRemove}>Remove</Button>
      </div>
    </Card>
  );
};
