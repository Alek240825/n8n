# Ejemplo Módulo 05 — Imágenes: redimensionar, analizar y almacenar

Objetivo
--------
Procesar imágenes subidas, redimensionarlas, analizar con un modelo de visión y guardar resultados en storage y MySQL.

Requisitos
---------
- Servicio de transformación de imágenes (Cloudinary, microservicio con ImageMagick) o usar un endpoint que acepte binarios.
- Proveedor de visión (Google Vision, Azure, Hugging Face/Replicate).

Flujo sugerido
--------------
1. `Webhook` para recibir imagen o `Google Drive Trigger`.
2. `HTTP Request` para enviar la imagen a un servicio que la redimensione.
3. `HTTP Request` para enviar la imagen al servicio de visión y obtener etiquetas/boxes.
4. `Function` para mapear el resultado (confidence, labels) a un esquema.
5. `MySQL` para guardar metadatos y URL del archivo procesado.
6. Guardar el archivo procesado en S3/Drive y devolver la URL al usuario.

Ejercicio
--------
- Crear un workflow que rechace imágenes mayores a 5MB y redimensione a 1024px de ancho antes de enviarlas al modelo de visión.