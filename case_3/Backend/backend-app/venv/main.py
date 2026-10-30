import json
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_FILE = "data.json"

def read_data():
    if not os.path.exists(DATA_FILE):
        with open(DATA_FILE, "w", encoding="utf-8") as file:
            json.dump(file, indent=4)
        
    with open(DATA_FILE, "r", encoding="utf-8") as file:
        return json.load(file)

@app.get("/api/works/{category}")
def get_works(category: str):
    db_json = read_data()
    
    if category in db_json:
        return db_json[category]
    return []
