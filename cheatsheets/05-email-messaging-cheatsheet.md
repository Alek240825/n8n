# n8n Cheatsheet: Email y Mensajería

## 🔷 Gmail
```javascript
// Enviar Email
{
  "operation": "send",
  "sender": "{{$credentials.email}}",
  "to": "{{$json.recipient}}",
  "subject": "Asunto del Email",
  "text": "Contenido del mensaje"
}

// HTML Email
{
  "html": "<h1>Título</h1><p>Contenido</p>",
  "attachments": [
    {
      "file": "{{$binary.archivo}}"
    }
  ]
}
```

## 🔷 Outlook
```javascript
// Configuración
{
  "resource": "me",
  "operation": "sendEmail",
  "messageType": "html"
}

// Leer Emails
{
  "operation": "getEmails",
  "folderName": "INBOX",
  "limit": 10
}
```

## 🔷 WhatsApp (Gupshup)
```javascript
// Mensaje Simple
{
  "channel": "whatsapp",
  "source": "{{$credentials.waNumber}}",
  "destination": "{{$json.phone}}",
  "message": {
    "type": "text",
    "text": "{{$json.mensaje}}"
  }
}

// Mensaje con Plantilla
{
  "template": {
    "name": "bienvenida",
    "language": "es",
    "components": [
      {
        "type": "body",
        "parameters": [
          {
            "type": "text",
            "text": "{{$json.nombre}}"
          }
        ]
      }
    ]
  }
}
```

## 🔷 SMS (InfoBip)
```javascript
// Envío Simple
{
  "messages": [{
    "destinations": [{"to": "{{$json.phone}}"}],
    "from": "InfoSys",
    "text": "{{$json.message}}"
  }]
}

// Envío Masivo
{
  "messages": "={{$json.recipients.map(r => ({
    to: r.phone,
    text: r.message
  }))}}",
}
```

## 🔷 Patrones Comunes
```javascript
// Validación de Email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Formateo de Teléfono
const phone = numero.replace(/\D/g, '');

// Rate Limiting
await new Promise(r => setTimeout(r, 1000)); // 1 segundo entre mensajes
```

## 🔷 Tips
1. Validar direcciones/números
2. Usar plantillas HTML
3. Implementar retry
4. Manejar bounces
5. Monitorear entregas

## 🔷 Debugging
```javascript
// Log de envíos
console.log('Mensaje enviado a:', recipient);
console.log('Estado:', response.status);

// Validación
if (!response.messageId) {
  throw new Error('Fallo en envío');
}
```