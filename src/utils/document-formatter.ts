import { Options, Plugin } from "prettier"

async function importPrettierParsers(): Promise<Plugin[]> {
  const parserBabel = await import("prettier/parser-babel")
  const parserTypescript = await import("prettier/parser-typescript")

  return [
    parserBabel.default,
    parserTypescript.default
  ]
}

/**
 * !!! WARNNING !!!
 * 
 * It's extremely heavy formatter for browsers,
 * use it if heavy network usage is tolerable.
 * 
 * Loads `prettier` and its parsers.
 */
export async function loadDocumentFormatter() {
  const prettier = await import("prettier/standalone")
  const parsers = await importPrettierParsers()

  return (source: string, options?: Options) => {
    try {
      const contentFormatted = prettier.format(source, {
        ...options,
        parser: "json-stringify",
        plugins: [...parsers, ...options?.plugins || []],
      })

      return contentFormatted
    } catch (error) {
      if (error instanceof Error) {
        return `${error.name}: ${error.message}`
      }

      throw error
    }
  }
}
