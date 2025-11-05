# Ejemplo Módulo 10 — Imágenes e IA: detección de objetos

Objetivo
--------
Enviar imágenes a un servicio de visión y actuar según la detección de objetos.

Flujo sugerido
--------------
1. `Webhook` para recibir archivo de imagen.
2. `HTTP Request` al servicio de visión (Google Vision / Hugging Face / Replicate).
3. `Function` para filtrar resultados (confidence > 0.7) y decidir acciones.
4. `IF` node para ramificar: por ejemplo, si se detecta "person" enviar notificación; si no, almacenar metadata.
5. `MySQL` para persistir etiquetas y confidence.

Ejercicio
--------
- Crea reglas que activen workflows distintos según la etiqueta principal (p.ej. "dog" -> workflow A, "car" -> workflow B).