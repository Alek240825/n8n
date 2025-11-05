# Módulo 1: Conceptos Básicos de n8n 🎈

Objetivo
--------
Entender los conceptos esenciales de n8n: qué es un workflow, cómo fluyen los datos entre nodos, tipos de nodos (triggers, actions), expresiones y cómo construir workflows simples y robustos.

1 — ¿Qué es un workflow?
-------------------------
- Un workflow en n8n es un diagrama de nodos conectados que procesan datos.
- Cada nodo recibe "items" (arrays de objetos JSON) y puede devolver items transformados.

2 — Tipos de nodos
------------------
- Trigger: Inician el workflow (Webhook, Schedule, Cron, Gmail Trigger).
- Action/Regular: Ejecutan tareas (HTTP Request, Function, Set, Database nodes).
- Utility: Nodos para control de flujo (IF, Switch, Merge, SplitInBatches).

3 — Estructura de datos: items, JSON y binary
---------------------------------------------
- items: array de objetos { json: {...}, binary: {...} }
- json: datos estructurados (campos y valores)
- binary: archivos (adjuntos, imágenes) en formato binario

Ejemplo rápido (nodo Function):

```javascript
// Recibe items, devuelve items
return items.map(item => ({
	json: {
		original: item.json,
		processedAt: new Date().toISOString()
	}
}));
```

4 — Expresiones en n8n
-----------------------
- Sintaxis: `={{ ... }}` o `{{$json.campo}}` dentro de campos de nodos.
- Ejemplos:
	- `{{$json.email}}` → obtiene el campo email del item actual
	- `={{$node["NodoAnterior"].json["id"]}}` → valor del nodo anterior
	- `={{$json.amount * 1.21}}` → operación matemática

5 — Credenciales
-----------------
- n8n permite almacenar credenciales (API keys, OAuth) en la UI.
- Usa las credenciales en nodos seleccionando la credencial guardada en el nodo HTTP Request u otros nodos integrados.

6 — Nodos comunes y ejemplos
----------------------------
- Set: crear/modificar campos en items
	- Uso: transformar datos antes de enviarlos a una API

```javascript
// En Set: values -> text: "={{$json.name + ' - OK'}}"
```

- HTTP Request: conectar APIs
	- Parámetros: URL, method, headers, body, auth

- IF / Switch: control de flujo
	- Condiciones simples o múltiples rutas

- SplitInBatches: procesar listas largas en batches

7 — Ejemplo: Workflow simple
----------------------------
Flujo: Webhook -> Set -> HTTP Request -> Respond

1. `Webhook` recibe POST con { email, name }
2. `Set` añade campos (timestamp, id interno)
3. `HTTP Request` llama a una API externa para registrar el usuario
4. `Respond to Webhook` devuelve estado 200

8 — Buenas prácticas
---------------------
1. Nombra los nodos claramente (ej. "HTTP: Crear usuario")
2. Valida entradas en el Webhook (usar nodos Function o IF)
3. Maneja errores con `Continue on Fail` y registros
4. Usa credenciales para claves sensibles
5. Divide workflows grandes en sub-workflows reutilizables

9 — Debugging y testing
-------------------------
- Usa `console.log` dentro de nodos Function para inspeccionar items.
- Prueba nodos individualmente con datos de ejemplo (Execute Node)
- Mantén ejemplos en `examples/workflows/` para importarlos y comprobar su ejecución

La interfaz explicada con manzanas
---------------------------------
Pensemos en la UI de n8n como una cocina donde preparas recetas (workflows):

- Lienzo (canvas): la mesa de trabajo donde colocas tus ingredientes (nodos). Aquí arrastras y conectas nodos para construir la receta.
- Panel de nodos (left sidebar): la alacena con todos los tipos de nodos disponibles (Triggers, Utilities, Integraciones). Busca y arrastra al lienzo.
- Inspector del nodo (right sidebar): cuando seleccionas un nodo, aquí configuras los ingredientes (parámetros, credenciales, expresiones).
- Barra superior: controles para guardar, ejecutar, activar/desactivar el workflow y acceso a Settings/Executions.
- Credenciales: cajita fuerte donde guardas claves API. No las pegues en nodos; selecciónalas desde el inspector.
- Ejecutions / History: registro de las ejecuciones (como el diario de cocina) donde ves entradas/salidas de cada nodo y errores.

Consejo "con manzanas": para entender la interfaz, crea un workflow pequeñito: Webhook (recoge manzana) → Set (la cortas) → HTTP Request (la envías). Ejecuta paso a paso y mira el inspector para ver cómo cambian los datos.

10 — Siguientes pasos
---------------------
Tras dominar estos conceptos crea tu primer workflow que reciba datos por Webhook y los almacene en una hoja de cálculo o base de datos. Esto te preparará para los módulos de integración (email, mensajería, bases de datos, IA).

Recursos
--------
- Documentación oficial: https://docs.n8n.io
- Cheatsheets: ver `cheatsheets/` en el repo para snippets rápidos
