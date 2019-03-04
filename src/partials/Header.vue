<template>
    <ch-navbar class="is-fixed-top is-dark">
        <router-link
            class="navbar-item"
            slot="navbar-brand"
            to="/home"
        >
            <font-awesome-icon icon="home" />
            Home
        </router-link>
        <router-link
            active-class="is-active"
            class="navbar-item"
            slot="navbar-end"
            to="/about"
        >
            <font-awesome-icon icon="book" />
            About
        </router-link>
    </ch-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ChNavbar from '../ch-components/components/Navbar.vue'

export default {
    components: {
        ChNavbar
    },
    computed: {
        ...mapGetters(['email'])
    }
}
</script>

<style lang="scss">
.navbar-brand,
.navbar-start,
.navbar-end {
    svg.svg-inline--fa {
        margin-right: 0.5em;
    }
}
</style>
