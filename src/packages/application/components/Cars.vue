<template>
  <v-container>
    <v-card>
      <v-card-title>Available Cars</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item-group color="primary">
            <template v-for="car in allCars">
              <v-list-item three-line :key="car.id">
                <template v-slot:default="{ active }">
                  <v-list-item-avatar>
                    <img
                      :src="
                        url +
                        '/storage/car_images/car' +
                        car.id +
                        '/' +
                        carImages(car.image)
                      "
                      alt=""
                    />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>
                      {{ car.model }},&nbsp;{{ car.brand }}-&nbsp;{{ car.year }}
                      <v-chip label x-small>{{ car.status }}</v-chip>
                    </v-list-item-title>

                    <v-list-item-subtitle>
                      {{ car.fuel_type }}, {{ car.mileage }}&thinsp;mileage
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="caption">
                      {{ car.transmission }} Transmission
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-action-text> </v-list-item-action-text>
                    <v-btn
                      :text="active"
                      color="primary"
                      class="ml-1"
                      @click="selectedItem(car)"
                    >
                      see more
                      <v-icon right class="ml-1">mdi-right</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
    <CarDrawer />
  </v-container>
</template>
<script>
import CarDrawer from "./CarDrawer.vue";
export default {
  name: "Cars",
  components: { CarDrawer },
  data() {
    return {
      url: process.env.VUE_APP_TEMP_URL,
      selectedLine: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    next((v) => {
      v.$store.dispatch("Application/getCars");
    });
  },
  computed: {
    allCars() {
      return this.$store.getters["Application/applicationGetters"]("cars");
    },
  },
  methods: {
    carImages(images) {
      return images ? JSON.parse(images)[0] : "";
    },
    selectedItem(item) {
      this.selectedLine = item;
      Event.$emit("openDrawer");
    },
  },
};
</script>
