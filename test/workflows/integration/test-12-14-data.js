// Test Suite para Módulos 12-14: Integración de Datos
const { createWorkflow, executeWorkflow } = require('../../utils/workflow-helper');

describe('Module-12: Excel to DB', () => {
  test('Should import Excel to Database', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.spreadsheetFile',
          parameters: {
            operation: 'read'
          }
        },
        {
          type: 'n8n-nodes-base.mysql',
          parameters: {
            operation: 'insert',
            table: 'test_table'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });
});

describe('Module-13: Asistente Virtual', () => {
  test('Should process user query', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.openAi',
          parameters: {
            resource: 'completion',
            prompt: '={{$json.userQuery}}'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });
});

describe('Module-14: Procesador Inteligente', () => {
  test('Should process document automatically', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.pdfExtract',
          parameters: {
            operation: 'getText'
          }
        },
        {
          type: 'n8n-nodes-base.openAi',
          parameters: {
            resource: 'completion',
            prompt: '={{$json.text}}'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });
});