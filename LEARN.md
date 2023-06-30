# Deep Dive Parse

## Learn About Cloud Code

Most important to introduce Domain Logic

https://docs.parseplatform.org/cloudcode/guide

## Define Custom Schemas

https://docs.parseplatform.org/defined-schema/guide/

- https://guides.codepath.com/android/Building-Data-driven-Apps-with-Parse

## Define Custom Classes

Creating a class with custom methods in Parse Server is beneficial for several reasons:

1. **Encapsulation**: By creating a class with custom methods, you can encapsulate related functionality within a single class, making your code more organized and easier to maintain.

2. **Code Reusability**: Custom methods can be reused across different parts of your application, reducing code duplication and making your code more efficient.

3. **Data Validation**: Custom methods can be used to enforce data validation rules, ensuring that your application's data is always in a valid state.

4. **Security**: By using custom methods to manage data access, you can easily control who can access or modify data, enhancing the security of your application.

As for where you should do this, it is common to create custom classes and methods in the `cloud` directory in your Parse Server application. This directory typically contains your cloud functions and custom classes. Here's an example of how you might structure your `cloud` directory:

```
/cloud
  /classes
    - MyCustomClass.js
    - AnotherCustomClass.js
  /functions
    - myCloudFunction.js
    - anotherCloudFunction.js
  main.js
```

In this example, `MyCustomClass.js` and `AnotherCustomClass.js` would contain your custom classes and methods, and `myCloudFunction.js` and `anotherCloudFunction.js` would contain your cloud functions.

Remember to include your custom classes in the `main.js` file, so they are loaded when your Parse Server application starts:

```javascript
require('./classes/MyCustomClass.js');
require('./classes/AnotherCustomClass.js');
```

By creating custom classes with custom methods in Parse Server, you can create a more organized, efficient, and secure application. [Source 2](https://blog.back4app.com/parse-server-best-practices/)

### Use Cases for Custom Class

There are several things you can put inside the `Post` class that can extend the functionality of the Parse Object and make it more useful:

1. **Instance methods**: These are functions that can be called on instances of the `Post` class. For example, you've already defined a `hasSuperHumanStrength` method. You could add more methods like this to perform operations that are specific to posts. For example, you could add a `getSummary` method that returns the first few words of the post's text.

   ```javascript
   getSummary() {
     return this.get('text').split(' ').slice(0, 10).join(' ') + '...';
   }
   ```

2. **Class methods**: These are functions that can be called on the `Post` class itself, not on instances of the class. For example, you could add a `getRecentPosts` method that retrieves the most recent posts from Parse Server.

   ```javascript
   static async getRecentPosts() {
     const query = new Parse.Query('Post');
     query.descending('createdAt');
     return await query.find();
   }
   ```

3. **Properties**: You can add properties to the `Post` class to store data that's relevant to all posts. For example, you could add a `postCount` property that keeps track of the total number of posts. However, keep in mind that Parse Server doesn't automatically persist properties, so you'll need to manually save and load this data.

4. **Relationships**: Parse Server supports several types of relationships between objects, including one-to-one, one-to-many, and many-to-many relationships. For example, if your app has a `User` class, you could add a `likes` relationship to the `Post` class to keep track of which users have liked each post [Source 6](https://docs.parseplatform.org/rest/guide/).

   ```javascript
   like(user) {
     const likes = this.relation('likes');
     likes.add(user);
     return this.save();
   }

   unlike(user) {
     const likes = this.relation('likes');
     likes.remove(user);
     return this.save();
   }
   ```

Remember to register your subclass with Parse Server after you've defined it, like you're already doing:

```javascript
Parse.Object.registerSubclass('Post', Post);
```

This will ensure that Parse Server uses your subclass when it creates new `Post` objects [Source 0](https://parseplatform.org/Parse-SDK-JS/api/v1.11.1/Parse.Object.html).

This could be a good spot to store cloud functions like recent Order, top post and so on in one specific file.

### Where Validation

i would put validation in the beforeSave Trigger.
