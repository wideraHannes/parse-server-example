export const PostSchema = {
  className: 'Post',
  fields: {
    title: { type: 'String', required: true },
    text: { type: 'String', required: true },
    comments: { type: 'Relation', targetClass: 'Comment' },
    strength: { type: 'Number' },
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
