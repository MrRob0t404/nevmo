# Nevmo - Payment System

## Overview

Nevmo is a payment system that allows users to manage their accounts and perform transactions such as sending and receiving money, managing balances, and viewing transaction history. The app also supports requests for money between users, with functionality to approve or reject requests.

---

## Functional Requirements

### 1. User Accounts and UI

- **Account Creation and Login**: Users must be able to register, log in, and manage their accounts via a user-friendly interface.
- **Account Management**:
  - Each user should have an account with a balance that reflects the funds they have.
  - Users can deposit or withdraw money from their account.
  - Users should be able to view detailed account information, including their balance and transaction history.
  - Users can move money between their own accounts (e.g., from savings to checking).

### 2. Transactions

- **Send Money**: Users can transfer funds to other users. The transaction must record the sender, receiver, amount, and timestamp.
- **Request Money**: Users can request money from other users. The request is visible to the recipient, and they can approve or reject it.
- **Transaction History**: Users can view all transactions (sent, received, deposits, and withdrawals) with details such as amount, date, and status.

### 3. APIs

- **User Operations API**:
  - API for user authentication (register, login, logout).
  - API for viewing and managing user accounts (view balance, deposit, withdraw).
  - API for viewing transaction history.
- **Transaction API**:
  - API to send money to other users.
  - API to request money from other users.
  - API to approve/reject payment requests.
  - API to manage transactions (record sender, receiver, amount, timestamp).

---

## Non-Functional Requirements

### 1. Security

- **Encryption**: Passwords and sensitive data should be encrypted using industry standards (e.g., bcrypt for password hashing).
- **Authentication**: Use token-based authentication (e.g., JWT) for secure login and session management.
- **Data Privacy**: Ensure that all user data (transactions, balances) is private and accessible only to the appropriate user.

### 2. Performance

- **Response Time**: APIs must respond to user requests within a maximum of 500ms.
- **Scalability**: The system should be scalable to handle thousands of concurrent users performing transactions.
- **Availability**: Ensure 99.9% uptime for the system.

### 3. Compliance

- **Regulatory Compliance**: The system must comply with financial regulations such as KYC (Know Your Customer), AML (Anti-Money Laundering), and data protection standards like GDPR.

---

## System Design

### 1. User Model

- Users will have a unique ID, name, email, and password.
- Each user will have one or more accounts with a balance.

### 2. Account Model

- Accounts are linked to users and will store the balance. Multiple accounts can exist for a single user (e.g., savings, checking).

### 3. Transaction Model

- Each transaction will track:
  - **Sender**: User initiating the transaction.
  - **Receiver**: User receiving the money.
  - **Amount**: Transaction amount.
  - **Status**: Pending, approved, rejected, or completed.
  - **Timestamp**: Date and time the transaction was initiated.

### 4. Transaction Request Model

- Requests between users will track the requester, requestee, amount, and approval status (pending, approved, rejected).

---

## API Endpoints

### 1. User Endpoints

- `POST /register`: Create a new user.
- `POST /login`: Authenticate and log in a user.
- `GET /account`: Retrieve user account details.
- `POST /account/deposit`: Deposit money to the account.
- `POST /account/withdraw`: Withdraw money from the account.

### 2. Transaction Endpoints

- `POST /transaction/send`: Send money to another user.
- `GET /transaction/history`: Retrieve transaction history.
- `POST /transaction/request`: Request money from another user.
- `POST /transaction/request/approve`: Approve a money request.
- `POST /transaction/request/reject`: Reject a money request.

---

## Database Design

### 1. Users Table

| Field        | Type   | Description                    |
| ------------ | ------ | ------------------------------ |
| `id`         | UUID   | Unique identifier for the user |
| `name`       | String | User's name                    |
| `email`      | String | User's email (unique)          |
| `password`   | String | User's password (hashed)       |
| `created_at` | Date   | Timestamp of account creation  |

### 2. Accounts Table

| Field        | Type    | Description                   |
| ------------ | ------- | ----------------------------- |
| `id`         | UUID    | Unique identifier for account |
| `user_id`    | UUID    | References the user           |
| `balance`    | Decimal | Current account balance       |
| `created_at` | Date    | Timestamp of account creation |

### 3. Transactions Table

| Field         | Type    | Description                               |
| ------------- | ------- | ----------------------------------------- |
| `id`          | UUID    | Unique identifier for transaction         |
| `sender_id`   | UUID    | User who sends the money                  |
| `receiver_id` | UUID    | User who receives the money               |
| `amount`      | Decimal | Amount of the transaction                 |
| `status`      | String  | Status of the transaction (pending, etc.) |
| `created_at`  | Date    | Timestamp of when the transaction occurs  |

### 4. Transaction Requests Table

| Field          | Type    | Description                               |
| -------------- | ------- | ----------------------------------------- |
| `id`           | UUID    | Unique identifier for the request         |
| `requester_id` | UUID    | User who requested money                  |
| `requestee_id` | UUID    | User who is being requested from          |
| `amount`       | Decimal | Requested amount                          |
| `status`       | String  | Status of the request (pending, etc.)     |
| `created_at`   | Date    | Timestamp of when the request was created |

---

## User Stories

### 1. Account Creation

- As a user, I want to create an account so that I can send and receive money.

### 2. Sending Money

- As a user, I want to send money to other users so that I can pay them for goods and services.

### 3. Requesting Money

- As a user, I want to request money from another user, so they know I expect a payment.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
