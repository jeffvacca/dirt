<script>
import Menubar from 'primevue/menubar';

export default {
    components: {
        Menubar
    },
    data() {
        return {
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home',
                    to: '/'
                },
                {
                    label: 'Shows',
                    icon: 'pi pi-fw pi-calendar',
                    to: '/shows'
                },
                {
                    label: 'About',
                    icon: 'pi pi-fw pi-info-circle',
                    to: '/about'
                },
                {
                    label: 'Gallery',
                    icon: 'pi pi-fw pi-image',
                    to: '/gallery'
                },
                {
                    label: 'Video',
                    icon: 'pi pi-fw pi-video',
                    to: '/video'
                },
                {
                    label: 'Contact',
                    icon: 'pi pi-fw pi-send',
                    to: '/contact'
                }
            ]
        }
    }
}
</script>

<template>
    <div>
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="/img/dirt-painting-sm.jpg" height="40" class="mr-2" />
            </template>
            <template #end>
                <a href="https://www.facebook.com/profile.php?id=61552021618031" target="_blank" class="text-color mx-2"><i class="pi pi-facebook text-2xl"></i></a>
                <a href="https://www.instagram.com/dirtgrungetribute/" target="_blank" class="text-color mx-2"><i class="pi pi-instagram text-2xl"></i>
                </a>
                <a href="https://www.youtube.com/@DiRT-gv9iv" target="_blank" class="text-color mx-2"><i class="pi pi-youtube text-2xl"></i></a>
            </template>
        </Menubar>
    </div>
</template>

<style lang="scss" scoped></style>