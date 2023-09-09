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
                }
            ]
        }
    }
}
</script>

<template>
    <div>
        <Menubar :model="items">
            <!-- <template #item="{ label, item, props, root }">
                <router-link v-if="item.route" :to="item.route" custom>
                        <span :class="item.icon"></span>
                        <span>{{ item.label }}</span>
                </router-link>
            </template> -->
        </Menubar>
    </div>
</template>

<style lang="scss" scoped></style>