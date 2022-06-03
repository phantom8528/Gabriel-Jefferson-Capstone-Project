CREATE DATABASE nodelogin;

CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    UNIQUE (email)
);

INSERT INTO users (name, email, password)
    VALUES 
        ('Gabriel Jefferson', 'test@gmail.com', 'testpassword');