
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


