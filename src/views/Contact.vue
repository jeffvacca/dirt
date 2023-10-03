<script>
// import MemberBio from '../components/MemberBio.vue'
import Card from 'primevue/card';

export default {
  components: {
    Card
  },
  data() {
    return {

    }
  },

}
</script>

<template>
  <main class="p-4">
    <div class="grid">
      <div class="col-12 px-8 pt-4 mb-2 text-center">
        <h1>Ten Pounds of DiRT</h1>
        <h4>90's Grunge Tribute</h4>
      </div>
      <div class="col-12 lg:col-8 lg:col-offset-2 xl:col-6 xl:col-offset-3 px-2 mb-6">
        <Card>
          <template #title> Booking Inquiries </template>
          <template #content>
              <dl>
                <dt class="text-lg font-bold">Azzurro Entertainment</dt>
                <dd class="mx-0 my-2">561-315-1985</dd>
                <dd class="mx-0 my-2"><a href="mailto:Azzurroentertainment@gmail.com">Azzurroentertainment@gmail.com</a></dd>
              </dl>
          </template>
        </Card>
      </div>
    </div>


  </main>
</template>

<style lang="scss" scoped>
.band-member-img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  height: 600px;
  width: 100%;
}
</style>

<!-- $sm	Breakpoint of screens such as phones.	576px
$md	Breakpoint of screens such as tablets.	768px
$lg	Breakpoint of screens such as notebook monitors.	992px
$xl	Breakpoint of smaller screens such as desktop monitors.	1200px -->
