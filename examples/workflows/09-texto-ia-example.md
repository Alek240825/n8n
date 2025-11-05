# Ejemplo Módulo 09 — Texto e IA: análisis de sentimiento y extracción

Objetivo
--------
Construir un workflow que reciba texto, detecte sentimiento y extraiga entidades usando un LLM.

Flujo sugerido
--------------
1. `Webhook` → recibir texto.
2. `Set` para preparar prompt (ej. "Clasifica el sentimiento y extrae entidades clave en formato JSON").
3. `HTTP Request` a proveedor LLM (OpenAI/Anthropic).
4. `Function` para parsear la respuesta JSON y normalizar campos `sentiment`, `entities`.
5. `MySQL` para guardar resultado y `Email` para notificar si el sentimiento es negativo.

Prompt ejemplo
--------------
"Por favor devuelve únicamente un objeto JSON con: {\n  \"sentiment\": \"positive|neutral|negative\",\n  \"entities\": [{\"type\": \"ORG|PERSON|PRODUCT\", \"text\": \"...\"}]\n}\nTexto: {{text}}"

Notas
-----
- Forzar salida JSON en el prompt facilita el parseo en n8n.
- Valida la salida del LLM con reglas simples antes de guardar en la DB.