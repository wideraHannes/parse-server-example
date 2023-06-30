Parse.Cloud.beforeSave('Post', async ({ object: contact }) => {
  console.log('beforeSave Post');
});
