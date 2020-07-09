<template>
  <q-page padding>
    <!-- content -->
    <div class="row q-pt-xl">
      <div id="signup-content" class="col-xs-12 col-sm-6">
        <h1>Let's start helping the community!</h1>
        <p>As the state begins to reopen, you can aid the state by collecting customer information in the event of a need for contact tracing.</p>
        <p>We provide a quick and easy way for both you and your customers to help the community.</p>
      </div>
      <div class="col-xs-12 col-sm-6">
        <div id="bus-signup" class="q-pa-lg column items-center">
          <h2>What's your Business Phone Number?</h2>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              color="white"
              rounded
              outlined
              inverted
              v-model="number"
              label="1-222-333-4444"
            />
            <div class="q-pt-sm">
              <q-btn rounded label="Sign In" type="submit" color="amber-13" style="width: 100%;"/>
            </div>
            <p>Have an account? <a href="#" style="font-weight: bold; padding-left:20px; text-align: center;">Sign In</a></p>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style lang="scss">

#bus-signup {
  background-color: #1BACA0;
  padding: 80px 0;
  border-radius: 5px;

  h2 {
    color: white;
    max-width: 50%;
    text-align: center;
  }
}

.q-page-container {
  main {
    max-width: 1600px;
    margin: 0 auto;
  }
}

#signup-content {
  padding-right: 80px;
}

.q-form {
  width: 100%;
  max-width: 480px;
  p, a {
    color: white;
    text-align: center;
    text-decoration: none;
  }
  .q-field__control {
    background: white;
    text-align: center;
  }
}

</style>
