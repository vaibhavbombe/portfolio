from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
from groq import Groq
import os
from rag import retrieve_relevant_chunks

load_dotenv()

app = FastAPI()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def read_root():
    return {"message": "AI service is alive"}

@app.post("/chat")
def chat(request: ChatRequest):
    relevant_chunks = retrieve_relevant_chunks(request.message)
    context = "\n\n".join(relevant_chunks)

    response = client.chat.completions.create(
        model="openai/gpt-oss-20b",
        messages=[
            {
                "role": "system",
                "content": f"You are an assistant answering questions about Vaibhav Bombe. Use ONLY the following information to answer. If the answer isn't in this information, say you don't have that detail.\n\n{context}"
            },
            {"role": "user", "content": request.message}
        ]
    )
    return {"reply": response.choices[0].message.content}