# Módulo 9: Texto y IA

Objetivo
--------
Usar modelos de lenguaje (LLMs) para tareas de texto: clasificación, análisis de sentimiento, generación, resumen y extracción de entidades.

Contenido y pasos
-----------------
1. Patrones: preprocesado (cleaning), prompt design, postprocesado (parseo JSON, validación).
2. Llamadas a OpenAI/Anthropic/HuggingFace via `HTTP Request` o nodos específicos.
3. Ejemplos: análisis de sentimiento, generación de respuestas, traducción automática, limpieza de texto para DB.

Ejercicio práctico
------------------
- Workflow: `Texto entrante → detectar idioma → resumen + sentimiento → guardar en MySQL y enviar notificación`.

Tips
----
- Mantén prompts cortos y con few-shot si necesitas formato específico.
- Controla tokens y coste; usa truncation y parámetros de temperatura.