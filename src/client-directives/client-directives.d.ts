type ClientClickDirectiveValue =
  | boolean
  | string
  | {
      selector?: string;
      events?: string | string[];
      once?: boolean;
      replay?: boolean;
    };

type ClientScrollDirectiveValue =
  | boolean
  | number
  | {
      threshold?: number;
    };

declare global {
  namespace Astro {
    interface ClientDirectives {
      'client:click'?: ClientClickDirectiveValue;
      'client:scroll'?: ClientScrollDirectiveValue;
    }
  }
}

export {};
