import React from "react";
import "./App.css";
import NavBar from "./components/nav-bar/nav-bar.component";
import { ThemeProvider } from "./contexts/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/loading/loading.component";

const Popular = React.lazy(() => import("./pages/popular/popular.component"));
const Battle = React.lazy(() => import("./pages/battle/battle.component"));

class App extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light",
      }));
    },
  };

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="App">
              <NavBar />

              <React.Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Popular />} />
                  <Route path="/battle" element={<Battle />} />
                </Routes>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
