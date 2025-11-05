# n8n Cheatsheet: Bases de Datos

## 🔷 MySQL
```sql
-- Consultas Básicas
SELECT * FROM tabla WHERE campo = {{$json.valor}}
INSERT INTO tabla (campo1, campo2) VALUES ({{$json.valor1}}, {{$json.valor2}})
UPDATE tabla SET campo = {{$json.nuevo}} WHERE id = {{$json.id}}
DELETE FROM tabla WHERE condicion = {{$json.condicion}}

-- Joins
SELECT a.*, b.campo 
FROM tabla_a a 
JOIN tabla_b b ON a.id = b.tabla_a_id

-- Agregaciones
SELECT COUNT(*), SUM(campo), AVG(campo)
FROM tabla 
GROUP BY categoria
```

## 🔷 Postgres
```sql
-- Arrays y JSON
SELECT jsonb_array_elements(datos)
FROM tabla
WHERE datos ? 'clave'

-- Funciones Ventana
SELECT *, 
  ROW_NUMBER() OVER (PARTITION BY grupo ORDER BY fecha)
FROM tabla
```

## 🔷 MongoDB
```javascript
// Queries
{
  "collection": "usuarios",
  "filter": {
    "edad": { "$gt": 18 },
    "activo": true
  }
}

// Agregaciones
[
  { "$match": { "tipo": "premium" } },
  { "$group": { 
    "_id": "$categoria",
    "total": { "$sum": "$monto" }
  }}
]
```

## 🔷 Patrones Comunes
```javascript
// Transacciones
BEGIN;
try {
  // operaciones
  COMMIT;
} catch (error) {
  ROLLBACK;
}

// Batch Processing
const batchSize = 1000;
for (let i = 0; i < items.length; i += batchSize) {
  const batch = items.slice(i, i + batchSize);
  // procesar batch
}
```

## 🔷 Optimización
```sql
-- Índices
CREATE INDEX idx_campo ON tabla(campo);

-- Explain
EXPLAIN ANALYZE SELECT * FROM tabla WHERE campo = 'valor';
```

## 🔷 Tips
1. Usar prepared statements
2. Implementar paginación
3. Manejar conexiones sabiamente
4. Crear índices apropiados
5. Monitorear queries lentos

## 🔷 Debugging
```sql
-- Performance
SET profiling = 1;
-- ejecutar query
SHOW PROFILES;

-- Logging
SELECT * FROM information_schema.processlist;
```