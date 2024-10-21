import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addMarbleBox } from "@/store/marbles.slice";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Header() {
  const dispatch = useDispatch();

  const boxesCount = useSelector((state: RootState) => state.marbles.boxesCount);
  const marblesCount = useSelector((state: RootState) => state.marbles.marblesCount);

  const handleAddBox = () => {
    dispatch(addMarbleBox(0)); 
  };

  return (
    <Card>
      <CardContent>
        <div>Boxes count: {boxesCount}</div>
        <div>Marbles count: {marblesCount}</div>
        <Button onClick={handleAddBox}>Add New Box</Button>
      </CardContent>
    </Card>
  );
};
