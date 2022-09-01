import axios from "axios";
import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  const FatchApiData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        setProductsData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    FatchApiData();
    return () => {
      FatchApiData();
    };
  }, []);

  return (
    <div className="row mt-3">
      <div className="col">
        {productsData.map((card) => {
          return <ProductsCard card={card} key={card.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
