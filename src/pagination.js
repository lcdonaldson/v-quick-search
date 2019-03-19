export default {
    name: 'pagination',
    props: ['videos', 'currentPage', 'pageSize'],
    methods: {
        updatePage(pageNumber) {
            this.$emit('page:update', pageNumber)
        },
        totalPages() {
            return Math.ceil(this.videos.length / this.pageSize);
        },
        showPrevious(){
            return this.currentPage == 0 ? false : true;
        },
        showNext(){
            return this.currentPage == (this.totalPages() - 1) ? false : true;
        }
    }
}