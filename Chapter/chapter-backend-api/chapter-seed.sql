CREATE TABLE IF NOT EXISTS Chapter_Users (
    users_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    email VARCHAR(255) NOT NULL,
    theme_color VARCHAR(50) NOT NULL,
    reminder_frequency INT NOT NULL,
    pin_number INT NOT NULL,
    password VARCHAR(255) NOT NULL,
    UNIQUE (email),
    UNIQUE (pin_number),
    UNIQUE (password)
);

CREATE TABLE IF NOT EXISTS Chapter_Posts (
    chapter_id SERIAL PRIMARY KEY,
    on_body VARCHAR(100) NOT NULL,
    scale INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    time_stamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    icon INT NOT NULL
);

-- A USER CAN Chapter_User CAN HAVE MANY Chapter_Posts


ALTER TABLE Chapter_Posts ADD users_id INT NOT NULL;
ALTER TABLE Chapter_Posts ADD CONSTRAINT fk_users_id 
    FOREIGN KEY (users_id) REFERENCES Chapter_Users(users_id);


