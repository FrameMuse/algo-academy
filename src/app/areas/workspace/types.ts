export interface ICodeSubmitionResult {
  time: number
  memory: number
  status: {
    id: number
    description: string
  }
  tests: {
    passed: boolean
    description: string
    expected: string
    userAnswer: string
  }[]
}
