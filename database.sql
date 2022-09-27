CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person(id)
);