const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "700$" },
    { id: 2, name: "Laptop", price: "1950$" },
    { id: 3, name: "Desktop", price: "5100$" },
  ];
  return (
    <>
      <h1>Products</h1>
      {products.map(
        (
          { id, name, price } // use map with destructring
        ) => (
          <li style={{ listStyle: "none", padding: "1rem" }} key={id}>
            Name: {name} <br />
            Price: {price}
          </li>
        )
      )}
    </>
  );
};

export default ProductList;
