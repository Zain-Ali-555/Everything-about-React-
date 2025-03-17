import { FaBeer } from "react-icons/fa";

const App = () => {
  let style = {
    backgroundColor: "lightgrey",
    padding: "15px",
    borderRadius: "8px",
    margin: "1rem 0",
    color: "black",
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "20px",
          borderRadius: "10px",
          color: "darkblue",
        }}
      >
        Welcome to Our Website
      </div>
      <div style={style}>Welcome to Our Website</div>
      <div>
        <h1>
          React Icons Practice_
          <FaBeer style={{ color: "gold", fontSize: "30px" }} />
        </h1>
      </div>
    </>
  );
};

export default App;
