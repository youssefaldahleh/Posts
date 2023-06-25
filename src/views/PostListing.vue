<template>
  <h1>LIST OF ARTICLES</h1>
  <div class="container">
    <router-link
      v-for="post in posts"
      :key="post.id"
      :to="{
        name: 'PostView',
        params: { postId: post.id },
      }"
    >
      <div class="post">
        <h5>{{ post.title }}</h5>
        <p class="postbody">{{ post.body }}</p>
        <p>{{ post.auther }}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
      authers: [],
      authername: null,
    };
  },

  created() {
    // Promise.all([promises1, promose2]).then()
    const fetch1 = fetch("https://jsonplaceholder.typicode.com/posts").then(
      (response) => response.json()
    );
    const fetch2 = fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => response.json()
    );
    Promise.all([fetch1, fetch2]).then((data) => {
      this.posts = data[0];
      this.authers = data[1];
      this.posts = this.posts.map((post) => ({
        ...post,
        auther: this.authers.find((auther) => post.userId == auther.id).name,
      }));
    });
  },
};
</script>
<style scoped>
a {
  display: contents;
  text-decoration: none;
}
.container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  width: 100%;
}
.post {
  width: 200px;
  text-align: left;
  background-color: #3a3b46;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: white;
}
.postbody {
  border-bottom: 2px solid white;
  line-height: 1.2em;
  height: 5.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 10px;
}
h5 {
  color: rgb(153, 153, 30);
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
