import React from "react";
import ReactDOM from "react-dom";
import Routes from "routes";
import { BrowserRouter as Router } from "react-router-dom";
import TopBar from "components/TopBar";
import { CurrentUserProvider } from "contexts/currentUser";
import CurrentUserChecker from "components/currentUserChecker";


const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
      <div>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </div>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
