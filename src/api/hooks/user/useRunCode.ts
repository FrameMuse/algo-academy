import appQuery from "api/appQuery"
import { APIActions } from "api/data"
import { invalidateActionQuery, isResponseOk } from "api/helpers"
import { APIMappings } from "api/mappings"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"

function useRunCode() {
  async function getLesson(id: string) {
    const response = await appQuery(APIActions.getLessonsId(id))
    if (!isResponseOk(response)) return

    return APIMappings.mapLesson(response.payload)
  }

  async function runCode(id: string, data: {
    language: EditorLanguage
    sourceCode: string
  }) {
    const lesson = await getLesson(id)
    if (lesson == null) return
    if (lesson.chapterRelation == null) return

    const response = await appQuery(APIActions.postJudge0Compile({
      chapter_id: lesson.chapterRelation.id,
      chapter_name: lesson.chapterRelation.title,

      lesson_id: id,
      language_id: APIMappings.editorLanguage.backward(data.language),
      source_code: data.sourceCode
    }))

    invalidateActionQuery(APIActions.getUsersMe())

    return APIMappings.mapJudge0Result(response.payload)
  }

  return runCode
}

export default useRunCode



// const TEST_RESULT: ICodeSubmitionResult = {
//   time: 0.033,
//   memory: 7432,
//   tests: [
//     { description: "Check for zeros", userAnswer: "true", expected: "false", passed: true },
//     { description: "Check for ones", userAnswer: "false", expected: "false", passed: true },
//     { description: "Check for twoes", userAnswer: "false", expected: "true", passed: true },
//     { description: "Check for threes", userAnswer: "true", expected: "true", passed: true },
//     { description: "Check for threes", userAnswer: "true", expected: "true", passed: true },
//     { description: "Check for threes", userAnswer: "true", expected: "true", passed: true },
//     { description: "Check for threes", userAnswer: "true", expected: "true", passed: true },
//     { description: "Check for threes", userAnswer: "true", expected: "true", passed: true },
//     { description: "Check for threes", userAnswer: "true", expected: "true", passed: true },
//     { description: "Check for threes", userAnswer: "true", expected: "true", passed: true },
//     { description: "Check for threes", userAnswer: "true", expected: "true", passed: true },
//   ],
//   status: {
//     id: 3,
//     description: "Accepted"
//   }
// }
