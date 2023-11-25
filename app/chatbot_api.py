from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import openai

app = FastAPI()

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

@app.post("/chat", response_model=ChatResponse)
async def chat(chat_request: ChatRequest):
    print("aditya le goat")
    try:
        openai.api_key = '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'
        print("hashim monkey")
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": chat_request.message}]
        )

        gpt_response = response.choices[0].message['content']
        return ChatResponse(response=gpt_response)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)





