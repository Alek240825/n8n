// Utilidades para testing de workflows
const n8n = require('n8n-core');

/**
 * Crea un workflow de prueba
 * @param {Object} config Configuración del workflow
 * @returns {Promise<Object>} Workflow creado
 */
async function createWorkflow(config) {
  // Implementation
}

/**
 * Ejecuta un workflow y retorna resultados
 * @param {Object} workflow Workflow a ejecutar
 * @returns {Promise<Object>} Resultados de la ejecución
 */
async function executeWorkflow(workflow) {
  // Implementation
}

/**
 * Valida la estructura de un workflow
 * @param {Object} workflow Workflow a validar
 * @returns {boolean} Resultado de validación
 */
function validateWorkflow(workflow) {
  // Implementation
}

/**
 * Limpia datos de prueba
 * @param {string} workflowId ID del workflow
 * @returns {Promise<void>}
 */
async function cleanupWorkflow(workflowId) {
  // Implementation
}

module.exports = {
  createWorkflow,
  executeWorkflow,
  validateWorkflow,
  cleanupWorkflow
};