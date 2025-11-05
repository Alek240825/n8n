# Ejemplo Módulo 08 — Integración con Proveedores de IA (OpenAI / Anthropic)

Objetivo
--------
Configurar credenciales en n8n y realizar una llamada básica a un LLM (ej. OpenAI Chat completions) para generar texto.

Requisitos
---------
- Clave API de OpenAI o Anthropic guardada en las credenciales de n8n.

Flujo sugerido
--------------
1. `Webhook` o `Start` con entrada de texto.
2. `Set` para construir el prompt (incluye contexto o few-shot si aplica).
3. `HTTP Request` a la API del proveedor:
   - OpenAI Chat completions: POST https://api.openai.com/v1/chat/completions
   - Headers: Authorization: Bearer <API_KEY>
   - Body (JSON): model, messages, max_tokens, temperature
4. `Function` para extraer `choices[0].message.content` y mapear a salida.
5. `MySQL`/`Email` según quieras guardar o enviar el resultado.

Ejemplo de body (OpenAI):
```json
{
  "model": "gpt-4o-mini",
  "messages": [{"role":"user","content":"Resume el siguiente texto: {{text}}"}],
  "max_tokens": 300
}
```

Notas
-----
- Usa las credenciales de n8n para no exponer la clave en los workflows.
- Implementa manejo de errores y backoff en caso de rate limits.