# Módulo 4: PDFs y Documentos (Word)

Objetivo
--------
Aprender a extraer, modificar y generar contenido de PDFs y documentos Word desde n8n, y cómo integrar OCR/servicios externos cuando sea necesario.

Contenido y pasos
-----------------
1. Nodos relevantes: HTTP Request, Read Binary File, Function, integrations (Drive/S3).
2. Extraer texto de PDF: llamar a un servicio OCR (Tesseract/Whisper/Proveedor Cloud) con el binario del PDF.
3. Procesar texto extraído (limpieza, normalización) y pasarlo a un LLM para resumen o extracción de entidades.
4. Generar PDF o Word de salida (usando servicios externos o librerías en un microservicio) y almacenar.

Ejercicio práctico
------------------
- Workflow: `Webhook (upload PDF) → OCR → LLM extrae campos clave → Guardar resumen en MySQL y enviar PDF con anotaciones por email`.

Tips
----
- Los PDF escaneados requieren OCR; selecciona el servicio según presupuesto y privacidad.
- Para modificaciones complejas de Word/PDF considera usar un microservicio Python/Node que reciba el binario y devuelva el resultado.

Recursos
-------
- Servicios OCR: Tesseract (local), Google Vision, AWS Textract, AssemblyAI (si soporta PDF).