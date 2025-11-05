# Ejemplo Módulo 14 — Procesador Inteligente (Capstone)

Objetivo
--------
Proyecto final completo: recibir lote de PDFs, extraer datos estructurados con OCR+LLM, almacenar en MySQL y generar un reporte consolidado en Excel.

Componentes
-----------
- Ingesta: carpeta Drive o S3 con PDFs.
- Extractor: OCR + preprocesado (limpieza) por página.
- Parser LLM: extraer campos clave y datos tabulares.
- Persistencia: MySQL para registros y S3/Drive para archivos.
- Reporte: consolidar en Excel y enviar por email.

Flujo sugerido
--------------
1. `Cron` / `Drive Trigger` para detectar PDFs nuevos.
2. Por cada PDF: `HTTP Request` al OCR → obtener texto por página.
3. Para cada texto: `HTTP Request` al LLM con prompt para extraer campos (por ejemplo: nombre cliente, NIF, importe, fecha).
4. `MySQL` para guardar cada registro extraído.
5. Al finalizar el lote, `Spreadsheet` para generar un Excel con KPI y `Email` para enviar el reporte.

Criterios de éxito
------------------
- Extracción > 90% en documentos con estructura clara.
- Reporte con KPIs y enlaces a documentos en storage.

Notas
-----
- Implementa reintentos y fallback a un proceso manual para documentos que fallen OCR/LLM.
- Considera un dashboard sencillo (p. ej. Google Sheets) para visualizar KPI.