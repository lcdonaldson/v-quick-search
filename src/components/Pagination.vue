<template>
    <div class="prevNextWrapper navSkin" >
        <div class="prev" @click="updatePage(currentPage - 1)"> &or; </div>
        <div class="container">
            <p v-for="result in visibleResults"
            v-bind:result="result"
            :key="result">{{result.id}}</p>
        </div>
        <div class="next" @click="updatePage(currentPage + 1)">&and;</div>
    </div>
</template>
<script>
export default {
    name: 'Pagination',
    props: ['video'],
    data() {
        return {
            results:[],
            fakeData: [
                {id: 1 },
                {id: 2 },
                {id: 3 },
                {id: 4 },
                {id: 5 },
                {id: 6 },
                {id: 7 },
                {id: 8 },
                {id: 9 },
                {id: 10 },
                {id: 11 },
                {id: 12 },
                {id: 13 },
                {id: 14 },
                {id: 15 },
                {id: 16 },
                {id: 17 },
                {id: 18 },
                {id: 19 },
                {id: 20 }
            ],
            nextId: 13,
            currentPage: 0,
            pageSize: 5,
            video: this.props,
            visibleResults: []
        }
    },
    beforeMount() {
        this.updateVisible()
    },
    methods: {
        updatePage(pageNumber) {
            this.currentPage = pageNumber;
            this.updateVisible();
        },
        updateVisible() {
            this.visibleResults = this.fakeData.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
            if(this.visibleResults.length == 0 && this.currentPage > 0){
                this.updatePage(this.currentPage - 1)
            }
        },

        // async onTermChange(searchTerm) {
        //     const data = await axios
        //     .get('https://www.googleapis.com/youtube/v3/search', {
        //         params: {
        //             key: API_KEY,
        //             maxResults: 5,
        //             nextPageToken: 'CAoQAA',
        //             type: 'video',
        //             part: 'snippet',
        //             q: searchTerm
        //         }
        //     })
        //     .then(response => {
        //         this.videos = response.data.items;
        //         this.isVideo = true;
        //         data = response;
        //     });
        //     return data;
        // }
        // prev: () => { console.log('hi') },
        // next: () => { console.log('bye') }
    }
}
</script>
<style>
/* .navSkin { 
    color: #fff;
    font-size: 16pt;
}
.prevNextWrapper {
    display: grid;
    grid-template-columns: 0.2fr 2fr 0.2fr;
}
.prev,
.next { 
    align-self: center;
    font-weight: bold;
    width: 1.5em;
    border: 2px solid #fff;
    transform: rotate(90deg);
}
.next { margin-left: auto; }
.container { 
    display: inline-grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
} */
</style>
