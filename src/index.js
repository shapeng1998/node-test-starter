export function solve(xml) {
  const tokens = xml
    .split('<')
    .filter(Boolean)
    .map((x) => x.split('>').filter(Boolean))
    .flat()
    .map((x) => {
      if (x.startsWith('/')) {
        return { type: 'close', name: x.slice(1) }
      } else if (x.endsWith('/')) {
        return { type: 'self', name: x.slice(0, -1) }
      } else {
        return { type: 'open', name: x }
      }
    })

  const stack = [{ name: 'root', children: [] }]
  for (const token of tokens) {
    if (token.type === 'open') {
      stack.push({ name: token.name, children: [] })
    } else if (token.type === 'close') {
      const node = stack.pop()
      stack[stack.length - 1].children.push(node)
    } else {
      stack[stack.length - 1].children.push({ name: token.name })
    }
  }

  const result = []
  const q = [stack[0]]
  while (q.length) {
    const t = q.shift()
    result.push(t.name)
    q.push(...(t.children || []))
  }

  return result.slice(1).join(' ')
}
