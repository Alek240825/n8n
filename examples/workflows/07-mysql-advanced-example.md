# Ejemplo Módulo 07 — MySQL Avanzado: backups y transacciones

Objetivo
--------
Automatizar un backup diario y ejecutar una operación con "rollback lógico" si algo falla.

Requisitos
---------
- Acceso a un servidor MySQL y espacio para almacenar backups (Drive/S3).

Flujo sugerido
--------------
1. `Cron` (diario) → `Execute Command` que corre `mysqldump` y guarda el SQL en un fichero (si el contenedor/host tiene acceso). Alternativa: ejecutar SELECT y exportar CSV vía n8n.
2. `HTTP Request` a un almacenamiento (S3) para subir el backup.
3. Para transacciones: workflow que ejecute una serie de queries y si una falla ejecute queries compensatorios (o marque el registro como "rollback_required").

Notas
-----
- Si no puedes ejecutar `mysqldump` desde n8n, crea un microservicio o usa SSH/cron en el host.
- Mantén políticas de retención de backups y cifrado si tratas datos sensibles.