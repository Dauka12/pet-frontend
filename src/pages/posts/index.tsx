import { useGetAllPostsQuery } from "../../app/services/postApi"
import CreatePost from "../../components/create-post"

const Posts = () => {
  const { data } = useGetAllPostsQuery()
  return (
    <>
      <div className="mb-10 w-full">
        <CreatePost/>
      </div>
    </>
  )
}

export default Posts
