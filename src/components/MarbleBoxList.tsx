import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import MarbleBox from '@/components/MarbleBox';
import { Card } from '@/components/ui/card';

export default function MarbleBoxList () {
  const boxes = useSelector((state: RootState) => state.marbles.boxes);

  return (
    <div>
      {boxes.length ? (
          boxes.map(({id, marbles}) => (
            <MarbleBox id={id} marbles={marbles} />
          ))
        ) : (
          <Card>There are no marble boxes.</Card>
        )
      }
    </div>
  );
};