import psycopg2
import os

def get_connection():
    return psycopg2.connect(
        database=os.environ.get("DB_NAME", "road"),
        user=os.environ.get("DB_USER", "admin"),
        password=os.environ.get("DB_PASSWORD", "password"),
        host=os.environ.get("DB_HOST", "localhost"),
        port=os.environ.get("DB_PORT", "5432")
    )
