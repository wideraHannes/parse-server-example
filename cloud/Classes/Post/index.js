await import('./trigger/beforeSave');

/* This additional Validation could also be done in the beforeSave trigger. */

class Post extends Parse.Object {
  constructor(post) {
    super('Post');
  }

  hasSuperHumanStrength() {
    return this.get('strength') > 18;
  }

  static set(post) {
    const { title, text } = post;
    if (title.length < 2) {
      throw new Error('title is too short');
    }
    if (text.length < 2) {
      throw new Error('text is too short');
    }
    if (title.length > text.length) {
      throw new Error('title is longer than text');
    }
    post.set('title', title);
    post.set('text', text);
    return post;
  }
}

// Register the subclass
Parse.Object.registerSubclass('Post', Post);
