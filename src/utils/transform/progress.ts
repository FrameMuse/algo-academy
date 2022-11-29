export interface ProgressEntry {
  completed: number
  total: number
}

class Progress {
  static humanize(entry: ProgressEntry): string {
    return `${entry.completed}/${entry.total}`
  }

  static percentile(entry: ProgressEntry): number {
    return entry.completed / entry.total * 100
  }

  static sum(...entries: ProgressEntry[]): ProgressEntry {
    return entries.reduce((result, nextEntry) => {
      return {
        completed: result.completed + nextEntry.completed,
        total: result.total + nextEntry.total
      }
    }, { completed: 0, total: 0 })
  }

  static subtractTotal(entry: ProgressEntry, value: number): ProgressEntry {
    const completed = entry.completed - value
    const total = entry.total - value

    return {
      completed: completed < 0 ? 0 : completed,
      total: total < 0 ? 0 : total
    }
  }
}

export default Progress
