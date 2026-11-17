/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { SupportedLang } from "./i18n";

declare global {
  namespace App {
    interface Locals {
      locale: SupportedLang;
    }
  }
}

export {};
