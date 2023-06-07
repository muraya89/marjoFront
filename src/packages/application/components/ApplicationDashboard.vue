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

          <v-sheet min-width="650">
            <v-slide-group multiple show-arrows>
              <v-slide-item v-for="(car, i) in cars" :key="i">
                <v-card outlined class="mt-3 mx-2 py-10 px-4" max-width="280">
                  <v-card-title class="wrap">
                    {{ car.model }} - {{ car.brand }}
                  </v-card-title>

                  <v-card-text>
                    <v-img
                      v-if="car.image"
                      contain
                      height="200"
                      width="200"
                      :src="`${images(car.image, car.id)}`"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>

                    <div
                      v-else
                      class="px-auto"
                      align="center"
                      style="height: 200px; display: flex"
                    >
                      <v-icon size="50" class="ma-auto">
                        mdi-image-off-outline
                      </v-icon>
                    </div>

                    <div class="my-4">
                      <v-row>
                        <v-col
                          cols="12"
                          md="4"
                          sm="6"
                          class="d-flex flex-column"
                        >
                          <v-icon color="primary">mdi-account-group</v-icon>
                          <div>{{ car.seats }} seats</div>
                        </v-col>

                        <v-col
                          cols="12"
                          md="4"
                          sm="6"
                          class="d-flex flex-column"
                        >
                          <v-icon color="primary">mdi-car-convertible</v-icon>
                          <span>{{ car.transmission }}</span>
                        </v-col>

                        <v-col
                          cols="12"
                          md="4"
                          sm="6"
                          class="d-flex flex-column"
                        >
                          <v-icon color="primary">mdi-gas-station</v-icon>
                          <span>{{ car.fuel_type }}</span>
                        </v-col>
                      </v-row>
                    </div>
                  </v-card-text>

                  <v-card-actions class="mb-2 d-flex flex-column">
                    <v-btn
                      color="primary"
                      block
                      rounded
                      :to="{ name: 'CarView', params: { id: car.id } }"
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
        return (
          this.url +
          "/storage/car_images/car" +
          id +
          "/" +
          JSON.parse(images)[0]
        );
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
