# n8n Cheatsheet: Fundamentos

## 🔷 Conceptos Básicos
```
Workflow = Conjunto de nodos conectados
Nodo = Unidad de procesamiento
Trigger = Nodo que inicia el workflow
```

## 🔷 Tipos de Nodos Esenciales
- Schedule: `Ejecución programada`
- Webhook: `Trigger por HTTP`
- Function: `Código JavaScript`
- Set: `Modificar datos`
- IF: `Condiciones`

## 🔷 Expresiones Comunes
```javascript
// Acceder a datos
{{$json.campo}}
{{$binary.archivo}}
{{$node["NombreNodo"].json.campo}}

// Operaciones
{{$json.numero * 2}}
{{$json.texto.toLowerCase()}}
```

## 🔷 Funciones JavaScript
```javascript
// En nodo Function
return {
  json: {
    campo1: valor1,
    campo2: valor2
  }
};

// Procesar array
items.map(item => ({ ...item, nuevo: true }))
```

## 🔷 Variables de Workflow
```javascript
// Establecer
$workflow.variables.set("nombre", "valor");

// Obtener
$workflow.variables.get("nombre")
```

## 🔷 Manejo de Errores
```javascript
// Try-Catch en Function
try {
  // código
} catch (error) {
  return { json: { error: error.message } };
}
```

## 🔷 Configuraciones Comunes
```
Retry on Fail: Para reintentos automáticos
Continue on Fail: Para seguir a pesar de errores
Split in Batches: Para procesamiento en lotes
```

## 🔷 Debugging
```javascript
// Nodo Debug
console.log('Dato:', dato);
console.log(JSON.stringify(item, null, 2));
```

## 🔷 Tips
1. Usar nombres descriptivos para nodos
2. Documentar workflows con notas
3. Probar con datos de ejemplo
4. Mantener copias de seguridad
5. Usar versiones de workflows