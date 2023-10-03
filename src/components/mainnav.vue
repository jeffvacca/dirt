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

        </Menubar>
    </div>
</template>

<style lang="scss" scoped></style>