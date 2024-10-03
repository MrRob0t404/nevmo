# nevmo

erDiagram
User {
UUID id PK
string name
string email
string password_hash
timestamp created_at
timestamp updated_at
}

    Account {
        UUID id PK
        UUID user_id FK
        decimal balance
        timestamp created_at
        timestamp updated_at
    }

    Transaction {
        UUID id PK
        UUID sender_id FK
        UUID receiver_id FK
        decimal amount
        string transaction_type
        string status
        timestamp created_at
        timestamp updated_at
    }

    TransactionRequest {
        UUID id PK
        UUID requester_id FK
        UUID requestee_id FK
        decimal amount
        string status
        timestamp created_at
        timestamp updated_at
    }

    User ||--o{ Account : has
    User ||--o{ Transaction : sends/receives
    User ||--o{ TransactionRequest : makes
    TransactionRequest }o--|| User : "requestee/requester"
    Account ||--o{ Transaction : involves
