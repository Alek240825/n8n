# Ejemplo Módulo 01 — Conceptos básicos y "Hola Mundo"

Objetivo
--------
Construir y probar un workflow simple que reciba un webhook, transforme datos y envíe una notificación (email o log).

Flujo sugerido
--------------
1. `Webhook` (Trigger) — ruta `/hola`
2. `Function` — crea un mensaje: `Hola, recibí: {{$json["body"]}}`
3. `Set` — formatea la salida (por ejemplo `message`)
4. `HTTP Request` (opcional) — enviar a httpbin para ver el resultado
5. `Respond to Webhook` — devolver `message` al invocador

Payload de prueba
-----------------
POST /webhook/hola

```json
{ "name": "Alek" }
```

Expresiones útiles
------------------
- `{{$json["body"].name}}` — acceder al campo `name` del body.
- `{{$now}}` — fecha/hora actual (dependiendo de versión).

Notas
-----
- Repite el proceso con `Start` trigger para pruebas manuales.
- Usa `Execute Workflow` node si quieres encadenar a otro workflow.