await import('./Post');

const Post = Parse.Object.extend('Post');

try {
  const post = Post.setValues({ title: 't', text: 'text' });
} catch (error) {
  console.log(error);
}
