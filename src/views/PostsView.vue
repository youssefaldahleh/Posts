<template>
  <div class="container">
    <div>
      <h2>{{ this.posts.title }}</h2>
      <p class="header">{{ this.posts.user }}</p>
      <p class="header">{{ this.posts.body }}</p>
    </div>
    <h3>Comments</h3>
    <div
      class="comments"
      v-for="comment in comments"
      :key="comment.id"
      :postId="comment.postId"
    >
      <div class="comment">
        <p class="circle"></p>
        <div class="">
          <p class="link">{{ comment.email }}</p>
          <p>{{ comment.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "PostsView",
  components: {},

  data() {
    return {
      comments: {},
      posts: {},
      users: {},
    };
  },

  created() {
    const Id = this.$route.params.postId;

    const fetchComment = fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${Id}`
    ).then((response) => response.json());

    const fetchPosts = fetch(
      `https://jsonplaceholder.typicode.com/posts/${Id}`
    ).then((response) => response.json());

    const fetchUser = fetch(`https://jsonplaceholder.typicode.com/users`).then(
      (response) => response.json()
    );

    Promise.all([fetchComment, fetchPosts, fetchUser]).then((data) => {
      this.comments = data[0];
      this.posts = data[1];
      this.users = data[2];

      this.posts = {
        ...this.posts,
        user: this.users.find((user) => this.posts.userId == user.id).name,
      };
    });
  },
};
</script>
<style scoped>
.container {
  text-align: left;
}
h2 {
  color: rgb(153, 153, 30);
}
.header {
  border-bottom: 1px solid white;
  padding-bottom: 30px;
}
.comment {
  background-color: #3a3b46;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.link {
  color: blueviolet;
}
.circle {
  background-color: blueviolet;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}
</style>
