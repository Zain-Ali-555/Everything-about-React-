const Product = () => {
  const obj = { name: "Lotion", Price: "10$", availiblity: "Stock out" };
  return (
    <>
      <div className="products">
        <h1>Product</h1>
        <p>Name: {obj.name}</p>
        <p>Price: {obj.Price}</p>
        <p>Availiblity: {obj.availiblity}</p>
      </div>
    </>
  );
};

export default Product;
