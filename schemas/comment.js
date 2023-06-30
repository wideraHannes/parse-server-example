export const CommentSchema = {
  className: 'Comment',
  fields: {
    text: { type: 'String', required: true },
    post: { type: 'Pointer', targetClass: 'Post' },
  },

  classLevelPermissions: {
    find: { requiresAuthentication: true },
    count: { 'role:Admin': true },
    get: { requiresAuthentication: true },
    update: { requiresAuthentication: true },
    create: { 'role:Admin': true },
    delete: { 'role:Admin': true },
  },
};
