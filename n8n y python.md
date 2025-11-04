# n8n y Python

Este documento resume las respuestas y ejemplos sobre cómo usar n8n (Node.js) y cómo integrar servicios Python (p. ej. FastAPI).

## Resumen directo

- n8n está construido sobre Node.js y su runtime requiere Node.js para ejecutarse. Por tanto, para ejecutar una instancia de n8n (self-host o instalación global) necesitas tener Node.js instalado, o bien usar la imagen Docker oficial de n8n que incluye Node internamente.
- No necesitas programar en Node para crear automatizaciones con n8n: la mayoría de las tareas se configuran con nodes visuales.
- Puedes integrar Python (FastAPI u otros) desde n8n de forma natural, usualmente exponiendo un servicio HTTP que n8n consume con el node "HTTP Request". También puedes ejecutar scripts Python locales desde n8n, pero esto tiene implicaciones de seguridad y escalabilidad.

---

## Opciones para ejecutar n8n

1) Ejecutar n8n con Node.js en el host
- Requiere Node.js (usar LTS, p. ej. Node 18+).
- Puedes instalar n8n globalmente con npm, pero para entornos de producción Docker es preferible.

2) Ejecutar n8n con Docker (recomendado para simplificar)
- No necesitas instalar Node en tu máquina; el contenedor ya incluye Node.
- Comando de ejemplo (PowerShell):

```powershell
docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n:latest
```

3) Usar n8n.cloud
- Servicio gestionado; no administras infra.

---

## Integración con Python (formas habituales)

A) Servicio HTTP (recomendado)
- Montas un microservicio (FastAPI, Flask, Django, etc.) que expone endpoints REST.
- Desde n8n usas el node "HTTP Request" para: enviar JSON/archivos, esperar respuesta y procesarla.
- Pros: desacoplado, fácil de testear y escalar, más seguro con autentificación.
- Contras: hay que mantener otra aplicación y su despliegue.

B) Ejecutar scripts locales desde n8n (Execute Command)
- Usar nodos que ejecuten comandos en el host (p. ej. `python script.py`).
- Pros: rápido para prototipos.
- Contras: seguridad, bloqueo, dependencias del entorno, no recomendado para producción.

C) Serverless / Cloud Functions
- Desplegar lógica Python en Lambdas / Functions y llamarlas desde n8n.
- Pros: escalado automático, menor infra propia.
- Contras: coste y latencias según uso.

---

## Recomendaciones prácticas

- Desarrollo local: usa Docker para n8n y Docker para tu servicio Python (FastAPI). Así reproducirás fácilmente el entorno en producción.
- Producción: usar Docker Compose / Kubernetes para orquestar n8n + servicio Python; proteger endpoints con API keys o JWT.
- Para tareas cortas y no críticas, puedes usar Execute Command, pero documenta los riesgos.

---

## Ejemplo mínimo: FastAPI + llamado desde n8n

Archivo de ejemplo `examples/fastapi_service.py` (contenido de muestra):

```python
# examples/fastapi_service.py
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    text: str

@app.post('/analyze')
async def analyze(item: Item):
    return {"length": len(item.text), "upper": item.text.upper()}
```

Instalar dependencias y ejecutar (PowerShell):

```powershell
python -m pip install --upgrade pip
python -m pip install fastapi uvicorn
uvicorn examples.fastapi_service:app --reload --port 8000
```

Desde n8n: crea un node "HTTP Request" apuntando a `http://<host>:8000/analyze` con body JSON:

```json
{ "text": "hola desde n8n" }
```

Procesa la respuesta en los siguientes nodes del workflow.

---

## Comandos útiles (PowerShell)

Instalar nvm-windows y usar Node (si prefieres instalar Node en Windows):

```powershell
# Después de instalar nvm-windows desde su release
nvm install 18.20.0
nvm use 18.20.0
node -v
npm -v
```

Instalar n8n globalmente (solo para dev/experimentación):

```powershell
npm install -g n8n
n8n
```

Ejecutar n8n con Docker (dev):

```powershell
docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n:latest
```

---

## Qué incluir en `modules/00-setup.md` (sugerencia para el curso)

- Aclaración: n8n requiere Node.js, pero puedes usar Docker para evitar instalar Node localmente.
- Instrucciones para instalar Node (nvm-windows), npm, y opcionalmente n8n vía npm.
- Instrucciones paso a paso para ejecutar n8n con Docker.
- Sección "Integración con Python": patrón recomendado (FastAPI + HTTP Request), ejemplo y notas de seguridad.

---

## ¿Qué hago a continuación?
- Si quieres, actualizo `modules/00-setup.md` y `README.md` con esta información (tarea en progreso).
- También puedo añadir el ejemplo `examples/fastapi_service.py` y un workflow n8n exportado que haga la llamada (tarea opcional).

Si quieres que proceda, dime si prefieres que utilice Docker Compose para el ejemplo (n8n + FastAPI) o solo instrucciones separadas para correr cada servicio.
