<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-card-title class="text-h4">Request a car</v-card-title>
          <v-subheader class="mt-n6">Book car in easy steps</v-subheader>

          <v-stepper v-model="e1" alt-labels>
            <v-stepper-header>
              <v-stepper-step step="1" editable>
                Enter ride details
              </v-stepper-step>
              <v-divider />

              <v-stepper-step step="2" editable>
                Choose vehicle
              </v-stepper-step>
              <v-divider />

              <v-stepper-step step="3" editable>
                Enter contact details
              </v-stepper-step>
              <v-divider />

              <v-stepper-step step="4" editable>
                Booking Summary
              </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card
                  class="mb-12"
                  color="grey lighten-1"
                  height="200px"
                ></v-card>

                <v-btn color="primary" @click="nextStep()"> Continue </v-btn>

                <v-btn text> Cancel </v-btn>
              </v-stepper-content>
              <v-stepper-content step="2">
                <v-card
                  class="mb-12"
                  color="grey lighten-1"
                  height="200px"
                ></v-card>

                <v-btn color="primary" @click="nextStep()"> Continue </v-btn>

                <v-btn text> Cancel </v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>

          <!-- pickup location -->
          <v-col cols="12">
            <v-text-field
              filled
              single-line
              dense
              rounded
              label="Pickup Location"
              :rules="rules.required"
              v-model="formData.pickUpLocation"
            >
              <template v-slot:prepend-inner>
                <v-icon color="primary" class="mr-3">mdi-map-marker</v-icon>
              </template>
            </v-text-field>
          </v-col>

          <!-- same location -->
          <v-col cols="12" class="mt-n12 ml-4 d-flex">
            <v-checkbox color="primary" v-model="formData.sameLocation">
              <template v-slot:label>
                <span class="primary--text">Return at the same Address</span>
              </template>
            </v-checkbox>
            <!-- <span class="primary--text">Return at the same Address</span> -->
            <!-- <v-icon color="primary" size="18"> mdi-chevron-down </v-icon> -->
          </v-col>

          <!-- dropoff location -->
          <v-col cols="12" v-if="!formData.sameLocation" class="mt-n7">
            <v-text-field
              filled
              single-line
              dense
              rounded
              label="Drop off Location"
              :rules="rules.required"
              v-model="formData.dropoffLocation"
            >
              <template v-slot:prepend-inner>
                <v-icon color="primary" class="mr-3">mdi-map-marker</v-icon>
              </template>
            </v-text-field>
          </v-col>

          <v-col cols="12" class="mt-n6">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-bind="attrs"
                  v-on="on"
                  filled
                  single-line
                  dense
                  rounded
                  v-model="dateRangeText"
                  label="Date range"
                  readonly
                >
                  <template v-slot:prepend-inner>
                    <v-icon color="primary" class="mr-3">mdi-calendar</v-icon>
                  </template>
                </v-text-field>
              </template>
              <v-date-picker
                v-model="formData.dates"
                range
                :min="
                  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
                "
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" class="mt-n7">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  filled
                  single-line
                  dense
                  rounded
                  label="Pickup Time"
                  :rules="rules.required"
                  v-model="formData.pickUpTime"
                >
                  <template v-slot:prepend-inner>
                    <v-icon color="primary" class="mr-3">mdi-clock-in</v-icon>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  filled
                  single-line
                  dense
                  rounded
                  label="Dropoff Time"
                  :rules="rules.required"
                  v-model="formData.dropOffTime"
                >
                  <template v-slot:prepend-inner>
                    <v-icon color="primary" class="mr-3">mdi-clock-out</v-icon>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>

          <v-card-actions class="mt-n4">
            <v-btn primary block rounded color="primary">Search car</v-btn>
          </v-card-actions>
        </v-col>

        <v-col cols="12" md="6">
          <v-card outlined>
            <v-card-text></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import helpers from "../../dashboard/utils/helpers/helper.js";
export default {
  name: "ApplicationDashboard",
  mixins: [helpers],
  data() {
    return {
      activePicker: null,
      menu: false,
      formData: {
        pickUpLocation: "",
        dates: [],
        sameLocation: true,
        dropoffLocation: "",
      },
      e1: 1,
      steps: 2,
    };
  },
  computed: {
    rules() {
      return {
        required: [(v) => !!v || "field is required"],
      };
    },
    dateRangeText() {
      return this.formData.dates.join(" - ");
    },
  },
  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
  },
};
</script>
<style>
.v-input__slot::before {
  border-style: none !important;
  color: aqua;
}
</style>
