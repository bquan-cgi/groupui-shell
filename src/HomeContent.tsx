import { GroupuiButton } from "@group-ui/group-ui-react";

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
              <groupui-link href="#">blog post</groupui-link>
            </div>

            <div>
              <GroupuiButton onClick={() => console.log("Clicked")}>
                Click GroupuiButton!
              </GroupuiButton>
            </div>
            <div class="slim-content">
              <groupui-select label="Label">
                <groupui-select-option>Option 1</groupui-select-option>
                <groupui-select-option>Option 2</groupui-select-option>
                <groupui-select-option>Option 3</groupui-select-option>
                <span slot="label">Label</span>
                <span slot="description">Description</span>
              </groupui-select>
            </div>
          </div>

          <div
            class="input-live-demo flex-center container-border"
            brand="vwgroup"
          >
            <div class="slim-content">
              <groupui-input
                placeholder="Placeholder"
                maxlength="16"
                pattern="[A-Za-z]{3}"
              >
                <span slot="label">Label</span>
                <span slot="description">Description</span>
              </groupui-input>
            </div>
          </div>
        </div>
    </div>
  );
}
