# n8n Cheatsheet: IA y Machine Learning

## 🔷 OpenAI
```javascript
// Completions
{
  "url": "https://api.openai.com/v1/completions",
  "headers": {
    "Authorization": "Bearer {{$credentials.openaiKey}}"
  },
  "body": {
    "model": "gpt-3.5-turbo",
    "messages": [
      {"role": "user", "content": "{{$json.prompt}}"}
    ]
  }
}

// Image Generation
{
  "url": "https://api.openai.com/v1/images/generations",
  "body": {
    "prompt": "{{$json.descripcion}}",
    "n": 1,
    "size": "1024x1024"
  }
}
```

## 🔷 Azure Cognitive Services
```javascript
// Text Analytics
{
  "url": "{{$credentials.endpoint}}/text/analytics/v3.0/sentiment",
  "headers": {
    "Ocp-Apim-Subscription-Key": "{{$credentials.apiKey}}"
  }
}

// Computer Vision
{
  "url": "{{$credentials.endpoint}}/vision/v3.0/analyze",
  "parameters": {
    "visualFeatures": "Objects,Faces,Description"
  }
}
```

## 🔷 Procesamiento de Texto
```javascript
// Tokenización
text.split(/\s+/).filter(Boolean)

// Limpieza
text.replace(/[^\w\s]/g, '').toLowerCase()

// Extracción de keywords
text.match(/\b\w{4,}\b/g)
```

## 🔷 Manejo de Modelos
```javascript
// Temperatura y Tokens
{
  "temperature": 0.7,
  "max_tokens": 150,
  "top_p": 1
}

// Sistema de Prompts
const systemPrompt = "Actúa como un experto en...";
const userPrompt = `${context}\n\nPregunta: ${question}`;
```

## 🔷 Patrones de Uso
```javascript
// Retry con diferentes modelos
if (error && model === "gpt-4") {
  return retryWithGPT3();
}

// Validación de respuestas
if (!response.choices?.length) {
  throw new Error("No se generó respuesta");
}
```

## 🔷 Tips
1. Usar prompts efectivos
2. Implementar rate limiting
3. Manejar tokens sabiamente
4. Validar salidas
5. Mantener contexto

## 🔷 Debugging
```javascript
// Log de tokens
console.log('Tokens usados:', response.usage);

// Validación de respuesta
console.log('Confianza:', response.confidence);
```