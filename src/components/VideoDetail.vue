<template>
    <div v-if="video" class="videoWrapper">
        <iframe :src="videoUrl" frameborder="0" height="200" width="200"></iframe>
    </div> 
</template>

<script>
export default {
    name: 'VideoDetail',
    props: ['video'],
    computed: {
        videoUrl() {
            const { videoId } = this.video.id;
            return `https://www.youtube.com/embed/${videoId}`;
        }
    }
}
</script>

<style scoped>
    .videoWrapper {
        position: relative;
        width: 100%;
        margin-right: 0.5rem;
    }

    .videoWrapper iframe {
        width: 100%;
        margin: 0.7rem 0 0.7rem 0;
    }

    @media screen and (min-width: 750px) {
        .videoWrapper {
            position: relative;
            margin-right: 0.5rem;
            flex: 2;
            width: auto;
            max-height: 500px;
        }

        iframe {
            min-height: 500px;
            max-height: 500px;
            padding-bottom: 0.5rem;
        }
    }

    @media screen and (min-width: 1200px) {
        .videoWrapper { max-height: 700px; }
        iframe { min-height: 600px; max-height: 600px; }
    }

</style>
