// Test Suite para Módulo 16: Mensajería
const { createWorkflow, executeWorkflow } = require('../../utils/workflow-helper');
const { mockWhatsAppAPI, mockSMSAPI } = require('../../mock/messaging-mocks');

describe('Module-16: Integración de Mensajería', () => {
  
  beforeEach(() => {
    mockWhatsAppAPI();
    mockSMSAPI();
  });

  test('Should send WhatsApp message', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.httpRequest',
          parameters: {
            url: 'https://api.gupshup.io/sm/api/v1/msg',
            method: 'POST',
            body: {
              channel: 'whatsapp',
              message: 'Test message'
            }
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });

  test('Should send SMS', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.httpRequest',
          parameters: {
            url: 'https://api.infobip.com/sms/2/text/advanced',
            method: 'POST',
            body: {
              messages: [
                {
                  to: '34600000000',
                  text: 'Test SMS'
                }
              ]
            }
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });

  test('Should handle interactive messages', async () => {
    const workflow = await createWorkflow({
      nodes: [
        {
          type: 'n8n-nodes-base.httpRequest',
          parameters: {
            url: 'https://api.gupshup.io/sm/api/v1/template/msg',
            method: 'POST',
            body: {
              template: 'welcome',
              params: ['User']
            }
          }
        }
      ]
    });
    const execution = await executeWorkflow(workflow);
    expect(execution.status).toBe('success');
  });

});