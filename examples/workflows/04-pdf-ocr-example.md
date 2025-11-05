# Ejemplo Módulo 04 — PDF → OCR → LLM → Resumen

Objetivo
--------
Recibir un PDF, extraer texto mediante OCR, enviar el texto a un LLM para generar un resumen y guardar el resultado en MySQL.

Requisitos
---------
- Servicio OCR (puede ser Tesseract local o API: Google Vision, AWS Textract, AssemblyAI).
- Proveedor LLM (OpenAI, Anthropic, etc.) con clave API.

Flujo sugerido
--------------
1. `Webhook` (archivo upload) → recibir PDF.
2. `HTTP Request` o `Execute Command` para enviar el binario al servicio OCR (o ejecutar Tesseract si está en un microservicio).
3. `Function` para limpiar/normalizar el texto.
4. `HTTP Request` a proveedor LLM con prompt: "Resume el siguiente texto: <texto>" (usa few-shot si necesitas formato).
5. `MySQL` node para guardar el resumen y metadatos del PDF.
6. `Email` node para enviar el resumen al solicitante.

Tips
----
- Si el PDF es escaneado, OCR es obligatorio; si es un PDF nativo, extraer texto directo es mejor.
- Controla tamaños: para PDFs largos segmenta en páginas y resume por partes, luego combina resúmenes.