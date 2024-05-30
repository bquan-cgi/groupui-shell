import { Groupui1010ActionArea, Groupui1010ActionAreaPopoverItem, Groupui1010Avatar, Groupui1010Divider, Groupui1010Header, Groupui1010Headline, Groupui1010Icon, Groupui1010Text, Groupui1010TopNavigation, Groupui1010TopNavigationItem } from "@group-ui/group-ui-react";
import "./App.css";

function Header() {
  return (
    <>
      <div>
        <div
          className="header-navigation-items container-border"
          brand="vwgroup"
        >
          <Groupui1010Header>
            <Groupui1010Headline heading="h5">Product name</Groupui1010Headline>
            <Groupui1010TopNavigation size="l" inverted="true" embedded>
              <Groupui1010TopNavigationItem>App 1</Groupui1010TopNavigationItem>
              <Groupui1010TopNavigationItem>App 2</Groupui1010TopNavigationItem>
              <Groupui1010TopNavigationItem>About</Groupui1010TopNavigationItem>
            </Groupui1010TopNavigation>

            <Groupui1010Divider vertical inverted></Groupui1010Divider>

            <Groupui1010ActionArea>
              <Groupui1010ActionAreaPopoverItem>
                <span slot="parent">
                  <Groupui1010Icon name="clock-32"></Groupui1010Icon>
                </span>
                <Groupui1010Text slot="content" class="popover-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, in.
                </Groupui1010Text>
              </Groupui1010ActionAreaPopoverItem>

              <Groupui1010ActionAreaPopoverItem>
                <span slot="parent">
                  <Groupui1010Icon name="rocket-32"></Groupui1010Icon>
                </span>
                <Groupui1010Text slot="content" class="popover-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, in.
                </Groupui1010Text>
              </Groupui1010ActionAreaPopoverItem>

              <Groupui1010ActionAreaPopoverItem>
                <Groupui1010Avatar
                  slot="parent"
                  inverted
                  size="m"
                ></Groupui1010Avatar>
                <Groupui1010Text slot="content" class="popover-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, in.
                </Groupui1010Text>
              </Groupui1010ActionAreaPopoverItem>
            </Groupui1010ActionArea>
          </Groupui1010Header>

          <Groupui1010TopNavigation size="l">
            <Groupui1010TopNavigationItem icon="home-24" href="/">
              Dashboard
            </Groupui1010TopNavigationItem>
            <Groupui1010TopNavigationItem icon="clipboard-24" href="/app2">
              Manage
            </Groupui1010TopNavigationItem>
            <Groupui1010TopNavigationItem icon="heart-24" href="/about">
              Favorites
            </Groupui1010TopNavigationItem>
            <Groupui1010TopNavigationItem icon="library-24" href="/nan">
              Library
            </Groupui1010TopNavigationItem>
          </Groupui1010TopNavigation>
        </div>


      </div>
    </>
  );
}

export default Header;
