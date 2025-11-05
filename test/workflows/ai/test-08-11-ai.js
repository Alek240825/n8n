// Test Suite para Módulos 8-11: Inteligencia Artificial
const { createWorkflow, executeWorkflow } = require('../../utils/workflow-helper');

describe('Module-08: AI Proveedores', () => {
  test('Should connect to OpenAI', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.openAi',
          parameters: {
            resource: 'completion',
            prompt: 'Test prompt'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });
});

describe('Module-09: Texto IA', () => {
  test('Should analyze text sentiment', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.openAi',
          parameters: {
            resource: 'completion',
            prompt: 'Analyze sentiment: Happy day!'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });
});

describe('Module-10: Imágenes IA', () => {
  test('Should generate image', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.openAi',
          parameters: {
            resource: 'image',
            prompt: 'A test image'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });
});

describe('Module-11: Audio y Voz', () => {
  test('Should convert text to speech', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.microsoftAzure',
          parameters: {
            resource: 'textToSpeech',
            text: 'Test speech'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });
});