<script>
import Galleria from 'primevue/galleria';
export default {
  data() {
    return {
      images: [
        {
          itemImageSrc: 'src/assets/img/group-2-bw.jpg',
          alt: '',
          title: ''
        },
        {
          itemImageSrc: 'src/assets/img/group-3.jpg',
          alt: '',
          title: ''
        },
        {
          itemImageSrc: 'src/assets/img/group-1-color.jpg',
          alt: '',
          title: ''
        },
        {
          itemImageSrc: 'src/assets/img/group-4.jpg',
          alt: '',
          title: ''
        }, 
        {
          itemImageSrc: 'src/assets/img/group-5.jpg',
          alt: '',
          title: ''
        }, 
        {
          itemImageSrc: 'src/assets/img/group-6.jpg',
          alt: '',
          title: ''
        }, 
        {
          itemImageSrc: 'src/assets/img/group-7.jpg',
          alt: '',
          title: ''
        }, 
      
      ],
      
      responsiveOptions: [
        {
          breakpoint: '991px',
          numVisible: 4
        },
        {
          breakpoint: '767px',
          numVisible: 3
        },
        {
          breakpoint: '575px',
          numVisible: 1
        }
      ]
    };
  },

  components: {
    Galleria
  }
}
</script>


<template>
  <Galleria :value="images" :showThumbnails="false" :showItemNavigators="true" :autoPlay="true" :circular="true">
    <template #item="slotProps">
      <div class="gallery-bg" :style="{ backgroundImage: 'url(' + slotProps.item.itemImageSrc + ')' }">
      </div>
    </template>
  </Galleria>
</template>

<style lang="scss" scoped>
  .gallery-bg{
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    width: 100%;
    height:70vh
  }

</style>
