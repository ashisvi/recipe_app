from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def home():
    return {"project": "Recipe app", "stack": ["React Native", "FastAPI"]}


@app.get("/items/{item_id}")
def get_item(item_id: int, q):
    return {"item_id": item_id, "query": q}
