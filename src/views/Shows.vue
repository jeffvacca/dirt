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
          <div class="w-full h-24rem bg-cover bg-center" style="background-image:url('src/assets/img/group-2-bw.jpg')">
          </div>
        </template>
        <template #title>September 30 - Finland House </template>
        <template #subtitle><a class="text-color-secondary" href="https://goo.gl/maps/ExY3BSscfxoAkKHS8" target="_blank">301 W. Central Blvd, Lantana, FL 33462</a></template>
        <template #content>
          <h2>w/ <a class="text-color" href="https://www.facebook.com/profile.php?id=100092639443276&sk=photos"
              target="_blank">Thorns</a></h2>
          <h5>Doors: 6:30PM</h5>
          <p>Cash Only</p>
          <p>Food Truck: Tatinetos Hawaiian BBQ</p>

        </template>
        <template #footer>
          <!-- <Button icon="pi pi-check" label="Save" />
        <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" /> -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.237869471246!2d-80.05661498828997!3d26.576741176752492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d8e2ba41c725%3A0xbb46808802627df6!2sFinland%20House!5e0!3m2!1sen!2sus!4v1694289918871!5m2!1sen!2sus"
            width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </template>
      </Card>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: calc(100vh - 60px);
    display: flex;
    align-items: center;
  }
}
</style>
