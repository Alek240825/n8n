# Módulo 0: Preparando tu entorno de n8n 👶

Objetivo
--------
Preparar el entorno de desarrollo para trabajar con n8n: instalación, ejecución local (Windows), con Docker, configuración básica, manejo de credenciales y buenas prácticas para desarrollo y pruebas.

Requisitos mínimos
------------------
- Sistema operativo: Windows 10/11 (64-bit) o Linux/macOS para otros entornos
- Node.js >= 18 (si se usa instalación por npm)
- Docker & Docker Compose (recomendado para entornos reproducibles)
- Git

Configurar MySQL y MySQL Workbench
----------------------------------
Para muchos ejercicios del curso usaremos MySQL como base de datos. Aquí tienes una guía rápida para instalar y comprobar la conexión (orientado a Windows):

1. Instalar MySQL Server (Windows):
	- Descarga el instalador desde https://dev.mysql.com/downloads/installer/.
	- Durante la instalación crea un usuario administrativo y una contraseña segura.

2. Instalar MySQL Workbench (opcional, recomendado):
	- Descarga MySQL Workbench desde https://dev.mysql.com/downloads/workbench/.
	- Abre Workbench y crea una nueva conexión apuntando a `localhost` y el puerto por defecto `3306`.

3. Crear base de datos y usuario para n8n (ejemplo desde Workbench o línea de comandos):

```sql
CREATE DATABASE n8n_db;
CREATE USER 'n8n_user'@'localhost' IDENTIFIED BY 'tu_password_segura';
GRANT ALL PRIVILEGES ON n8n_db.* TO 'n8n_user'@'localhost';
FLUSH PRIVILEGES;
```

4. Configurar n8n para usar MySQL (variables de entorno en Docker Compose o entorno):

```
DB_TYPE=mysqldb
DB_MYSQLDB_DATABASE=n8n_db
DB_MYSQLDB_HOST=host.docker.internal  # o localhost
DB_MYSQLDB_PORT=3306
DB_MYSQLDB_USER=n8n_user
DB_MYSQLDB_PASSWORD=tu_password_segura
```

5. Verificar conexión desde MySQL Workbench y probar que n8n puede iniciar y crear tablas en la base de datos.

Notas:
- Si trabajas con Docker en Windows, `host.docker.internal` suele resolver la conexión al host.
- Para entornos robustos en producción, considera usar una instancia gestionada o un contenedor separado con persistencia y backups.

Instalación rápida (Docker) — recomendado
---------------------------------------
1. Instala Docker Desktop para Windows y habilita WSL2.
2. Clona el repositorio del curso (si aplica):

```powershell
git clone <repo-url> c:\n8n
cd c:\n8n
```

3. Archivo simple `docker-compose.yml` (ejemplo mínimo):

```yaml
version: '3.7'
services:
	n8n:
		image: n8nio/n8n:latest
		restart: unless-stopped
		ports:
			- 5678:5678
		environment:
			- N8N_BASIC_AUTH_ACTIVE=true
			- N8N_BASIC_AUTH_USER=${N8N_USER}
			- N8N_BASIC_AUTH_PASSWORD=${N8N_PASSWORD}
			- N8N_HOST=0.0.0.0
			- N8N_PORT=5678
		volumes:
			- ./n8n:/home/node/.n8n
```

4. Levantar con:

```powershell
docker compose up -d
```

Instalación por npm (para desarrollo)
-------------------------------------
1. Instala Node.js (recomendado usar nvm para gestión de versiones).
2. Instala n8n globalmente (solo para entornos de desarrollo):

```powershell
npm install -g n8n
# Ejecutar n8n
n8n start
```

Estructura de proyecto sugerida
--------------------------------
Dentro del repo del curso (sugerido):

```
c:\n8n\
├── modules/          # Contenido del curso (módulos en Markdown)
├── examples/         # Ejemplos de workflows (JSON/MD)
├── exercises/        # Ejercicios propuestos
├── cheatsheets/      # Hojas rápidas de referencia
├── test/             # Pruebas automatizadas (jest / node)
└── n8n/              # Volumen para datos de n8n (workflows, credenciales)
```

Variables de entorno útiles
---------------------------
- N8N_HOST: host donde corre n8n (por defecto 0.0.0.0)
- N8N_PORT: puerto (por defecto 5678)
- N8N_BASIC_AUTH_ACTIVE, N8N_BASIC_AUTH_USER, N8N_BASIC_AUTH_PASSWORD: autenticación básica
- N8N_PROTOCOL, N8N_PUBLIC_API: para configurar https/reverse-proxy
- DB_MYSQLDB_DATABASE, DB_TYPE, DB_MYSQLDB_PORT, etc. si se usa base de datos externa

Credenciales y seguridad
------------------------
- Nunca comites archivos con credenciales en texto plano.
- Usa las credenciales internas de n8n (Credentials) para almacenar claves API.
- En entornos productivos, conecta n8n a una base de datos externa (MySQL/Postgres) y habilita backups.
- Protégete con HTTPS (reverse proxy: Nginx, Traefik) y autenticación (Basic Auth o OAuth).

Importar / exportar workflows
----------------------------
- En la UI de n8n: Import / Export → puedes pegar JSON o subir archivo.
- En desarrollo: guarda workflows de ejemplo en `examples/workflows/` para importarlos rápidamente.

Desarrollo y debugging
----------------------
- Ejecuta n8n en modo desarrollo para ver logs detallados (npm / npx):

```powershell
n8n start --tunnel
```

- Usa `console.log` dentro de nodos Function para debug.
- Habilita `LOG_LEVEL=debug` si necesitas más información en contenedores.

Tests y CI
---------
- Mantén una carpeta `test/` con tests unitarios y de integración.
- Para pruebas que implican llamadas a APIs externas, usa mocking (nock o sinon).
- Integra las pruebas en CI (GitHub Actions / GitLab CI) para ejecutar `npm test` en cada PR.

Consejos para Windows
---------------------
- Prefiere Docker Desktop + WSL2 para evitar problemas de rutas y permisos.
- Asegúrate de ejecutar PowerShell como administrador al configurar Docker si es necesario.
- Podrías necesitar aumentar límites de recursos en Docker Desktop (CPU/RAM) al ejecutar n8n con muchas integraciones.

Problemas comunes y soluciones rápidas
------------------------------------
- Problema: puerto 5678 en uso → Cambiar `N8N_PORT` o parar el servicio que ocupa el puerto.
- Problema: credenciales no aparecen → Verificar permisos del volumen `./n8n` y owner dentro del contenedor.
- Problema: errores API externas → Verificar keys, endpoints y políticas de CORS/webhooks.

Referencias rápidas
------------------
- Documentación oficial: https://docs.n8n.io
- Docker image: https://hub.docker.com/r/n8nio/n8n

¿Qué sigue?
-----------
Importa el primer workflow de ejemplo desde `examples/workflows/` y prueba el trigger. Luego sigue al Módulo 1 para entender conceptos básicos y nodos esenciales.
