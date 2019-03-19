<template>
    <body>    
        <div v-on:click="isActive = !isActive" class="hero heroSkin">
            <p v-show="isActive">{{message}}</p>
            <p v-show="isActive">{{altMessage}}</p>
        </div>
    </body>
</template>

<script>
    export default { 
        data: {
            message: 'Log In',
            altMessage: 'Log out',
            isActive: false
        }
    }
</script>

<style>
    body {
        background-color: rgba(1, 122, 203, 0.12);
    }
    .hero {
        padding: 1rem
    } 
    .heroSkin { 
        background-color: azure;
        color: antiquewhite;
    } 
    p { text-align: 'center'; }
</style>