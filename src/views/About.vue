<template>
    <ch-section>
        <h1 class="title is-1">
            About
        </h1>
        <p class="spacer-bottom">
            Charcoal is a simple starter template using the new
            <code>Vue CLI 3.0</code> and styled with <code>Bulma</code>.
        </p>
        <p class="content">
          <ul>
            <li>Technical Product Development</li>
          </ul>
          <ul>
            <li>Architecting and Refining Complex Systems</li>
            <ul>
              <li>Blockchain Selection and Integrations</li>
              <li>Token Economic Implementations</li>
              <li>Distributed Systems Design</li>
            </ul>
          </ul>
          <ul>
            <li>White Paper Writing, Reviews, and Editing</li>
          </ul>
          <ul>
            <li>Business Development</li>
            <ul>
              <li>Brand Ambassador</li>
              <li>Developer Evangelism</li>
            </ul>
          </ul>
          <ul>
            <li>Workshop Development &amp; facilitation</li>
            <li>Local Meetups &amp; Webinars</li>
          </ul>
          <ul>
            <li >Community Development</li>
            <ul>
              <li>Events Coordination within a large community base - Colorado Blockchain</li>
            </ul>
          </ul>
          <ul>
            <li>Strategy, scope and planning</li>
            <li>Marketing and Promotion</li>
            <li>Onsite Facilitation and Support</li>
          </ul>
          <ul>
            <li>Media Production</li>
            <ul>
              <li>From basic photography to full professional productions of conferences.</li>
            </ul>
          </ul>
        </p>
    </ch-section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ChButton from '@/ch-components/elements/Button.vue'
import ChButtonGroup from '@/ch-components/elements/ButtonGroup.vue'
import ChSection from '@/ch-components/layout/Section.vue'

export default {
    components: {
        ChButton,
        ChButtonGroup,
        ChSection
    },
    computed: {
        ...mapGetters(['count'])
    },
    methods: {
        ...mapActions(['decrement', 'increment'])
    }
}
</script>

<style lang="scss">
p.spacer-bottom {
    margin-bottom: 1.5em;
}
</style>
