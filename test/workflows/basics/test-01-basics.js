// Test Suite para Módulo 1: Fundamentos
const { createWorkflow, executeWorkflow } = require('../utils/workflow-helper');

describe('Module-01: Fundamentos', () => {
  
  test('Should create basic workflow', async () => {
    const workflow = await createWorkflow({
      name: 'Test Basic Workflow',
      nodes: [
        {
          type: 'n8n-nodes-base.start',
          position: [100, 100]
        }
      ]
    });
    expect(workflow).toBeDefined();
    expect(workflow.name).toBe('Test Basic Workflow');
  });

  test('Should execute Schedule node', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.scheduleTrigger',
          parameters: {
            interval: [1, 'minutes']
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });

  test('Should handle Function node', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.function',
          parameters: {
            functionCode: 'return {json: {test: true}};'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.data.test).toBe(true);
  });

});

describe('Module-01: Error Handling', () => {
  
  test('Should handle errors gracefully', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.function',
          parameters: {
            functionCode: 'throw new Error("Test error");'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('error');
  });

});