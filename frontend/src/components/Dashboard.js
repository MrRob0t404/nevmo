import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const userResponse = await axios.get("/api/user/me", config);
      setUser(userResponse.data);

      const transactionResponse = await axios.get("/api/transactions", config);
      setTransactions(transactionResponse.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      <h3>Balance: ${user.balance}</h3>
      <h3>Your Transactions</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type === "credit" ? "Received" : "Sent"} $
            {transaction.amount} - {transaction.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
