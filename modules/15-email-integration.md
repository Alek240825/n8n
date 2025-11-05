# Módulo: Integraciones de Email (Gmail y Outlook)

Objetivo
--------
Aprender a automatizar tareas de email usando n8n con Gmail y Outlook: enviar correos, procesar bandejas de entrada y gestionar adjuntos.

Pre-requisitos
-------------
- Cuenta Gmail/Google Workspace o Microsoft 365
- Credenciales OAuth2 configuradas en n8n

## Gmail

### Configuración
1. Crear proyecto en Google Cloud Console
2. Habilitar Gmail API
3. Configurar credenciales OAuth2
4. Añadir credenciales en n8n

### Nodos principales
- Gmail
- Gmail Trigger
- Move Binary Data (para adjuntos)

### Casos de uso comunes
1. Monitor de bandeja de entrada
   - Trigger cuando llegan emails
   - Filtrar por remitente/asunto
   - Procesar adjuntos

2. Envío automatizado
   - Emails con plantillas
   - Adjuntar archivos
   - CC/BCC y formato HTML

## Outlook

### Configuración
1. Registrar aplicación en Azure AD
2. Configurar permisos (Mail.Read, Mail.Send)
3. Obtener Client ID y Secret
4. Configurar en n8n

### Nodos principales
- Microsoft Outlook
- Microsoft Outlook Trigger
- Move Binary Data

### Casos de uso comunes
1. Gestión de calendario
   - Crear eventos
   - Aceptar/rechazar invitaciones
   - Sincronizar con otros sistemas

2. Procesamiento de emails
   - Clasificar por carpetas
   - Respuestas automáticas
   - Extraer datos de emails

## Ejercicios prácticos

### Gmail
1. Workflow: "Autoresponder con plantilla"
   - Gmail Trigger → nuevo email
   - Function → preparar respuesta
   - Gmail → enviar respuesta
   
2. Workflow: "Procesar adjuntos Excel"
   - Gmail Trigger → email con Excel
   - Spreadsheet → procesar datos
   - MySQL → guardar datos

### Outlook
1. Workflow: "Gestión de reuniones"
   - Outlook Trigger → nueva invitación
   - IF → validar disponibilidad
   - Outlook → aceptar/rechazar

## Buenas prácticas
- Usar OAuth2 siempre que sea posible
- No hardcodear emails/passwords
- Implementar rate limiting
- Manejar errores de API

## Ejemplos
Ver `examples/workflows/email-integration-examples.md` para workflows completos.