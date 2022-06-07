
-- INSERT INTO Chapter_Users 
--     (first_name, last_name, gender, email, theme_color, reminder_frequency, pin_number, password)
-- VALUES 
--     ('Gabriel', 'Jefferson', 'male', 'gabrieljefferson5502@gmail.com', 'blue', 3, 2898, 'admin898$.' );

-- 05/25/22: TEST SUCCESSFUL

-- INSERT INTO Chapter_Posts
--     (on_body, scale, description, icon, users_id)
-- VALUES
--     ('Face', 5, 'Sharp Pain in Back tooth', 1, 1);

-- 06/01/22: New Tables

-- SELECT * FROM chapter_users INNER JOIN chapter_posts 
-- ON chapter_users.users_id = chapter_posts.users_id;

CREATE TABLE users(
    user_id UUID DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE page(
    page_id SERIAL,
    user_id UUID,
    location VARCHAR(255),
    scale VARCHAR(20),
    description VARCHAR(255) NOT NULL,
    time_stamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (page_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- FAKE USER DATA 

INSERT INTO users 
    (user_name, user_email, user_password)
VALUES
    ('Gabriel', 'gabriel@gmail.com','gabe123456' ),
    ('Andre', 'andre@gmail.com', 'andre123456');

-- FAKE PAGE DATA

INSERT INTO page
    (user_id, location, scale, description)
VALUES
    ('17dbbf7e-74fb-4eb6-ac7f-a6fb0798641c', 'mouth', '5', 'Still feeling pain, but Im a lot better today'),
    ('61f32b60-1327-409d-a1d7-2b3a64c0e23a', 'left foot','10', 'Stepped on a nail today. Worst pain ive ever felt');

-- user_id for Gabriel Jefferson: 17dbbf7e-74fb-4eb6-ac7f-a6fb0798641c
-- user_id for Andre: 61f32b60-1327-409d-a1d7-2b3a64c0e23a


INSERT INTO page
    (user_id, location, scale, description)
VALUES
    ('cd6d62f3-22e0-48b3-8e1d-97f523b0e271', 'brain', '10', 'Sharp pain when I woke up this morning'),
    ('cd6d62f3-22e0-48b3-8e1d-97f523b0e271', 'stomach','5', 'probably something I ate yesterday'),
    ('cd6d62f3-22e0-48b3-8e1d-97f523b0e271', 'stomach','10', 'yep, it was something I ate');



SELECT * FROM users INNER JOIN page ON users.user_id = page.user_id; 


SELECT * FROM users LEFT JOIN page ON users.user_id = page.user_id WHERE users.user_id = '530c83db-96c7-4f01-9129-218d23324e08';

SELECT * FROM users AS u LEFT JOIN page AS p ON u.user_id = p.user_id WHERE u.user_id = '1ba2ae04-292b-4cf7-a9a9-5f72bd86fc11';

SELECT u.user_name, p.page_id, p.location, p.description, p.time_stamp FROM users AS u LEFT JOIN page AS p ON u.user_id = p.user_id WHERE u.user_id = '1ba2ae04-292b-4cf7-a9a9-5f72bd86fc11';


ALTER TABLE page ALTER COLUMN time_stamp TIMESTAMP;

ALTER TABLE page
ALTER COLUMN time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE page
    ALTER COLUMN time_stamp TYPE DATE;