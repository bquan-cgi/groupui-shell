import "./App.css";

function Header() {
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


      </div>
    </>
  );
}

export default Header;
