<script>
import MemberBio from '../components/MemberBio.vue'

export default {
  components: {
    MemberBio
  },
  data() {
    return {
      bios: [
        {
          img: '/img/jason-1.jpg',
          name: 'Jason Ames',
          instrument: 'Lead Vocals',
          body: `<p>Jason Ames formed his 1st band at 16 years old.</p>
        <p>He moved to a pre-grunge, un-famous, Seattle in 1986, joined a band called Ruff Toiz, played the local scene with
          then unknown groups like Alice In Chains & members of other now famous Seattle grunge bands.</p>
        <p>From 1990-94, Jason formed Mama Troll and recorded 1 album - with guitarist Roger Fisher (Heart) at his studio, with some guest spots also featuring Roger.</p>
        <p>Jason was offered (1997) the lead vocal position for Blind Melon after the death of original lead
          singer Shannon Hoon, but was unable due to contractual obligations at the time.</p>
        <p>The Tower Of Power horn section played on 9 of the 12 tracks for a blues side project called
          Voodoo Roosters.</p>
        <p>In 1998, he recorded a duet with singer Ann Wilson (Heart) called “Cold Tears” for a project called Treason.</p>
        <p>Jason earned a Grammy Nomination in 1999 Grammy for lead vocals on “Chasing Blue Sky” (credited as Blue Jay) on the long form animated video with drummer Scott Rockenfield (Queensryche) which also featured Sir-Mix-Alot.</p>
        <p>From 2000-2007, Jason lived in Perugia Italy & had a #1 hit called “Yesterday” as well as 2 others that charted in the Commercial House Music genere.</p>
        <p>Upon returning back to the United States, he did multiple world tours as the 6th member of
          Queensryche & solo shows with their lead singer Geoff Tate, as keyboards, rhythm guitar &
          backing vocals. Opening for groups & festivals such as Metallica, Black Sabbath (with Ronnie
          James Dio), Motley Crue, Alice Cooper, Korn, Limp Biskit, and many more.</p>
        <p>Currently, Jason is focusing on lead vocals in 2 different tribute bands - H2O a tribute to the music of Hall & Oates and DiRT......the best & most genuine grunge tribute in the world!</p>`
        },
        {
          img: '/img/chris-1.jpg',
          name: 'Chris Cartrett',
          instrument: 'Bass',
          body: `<p> Chris Cartrett is a multi-instrumentalist local to the South Florida area. </p><p>Chris has released and toured with Indie Americana band <a href="https://www.google.com/search?kgmid=/m/04jj5kp&hl=en-US&q=Fire+Zuave&kgs=ddd5bf6f24863f98&shndl=17&source=sh/x/kp/osrp/m5/4" target="_blank">Fire Zuave</a> (2 EP's) opening for such international acts Janelle Monae, Black Crowes, and Of Montreal. </p><p>He has also recorded and toured with local acts <a href="https://www.youtube.com/watch?v=Y-MhzQPrrpo" target="_blank">Raised by Wolves</a> (1 EP) and <a href="https://www.google.com/search?kgmid=/g/11bt_1ksny&hl=en-US&q=Doorway+27&kgs=4c2023ba9196cc2b&shndl=17&source=sh/x/kp/osrp/m5/4" target="_blank">Doorway 27</a> (4 EP's) as guitarist. </p>`
        },
        {
          img: '/img/jeff-1.jpg',
          name: 'Jeff Vacca',
          instrument: 'Lead Guitar',
          body: `<p>Jeff has released two full length albums with NYC alt soul act Sinner Man, holding writing, production, and
          engineering credits. Sinner Man was a staple in the New York club scene, performing at The Bitter End, Arlene's
          Grocery, Rockwood Music Hall, The Groove, Sidewalk Cafe, Pianos, The Shrine, Local 269...
          </p>
          <p>Jeff has also had the honor of performing with Culture Trust and Paracuta.
          </p>
          <p>Jeff has spent 5 years as an engineer at JSM Music, Inc. JSM is one of the largest producers of commercial music
          worldwide, and has been the recipient of every major industry award. Jeff's guitar work has appeared on national television spots.</p><p>As a freelance engineer, Jeff's client list
          includes: Quickly Quietly, Stanley Brown, Judith McAllister, Jose Gallegos, Men As Trees, Mon Khmer, Oliver
          Thompson, Pancho Molina, and Sinner Man.
          </p>
          <p>Jeff holds a Masters of Music from Duquesne University where he studied guitar, saxophone, and audio engineering.
          </p>
          <a href="https://jeffvacca.com/music/" target="_blank">jeffvacca.com/music</a>`
        },
        {
          img: '/img/joe-1.jpg',
          name: 'Joe Cole',
          instrument: 'Drums',
          body: `<p>Joe Cole is a multi-instrumentalist from Jupiter, FL who started learning drums at 14 and quickly fell in love with the arts. </p><p>Coming from a wide background of funk, rock, reggae and metal, he plays to suit the mood. Other hobbies include trying to make everything a joke and playing rugby with the Palm Beach Panthers.</p>`
        },
        {
          img: '/img/ryan-2.jpg',
          name: 'Ryan Mowatt',
          instrument: 'Guitar',
          body: `<p>Ryan Mowatt, born and raised in South Florida, plays eleven instruments. </p><p>Ryan is currently also the guitarist for Stir
          it Up (a local tribute to the music of Bob Marley).  Ryan has been touring, doing studio work, writing and
          recording for the last 21 years after graduating from Florida State University for music theory
          and composition.</p>`
        }
      ]
    }
  },

}
</script>

<template>
  <main class="p-4">
    <div class="grid">
      <div class="col px-8 pt-4 mb-6 text-center">
        <h1>Personnel</h1>
      </div>
    </div>
    <MemberBio v-for="(bio, index) in bios" :bio="bio" :key="bio.name" :ind="index"></MemberBio>



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
