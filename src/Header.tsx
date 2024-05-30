import {
  GroupuiActionArea,
  GroupuiActionAreaPopoverItem,
  GroupuiAvatar,
  GroupuiDivider,
  GroupuiHeader,
  GroupuiHeadline,
  GroupuiIcon,
  GroupuiText,
  GroupuiTopNavigation,
  GroupuiTopNavigationItem,
} from "@group-ui/group-ui-react";
import "./App.css";

function Header() {
  return (
    <>
      <div>
        <div
          className="header-navigation-items container-border"
          brand="vwgroup"
        >
          <GroupuiHeader>
            <GroupuiHeadline heading="h5">Product name</GroupuiHeadline>
            <GroupuiTopNavigation size="l" inverted="true" embedded>
              <GroupuiTopNavigationItem>App 1</GroupuiTopNavigationItem>
              <GroupuiTopNavigationItem>App 2</GroupuiTopNavigationItem>
              <GroupuiTopNavigationItem>About</GroupuiTopNavigationItem>
            </GroupuiTopNavigation>

            <GroupuiDivider vertical inverted></GroupuiDivider>

            <GroupuiActionArea>
              <GroupuiActionAreaPopoverItem>
                <span slot="parent">
                  <GroupuiIcon name="clock-32"></GroupuiIcon>
                </span>
                <GroupuiText slot="content" class="popover-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, in.
                </GroupuiText>
              </GroupuiActionAreaPopoverItem>

              <GroupuiActionAreaPopoverItem>
                <span slot="parent">
                  <GroupuiIcon name="rocket-32"></GroupuiIcon>
                </span>
                <GroupuiText slot="content" class="popover-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, in.
                </GroupuiText>
              </GroupuiActionAreaPopoverItem>

              <GroupuiActionAreaPopoverItem>
                <GroupuiAvatar slot="parent" inverted size="m"></GroupuiAvatar>
                <GroupuiText slot="content" class="popover-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, in.
                </GroupuiText>
              </GroupuiActionAreaPopoverItem>
            </GroupuiActionArea>
          </GroupuiHeader>

          <GroupuiTopNavigation size="l">
            <GroupuiTopNavigationItem icon="home-24">
              Dashboard
            </GroupuiTopNavigationItem>
            <GroupuiTopNavigationItem icon="clipboard-24">
              Manage
            </GroupuiTopNavigationItem>
            <GroupuiTopNavigationItem icon="heart-24">
              Favorites
            </GroupuiTopNavigationItem>
            <GroupuiTopNavigationItem icon="library-24">
              Library
            </GroupuiTopNavigationItem>
          </GroupuiTopNavigation>
        </div>
      </div>
    </>
  );
}

export default Header;
