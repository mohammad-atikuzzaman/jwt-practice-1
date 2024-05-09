import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../Contexts/AuthContext";

const AllProducts = () => {
  const { user } = useContext(MyContext);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/posts").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleAddCart = (items) => {
    console.log(items);
    console.log(user?.email);
    const secondItem = {name: items.name, details: items.details, email: user?.email}
    console.log(secondItem)
    axios
      .post("http://localhost:3000/carts", secondItem)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(products);
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="p-4 rounded-xl bg-white text-green-500 font-bold text-xl">
          {" "}
          <h2>{product.name}</h2> <p>{product.details}</p>{" "}
          <button
            className="btn btn-outline"
            onClick={() => handleAddCart(product)}>
            add to curt
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
