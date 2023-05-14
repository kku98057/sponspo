import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import { Provider } from "react-redux";
// import { store } from "./store";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        {/* <Provider store={store}> */}
        <Header></Header>
        <main>
          <Outlet />
        </main>
        <Footer></Footer>
        {/* </Provider> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
