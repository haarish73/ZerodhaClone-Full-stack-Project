// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useEffect, useState } from "react";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const API_BASE = "http://localhost:5000";

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await fetch(`${API_BASE}/allOrders`);
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  const handleSell = async (id, name) => {
    if (window.confirm(`Are you sure you want to sell ${name}?`)) {
      try {
        await fetch(`${API_BASE}/deleteOrder/${id}`, { method: "DELETE" });
        setOrders(orders.filter((order) => order._id !== id));
        alert(`${name} sold successfully!`);
      } catch (err) {
        console.error("Error selling order:", err);
        alert("Failed to sell the order.");
      }
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Your Orders</h2>

      {orders.length === 0 ? (
        <div className="alert alert-info">
          You haven't placed any orders yet.
        </div>
      ) : (
        <div className="row">
          {orders.map((order) => (
            <div className="col" key={order._id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{order.name}</h5>
                  <p className="card-text">
                    <strong>Quantity:</strong> {order.qty} <br />
                    <strong>Price:</strong> ₹{order.price} <br />
                    <strong>Mode:</strong> {order.mode}
                  </p>
                  <button
                    className="btn btn-success"
                    onClick={() => handleSell(order._id, order.name)}
                  >
                    Sell
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
