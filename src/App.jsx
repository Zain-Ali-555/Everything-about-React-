import Product from "./components/Product";
import Person from "./components/Person";

const App = () => {
  return (
    <>
      <div>
        <Person name="MalikZain555" age={19} />
        <Product name="Phone" price={2000} />
      </div>
    </>
  );
};

export default App;
