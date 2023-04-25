// build時 API route 沒有單獨被執行
export default async function loadPosts() {
  console.log('loadPosts');
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  return data;
}
