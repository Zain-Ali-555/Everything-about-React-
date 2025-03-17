import React from "react";

const App = () => {
  const temperature = (temp) => {
    if (temp < 15) return <h1>Its cold outside.</h1>;
    if (temp >= 15 && temp <= 25) return <h1>Its nice outside.</h1>;
    if (temp > 25) return <h1>Its hot outside.</h1>;
  };

  const userStatus = (isAdmin, LoggedIn) => {
    if (isAdmin == true && LoggedIn == true) return <h1>Welcome Admin.</h1>;
    if (isAdmin == false && LoggedIn == true) return <h1>Welcome User.</h1>;
  };

  return (
    <>
      <div>
        <h1>{userStatus(true, true)}</h1>
        <h5>{temperature(15)}</h5>
      </div>
    </>
  );
};

export default App;
