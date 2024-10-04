import React, { useState } from "react";
import axios from "axios";

const Transactions = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const handleSendMoney = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios.post("/api/transactions/send", { email, amount }, config);
    setMessage("Money sent successfully!");
  };

  return (
    <div>
      <h2>Send Money</h2>
      {message && <p>{message}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMoney();
        }}
      >
        <input
          type="email"
          placeholder="Recipient's Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Transactions;
