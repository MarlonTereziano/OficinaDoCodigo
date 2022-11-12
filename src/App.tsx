import Routes from "./routes";
import AppProvider from "./hooks";

export function App() {
  return (
    <>
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
}
