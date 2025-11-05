# Ejemplo Módulo 00 — Preparando tu Ambiente

Objetivo
--------
Comprobar que tienes n8n, Docker y MySQL funcionando con un ejemplo mínimo.

Qué hace este ejemplo
---------------------
- Levanta una instancia de n8n (o comprueba que funciona) y muestra cómo probar un webhook.

Pasos
-----
1. Ejecuta n8n (Docker):

```powershell
docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n:latest
```

2. Entra a http://localhost:5678 y crea un workflow nuevo.

3. Añade un `Webhook` (POST) con path `/test-setup`.
4. Añade un `Set` con un campo `ok=true` y conecta al `Webhook`.
5. Añade un `Respond to Webhook` (o configura la respuesta del Webhook) para devolver `{ "ok": true }`.

6. Activa el workflow y prueba con curl / Postman:

```powershell
curl -X POST http://localhost:5678/webhook/test-setup -H "Content-Type: application/json" -d '{"hello":"world"}'
```

Resultado esperado: recibes una respuesta JSON con `ok: true` y ves la ejecución en el historial de n8n.

Notas
-----
- Si usas n8n Desktop, la UI es igual y solo cambia la URL/localización.
- Si usarás MySQL en módulos posteriores, verifica conexión desde MySQL Workbench antes de empezar.