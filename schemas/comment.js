export const CommentSchema = {
  className: 'Comment',
  fields: {
    text: { type: 'String', required: true },
    post: { type: 'Pointer', targetClass: 'Post' },
  },
  classLevelPermissions: {
    find: { '*': true },
    count: { '*': true },
    get: { '*': true },
    update: { '*': true },
    create: { '*': true },
    delete: { '*': true },
  },
};
