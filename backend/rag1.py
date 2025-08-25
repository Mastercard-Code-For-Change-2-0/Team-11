# rag_simple.py
import fitz  # PyMuPDF for PDFs
import requests
from bs4 import BeautifulSoup
from fastapi import FastAPI, Body
from typing import List
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from groq import Groq
from dotenv import load_dotenv  # <-- load env file
import os


app = FastAPI(title="Simple RAG Pipeline")

# Load environment variables from .env file
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

embedding_model = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")


PDF_PATHS = [r"D:\CHATBOTFINAL\data\policy.pdf"]
URLS = []



def load_pdf(path: str) -> str:
    text = ""
    doc = fitz.open(path)
    for page in doc:
        text += page.get_text("text") + "\n"
    return text

def load_url(url: str) -> str:
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    return soup.get_text(separator="\n")

def chunk_text(text: str) -> List[str]:
    splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    return splitter.split_text(text)

def build_vectorstore() -> FAISS:
    all_texts = []
    for pdf in PDF_PATHS:
        all_texts.append(load_pdf(pdf))
    for url in URLS:
        all_texts.append(load_url(url))

    docs = []
    for t in all_texts:
        docs.extend(chunk_text(t))

    return FAISS.from_texts(docs, embedding_model)

def retrieve_context(query: str, k: int = 3) -> str:
    docs = vectorstore.similarity_search(query, k=k)
    return "\n".join([d.page_content for d in docs])

def generate_answer(query: str, context: str) -> str:
    client = Groq(api_key=GROQ_API_KEY)

    prompt = f"Answer the question based on context.If no context available just answer the question based on your understanding \n\nContext:\n{context}\n\nQuestion: {query}\nAnswer:"

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2,
        max_tokens=500
    )

    return response.choices[0].message.content


vectorstore = build_vectorstore()


@app.post("/ask")
def ask_question(query: str = Body(..., embed=True)):

    context = retrieve_context(query)
    answer = generate_answer(query, context)
    return { "answer": answer}
