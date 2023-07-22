const matcher = /--(\S*)=(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s]+))/img
const isNumber = /^(\d+)$/;
const isBoolean = /^(true|false)$/

export function getParams(): Record<string, string | number | boolean | undefined> {
  const params = {}
  const regexpMatchArray = Deno.args.join(" ").matchAll(matcher)
  for (const [match, key, v1, v2, v3] of regexpMatchArray) {
    let value = v1 || v2 || v3
    if (isNumber.test(value)) {
      value = +value
    } else if (isBoolean.test(value)) {
      value = value === "true" ? true : false
    }
    params[key] = value
  }
  return params
}

export default getParams
