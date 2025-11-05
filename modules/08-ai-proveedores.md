# Módulo: Integración con Proveedores de Inteligencia Artificial

Objetivo
--------
Aprender a conectar n8n con APIs de proveedores de IA para generación de texto, análisis, clasificación, visión y TTS. Cubriremos cómo configurar credenciales, construir prompts, manejar límites de tasa y fallos.

Proveedores objetivo
--------------------
- OpenAI (ChatGPT / GPT) — generación de texto y modelos instruct.
- Anthropic (Claude) — alternativas de chat y completado.
- Proveedores TTS/STT (ElevenLabs, Google, Azure) — voz y transcripción.
- Otros proveedores y herramientas especializadas (proveedores de búsqueda/visión/audio). 
- Nota sobre "Copilot": GitHub Copilot está orientado a desarrollo asistido; si hay una API disponible o producto empresarial que exponga endpoints, se documentará cómo integrarlo. Para el curso usaremos proveedores con API HTTP estándar.

Conceptos clave
---------------
- Credentials: usar el gestor de credenciales de n8n (no poner keys en workflows).
- Prompt engineering: escribir prompts claros y con ejemplos (few-shot) para obtener mejores resultados.
- Manejo de tokens y costos: limitar longitud, usar temperature y controles de coste.
- Rate limits y retries: implementar backoff exponencial y costos previstos.

Patrones de uso en n8n
----------------------
1. Llamada simple: `HTTP Request` con credenciales para enviar prompt/entrada y parsear la respuesta.
2. Preprocesado: normalizar texto, remove PII si fuera necesario.
3. Postprocesado: mapear la salida a campos que se usen en otros nodes (DB, email, archivos).
4. Orquestación multi-IA: encadenar llamadas a distintos proveedores (por ejemplo, STT → LLM → TTS).

Ejemplo rápido (OpenAI)
-----------------------
- Configurar credenciales en n8n (API Key).
- Node `HTTP Request`:
  - Method: POST
  - URL: provider endpoint (ej. `https://api.openai.com/v1/chat/completions`)
  - Headers: Authorization: Bearer <API_KEY>
  - Body (JSON): formato de prompt según API.
- Parsear la respuesta y usar el texto en pasos siguientes.

Buenas prácticas
----------------
- Guardar y rotar claves con seguridad.
- Validar y sanear inputs antes de enviarlos a la API.
- Usar logs y métricas para monitorear consumo y errores.

Ejercicios sugeridos
--------------------
- Crear un workflow que reciba texto, detecte sentimiento y guarde el resultado en MySQL.
- Pipeline audio → STT (OpenAI/otro) → resumen por LLM → enviar respuesta por email (o TTS).

---
Siguiente paso: crear ejemplos exportables para OpenAI y Anthropic y un cheatsheet de prompts.