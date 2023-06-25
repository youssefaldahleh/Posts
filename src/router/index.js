import { createRouter, createWebHistory } from "vue-router";
import PostView from "../views/PostsView.vue";
import AboutUs from "../views/AboutUs.vue";
import AddPost from "../views/AddPost.vue";
import PostListing from "../views/PostListing.vue";

const routes = [
  {
    path: "/",
    redirect: "/post-listing",
  },
  {
    path: "/Post-Listing",
    name: "PostListing",
    component: PostListing,
  },
  {
    path: "/about-us",
    name: "about-us",
    component: AboutUs,
  },
  {
    path: "/add-post",
    name: "add-post",
    component: AddPost,
  },
  {
    path: "/Post-Listing/:postId",
    name: "PostView",
    component: PostView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
