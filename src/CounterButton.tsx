import { useState } from "react";
import { Groupui1010Button } from '@group-ui/group-ui-react';


export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-amber-100 px-2 m-3 border-dashed border-2 border-green-500">
      <Groupui1010Button
        className="font-button"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </Groupui1010Button>
    </div>
  );
}
