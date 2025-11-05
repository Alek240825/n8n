# Ejemplo Módulo 13 — Asistente Virtual: email → intención → ticket

Objetivo
--------
Crear un asistente que reciba emails, extraiga intención con un LLM y cree un ticket en MySQL o en un sistema externo.

Requisitos
---------
- Acceso IMAP / node `Email` configurado en n8n.
- Clave API LLM para análisis de intención.
- Tabla `tickets` en MySQL.

Flujo sugerido
--------------
1. `Email Trigger` (IMAP) cuando llega un email.
2. `Set` para normalizar campos (from, subject, body).
3. `HTTP Request` a LLM con prompt: "Extrae intención y prioridad".
4. `Function` para mapear respuesta (intent, priority, summary).
5. `MySQL` para crear ticket con campos extraídos.
6. `Email` para responder al remitente con número de ticket y resumen.

Notas
-----
- Define lista blanca de acciones que el asistente puede ejecutar automáticamente.
- Registra todas las decisiones en una tabla `audit` para auditoría.