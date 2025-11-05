// Test Suite para Módulos 6-7: Base de Datos
const { createWorkflow, executeWorkflow } = require('../../utils/workflow-helper');

describe('Module-06: MySQL Básico', () => {
  test('Should execute SELECT query', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.mysql',
          parameters: {
            operation: 'executeQuery',
            query: 'SELECT * FROM test_table'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });
});

describe('Module-07: MySQL Avanzado', () => {
  test('Should handle transactions', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.mysql',
          parameters: {
            operation: 'executeQuery',
            query: `
              START TRANSACTION;
              INSERT INTO test_table (field) VALUES ('test');
              COMMIT;
            `
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });

  test('Should execute stored procedure', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.mysql',
          parameters: {
            operation: 'callProcedure',
            procedure: 'test_procedure'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });
});