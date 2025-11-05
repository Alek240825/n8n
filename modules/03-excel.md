# Módulo 3: Excel y Hojas de Cálculo

Objetivo
--------
Dominar lectura, escritura y manipulación de archivos Excel/CSV desde n8n: mapeo de columnas, validaciones, batching y generación de informes.

Contenido y pasos
-----------------
1. Nodos relevantes: Spreadsheet/Excel node, Read Binary File, Move Binary Data, Function Item, SplitInBatches.
2. Leer un archivo Excel y transformarlo a JSON para procesar row‑by‑row.
3. Validar encabezados y tipos de dato.
4. Procesar en lotes (SplitInBatches) y usar nodos MySQL para insertar.
5. Generar y descargar un Excel de salida con los resultados o errores.

Ejercicio práctico
------------------
- Workflow: `Importar Excel → Validar → Insertar a MySQL → Generar reporte de errores (Excel)`.

Tips
----
- Usa el modo por filas para evitar problemas de memoria.
- Guarda archivos temporales en un storage persistente (Drive/S3) si el workflow puede reiniciarse.

Recursos
-------
- ejemplo: `examples/workflows/excel_to_mysql.json` (próximamente).