# Módulo 12: Proyecto — Excel → Base de Datos (End-to-End)

Objetivo
--------
Proyecto práctico: construir un workflow que importe hojas Excel, valide datos, los transforme y los cargue en MySQL con reporting automático.

Contenido y pasos
-----------------
1. Trigger: Webhook o carpeta de Drive donde se suben Excel.
2. Parseo y validación: validar esquema y tipos, separar filas inválidas.
3. Carga: insertar en MySQL en batches.
4. Reporte: generar Excel con resultados (inserciones, errores) y enviar por email.

Ejercicio práctico
------------------
- Implementa `examples/workflows/excel_to_mysql.json` y prueba con dataset de muestra.

Criterios de aceptación
-----------------------
- Todas las filas válidas insertadas en la DB.
- Registro de filas inválidas en un archivo Excel adjunto en email.