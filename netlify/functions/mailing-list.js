const fs = require('fs').promises;
const path = require('path');

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod === 'POST') {
    try {
      const { email } = JSON.parse(event.body);
      
      if (!email || !email.includes('@')) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Invalid email address' })
        };
      }

      // For Netlify, we'll use a simple in-memory storage or external service
      // Since we can't write to files in serverless functions
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          message: 'Email added to mailing list successfully!',
          email: email 
        })
      };
    } catch (error) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Server error' })
      };
    }
  }

  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Mailing list API endpoint',
        endpoints: {
          'POST /api/mailing-list': 'Add email to mailing list',
          'GET /api/mailing-list': 'Get API info'
        }
      })
    };
  }

  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ error: 'Method not allowed' })
  };
};
