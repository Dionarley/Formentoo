from flask import Flask, request, jsonify
import re

app = Flask(__name__)

@app.post("/validar")
def validar():
    data = request.json
    
    nome = data.get("nome", "")
    email = data.get("email", "")
    idade = data.get("idade", 0)

    if len(nome) < 3:
        return jsonify({"erro": "Nome muito curto"}), 400
    
    if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        return jsonify({"erro": "Email inválido"}), 400
    
    if not (1 <= int(idade) <= 120):
        return jsonify({"erro": "Idade inválida"}), 400

    return jsonify({"mensagem": "Dados válidos!"})
