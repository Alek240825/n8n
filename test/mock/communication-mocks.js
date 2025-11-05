// Mock data para pruebas de email
const mockEmails = [
  {
    id: '1',
    from: 'sender@example.com',
    to: 'recipient@example.com',
    subject: 'Test Email 1',
    body: 'This is test email 1',
    attachments: []
  },
  {
    id: '2',
    from: 'another@example.com',
    to: 'recipient@example.com',
    subject: 'Test Email 2',
    body: 'This is test email 2 with attachment',
    attachments: ['test.pdf']
  }
];

// Mock data para pruebas de WhatsApp
const mockWhatsAppMessages = [
  {
    id: 'msg1',
    from: '34600000000',
    text: 'Hello World',
    timestamp: '2025-11-04T10:00:00Z'
  },
  {
    id: 'msg2',
    from: '34600000001',
    text: 'Test message',
    timestamp: '2025-11-04T10:01:00Z'
  }
];

// Mock data para pruebas de SMS
const mockSMS = [
  {
    id: 'sms1',
    to: '34600000000',
    text: 'Test SMS 1',
    status: 'delivered'
  },
  {
    id: 'sms2',
    to: '34600000001',
    text: 'Test SMS 2',
    status: 'sent'
  }
];

module.exports = {
  mockEmails,
  mockWhatsAppMessages,
  mockSMS
};