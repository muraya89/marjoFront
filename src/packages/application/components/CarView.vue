<template>
  <v-dialog v-model="dialog" persistent max-width="1000">
    <v-card>
      <v-card-title>
        Car Request
        <v-spacer />
        <v-icon color="error" @click="$router.back()">mdi-close</v-icon>
      </v-card-title>
      <v-divider />

      <v-card-text>
        <v-row>
          <!-- car data -->
          <v-col cols="12" md="6">
            <v-card-text class="mt-n10">
              <v-carousel
                hide-delimiter-background
                delimiter-icon="mdi-minus"
                v-if="carImages"
              >
                <v-carousel-item
                  v-for="(image, i) in carImages"
                  :key="i"
                  :src="url + '/storage/car_images/car' + car.id + '/' + image"
                >
                </v-carousel-item>
              </v-carousel>

              <div
                v-else
                class="px-auto"
                align="center"
                style="height: 400px; display: flex"
              >
                <v-icon size="60" class="ma-auto">
                  mdi-image-off-outline
                </v-icon>
              </div>

              <span class="text-body-1 font-weight-bold">
                {{ car.model }} -&nbsp; {{ car.brand }}
              </span>

              <v-form class="d-flex flex-column">
                <v-row no-gutters>
                  <v-col cols="4" class="mb-2">
                    <span class="text--secondary">Start</span>
                  </v-col>
                  <v-col cols="8">
                    <span class="font-weight-black">
                      Mon, Sep, 26 at 9:00AM
                    </span>
                  </v-col>
                  <v-col cols="4" class="mb-2">
                    <span class="text--secondary">End</span>
                  </v-col>
                  <v-col cols="8">
                    <span class="font-weight-black"
                      >Mon, Sep, 26 at 10:00PM</span
                    >
                  </v-col>
                  <v-col cols="4" class="mb-2">
                    <span class="text--secondary">Delivery/Return</span>
                  </v-col>
                  <v-col cols="8">
                    <span class="font-weight-black">Home</span>
                  </v-col>
                  <v-col cols="4" class="mb-2">
                    <span class="text--secondary">Driving Days</span>
                  </v-col>
                  <v-col cols="8">
                    <span class="font-weight-black">1</span>
                  </v-col>
                  <v-col cols="4" class="mb-2">
                    <span class="text--secondary">Fuel Type</span>
                  </v-col>
                  <v-col cols="8">
                    <span class="font-weight-black">{{ car.fuel_type }}</span>
                  </v-col>
                  <v-col cols="4" class="mb-2">
                    <span class="text--secondary">Color</span>
                  </v-col>
                  <v-col cols="8" class="d-flex">
                    <v-avatar
                      :color="car.color"
                      size="12"
                      class="mr-1"
                      style="margin-top: 7px"
                    ></v-avatar>
                    <span class="font-weight-black">{{ car.color }}</span>
                  </v-col>
                  <v-col cols="4" class="mb-2">
                    <span class="text--secondary">Mileage</span>
                  </v-col>
                  <v-col cols="8">
                    <span class="font-weight-black">{{ car.mileage }}</span>
                  </v-col>
                  <v-col cols="4" class="mb-2">
                    <span class="text--secondary">Seats</span>
                  </v-col>
                  <v-col cols="8">
                    <span class="font-weight-black">{{ car.seats }}</span>
                  </v-col>
                  <v-col cols="4" class="mb-2">
                    <span class="text--secondary">Transmission</span>
                  </v-col>
                  <v-col cols="8">
                    <span class="font-weight-black">{{
                      car.transmission
                    }}</span>
                  </v-col>
                </v-row>
              </v-form>

              <!-- <v-list dense>
                <template>
                  <v-list-item>
                    <v-list-item-avatar> color </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-subtitle>
                        {{ car.color }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider inset></v-divider>
                  <v-list-item>
                    <v-list-item-avatar> Fuel Type </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-subtitle>
                        {{ car.fuel_type }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider inset></v-divider>
                  <v-list-item>
                    <v-list-item-avatar> Mileage </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-subtitle>
                        {{ car.mileage }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider inset></v-divider>
                  <v-list-item>
                    <v-list-item-avatar> Seats </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-subtitle>
                        {{ car.seats }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider inset></v-divider>
                  <v-list-item>
                    <v-list-item-avatar> Transmission </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-subtitle>
                        {{ car.transmission }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider inset></v-divider>
                  <v-list-item>
                    <v-list-item-avatar> Year </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-subtitle>
                        {{ car.year }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list> -->
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
      url: process.env.VUE_APP_TEMP_URL,
    };
  },
  beforeRouteEnter(to, from, next) {
    next((v) => {
      v.$store.dispatch("Application/getCar", v.$route.params.id);
    });
  },
  computed: {
    car() {
      return this.$store.getters["Application/applicationGetters"]("car");
    },
    carImages() {
      return Object.keys(this.car).length !== 0 && this.car.image
        ? JSON.parse(this.car.image)
        : "";
    },
  },
};
</script>
