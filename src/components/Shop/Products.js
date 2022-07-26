import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

var DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "book",
    price: 12,
    description: "This is first product",
  },
  {
    id: "p2",
    title: "ball",
    price: 25,
    description: "This is second product",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
