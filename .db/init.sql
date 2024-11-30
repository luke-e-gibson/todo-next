CREATE TABLE hello_world(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
)

INSERT INTO hello_world(name) VAlUES ("test row")