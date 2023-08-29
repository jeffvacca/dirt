<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>

<template>
    <div class="splash flex flex-column justify-content-center">
        <div class="clip-text clip-text_one">DiRT</div>
    </div>
</template>

<style lang="scss" scoped>
.splash {
    text-align: center;
    width:100vw;
    height:100vh;
}


/* Clip text element */
.clip-text {
    font-size: 26vw;
    font-weight: bold;
    line-height: 1;
    position: relative;
    display: inline-block;
    margin: .25em;
    padding: .5em .5em;
    text-align: center;
    /* Color fallback */
    color: #fff;
    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;
}

.clip-text:before,
.clip-text:after {
    position: absolute;
    content: '';
}

/* Background */
.clip-text:before {
    z-index: -2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: inherit;
}

/* Text Background (black zone) */
.clip-text:after {
    position: absolute;
    z-index: -1;
    top: .125em;
    right: .125em;
    bottom: .125em;
    left: .125em;
    background-color: #000;
}

/* Change the background position to display letter when the black zone isn't here */
.clip-text--no-textzone:before {
    background-position: -.75em 0;
}

.clip-text--no-textzone:after {
    content: none;
}

/* Use Background-size cover for photo background and no-repeat background */
.clip-text--cover,
.clip-text--cover:before {
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: 50% 50%;
}

/* Background image from http://thepatternlibrary.com/ and http://lorempixel.com */
.clip-text_one {
    background-image: url(@/assets/img/group-1-color.jpg);
    background-size: contain;
}
</style>