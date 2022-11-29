import useLesson from "api/hooks/lessons/useLesson"
import useUpdateLesson from "api/hooks/lessons/useUpdateLesson"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import EditorPreview from "app/ui/synthetic/EditorPreview/EditorPreview"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import LoaderCover from "app/ui/synthetic/Loader/LoaderCover"

interface LessonArticleEditProps {
  id: string
}

function LessonArticleEdit(props: LessonArticleEditProps) {
  const { lesson, isLoading } = useLesson(props.id)
  const updateLesson = useUpdateLesson()

  if (isLoading) {
    return <LoaderCover />
  }

  if (lesson == null) {
    return <ErrorCover>Lesson is null.</ErrorCover>
  }

  async function onSave(content: string) {
    await updateLesson(props.id, { content })
  }

  return (
    <EditorPreview language={EditorLanguage.Markdown} original={lesson.content || ArticleExample} onSave={onSave} />
  )
}

const ArticleExample = `### Overview

Recursion, simply put, is a function that calls another function.

Think of recursion as a Russian nesting doll, every time you open a doll you’ll find a smaller one inside, this repeats until there are no more dolls.

In order for a recursive function to come to a stop it needs to have a base case. A base case is just a condition, that if met, will stop the recursion. Without a base case the function will call itself repeatedly until the computer runs out of memory. For the Russian doll example, our base case would be if we find no doll within another doll.

After reaching the base case, the functions start to return, with the first function call being returned last.

The reason for our functions being returned in reverse order (Last in first out) is because recursion puts all function calls on a call stack.

Let’s look at how the call stack works with a real-world example:

If we’re trying to find the sum of 6 factorial then we would need to multiply 6 and all of its subsequent numbers to find our answer. With recursion we can start at 6 and recurse until we hit 1 (our base case), after which we will start performing the math to get our answer (ex: 12345*6). Essentially, recursion does computation on the way back, not while it"s recursing.

Here is an image depicting how our functions will look on our call stack, notice the pattern.

![](https://cdn.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/https://www.filepicker.io/api/file/hdpWWtaQvm2ftBTSSIF8)
`

export default LessonArticleEdit
