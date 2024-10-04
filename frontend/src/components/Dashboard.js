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

      const userResponse = await axios.get("/api/users/me", config);
      // console.log("DASHBOARD", userResponse);
      setUser(userResponse.data.user);

      // const transactionResponse = await axios.get("/api/transactions", config);
      // setTransactions(transactionResponse.data);
    };

    fetchData();
  }, []);
  const { username, balance } = user;
  return (
    <div>
      <h2>Welcome, {username}</h2>
      <h3>Balance: ${balance}</h3>
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
