# Módulo: MySQL — Conexión e Integración con n8n

Objetivo
--------
Aprender a conectar n8n con bases de datos MySQL para realizar consultas, inserciones, actualizaciones y backups automáticos. Incluye ejemplos con MySQL Workbench y buenas prácticas.

Pre-requisitos
--------------
- Servidor MySQL accesible (local o remoto).
- MySQL Workbench opcional para administrar la base.
- Credenciales (host, user, password, database).

Nodos útiles en n8n
-------------------
- MySQL node: ejecutar consultas parametrizadas (SELECT, INSERT, UPDATE, DELETE).
- Execute Query / Function: para lógica más compleja o combinada.
- HTTP Request: para integrar APIs que complementen la información a insertar.

Ejemplo de conexión
-------------------
1. En n8n, crea una nueva credencial de tipo MySQL.
2. Rellena host, puerto (3306), user y password y testea la conexión.

Operaciones comunes (ejemplos)
------------------------------
- Insertar filas desde Excel:
  - Leer Excel → mapear columnas → usar `MySQL` node con INSERT parametrizado.
- Actualizar registros:
  - Consultar filas con SELECT (filtrado) → iterar y ejecutar UPDATE por fila.
- Backups automáticos:
  - Workflow diario que ejecuta `mysqldump` en un servidor o consulta SELECT * y guarda CSV/SQL en Drive.

Ejemplo rápido: Insertar datos
-----------------------------
- Node A: Trigger (Webhook o manual).
- Node B: Read/Parse spreadsheet.
- Node C: MySQL (INSERT) — usar expresiones para mapear campos.

Buenas prácticas
----------------
- Usar transacciones cuando inserciones dependen unas de otras (si el node lo permite) o manejar compensaciones.
- Sanitizar inputs para evitar inyección de SQL — usar parámetros, no concatenar strings.
- Configurar límites y batching para evitar latencia o timeouts en la DB.

Integración con MySQL Workbench
-------------------------------
- Usa Workbench para diseñar y revisar esquemas, exportar datos de ejemplo y probar queries que luego replicarás en n8n.

---
Siguiente paso: crear `examples/workflows/excel_to_mysql.json` y un ejercicio que valide integridad de datos después de la importación.