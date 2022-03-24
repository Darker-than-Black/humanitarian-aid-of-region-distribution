import { isDevMode } from '@angular/core';

export class UrlBuilder {
  url: string = '';

  constructor(url: string = '') {
    this.url = this.devMode(url);
  }

  private devMode(url: string): string {
    return isDevMode() && url ? `${url}&dev=1` : url;
  }
}
