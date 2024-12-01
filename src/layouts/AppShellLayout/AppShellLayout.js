import TopBar from "layouts/TopBar";

const AppShellLayout = ({ children }) => {
  return (
    <div className="app">
      <TopBar />
      {children}
    </div>
  );
};

export default AppShellLayout;
