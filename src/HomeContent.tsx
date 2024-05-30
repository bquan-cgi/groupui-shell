import { Groupui1010Button } from "@group-ui/group-ui-react";

export default function HomeContent() {
  return (
    <div>
      HomeContent

      <div style={{ width: "360px" }}>
          <div
            class="select-life-demo container-border flex-justify-center"
            brand="vwgroup"
          >
            <div>
              <groupui-10-1-0-link href="#">blog post</groupui-10-1-0-link>
            </div>

            <div>
              <Groupui1010Button onClick={() => console.log("Clicked")}>
                Click GroupuiButton!
              </Groupui1010Button>
            </div>
            <div class="slim-content">
              <groupui-10-1-0-select label="Label">
                <groupui-10-1-0-select-option>Option 1</groupui-10-1-0-select-option>
                <groupui-10-1-0-select-option>Option 2</groupui-10-1-0-select-option>
                <groupui-10-1-0-select-option>Option 3</groupui-10-1-0-select-option>
                <span slot="label">Label</span>
                <span slot="description">Description</span>
              </groupui-10-1-0-select>
            </div>
          </div>


          <div
            class="input-live-demo flex-center container-border"
            brand="vwgroup"
          >
            <div class="slim-content">
              <groupui-10-1-0-input
                placeholder="Placeholder"
                maxlength="16"
                pattern="[A-Za-z]{3}"
              >
                <span slot="label">Label</span>
                <span slot="description">Description</span>
              </groupui-10-1-0-input>
            </div>
          </div>
        </div>
    </div>
  );
}
