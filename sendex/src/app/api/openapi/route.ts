import { NextResponse } from 'next/server'

export async function GET() {
  const spec = {
    openapi: '3.0.3',
    info: {
      title: 'Sendex API',
      version: '0.1.0',
      description: 'OpenAPI specification for Sendex endpoints.'
    },
    servers: [
      { url: '/' }
    ],
    paths: {
      '/api/auth': {
        get: {
          summary: 'Auth health check',
          responses: {
            '200': {
              description: 'OK',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      ok: { type: 'boolean' },
                      message: { type: 'string' }
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/api/errands': {
        get: {
          summary: 'List errands',
          parameters: [
            {
              in: 'query', name: 'q', required: false, schema: { type: 'string' }, description: 'Search by title (case-insensitive)'
            }
          ],
          responses: {
            '200': {
              description: 'List of errands',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      ok: { type: 'boolean' },
                      errands: { type: 'array', items: { $ref: '#/components/schemas/Errand' } }
                    }
                  }
                }
              }
            }
          }
        },
        post: {
          summary: 'Create errand',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/CreateErrandRequest' }
              }
            }
          },
          responses: {
            '200': {
              description: 'Created',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: { ok: { type: 'boolean' }, errand: { $ref: '#/components/schemas/Errand' } }
                  }
                }
              }
            },
            '400': { description: 'Invalid request' }
          }
        }
      },
      '/api/errands/all': {
        get: {
          summary: 'List all errands',
          responses: {
            '200': {
              description: 'List of all errands',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      ok: { type: 'boolean' },
                      errands: { type: 'array', items: { $ref: '#/components/schemas/Errand' } }
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/api/messages': {
        get: {
          summary: 'List messages',
          responses: {
            '200': {
              description: 'List of messages',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: { ok: { type: 'boolean' }, messages: { type: 'array', items: { $ref: '#/components/schemas/Message' } } }
                  }
                }
              }
            }
          }
        },
        post: {
          summary: 'Create message',
          requestBody: {
            required: true,
            content: {
              'application/json': { schema: { $ref: '#/components/schemas/CreateMessageRequest' } }
            }
          },
          responses: {
            '200': {
              description: 'Created',
              content: {
                'application/json': {
                  schema: { type: 'object', properties: { ok: { type: 'boolean' }, message: { $ref: '#/components/schemas/Message' } } }
                }
              }
            }
          }
        }
      }
    },
    components: {
      schemas: {
        Errand: {
          type: 'object',
          properties: {
            id: { anyOf: [{ type: 'string' }, { type: 'number' }] },
            title: { type: 'string' },
            description: { type: 'string' },
            reward: { type: 'number' },
            created_at: { type: 'string', format: 'date-time' }
          }
        },
        CreateErrandRequest: {
          type: 'object',
          required: ['title'],
          properties: {
            title: { type: 'string' },
            description: { type: 'string' },
            reward: { type: 'number' }
          }
        },
        Message: {
          type: 'object',
          properties: {
            id: { anyOf: [{ type: 'string' }, { type: 'number' }] },
            text: { type: 'string' },
            created_at: { type: 'string', format: 'date-time' }
          }
        },
        CreateMessageRequest: {
          type: 'object',
          required: ['text'],
          properties: { text: { type: 'string' } }
        }
      }
    }
  }

  return NextResponse.json(spec)
}


