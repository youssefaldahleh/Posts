<template>
  <div class="container">
    <h1>Add new post</h1>
    <div class="from-container">
      <form action="" @submit.prevent="addPost">
        <input type="hidden" v-model="formData.userId" />
        <input type="hidden" v-model="formData.id" />
        <label for="">Title</label>
        <input
          type="text"
          placeholder="Enter the title"
          v-model="formData.title"
        />
        <label for="">Content</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter the content"
          v-model="formData.body"
        ></textarea>
        <label for="">Author</label>
        <input type="text" v-model="Author" />
        <button>SAVE</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddPost",
  data() {
    return {
      formData: {
        userId: null,
        id: null,
        title: "",
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      const newTitle = this.title;
      const newContent = this.body;

      this.$emit("addNewPost", newTitle, newContent);

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "post",
        body: JSON.stringify(this.formData),
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      this.$router.push("/post-listing");
    },
  },
};
</script>
<style scoped>
h1 {
  text-align: left;
  border-bottom: 1px solid white;
}
.from-container {
  background-color: rgba(19, 37, 58, 0.945);
  border-radius: 10px;
  padding: 20px;
}
form {
  text-align: left;
}
label {
  display: block;
}
input,
textarea {
  background-color: rgba(19, 37, 58, 0.945);
  border: 1px solid white;
  border-radius: 4px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 20px;
  padding: 10px;
}
button {
  color: white;
  background: rgb(127, 207, 127);
  border: none;
  margin: auto;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 10px 30px 10px 30px;
  cursor: pointer;
}
</style>
