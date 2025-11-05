# Módulo 14: Procesador Inteligente (Capstone)

Objetivo
--------
Proyecto final que combine extracción de datos de PDFs, análisis por IA y generación de reportes en Excel, con integración a MySQL y notificaciones.

Contenido y pasos
-----------------
1. Recibir lote de PDFs → extraer texto (OCR) → normalizar.
2. Pasar texto a LLM para extraer entidades y métricas.
3. Guardar resultados en MySQL y generar dashboards/Excel con KPI.
4. Enviar notificaciones con resumen y enlace a los archivos.

Ejercicio práctico
------------------
- Componentes entregables:
  - Workflow principal en `examples/workflows/`.
  - Script de prueba para subir PDFs de muestra.
  - Instrucciones para ejecutar y validar outputs.

Criterios de aceptación
-----------------------
- Extracción >= 90% de campos clave en documentos estructurados.
- Reporte generado y almacenado en la ruta configurada.