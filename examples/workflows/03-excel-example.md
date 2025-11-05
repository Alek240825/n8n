# Ejemplo Módulo 03 — Excel → Validación → MySQL

Objetivo
--------
Importar un Excel, validar filas y cargar las válidas en MySQL (ejemplo didáctico).

Requisitos
---------
- Tener un servidor MySQL accesible y una tabla `contacts` con columnas `id, name, email, phone`.
- Tener un archivo Excel `contacts.xlsx` con esas columnas.

Flujo sugerido
--------------
1. `Webhook` o `Start` con archivo subido (o `Google Drive Trigger` cuando se sube a Drive).
2. `Spreadsheet File` / `Read Binary File` + `Spreadsheet` node para convertir a JSON.
3. `SplitInBatches` para procesar por filas.
4. `Function` para validar (email válido, nombre no vacío).
5. `IF` para separar válidos/invalidos.
6. `MySQL` node para insertar filas válidas (usa parámetros para evitar SQL injection).
7. Al terminar, generar un Excel con filas inválidas y subirlo a Drive / enviar por email.

Payload de ejemplo (fila):
```json
{ "name": "Ana", "email": "ana@example.com", "phone": "+34123456789" }
```

Notas
-----
- Para test local puedes crear un `Start` node y simular `items` con `Set`.
- Usa `SplitInBatches` para evitar timeouts con archivos grandes.