<template>
    <div>
        <input id="myInput" @input="onInput" class="searchBar"/>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput: function(event) {
            this.$emit('termChange', event.target.value);
        }
    }
};
</script>

<style scoped>
    input {
        width: 70%;
        padding-top: 10rem;
        padding-bottom: 0.5rem;
        font-size: 20pt;
        font-weight: bold;
        border: none;
        border-bottom: 2px solid #fff;
        color: #fff;
        outline: none;
        text-align: center;
        background: transparent;
    }
    @media screen and (min-width: 46.8rem) {
        input { padding-top: 5rem; }
    }
</style>
