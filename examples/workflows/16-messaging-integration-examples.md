# Ejemplos del Módulo 16: Integración de Mensajería

## 16.1 Bot WhatsApp Básico (Gupshup)

```json
{
  "nodes": [
    {
      "type": "n8n-nodes-base.webhook",
      "position": [100, 100],
      "name": "Webhook",
      "parameters": {
        "path": "whatsapp-webhook",
        "responseMode": "lastNode"
      }
    },
    {
      "type": "n8n-nodes-base.function",
      "position": [300, 100],
      "name": "Procesar Mensaje",
      "parameters": {
        "functionCode": "const mensaje = $input.first().json.message.text;\nconst respuesta = `Recibí tu mensaje: ${mensaje}`;\n\nreturn {\n  json: {\n    phone: $input.first().json.sender,\n    message: respuesta\n  }\n};"
      }
    },
    {
      "type": "n8n-nodes-base.httpRequest",
      "position": [500, 100],
      "name": "Enviar Respuesta",
      "parameters": {
        "url": "=https://api.gupshup.io/sm/api/v1/msg",
        "method": "POST",
        "authentication": "headerAuth",
        "headers": {
          "apikey": "={{$credentials.gupshupApi}}"
        },
        "bodyParameters": {
          "channel": "whatsapp",
          "source": "={{$credentials.waNumber}}",
          "destination": "={{$json.phone}}",
          "message.type": "text",
          "message.text": "={{$json.message}}"
        }
      }
    }
  ]
}
```

## 16.2 Sistema de Notificaciones SMS (InfoBip)

```json
{
  "nodes": [
    {
      "type": "n8n-nodes-base.scheduleTrigger",
      "position": [100, 100],
      "name": "Trigger",
      "parameters": {
        "rule": "*/5 * * * *"
      }
    },
    {
      "type": "n8n-nodes-base.function",
      "position": [300, 100],
      "name": "Preparar Mensaje",
      "parameters": {
        "functionCode": "return {\n  json: {\n    recipients: [\"+34600000000\", \"+34600000001\"],\n    message: \"Alerta: Sistema actualizado correctamente\"\n  }\n};"
      }
    },
    {
      "type": "n8n-nodes-base.httpRequest",
      "position": [500, 100],
      "name": "Enviar SMS",
      "parameters": {
        "url": "=https://api.infobip.com/sms/2/text/advanced",
        "method": "POST",
        "authentication": "headerAuth",
        "headers": {
          "Authorization": "App {{$credentials.infobipApiKey}}"
        },
        "jsonParameters": true,
        "bodyParametersJson": "={\n  \"messages\": [\n    {\n      \"destinations\": $json.recipients.map(number => ({ \"to\": number })),\n      \"from\": \"InfoSys\",\n      \"text\": $json.message\n    }\n  ]\n}"
      }
    }
  ]
}
```

## 16.3 WhatsApp Interactivo (Gupshup)

```json
{
  "nodes": [
    {
      "type": "n8n-nodes-base.webhook",
      "position": [100, 100],
      "name": "Webhook",
      "parameters": {
        "path": "interactive-wa",
        "responseMode": "lastNode"
      }
    },
    {
      "type": "n8n-nodes-base.function",
      "position": [300, 100],
      "name": "Crear Mensaje",
      "parameters": {
        "functionCode": "return {\n  json: {\n    phone: $input.first().json.sender,\n    template: \"bienvenida\",\n    params: {\n      name: $input.first().json.sender_name,\n      options: [\"Producto\", \"Soporte\", \"Otros\"]\n    }\n  }\n};"
      }
    },
    {
      "type": "n8n-nodes-base.httpRequest",
      "position": [500, 100],
      "name": "Enviar Botones",
      "parameters": {
        "url": "=https://api.gupshup.io/sm/api/v1/template/msg",
        "method": "POST",
        "authentication": "headerAuth",
        "headers": {
          "apikey": "={{$credentials.gupshupApi}}"
        },
        "bodyParameters": {
          "channel": "whatsapp",
          "source": "={{$credentials.waNumber}}",
          "destination": "={{$json.phone}}",
          "template": "={{$json.template}}",
          "params": "={{$json.params}}"
        }
      }
    }
  ]
}
```

## 16.4 Sistema de Verificación SMS (InfoBip)

```json
{
  "nodes": [
    {
      "type": "n8n-nodes-base.httpRequest",
      "position": [100, 100],
      "name": "Registro Usuario",
      "parameters": {
        "path": "register",
        "responseMode": "lastNode"
      }
    },
    {
      "type": "n8n-nodes-base.function",
      "position": [300, 100],
      "name": "Generar Código",
      "parameters": {
        "functionCode": "const code = Math.random().toString().substr(2,6);\nreturn {\n  json: {\n    phone: $input.first().json.phone,\n    code,\n    message: `Tu código de verificación es: ${code}`\n  }\n};"
      }
    },
    {
      "type": "n8n-nodes-base.httpRequest",
      "position": [500, 100],
      "name": "Enviar Código",
      "parameters": {
        "url": "=https://api.infobip.com/sms/2/text/single",
        "method": "POST",
        "authentication": "headerAuth",
        "headers": {
          "Authorization": "App {{$credentials.infobipApiKey}}"
        },
        "jsonParameters": true,
        "bodyParametersJson": "={\n  \"from\": \"Verify\",\n  \"to\": $json.phone,\n  \"text\": $json.message\n}"
      }
    }
  ]
}
```