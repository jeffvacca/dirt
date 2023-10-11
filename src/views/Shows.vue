<script>
import Card from 'primevue/card';
export default {
  components: {
    Card
  }
}
</script>


<template>
  <div>
    <div class="grid">

      <div class="col px-8 pt-4">
        <h1>SHOWS</h1>
      </div>


    </div>

    <div class="about flex justify-content-center py-5">
      <Card class="w-10">
        <template #header>
          <div class="w-full h-16rem bg-cover bg-center show-bg">
          </div>
        </template>
        <template #title>January 27 - <a href="https://www.facebook.com/tipsytiki/" target="_blank">Tipsy Tiki</a></template>
        <template #subtitle><a class="text-color-secondary" href="https://maps.app.goo.gl/qd16W1U8rLfX28cW6" target="_blank">
            658 N 2nd Street, Fort Pierce, FL</a></template>
        <template #content>
          <h5>8 -11 PM</h5>
          <p>No Cover</p>
        </template>
        <template #footer>
          <!-- <Button icon="pi pi-check" label="Save" />
        <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" /> -->
          <!-- <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.237869471246!2d-80.05661498828997!3d26.576741176752492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d8e2ba41c725%3A0xbb46808802627df6!2sFinland%20House!5e0!3m2!1sen!2sus!4v1694289918871!5m2!1sen!2sus"
            width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe> -->

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14161.683841101327!2d-80.3259245!3d27.456151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88def1037713e159%3A0x89d4daafcc5a1dbe!2sTipsy%20Tiki!5e0!3m2!1sen!2sus!4v1697055912779!5m2!1sen!2sus"
            width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </template>
      </Card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.show-bg {
  background-image: url(@/assets/img/group-2-bw.jpg);
}

@media (min-width: 1024px) {
  .about {
    min-height: calc(100vh - 60px);
    display: flex;
    align-items: center;
  }

}</style>
