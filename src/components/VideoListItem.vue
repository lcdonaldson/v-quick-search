<template>
    <li @click="onVideoSelect">
        <img :src="thumbnailUrl" class="thumbnail" />
        <p class="title">
            {{ video.snippet.title }}
        </p>
    </li>
</template>

<script>
export default {
    name: 'VideoListItem',
    props: ['video'],
    computed: {
        thumbnailUrl() {
            return this.video.snippet.thumbnails.default.url;
        }
    },
    methods: {
        onVideoSelect() {
            this.$emit('videoSelect', this.video)
        }
    }
};
</script>

<style scoped>
    li {
        display: flex;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 1rem;
        max-height: 8rem;
        overflow: hidden;
        list-style-type: none;
        background-color: #eeeeee;
    }

    li:hover { background-color: #c3c3c3; }
    .title { padding: 0 0.2rem }
    img { padding-right: 1vw; }
</style>
