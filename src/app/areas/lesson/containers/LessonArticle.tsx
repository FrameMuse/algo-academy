import Article from "app/ui/kit/Article/Article"
import Video from "app/ui/kit/Video/Video"
import ReactMarkdown from "react-markdown"

interface LessonArticleProps {
  /**
   * Id of a course.
   */
  id: number
}

function LessonArticle(props: LessonArticleProps) {
  const content = ""
  return (
    <Article>
      <ReactMarkdown components={{ video: Video }}>
        {content}
      </ReactMarkdown>
    </Article>
  )
}

export default LessonArticle
