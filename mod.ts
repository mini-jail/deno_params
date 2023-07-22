const matcher = /--(\S*)=(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s]+))/img

export function getParams(): Record<string, string | undefined> {
  const params = {}
  const regexpMatchArray = Deno.args.join(" ").matchAll(matcher)
  for (const [match, key, v1, v2, v3] of regexpMatchArray) {
    params[key] = v1 || v2 || v3
  }
  return params
}

export default getParams
