'use client'
import { CreatePostProvider } from '@/components/create-post/context'
import { Post } from '@/components/post'
import { sdk } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'

export default function Page({ params }: { params: { hash: string } }) {
  const { data } = useQuery({
    queryKey: ['post', params.hash],
    queryFn: () => sdk.getPost(params.hash),
  })

  if (!data?.data) return <div>Cast not found</div>

  return (
    <CreatePostProvider>
      <div className="flex flex-col gap-4">
        <Post cast={data.data} />
      </div>
    </CreatePostProvider>
  )
}
