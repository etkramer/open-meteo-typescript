// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenMeteo from 'open-meteo';

const client = new OpenMeteo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource forecast', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.forecast.retrieve({ latitude: 0, longitude: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.forecast.retrieve({
      latitude: 0,
      longitude: 0,
      current_weather: true,
      daily: ['temperature_2m_max'],
      hourly: ['temperature_2m'],
      past_days: 1,
      temperature_unit: 'celsius',
      timeformat: 'iso8601',
      timezone: 'timezone',
      wind_speed_unit: 'kmh',
    });
  });
});
