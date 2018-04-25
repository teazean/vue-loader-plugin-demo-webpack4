<template>
    <div class="app">
        <div class="test">{{test}}</div>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            test: 11
        }
    }
};
</script>
<style lang="myless">
.app {
    background: red;
    .test {
        background: white;
        transform: translate(20px, 20px);
    }
}
</style>
