// Test Suite para Módulo 3-5: Archivos
const { createWorkflow, executeWorkflow } = require('../../utils/workflow-helper');

describe('Module-03: Excel', () => {
  test('Should read Excel file', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.spreadsheetFile',
          parameters: {
            operation: 'read',
            options: {
              headerRow: 1
            }
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });
});

describe('Module-04: PDFs y Word', () => {
  test('Should convert PDF to text', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.pdfExtract',
          parameters: {
            operation: 'getText'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });
});

describe('Module-05: Imágenes', () => {
  test('Should resize image', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.imageManipulation',
          parameters: {
            operation: 'resize',
            width: 800,
            height: 600
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });
});