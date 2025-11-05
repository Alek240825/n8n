# Ejemplo Módulo 06 — MySQL básico: consultas e inserciones desde n8n

Objetivo
--------
Ejecutar operaciones básicas en MySQL (SELECT, INSERT) desde n8n y ver cómo parametrizar consultas.

Requisitos
---------
- Servidor MySQL accesible y tabla de ejemplo `contacts(id INT AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255))`.

Flujo sugerido
--------------
1. `Webhook` o `Start` con datos JSON.
2. `MySQL` node configurado con la credencial; operación: INSERT
   - Query: `INSERT INTO contacts (name, email) VALUES (:name, :email)`
   - Parameters: `name` = `{{$json["body"].name}}`, `email` = `{{$json["body"].email}}`
3. `MySQL` node (opcional) para SELECT y devolver lista de contactos.

Payload de prueba
-----------------
```json
{ "name": "Luis", "email": "luis@example.com" }
```

Notas
-----
- Usa parámetros (no concatenes strings) para evitar SQL injection.
- Para grandes volúmenes, usa `SplitInBatches` y controla el tamaño del batch.