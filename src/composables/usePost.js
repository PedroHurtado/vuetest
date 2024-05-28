import { onMounted, ref } from 'vue'

export function usePost(postId) {
  const post = ref()

  const fetchData = async (postId) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    const response = await fetch(url)
    post.value = await response.json()
  }
  onMounted(() => {
    fetchData(postId)
  })
  return { post }
}
