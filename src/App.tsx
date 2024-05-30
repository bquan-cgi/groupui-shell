import "./App.css";
import { GroupuiButton } from "@group-ui/group-ui-react";

function App() {
  return (
    <>
      <div>
        <div
          className="header-navigation-items container-border"
          brand="vwgroup"
        >
          <groupui-header>
            <groupui-headline heading="h5">Product name</groupui-headline>
            <groupui-top-navigation size="l" inverted="true" embedded>
              <groupui-top-navigation-item>App 1</groupui-top-navigation-item>
              <groupui-top-navigation-item>App 2</groupui-top-navigation-item>
              <groupui-top-navigation-item>About</groupui-top-navigation-item>
            </groupui-top-navigation>

            <groupui-divider vertical inverted></groupui-divider>

            <groupui-action-area>
              <groupui-action-area-popover-item>
                <span slot="parent">
                  <groupui-icon name="clock-32"></groupui-icon>
                </span>
                <groupui-text slot="content" class="popover-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, in.
                </groupui-text>
              </groupui-action-area-popover-item>

              <groupui-action-area-popover-item>
                <span slot="parent">
                  <groupui-icon name="rocket-32"></groupui-icon>
                </span>
                <groupui-text slot="content" class="popover-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, in.
                </groupui-text>
              </groupui-action-area-popover-item>

              <groupui-action-area-popover-item>
                <groupui-avatar
                  slot="parent"
                  inverted
                  size="m"
                ></groupui-avatar>
                <groupui-text slot="content" class="popover-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, in.
                </groupui-text>
              </groupui-action-area-popover-item>
            </groupui-action-area>
          </groupui-header>

          <groupui-top-navigation size="l">
            <groupui-top-navigation-item icon="home-24">
              Dashboard
            </groupui-top-navigation-item>
            <groupui-top-navigation-item icon="clipboard-24">
              Manage
            </groupui-top-navigation-item>
            <groupui-top-navigation-item icon="heart-24">
              Favorites
            </groupui-top-navigation-item>
            <groupui-top-navigation-item icon="library-24">
              Library
            </groupui-top-navigation-item>
          </groupui-top-navigation>
        </div>

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
    </>
  );
}

export default App;
