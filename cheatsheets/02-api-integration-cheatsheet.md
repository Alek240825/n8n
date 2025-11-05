# n8n Cheatsheet: Integración con APIs

## 🔷 HTTP Request
```javascript
// GET Request
{
  "url": "https://api.ejemplo.com/datos",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer {{$node.Auth.json.token}}"
  }
}

// POST Request
{
  "url": "https://api.ejemplo.com/crear",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "nombre": "{{$json.nombre}}",
    "datos": "{{$json.datos}}"
  }
}
```

## 🔷 Autenticación
```javascript
// API Key
{
  "headers": {
    "X-API-Key": "{{$credentials.apiKey}}"
  }
}

// OAuth2
{
  "auth": "oauth2",
  "oauth2": {
    "tokenType": "Bearer",
    "accessToken": "{{$node.OAuth2.json.access_token}}"
  }
}
```

## 🔷 Manejo de Respuestas
```javascript
// Parsing JSON
const respuesta = JSON.parse($json.body);

// Error Handling
if (response.statusCode !== 200) {
  throw new Error(`Error: ${response.statusCode}`);
}
```

## 🔷 Webhooks
```javascript
// Configuración básica
{
  "path": "mi-webhook",
  "responseMode": "lastNode",
  "responseData": "allEntries"
}
```

## 🔷 Patrones Comunes
```javascript
// Retry con backoff
{
  "retries": 3,
  "waitBetweenTries": 1000
}

// Paginación
{
  "url": "https://api.ejemplo.com/datos?page={{$json.page}}"
}
```

## 🔷 Tips de Seguridad
1. Usar credenciales seguras
2. Validar datos de entrada
3. Manejar timeouts
4. Implementar rate limiting
5. Usar HTTPS siempre

## 🔷 Debugging
```javascript
// Log de request/response
console.log('Request:', options);
console.log('Response:', response);

// Validación de status
if (!response.ok) {
  console.log('Error:', response.statusText);
}
```