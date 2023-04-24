<template>
  <v-dialog v-model="dialog" persistent max-width="800">
    <v-card>
      <v-card-title>
        Car Request
        <v-spacer />
        <v-icon color="error" @click="$router.back()">mdi-close</v-icon>
      </v-card-title>
      <v-divider />

      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-card-title>Car</v-card-title>

            <v-card-text class="mt-n10">
              <v-img
                src="@/assets/rav4.png"
                contain
                height="150"
                width="150"
              ></v-img>

              <span class="text-body-1 font-weight-bold">
                Toyota RAV4 Hybrid SUV
              </span>

              <v-form class="d-flex flex-column">
                <span class="text--secondary">Start</span>
                <span class="font-weight-black">Mon, Sep, 26 at 9:00AM</span>
                <span class="text--secondary">End</span>
                <span class="font-weight-black">Mon, Sep, 26 at 10:00PM</span>
                <span class="text--secondary">Delivery/Return</span>
                <span class="font-weight-black">Home</span>
                <span class="text--secondary">Driving Days</span>
                <span class="font-weight-black">1</span>
              </v-form>
            </v-card-text>
          </v-col>

          <!-- accessories -->
          <v-col cols="12" md="6">
            <v-card-title>Accessories</v-card-title>
            <v-card-text>
              <v-card v-for="n in 3" :key="n" outlined class="my-3 py-2 px-4">
                <v-row>
                  <v-col cols="12" md="10" class="d-flex flex-column">
                    <span class="font-weight-bold text-body-1">
                      Dog car seat hammock
                    </span>
                    <span class="text-body-2 text--disabled">
                      Price: &nbsp;$10
                    </span>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-checkbox></v-checkbox>
                  </v-col>
                </v-row>
              </v-card>
            </v-card-text>

            <v-card-actions class="d-flex">
              <div class="d-flex flex-column">
                <span> Additional Charge &nbsp;</span>
                <span>$25</span>
              </div>
              <v-spacer></v-spacer>
              <div>
                <v-btn color="primary" block rounded> confirm & book</v-btn>
              </div>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "CarView",
  data() {
    return {
      dialog: true,
    };
  },
};
</script>
