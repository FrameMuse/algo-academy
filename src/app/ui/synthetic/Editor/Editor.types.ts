export enum EditorLanguage {
  TypeScript = "typescript",
  JavaScript = "javascript",
  CSS = "css",
  LESS = "less",
  SCSS = "scss",
  SASS = "sass",
  JSON = "json",
  HTML = "html",
  XML = "xml",
  PHP = "php",
  "C#" = "c#",
  "C++" = "C++",
  Razor = "razor",
  Markdown = "markdown",
  Diff = "diff",
  Java = "java",
  VB = "vb",
  CoffeeScript = "coffeescript",
  Handlebars = "handlebars",
  Batch = "batch",
  Pug = "pug",
  "F#" = "f#",
  Lua = "lua",
  Powershell = "powershell",
  Python = "python",
  Ruby = "ruby",
  R = "r",
  "Objective-C" = "objective-C"
}

export enum EditorTheme {
  Light = "vs",
  Dark = "vs-dark",
  HighContrastDark = "hc-black"
}

export interface EdtitorSnippet {
  label: string
  insertText: string
  detail?: string
  description?: string
}
