<template>
  <v-card class="mx-md-8 my-auto">
    <v-card-text>
      <v-row>
        <v-col cols="12" md="5">
          <Booking />
        </v-col>

        <v-col cols="12" md="7">
          <v-row>
            <v-col cols="12" class="d-flex">
              <v-spacer></v-spacer>
              <router-link :to="{ name: '' }">show more</router-link>
            </v-col>
          </v-row>
          <!-- <div> -->
          <!-- <v-col v-for="n in 4" :key="n">
              <v-card outlined class="mt-3" max-width="250">
                <v-card-title>Toyota RAV4 Hybrid SUV</v-card-title>
                <v-card-text>
                  <v-img
                    contain
                    height="200"
                    width="200"
                    src="@/assets/rav4.png"
                  />

                  <div>
                    <v-row>
                      <v-col cols="12" md="4" sm="6" class="d-flex flex-column">
                        <v-icon color="primary">mdi-account-group</v-icon>
                        <div>5 seats</div>
                      </v-col>
                      <v-col cols="12" md="4" sm="6" class="d-flex flex-column">
                        <v-icon color="primary">mdi-car-convertible</v-icon>
                        <span>AWD</span>
                      </v-col>
                      <v-col cols="12" md="4" sm="6" class="d-flex flex-column">
                        <v-icon color="primary">mdi-gas-station</v-icon>
                        <span>40 MPG</span>
                      </v-col>
                    </v-row>

                    <v-card-actions>
                      <v-btn color="primary" block rounded small>
                        book SUV</v-btn
                      >
                    </v-card-actions>
                  </div>
                </v-card-text>
              </v-card>
            </v-col> -->

          <v-sheet min-width="650">
            <v-slide-group multiple show-arrows>
              <v-slide-item v-for="(car, i) in cars" :key="i">
                <v-card outlined class="mt-3 mx-2 py-10 px-4" max-width="270">
                  <v-card-title class="wrap">
                    {{ car.model }} {{ car.brand }}
                  </v-card-title>

                  <v-card-text>
                    <v-img
                      contain
                      height="200"
                      width="200"
                      :src="`${images(car.image, car.id)}`"
                    />

                    <div class="my-4">
                      <v-row>
                        <v-col
                          cols="12"
                          md="4"
                          sm="6"
                          class="d-flex flex-column"
                        >
                          <v-icon color="primary">mdi-account-group</v-icon>
                          <div>5 seats</div>
                        </v-col>
                        <v-col
                          cols="12"
                          md="4"
                          sm="6"
                          class="d-flex flex-column"
                        >
                          <v-icon color="primary">mdi-car-convertible</v-icon>
                          <span>AWD</span>
                        </v-col>
                        <v-col
                          cols="12"
                          md="4"
                          sm="6"
                          class="d-flex flex-column"
                        >
                          <v-icon color="primary">mdi-gas-station</v-icon>
                          <span>40 MPG</span>
                        </v-col>
                      </v-row>
                    </div>
                  </v-card-text>

                  <v-card-actions class="mb-2 d-flex flex-column">
                    <v-btn
                      color="primary"
                      block
                      rounded
                      :to="{ name: 'CarView' }"
                    >
                      book SUV
                    </v-btn>
                    <span class="mt-10 text--disabled">
                      Choose accessories in next step
                    </span>
                  </v-card-actions>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
          <!-- </div> -->
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import helpers from "../../dashboard/utils/helpers/helper.js";
import Booking from "./Booking.vue";
export default {
  name: "ApplicationDashboard",
  mixins: [helpers],
  data() {
    return {
      url: process.env.VUE_APP_TEMP_URL,
    };
  },
  computed: {
    cars() {
      return this.$store.getters["Application/applicationGetters"]("cars");
    },
  },
  components: { Booking },
  methods: {
    openDialog() {},
    images(images, id) {
      if (images) {
        console.log(
          this.url +
            "/storage/car_images/car" +
            id +
            "/" +
            JSON.parse(images)[0]
        );
        this.url + "/storage/car_images/car" + id + "/" + JSON.parse(images)[0];
      }
    },
  },
};
</script>
<style scoped>
.wrap {
  display: inline-block;
  word-break: break-word;
}
</style>
