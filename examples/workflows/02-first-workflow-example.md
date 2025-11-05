# Ejemplo Módulo 02 — Tu Primer Workflow (paso a paso)

Objetivo
--------
Guía práctica detallada para crear el primer workflow "Primer Workflow - Hola Mundo" que aparece en Módulo 2.

Paso a paso
-----------
1. Crear workflow nuevo y nombrarlo `Primer Workflow - Hola Mundo`.
2. Añadir node `Webhook`:
   - Method: POST
   - Path: `/webhook/hola`
3. Añadir `Function` (conectar al Webhook) con este código:

```javascript
return [{ json: { message: `Hola, recibí: ${items[0].json.body?.name || 'mundo'}` } }];
```

4. Añadir `Set` (conectar a Function): crear una propiedad `reply` con valor `{{$json["message"]}}`.
5. Añadir `Respond to Webhook` (o configurar la respuesta en el Webhook) para devolver la propiedad `reply`.
6. Activar workflow y probar con Postman o curl:

```powershell
curl -X POST http://localhost:5678/webhook/hola -H "Content-Type: application/json" -d '{"name":"Alek"}'
```

Salida esperada
---------------
```json
{ "reply": "Hola, recibí: Alek" }
```

Extensiones propuestas
---------------------
- Añadir un nodo `MySQL` para guardar la entrada.
- Añadir un nodo `Email` para enviar la respuesta por correo.
- Añadir validación con node `IF` para campos faltantes.