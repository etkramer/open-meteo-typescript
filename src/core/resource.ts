// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { OpenMeteo } from '../client';

export abstract class APIResource {
  protected _client: OpenMeteo;

  constructor(client: OpenMeteo) {
    this._client = client;
  }
}
