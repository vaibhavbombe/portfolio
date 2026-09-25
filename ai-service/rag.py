from sentence_transformers import SentenceTransformer
import numpy as np
from knowledge_base import CHUNKS

model = SentenceTransformer('all-MiniLM-L6-v2')

chunk_embeddings = model.encode(CHUNKS)

def retrieve_relevant_chunks(question, top_k=3):
    question_embedding = model.encode([question])[0]

    similarities = np.dot(chunk_embeddings, question_embedding) / (
        np.linalg.norm(chunk_embeddings, axis=1) * np.linalg.norm(question_embedding)
    )

    top_indices = np.argsort(similarities)[::-1][:top_k]
    return [CHUNKS[i] for i in top_indices]