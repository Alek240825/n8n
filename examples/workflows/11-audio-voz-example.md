# Ejemplo Módulo 11 — Audio y Voz: audio→STT→LLM→TTS

Objetivo
--------
Pipeline completo que recibe un audio, lo transcribe (STT), genera una respuesta con LLM y convierte la respuesta a audio (TTS).

Requisitos
---------
- Proveedor STT (OpenAI Whisper, AssemblyAI, Deepgram).
- Proveedor LLM (OpenAI, Anthropic).
- Proveedor TTS (ElevenLabs, Google, Azure) o Coqui para self-host.

Flujo sugerido
--------------
1. `Webhook` recibe el archivo de audio (binary data).
2. `HTTP Request` al proveedor STT enviando el binario y obteniendo texto.
3. `HTTP Request` al LLM con prompt: "Responde de forma concisa al siguiente texto: <transcripción>".
4. `HTTP Request` al TTS con el texto devuelto para generar audio.
5. Guardar el audio en S3/Drive y devolver la URL al usuario.

Notas
-----
- Para audios largos, segmenta en trozos y combina transcripciones.
- Añade caching si esperas repetir transcripciones de audios iguales.