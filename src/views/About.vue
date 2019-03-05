<template>
    <ch-section>
        <h1 class="title is-1">
            About
        </h1>
        <Columns>
          <Column>
            <ul>
              <li>MARKETING,
                <ul>
                  <li>Strategic Marketing Plan</li>
                  <li>Whitepaper Analysis</li>
                  <li>Pitch Decks</li>
                  <li>Community Management</li>
                  <li>Web Design/Graphic Design</li>
                  <li>Bounty Campaigns</li>
                  <li>Exchange Listings</li>
                  <li>ICO Site Listings</li>
                </ul>
              </li>
              <li>BLOCKCHAIN Integrations
                <ul>
                  <li>Blockchain Education&nbsp;</li>
                  <li>Discovery Sessions</li>
                  <li>Blockchain Selection</li>
                  <li>System Archetecture &amp; Design</li>
                  <li>Project Management</li>
                  <li>Smart Contract Development</li>
                  <li>Code Audits</li>
                  <li>Regulatory Compliance</li>
                </ul>
              </li>
            </ul>
          </Column>
          <Column>
            <ul>
              <li>Technical Product Development</li>
              <li>Architecting and Refining Complex Systems</li>
              <ul>
                <li>Blockchain Selection and Integrations</li>
                <li>Token Economic Implementations</li>
                <li>Distributed Systems Design</li>
              </ul>
              <li>White Paper Writing, Reviews, and Editing</li>
              <li>Business Development</li>
              <ul>
                <li>Brand Ambassador</li>
                <li>Developer Evangelism</li>
                <li>Product Documentation Review and Generation</li>
              </ul>
              <li>Workshop Development &amp; facilitation</li>
              <li>Local Meetups &amp; Webinars</li>
              <li>Community Development</li>
              <ul>
                <li>Events Coordination within a large community base - Colorado Blockchain</li>
              </ul>
              <li>Strategy, scope and planning</li>
              <li>Marketing and Promotion</li>
              <li>Onsite Facilitation and Support</li>
              <li>Media Production</li>
              <ul>
                <li>From basic photography to full professional productions of conferences.</li>
              </ul>
            </ul>
          </Column>
        </Columns>
    </ch-section>
</template>

<script>
import Column from '@/ch-components/columns/Column.vue'
import Columns from '@/ch-components/columns/Columns.vue'

export default {
    components: {
        Column,
        Columns
    }
}
</script>

<style lang="scss">
p.spacer-bottom {
    margin-bottom: 1.5em;
}
</style>
