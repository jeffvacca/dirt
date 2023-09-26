<script>
export default {
  props: {
    bio: {},
    align: {
      default: 'left'
    },
    ind: {
      type: Number
    }
  },
  data() {
    return {

    }
  },
  methods: {
    colAlign(ind) {
      console.log(ind);
      console.log(typeof (ind));
      return ind % 2 ? 'right' : 'left';
      // return ind;
    }
  }

}
</script>

<template>
  <div class="grid mb-6" :class="colAlign(ind)">
    <div class="col-12 md:col-6 lg:col-7 col-order-1 px-4">
      <h2 class="mt-0">{{ bio.name }}</h2>
      <h3>{{ bio.instrument }}</h3>
      <div v-html="bio.body"></div>
    </div>
    <div class="col md:col-6 lg:col-5 col-order-2 px-4">
      <div class="band-member-img" :style="{ backgroundImage: 'url(' + bio.img + ')' }">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.band-member-img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  height: 600px;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .col-order-1 {
    order: 1;
  }

  .col-order-2 {
    order: 0;
  }
}


.right {
  .col-order-1 {
    order: 1;
  }

  .col-order-2 {
    order: 0;
  }
}
</style>
