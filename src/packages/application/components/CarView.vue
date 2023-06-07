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
          <v-col cols="12" md="6">
            <v-card-text class="mt-n10">
              <v-carousel hide-delimiter-background delimiter-icon="mdi-minus">
                <v-carousel-item
                  v-for="(image, i) in carImages"
                  :key="i"
                  :src="url + '/storage/car_images/car' + car.id + '/' + image"
                >
                </v-carousel-item>
              </v-carousel>

              <span class="text-body-1 font-weight-bold">
                {{ car.model }} -&nbsp; {{ car.brand }}
              </span>

              <!-- <v-form class="d-flex flex-column">
                <span class="text--secondary">Start</span>
                <span class="font-weight-black">Mon, Sep, 26 at 9:00AM</span>
                <span class="text--secondary">End</span>
                <span class="font-weight-black">Mon, Sep, 26 at 10:00PM</span>
                <span class="text--secondary">Delivery/Return</span>
                <span class="font-weight-black">Home</span>
                <span class="text--secondary">Driving Days</span>
                <span class="font-weight-black">1</span>
                <span class="text--secondary">Fuel Type</span>
                <span class="font-weight-black">{{ car.fuel_type }}</span>
                <span class="text--secondary">Mileage</span>
                <span class="font-weight-black">{{ car.mileage }}</span>
                <span class="text--secondary">Seats</span>
                <span class="font-weight-black">{{ car.seats }}</span>
                <span class="text--secondary">Transmission</span>
                <span class="font-weight-black">{{ car.transmission }}</span>
              </v-form> -->

              <v-list dense>
                <template>
                  <!-- <v-divider inset></v-divider> -->
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
              </v-list>
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
      return this.car ? JSON.parse(this.car.image) : "";
    },
  },
};
</script>
