// Test Suite para Módulo 2: Tu Primer Workflow
const { createWorkflow, executeWorkflow } = require('../../utils/workflow-helper');

describe('Module-02: Tu Primer Workflow', () => {
  
  test('Should create workflow with manual trigger', async () => {
    const workflow = await createWorkflow({
      name: 'Manual Trigger Test',
      nodes: [
        {
          type: 'n8n-nodes-base.manualTrigger',
          position: [100, 100]
        }
      ]
    });
    expect(workflow).toBeDefined();
    expect(workflow.active).toBe(true);
  });

  test('Should handle Set node', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.set',
          parameters: {
            values: {
              string: ['test'],
              number: [123],
              boolean: [true]
            }
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.data.string[0]).toBe('test');
    expect(execution.data.number[0]).toBe(123);
  });

  test('Should process data transformations', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.function',
          parameters: {
            functionCode: `
              return items.map(item => ({
                json: {
                  ...item.json,
                  processed: true
                }
              }));
            `
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.data[0].processed).toBe(true);
  });

  test('Should handle error conditions', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.if',
          parameters: {
            conditions: [
              {
                value1: '={{$json.test}}',
                operation: 'exists'
              }
            ]
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });
});