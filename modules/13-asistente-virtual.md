# Módulo 13: Asistente Virtual (Integración Multimodal)

Objetivo
--------
Crear un asistente virtual que procese email/audio/texto, use IA para entender la petición y ejecute workflows apropiados en n8n.

Contenido y pasos
-----------------
1. Fuentes de entrada: email (IMAP), webhook, chat (Telegram/Slack), audio.
2. Interpretación: LLM para intención + extracción de entidades.
3. Planificación: mapear intención a workflow (reglas o agente de decisión).
4. Ejecución: trigger a workflows autorizados y devolver respuesta al usuario (email/chat/audio).

Ejercicio práctico
------------------
- Workflow: `Email entrante → extraer intención → crear ticket en MySQL + responder por email con plantilla generada por LLM`.

Seguridad
--------
- Lista blanca de workflows ejecutables desde el asistente.
- Logs y auditoría de acciones realizadas.