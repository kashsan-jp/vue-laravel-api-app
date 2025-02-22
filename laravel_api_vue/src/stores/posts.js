import { defineStore } from "pinia";

export const usePostsStore = defineStore('postsStore', {
    state: () => {
        return {
            errors: {},
        };
    },
     actions: {
        //Get All posts
        async getAllPosts() {
            const res = await fetch('/api/posts');
            const data = await res.json()

            console.log(data);
            return data
        },
        // Create Post
        async createPost(formData) {
            const res = await fetch('/api/posts', {
                method: 'post',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if(data.errors) {
                this.errors = data.errors;
            } else {
                // console.log(data);
                this.router.push({name: 'home'});
            }1
        },
     },
}) ;