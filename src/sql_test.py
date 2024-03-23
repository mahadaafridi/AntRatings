import sqlite3

connection = sqlite3.connect(':memory:')

database = connection.execute(
    '''
    CREATE TABLE person(
    person_id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER
   ) STRICT;
    '''
)

print(database.fetchone())