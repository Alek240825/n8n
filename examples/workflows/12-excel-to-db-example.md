# Ejemplo Módulo 12 — Proyecto: Excel → Base de Datos (end-to-end)

Objetivo
--------
Workflow completo que importa un Excel, valida filas, inserta en MySQL y genera un reporte con errores.

Flujo sugerido
--------------
1. `Webhook` o `Drive Trigger` cuando se sube `data.xlsx`.
2. `Spreadsheet` node para parsear a JSON.
3. `SplitInBatches` + `Function` para validar cada fila.
4. `IF` para separar válidos/invalidos.
5. `MySQL` para insertar filas válidas (usar parámetros).
6. `Spreadsheet` para generar un Excel con filas inválidas y `Google Drive` para guardarlo.
7. `Email` para notificar al propietario con el reporte adjunto.

Criterios de aceptación
-----------------------
- Todas las filas válidas insertadas.
- Reporte Excel con filas inválidas generado y enviado.

Notas
-----
- Incluye pruebas con un dataset de ejemplo en `examples/data/contacts_sample.xlsx` (puedes crear el archivo manualmente).