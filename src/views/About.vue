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
          instrument: 'Lead Vocals, Rhythm guitar, Songwriter',
          body: `<p>Professional career musician over 35 years with versatile resume of music genres.</p><p>
          Jason started his first band at age 16 in Denver Colorado.
          He moved to Seattle WA 1986 during the pre-grunge era. He joined Ruff Toiz, playing with then still unknown bands like Alice in Chains and other now famous Seattle Grunge bands.</p><p>
          In 1990 Jason formed Mama Troll and recorded 1 album - with guitarist Roger Fisher (Heart) at his studio, with some guest spots also featuring Roger.</p><p>
          In 1997 Jason was offered the lead vocal position for Blind Melon after the death of original lead singer Shannon Hoon, but was unable due to contractual obligations at the time.</p><p>
          Jason's (Blue Jay) next album was with his blues band, Voodoo Rooster featuring 
          The Tower Of Power horn section playing on 9 of the 12 tracks.</p><p>
          In 1998 Jason recorded a duet with singer Ann Wilson (Heart) “Cold Tears” for a project
          called Treason.</p><p>
          In 1999 Jason (as Blue Jay) was nominated for a Grammy for lead vocals on “Chasing Blue Sky” on the long form animated video with drummer Scott Rockenfield (Queensryche) which also featured Sir-Mix-A Lot.</p><p>
          In 2000 Jason moved to Perugia, Italy.
          During his 8 years in Italy he produced #1 dance hit "Yesterday” as well as 2 others that charted in the Commercial House Music genre.</p><p>
          Upon his return back to the United States, he did multiple world tours as the 6
          th member of Queensryche and solo shows with their lead singer Geoff Tate. 
          Jason played keyboards,  rhythm guitar and performed backing vocals. 
          Tours included opening for groups & festivals including bands such as Metallica, Black Sabbath (with Ronnie James Dio), Motley Crue, Alice Cooper, Korn, Limp Bizkit, and many more.</p><p>
          Currently Jason lives in Florida and he is focusing mostly as lead singer for 2 tribute bands.  TEN POUNDS OF DiRT grunge tribute takes him back to his Seattle roots with not only one band tribute, but the whole grunge genre. H2O tribute celebrates the nostalgic music of Hall and Oates in Broadway style show.</p><p>
          He is also working with his original Seattle band Syztem7 for their 2nd album.
          </p>
          
          `
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
          body: `<p>Joe Cole is a multi-instrumental Florida native who started learning drums at 14 and quickly fell in love with the arts. Coming from a wide background of funk, rock, hip hop, reggae and metal, he plays to suit the mood.  </p><p>From 2016-2019 he played drums and sang harmonies with his original band Vibes Farm. Their music incorporated elements of all his influences, branding themselves with an in-your-face reggae-rock sound. They have supported bands such as Steel Pulse, Tropidelic, The Expendables, Passafire, Al Andersen and The Original Wailers.</p><p>Later in 2019 he moved to Hawaii to live with his sister for a few months before returning to Palm Beach County. Since returning, he has played alongside many local bands including his current project Ten Pounds of DiRT. Other hobbies include trying to make everything a joke and playing rugby with the Palm Beach Panthers.</p>`
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
      <div class="col-12 px-8 pt-4 mb-2 text-center">
        <h1>Ten Pounds of DiRT</h1>
        <h4>90's Grunge Tribute</h4>
      </div>
      <div class="col-12 lg:col-8 lg:col-offset-2 xl:col-6 xl:col-offset-3 px-2 mb-6">
        <p>Lead singer Jason Ames was part of the birth of Grunge in Seattle. His band Mama Troll in 1986 was playing in
          shows with then still unknown bands like Alice in Chains and Mother Love Bone (future members of Pearl Jam).</p>
        <p>The idea of the band was born in 2020 and finally after covid the full band got together. Ten Pounds of DiRT is
          comprised of seasoned musicians with decades of experience in live performances in theaters, arenas and
          festivals around the world.</p>
        <p>From the beginning the band's idea was not to pay tribute to one band only, but to capture the feel and essence
          of the entire Grunge movement.</p>
        <p>AND THEY DELIVER!</p>
        <p>The Show is PACKED with the true power and energy of Grunge like TEN POUNDS OF DiRT ...in a five pound bag.</p>
      </div>
    </div>


    <div class="grid">
      <div class="col px-8 pt-4 mb-6 text-center">
        <h2>Personnel</h2>
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
