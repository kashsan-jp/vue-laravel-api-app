<script setup>
import { usePostsStore } from '@/stores/posts';
import { onMounted, ref } from 'vue';

const { getAllPosts } = usePostsStore();
const posts = ref([]);

onMounted(async() => posts.value = await getAllPosts());
</script>

<template>
  <main>
    <h1 class="title text-3xl font-bold text-red-300 text-center">Latest Post</h1>

    <div v-if="posts.length > 0">
      <div v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
      </div>
    </div>
  
  </main>
</template>
