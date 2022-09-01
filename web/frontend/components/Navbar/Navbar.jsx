import {
  ActionList,
  AppProvider,
  Frame,
  Navigation,
  TopBar,
} from "@shopify/polaris";
import {
  EditMinor,
  ProductsMajor,
  PaymentsMajor,
  ConnectMinor,
  OrdersMajor,
} from "@shopify/polaris-icons";
import { useState, useCallback, useRef } from "react";
import Products from "../../pages/Product/Products";
import './Navbar.css'


const Navbar = ()  => {
  const defaultState = useRef({
    emailFieldValue: "thanamovin1997@gamil.com",
    nameFieldValue: "Movin Duraisamy",
  });

  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [storeName, setStoreName] = useState(
    defaultState.current.nameFieldValue
  );


  const handleSearchResultsDismiss = useCallback(() => {
    setSearchActive(false);
    setSearchValue("");
  }, []);
  const handleSearchFieldChange = useCallback((value) => {
    setSearchValue(value);
    setSearchActive(value.length > 0);
  }, []);
 
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );
  const toggleIsLoading = useCallback(
    () => setIsLoading((isLoading) => !isLoading),
    []
  );

  const userMenuActions = [
    {
      items: [{ content: "Edit Profile",icon:EditMinor}],
    },
  ];


  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Movin"
      detail={storeName}
      initials="D"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  const searchResultsMarkup = (
    <ActionList
      items={[
        { content: "Shoes" },
        { content: "Cloths" },
      ]}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchFieldChange}
      value={searchValue}
      placeholder="Search..."
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={searchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: "Back to Home",
          },
        ]}
      />
      <Navigation.Section
        separator
        title="Best Shoping App"
        items={[
          {
            label: "Products",
            icon: ProductsMajor,
            onClick: toggleIsLoading,
          },
          {
            label: "Orders",
            icon: OrdersMajor,
            onClick: toggleIsLoading,
          },
          {
            label: "Payment",
            icon: PaymentsMajor,
            onClick: toggleIsLoading,
          },
          {
            label: "Contact Us",
            icon: ConnectMinor,
            onClick: toggleIsLoading,
          },
        ]}
        
      />
    </Navigation>
  );

  const logo = {
    width: 114,
    topBarSource:"http://cdn.shopify.com/s/files/1/0535/7233/7834/files/Best-Electric-Bike-Food-Delivery-Toronto-Logo_e82de4df-209b-49d6-bbe2-cfaa9bd377c7.png?v=1620421528",
    contextualSaveBarSource:"https://www.linkedin.com/in/movin-duraisamy-a64ab212a/",
    url: "https://www.linkedin.com/in/movin-duraisamy-a64ab212a/",
    accessibilityLabel: "Movin Shopify",
  };


  return (
    <div style={{ height: "500px" }}>
      <AppProvider>
        <Frame
          logo={logo}
          topBar={topBarMarkup}
          navigation={navigationMarkup}
          showMobileNavigation={mobileNavigationActive}
          onNavigationDismiss={toggleMobileNavigationActive}
        >
          <Products/>          
        </Frame>
      </AppProvider>
    </div>
  );
}

export default Navbar;
