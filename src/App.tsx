import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer, Sidebar } from "./components";
import { SignIn, SignUp, Home, TicTacToe, WAM } from "./pages/pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/games">
          <Route path="tictactoe" element={<TicTacToe />} />
          <Route path="whackamole" element={<WAM />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
