<template>
  <div id="app" class="container-fluid">

    <div class="topCover">
      <SearchBar class="searchBar"  @termChange="onTermChange"  name="test"></SearchBar>
    </div>

    <div class="videoContent">
      <VideoDetail :video="selectedVideo"/>
      <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList> 
    </div>

    <Pagination class="pagination" v-if="isVideo"/>

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
import Pagination from './components/Pagination';

const API_KEY = 'AddYourYouTubeApiKeyHere';

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
    Pagination
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
  watch: {
    searchQuery: _.debounce(function() {
      this.isTyping = false;
    }, 1000),
    isTyping: function(value) {
      if (!value) {
        this.searchUser(this.searchQuery);
      }
    }
  },
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
      })
      .then(response => {
          this.videos = response.data.items;
          this.isVideo = true;
          data = response;
      });
      return data;
    }
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

  @media screen and (min-width: 750px) {
    .videoContent { 
      display: flex; 
      padding: 2rem;
    }

    .topCover { padding-top: 20vw; }
  }
</style>