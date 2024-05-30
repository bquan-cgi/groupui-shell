import { useState } from "react";
import {
  GroupuiButton,
  GroupuiHeadline,
  GroupuiModal,
  GroupuiText,
} from "@group-ui/group-ui-react";

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-amber-100 px-2 m-3 border-dashed border-2 border-green-500">
        <GroupuiButton
          className="font-button"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </GroupuiButton>
      </div>

      <div class="modal-live-demo container-border flex-center" brand="vwgroup">
        <GroupuiModal closeButton={true} padding="40px">
          <GroupuiHeadline heading="h3">Headline</GroupuiHeadline>
          <GroupuiText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr.
          </GroupuiText>
        </GroupuiModal>
        <GroupuiButton onclick="document.querySelector('GroupuiModal')['displayed'] = true">
          Open Modal
        </GroupuiButton>
      </div>
    </>
  );
}
