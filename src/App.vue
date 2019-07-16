<template>
  <div id="app" class="container-fluid">

    <div class="topCover">
      <SearchBar class="searchBar"  @termChange="onTermChange"  name="test"></SearchBar>
    </div>

    <div class="videoContent">
      <VideoDetail :video="selectedVideo"/>
      <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList> 
    </div>

    <!-- <Pagination class="pagination" v-if="isVideo"/> -->
    <div class="prevNextWrapper navSkin" >
      <div class="prev" @click="updatePage(currentPage - 1)"> &or; </div>
      <div class="container">
          <p v-for="result in visibleResults"
          v-bind:result="result"
          :key="result">{{result.id}}</p>
      </div>
      <div class="next" @click="updatePage(currentPage + 1)">&and;</div>
    </div>

    <div>
      <h1>Quick Search</h1>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
// import Pagination from './components/Pagination';

const API_KEY = 'AIzaSyD5VpzMQlEcF_IWSQcw1Ij2M3oLMpCGF-8';

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
    // Pagination
  },
  data() {
    return { 
      videos: [], 
      selectedVideo: null, 
      isVideo: false,

      // searchQuery: "",
      // isTyping: false,
      // searchResult: [],
      // isLoading: false, 
    };
  },
  beforeMount() {
    this.updateVisible()
  },
  // watch: {
  //   searchQuery: _.debounce(function() {
  //     this.isTyping = false;
  //   }, 1000),
  //   isTyping: function(value) {
  //     if (!value) {
  //       this.searchUser(this.searchQuery);
  //     }
  //   }
  // },
  methods: {
    onVideoSelect(video) {
      this.selectedVideo = video;
    },
  
    async onTermChange(searchTerm) {
      const data = await axios
      .get('https://www.googleapis.com/youtube/v3/search', {
          params: {
              key: API_KEY,
              maxResults: 25,
              nextPageToken: 'CAoQAA',
              type: 'video',
              part: 'snippet',
              q: searchTerm
          }
      }).then(response => {
          console.log('bzzzzz ' + JSON.stringify(response));
          this.videos = response.data.items;
          this.isVideo = true;
          data = response;
      });
      return data;
    },
    updatePage() {
      // this.currentPage = pageNumber;
      this.updateVisible();
    },
    updateVisible() {
      console.log('max' + JSON.stringify(this.videos[0].id));
      // this.visibleResults = this.maxResults.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
      // if(this.visibleResults.length == 0 && this.currentPage > 0){
      //     this.updatePage(this.currentPage - 1)
      // }
    },
  }
}
</script>

<style>
  #app {
    text-align: center;
    height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-size: contain;
    background-repeat: no-repeat;
  }

  body { 
    margin: 0;
    padding: 0;
    background-color: #41b883;
  }

  h1 { color: #fff; font-size: 30pt; margin-top: 0; }

  h2 {
    position: absolute;
    right: 5vw;
    left: 5vw;
    top: 10px;
    color: #ffffff;
  }

  .topCover {
    padding-top: 15vh;
    margin-top: -2vh;
    background-image: url('./assets/qs1.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .videoContent { margin-top: 1rem; }
  .pagination { 
    width: 95vw; 
    margin: 0 auto;
  }

  .navSkin { 
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
  }

  @media screen and (min-width: 750px) {
    .videoContent { 
      display: flex; 
      padding: 2rem;
    }

    .topCover { padding-top: 20vw; }
  }
</style>