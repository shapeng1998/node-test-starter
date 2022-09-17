import { describe, it, expect } from 'vitest'
import { solve } from './index'

describe('solve should work', () => {
  it('should work', () => {
    expect(
      solve(
        '<root><1><2></2></1><3><6/></3><3/><4></4><5><7/><8><9><10><2/></10></9></8></5></root>'
      )
    ).toEqual('root 1 3 3 4 5 2 6 7 8 9 10 2')
  })
})
