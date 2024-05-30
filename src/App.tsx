import "./App.css";
import { GroupuiButton } from "@group-ui/group-ui-react";

function App() {
  return (
    <>
      <div>
        <GroupuiButton onClick={() => console.log("Clicked")}>
          Click GroupuiButton!
        </GroupuiButton>
      </div>
    </>
  );
}

export default App;
