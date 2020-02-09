<template>
    <ul>
        <VideoListItem 
            v-for="video in videos"
            v-bind:video="video"
            :key="video.etag"
            @videoSelect="onVideoSelect" 
        >
        </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem';
export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    props: {
        videos: Array
    },
    methods: {
        onVideoSelect(video) {
            this.$emit('videoSelect', video) 
        }
    }
};
</script>

<style scoped> 
    ul { 
        padding-left: 0;
        max-height: 26.25rem;
        overflow: scroll; 
    }

    @media screen and (min-width: 750px) {
        ul {
            margin-top: 0.7rem; 
            flex: 1;
            max-height: 500px;
        }

        li { margin-bottom: 1rem; }
    }
</style>
