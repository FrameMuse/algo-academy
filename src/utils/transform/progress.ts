export interface ProgressEntry {
  completed: number
  total: number
}

class Progress {
  static zero = Object.freeze({ completed: 0, total: 0 })

  static humanize(entry: ProgressEntry): string {
    return `${entry.completed}/${entry.total}`
  }

  static percentile(entry: ProgressEntry): number {
    return entry.completed / entry.total * 100
  }

  /**
   * Whether a progress is at its maximum in percentage (max is 100%, anything beyond it will be counted as max).
   */
  static isMax(entry: ProgressEntry): boolean {
    return !(entry.completed < entry.total)
  }

  static sum(...entries: ProgressEntry[]): ProgressEntry {
    return entries.reduce((result, nextEntry) => {
      return {
        completed: result.completed + nextEntry.completed,
        total: result.total + nextEntry.total
      }
    }, Progress.zero)
  }

  static add(entry: ProgressEntry, value: number): ProgressEntry {
    const completed = entry.completed + value
    const total = entry.total + value

    return {
      completed: completed < 0 ? 0 : completed,
      total: total < 0 ? 0 : total
    }
  }

  static subtract(entry: ProgressEntry, value: number): ProgressEntry {
    const completed = entry.completed - value
    const total = entry.total - value

    return {
      completed: completed < 0 ? 0 : completed,
      total: total < 0 ? 0 : total
    }
  }
}

export default Progress
