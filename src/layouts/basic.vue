<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="primary">
      <div class="header-container row">
        <q-toolbar class="col q-pa-md">
          <q-toolbar-title style="font-family: Montserrat" to="/home">
            ContactLogger
          </q-toolbar-title>
        </q-toolbar>

        <q-tabs class="q-pr-md">
          <q-btn rounded class="q-px-lg" to="/signup" label="Sign Up" color="amber-13" />

        </q-tabs>
      </div>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style lang="scss">

.header-container {
  max-width: 1600px;
  margin: 0 auto;
}

</style>
