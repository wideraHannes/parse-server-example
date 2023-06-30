export const PostSchema = {
  className: 'Post',
  fields: {
    title: { type: 'String', required: true },
    text: { type: 'String', required: true },
    comments: { type: 'Relation', targetClass: 'Comment' },
    hannes: { type: 'String', required: true },
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
