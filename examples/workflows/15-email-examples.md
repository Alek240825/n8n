# Ejemplos del Módulo 15: Integración de Email

## 15.1 Envío de Email Básico (Gmail)
```json
{
  "nodes": [
    {
      "type": "n8n-nodes-base.gmail",
      "position": [300, 200],
      "name": "Gmail",
      "parameters": {
        "operation": "send",
        "to": "{{$json.recipient}}",
        "subject": "Notificación Importante",
        "text": "Este es un email de prueba enviado desde n8n"
      }
    }
  ]
}
```

## 15.2 Email con Plantilla HTML (Outlook)
```json
{
  "nodes": [
    {
      "type": "n8n-nodes-base.microsoftOutlook",
      "position": [400, 300],
      "name": "Outlook",
      "parameters": {
        "operation": "send",
        "toRecipients": "{{$json.email}}",
        "subject": "Bienvenido a nuestro servicio",
        "html": "<h1>Bienvenido {{$json.name}}</h1><p>Gracias por registrarte.</p>"
      }
    }
  ]
}
```

## 15.3 Monitoreo de Bandeja de Entrada
```json
{
  "nodes": [
    {
      "type": "n8n-nodes-base.gmail",
      "position": [200, 200],
      "name": "Gmail Trigger",
      "parameters": {
        "operation": "getAll",
        "labelIds": ["INBOX"],
        "limit": 10
      }
    }
  ]
}
```

## 15.4 Procesamiento de Adjuntos
```json
{
  "nodes": [
    {
      "type": "n8n-nodes-base.gmail",
      "position": [300, 200],
      "name": "Gmail",
      "parameters": {
        "operation": "getAll",
        "labelIds": ["INBOX"],
        "hasAttachment": true
      }
    },
    {
      "type": "n8n-nodes-base.spreadsheetFile",
      "position": [500, 200],
      "name": "Procesar Excel",
      "parameters": {
        "operation": "read",
        "binary": true
      }
    }
  ]
}
```

## 15.5 Sistema de Respuesta Automática
```json
{
  "nodes": [
    {
      "type": "n8n-nodes-base.gmail",
      "position": [200, 200],
      "name": "Gmail Trigger",
      "parameters": {
        "operation": "getAll",
        "labelIds": ["INBOX"],
        "limit": 1
      }
    },
    {
      "type": "n8n-nodes-base.function",
      "position": [400, 200],
      "name": "Preparar Respuesta",
      "parameters": {
        "functionCode": "return {\n  json: {\n    to: $input.first().json.from,\n    subject: 'RE: ' + $input.first().json.subject,\n    body: 'Gracias por su mensaje. Responderemos pronto.'\n  }\n};"
      }
    },
    {
      "type": "n8n-nodes-base.gmail",
      "position": [600, 200],
      "name": "Enviar Respuesta",
      "parameters": {
        "operation": "send",
        "to": "={{$json.to}}",
        "subject": "={{$json.subject}}",
        "text": "={{$json.body}}"
      }
    }
  ]
}
```