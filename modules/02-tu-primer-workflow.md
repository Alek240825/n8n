# Módulo 2: Tu Primer Workflow

Objetivo
--------
Crear tu primer workflow en n8n paso a paso: entender triggers, conectar nodes, pasar datos entre nodos y ejecutar/prueba del flujo.

Pre-requisitos
--------------
- Tener n8n corriendo (n8n Desktop, Docker o instalación local) y acceso a la interfaz.

Contenido paso a paso
---------------------
1) Crear un nuevo workflow
   - Entra a la interfaz de n8n y crea un workflow nuevo.
   - Guarda con un nombre descriptivo: "Primer Workflow - Hola Mundo".

2) Añadir un Trigger (Webhook)
   - Arrastra el node `Webhook` (Trigger) al lienzo.
   - Configura el método (POST) y path (por ejemplo `/webhook/hola`).
   - Activa el workflow para que el webhook sea accesible (o usa el modo de prueba según tu instalación).

3) Añadir un nodo Function para transformar datos
   - Añade un node `Function` conectado al `Webhook`.
   - En el `Function` escribe un pequeño script para enriquecer la entrada. Ejemplo:
   ```javascript
   // input: $json
   return [{ json: { message: `Hola, recibí: ${items[0].json.body?.text || 'sin texto'}` } }];
   ```

4) Añadir un nodo HTTP Request (opcional)
   - Si quieres comprobar integración externa, añade `HTTP Request` y llama a un servicio público (por ejemplo https://httpbin.org/post) usando el body generado por el `Function`.
   - Configura Method: POST, Body: JSON, y pasa los datos con expresiones (`{{$json["message"]}}`).

5) Añadir un nodo Set para preparar la respuesta
   - Usa el nodo `Set` para definir la estructura final que devolverás al invocador.
   - Ejemplo: crear campo `reply` con el contenido `{{$json["message"]}}`.

6) Conectar un nodo Response (o usar Webhook Reply)
   - Usa `Webhook` node config para responder automáticamente o añade un node `Respond to Webhook` (según versión) y conecta el output final.

7) Ejecutar y probar
   - Activa el workflow.
   - Envía una petición POST al webhook (puedes usar Postman o curl) con JSON: `{ "text": "mundo" }`.
   - Verifica en n8n que el workflow se disparó, revisa los datos en cada nodo y confirma la respuesta.

Puntos de aprendizaje
---------------------
- Cómo fluye la data entre nodos (items / binary / json).
- Uso de expresiones para mapear campos entre nodos (`{{$json[...]}}`).
- Dónde ver logs y ejecuciones (Run history).
- Manejo básico de errores: probar nodos individualmente y usar `Error Trigger`.

Ejercicio práctico
------------------
- Extender el workflow para que, después de la respuesta, guarde la entrada en una tabla MySQL usando el node `MySQL`.
- Crear una variante que, en lugar de responder, envíe un email con el texto recibido.

Notas
-----
- Este módulo es la base para todos los siguientes: entender triggers, transformaciones y llamadas a servicios externos te permitirá construir pipelines de archivos, IA y DB.

---
Siguiente paso sugerido: importar uno de los ejemplos en `examples/workflows/` o crear tu propia variación del "Primer Workflow".
