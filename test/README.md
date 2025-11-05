# Tests para n8n Workflows

Este directorio contiene las pruebas automatizadas para verificar el funcionamiento correcto de los workflows y módulos del curso.

## Estructura de Pruebas

```
test/
├── workflows/           # Pruebas de workflows
│   ├── basics/         # Tests módulos 1-2
│   ├── files/          # Tests módulos 3-5
│   ├── database/       # Tests módulos 6-7
│   ├── ai/            # Tests módulos 8-11
│   └── integration/    # Tests módulos 12-16
├── utils/              # Utilidades para testing
└── mock/              # Datos de prueba
```

## Ejecutar Tests

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas de un módulo específico
npm test -- --grep "Module-01"

# Ejecutar con coverage
npm test -- --coverage
```

## Convenciones de Nombrado

- `test-XX-YY.js`: XX = número de módulo, YY = funcionalidad
- `mock-XX-data.json`: Datos de prueba para módulo XX

## Stack de Testing

- Jest: Framework principal
- Nock: Mocking de HTTP
- Supertest: Testing de API
- faker-js: Generación de datos