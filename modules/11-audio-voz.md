# Módulo 11: Audio y Voz

Objetivo
--------
Procesar audio: transcripción (STT), análisis y generación de voz (TTS). Cubriremos pipelines completos audio→STT→LLM→TTS.

Contenido y pasos
-----------------
1. Recepción de audio: webhooks, URLs o buckets S3.
2. STT: OpenAI Whisper, Google Speech-to-Text, AssemblyAI, Deepgram.
3. Postprocesado: limpiar transcripción, segmentar, extraer intención.
4. TTS: ElevenLabs, Google TTS, Azure Neural Voices, Coqui.

Ejercicio práctico
------------------
- Workflow completo: `Webhook audio → STT → LLM genera respuesta → TTS → devolver archivo de audio`.

Tips
----
- Gestiona tamaños de audio y latencia; para audios largos aplica batching o segmentación.
- Protege las claves de TTS y STT.