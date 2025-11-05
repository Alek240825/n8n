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

---

## Integración con Python (formas habituales)

A) Servicio HTTP (recomendado)
- Montas un microservicio (FastAPI, Flask, Django, etc.) que expone endpoints REST.
- Desde n8n usas el node "HTTP Request" para: enviar JSON/archivos, esperar respuesta y procesarla.
- Pros: desacoplado, fácil de testear y escalar, más seguro con autentificación.
- Contras: hay que mantener otra aplicación y su despliegue.

---

## Recomendaciones prácticas

- Desarrollo local: usa Docker para n8n y Docker para tu servicio Python (FastAPI). Así reproducirás fácilmente el entorno en producción.
- Producción: usar Docker Compose / Kubernetes para orquestar n8n + servicio Python; proteger endpoints con API keys o JWT.
- Para tareas cortas y no críticas, puedes usar Execute Command, pero documenta los riesgos.

---

## Comandos útiles (PowerShell)

Instalar n8n globalmente (solo para dev/experimentación):

```powershell
npm install -g n8n
n8n
```

