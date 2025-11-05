# Módulo: Integraciones de Mensajería (Gupshup, InfoBip)

Objetivo
--------
Implementar comunicaciones por WhatsApp y SMS usando Gupshup e InfoBip en n8n, incluyendo mensajes interactivos y webhooks.

Pre-requisitos
-------------
- Cuenta en Gupshup y/o InfoBip
- API keys configuradas
- Número de WhatsApp Business verificado (para Gupshup)

## Gupshup

### Configuración
1. Crear cuenta en Gupshup
2. Configurar app de WhatsApp
3. Obtener API key
4. Configurar webhook en n8n

### Nodos y funciones
- HTTP Request (para API Gupshup)
- Webhook (recibir respuestas)
- Function (procesar payload)

### Tipos de mensajes
1. Texto simple
2. Plantillas aprobadas
3. Mensajes interactivos
4. Archivos y medios

## InfoBip

### Configuración
1. Cuenta InfoBip
2. API key y Base URL
3. Configurar webhook

### Funcionalidades
1. SMS
   - Envío individual/masivo
   - Plantillas
   - Estado de entrega

2. WhatsApp
   - Mensajes con plantilla
   - Archivos multimedia
   - Botones interactivos

## HTTP Request para APIs

### Patrones comunes
1. Autenticación
```javascript
headers: {
  'Authorization': 'Basic {{$credentials.apiKey}}',
  'Content-Type': 'application/json'
}
```

2. Envío de mensaje (Gupshup)
```json
{
  "channel": "whatsapp",
  "source": "{{$credentials.waNumber}}",
  "destination": "{{$json.phone}}",
  "message": {
    "type": "text",
    "text": "{{$json.message}}"
  }
}
```

3. Plantilla (InfoBip)
```json
{
  "messages": [{
    "from": "{{$credentials.sender}}",
    "to": "{{$json.recipient}}",
    "templateName": "welcome_message",
    "language": "es",
    "parameters": {
      "name": "{{$json.name}}"
    }
  }]
}
```

## Casos de uso

### WhatsApp
1. Bot de atención
   - Webhook recibe mensaje
   - Function analiza intención
   - HTTP Request envía respuesta

2. Notificaciones
   - Trigger por evento
   - Preparar plantilla
   - Enviar vía API

### SMS
1. Alertas
   - Monitor → detecta evento
   - Function → prepara mensaje
   - HTTP Request → envía SMS

2. Verificación
   - Generar código
   - Enviar por SMS
   - Validar respuesta

## Ejercicios prácticos

### Gupshup
1. Bot WhatsApp simple
   - Webhook → recibir mensaje
   - Function → procesar texto
   - HTTP Request → responder

### InfoBip
1. Sistema de notificaciones
   - Trigger (evento)
   - Switch (SMS/WhatsApp)
   - HTTP Request → enviar

## Buenas prácticas
- Validar números antes de enviar
- Usar plantillas aprobadas
- Implementar retry con backoff
- Monitorear tasa de entrega

## Ejemplos
Ver `examples/workflows/messaging-integration-examples.md` para workflows completos.