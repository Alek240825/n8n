# Módulo 5: Manejo de Imágenes

Objetivo
--------
Procesar imágenes (redimensionar, convertir formatos, extraer texto con OCR, análisis de visión) y almacenar resultados en n8n.

Contenido y pasos
-----------------
1. Nodos relevantes: HTTP Request, Read Binary File, Move Binary Data, Function, integrations (S3, Drive).
2. Redimensionar/convertir: llamar a un servicio (ImageMagick en microservicio o API como Cloudinary).
3. Análisis de visión: enviar imágenes a un modelo de visión (Visión de Google, Azure, Hugging Face) para detección de objetos o etiquetas.
4. OCR en imágenes: usar Tesseract local o servicios cloud.

Ejercicio práctico
------------------
- Workflow: `Webhook (imagen) → redimensionar → enviar a modelo de visión → guardar etiquetas en MySQL y archivo procesado en S3`.

Tips
----
- Mejor procesar en batches y revisar límites de tamaño/tiempo de las APIs.
- Para privacidad, considera procesar en tu infra con herramientas locales (whisper.cpp para audio, tesseract para OCR, etc.).