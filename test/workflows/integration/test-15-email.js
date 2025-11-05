// Test Suite para Módulo 15: Email Integration
const { createWorkflow, executeWorkflow } = require('../../utils/workflow-helper');
const { mockGmailAPI, mockOutlookAPI } = require('../../mock/email-mocks');

describe('Module-15: Email Integration', () => {
  
  beforeEach(() => {
    mockGmailAPI();
    mockOutlookAPI();
  });

  test('Should send email via Gmail', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.gmail',
          parameters: {
            operation: 'send',
            to: 'test@example.com',
            subject: 'Test Email',
            text: 'This is a test email'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });

  test('Should handle HTML emails', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.gmail',
          parameters: {
            operation: 'send',
            to: 'test@example.com',
            subject: 'HTML Test',
            html: '<h1>Test</h1>'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });

  test('Should handle attachments', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.gmail',
          parameters: {
            operation: 'send',
            to: 'test@example.com',
            attachments: 'test.pdf'
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });

});