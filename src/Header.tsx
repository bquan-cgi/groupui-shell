import "./App.css";

function Header() {
  return (
    <>
      <div>
        <div
          className="header-navigation-items container-border"
          brand="vwgroup"
        >
          <groupui-10-1-0-header>
            <groupui-10-1-0-headline heading="h5">Product name</groupui-10-1-0-headline>
            <groupui-10-1-0-top-navigation size="l" inverted="true" embedded>
              <groupui-10-1-0-top-navigation-item>App 1</groupui-10-1-0-top-navigation-item>
              <groupui-10-1-0-top-navigation-item>App 2</groupui-10-1-0-top-navigation-item>
              <groupui-10-1-0-top-navigation-item>About</groupui-10-1-0-top-navigation-item>
            </groupui-10-1-0-top-navigation>

            <groupui-10-1-0-divider vertical inverted></groupui-10-1-0-divider>

            <groupui-10-1-0-action-area>
              <groupui-10-1-0-action-area-popover-item>
                <span slot="parent">
                  <groupui-10-1-0-icon name="clock-32"></groupui-10-1-0-icon>
                </span>
                <groupui-10-1-0-text slot="content" class="popover-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, in.
                </groupui-10-1-0-text>
              </groupui-10-1-0-action-area-popover-item>

              <groupui-10-1-0-action-area-popover-item>
                <span slot="parent">
                  <groupui-10-1-0-icon name="rocket-32"></groupui-10-1-0-icon>
                </span>
                <groupui-10-1-0-text slot="content" class="popover-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, in.
                </groupui-10-1-0-text>
              </groupui-10-1-0-action-area-popover-item>

              <groupui-10-1-0-action-area-popover-item>
                <groupui-10-1-0-avatar
                  slot="parent"
                  inverted
                  size="m"
                ></groupui-10-1-0-avatar>
                <groupui-10-1-0-text slot="content" class="popover-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, in.
                </groupui-10-1-0-text>
              </groupui-10-1-0-action-area-popover-item>
            </groupui-10-1-0-action-area>
          </groupui-10-1-0-header>

          <groupui-10-1-0-top-navigation size="l">
            <groupui-10-1-0-top-navigation-item icon="home-24">
              Dashboard
            </groupui-10-1-0-top-navigation-item>
            <groupui-10-1-0-top-navigation-item icon="clipboard-24">
              Manage
            </groupui-10-1-0-top-navigation-item>
            <groupui-10-1-0-top-navigation-item icon="heart-24">
              Favorites
            </groupui-10-1-0-top-navigation-item>
            <groupui-10-1-0-top-navigation-item icon="library-24">
              Library
            </groupui-10-1-0-top-navigation-item>
          </groupui-10-1-0-top-navigation>
        </div>


      </div>
    </>
  );
}

export default Header;
