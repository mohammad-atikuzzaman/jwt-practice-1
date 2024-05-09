import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../Contexts/AuthContext";

const Cart = () => {
  const { user } = useContext(MyContext);
  console.log(user?.email)
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3000/carts/${user.email}`, {
      withCredentials: true,
    }).then((res) => {
      setItems(res.data);
    });
  }, [user]);
  console.log("items",items);
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item._id} className="bg-white p-4 rounded-xl">
          <h2>{item.name}</h2> <p>{item.details}</p> <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
