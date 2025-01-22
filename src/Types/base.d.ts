type ScreenNav = "modellibrary" | "label" | "model" | "test" | "settings" | "support";

type OnNavFunction = (value: ScreenNav) => void;

type AppNavbar = {
    onNav: OnNavFunction;
    screenState: ScreenNav;
};

type AppHeader = {
    navbarOpen: boolean;
    setNavbarOpen: (value: boolean) => void;
};
