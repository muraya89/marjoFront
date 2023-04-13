<template>
  <v-app>
    <v-main class="mx-16">
      <v-row class="justify-space-around mx-md-16 my-5 my-sm-12 text-center">
        <v-col cols="12" md="6">
          <h1 class="text-md-h1 text-capitalize mb-4">marjo cabs services</h1>
          <h4 class="subtitle-1 mb-10">Get yourself a ride today!</h4>
          <div class="d-flex justify-center">
            <v-btn
              class="primary white--text mr-15"
              x-large
              elevation="0"
              :to="{ name: 'Login' }"
            >
              book a cab
            </v-btn>
            <v-btn class="secondary white--text" x-large>learn more</v-btn>
          </div>
          <div class="caption ma-md-5 my-sm-5">
            <v-icon class="secondary--text pa-3">mdi-star</v-icon>
            Rated the best cab services in Nairobi
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="@/assets/bg7.jpg" width="100%" class="ml-16" />
          <v-card
            class="text-uppercase mt-n16 ml-n16 pa-4 text-md-h2 primary white--text"
            elevation="0"
            max-width="600"
          >
            comfort, safety, reliablity
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="my-5" />

      <v-container fluid>
        <div class="mb-5 text-center">
          <h1 class="font-weight-bold text-h4 capitalize">
            <span class="primary--text text-uppercase">
              available services
            </span>
          </h1>
        </div>
        <v-row>
          <v-col cols="10" offset="1">
            <v-row class="justify-center">
              <v-col
                md="3"
                cols="12"
                class="d-flex"
                v-for="(item, i) in items"
                :key="i"
              >
                <v-hover
                  v-slot="{ hover }"
                  open-delay="100"
                  style="width: 100%"
                >
                  <v-card
                    outlined
                    rounded-pill
                    :class="{ 'on-hover': hover }"
                    class="py-10"
                  >
                    <v-card-text class="text-center">
                      <div style="min-height: 150px">
                        <v-icon color="accent" x-large> {{ item.icon }}</v-icon>

                        <h3
                          class="text-uppercase font-weight-medium primary--text my-4"
                        >
                          {{ item.name }}
                        </h3>
                        <p class="caption">{{ item.description }}</p>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <v-divider class="my-5" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "landingPage",
  data() {
    return {
      drawer: false,
      group: null,
      leftDrawer: false,
      mini: false,
    };
  },
  computed: {
    items() {
      return [
        {
          name: "airport transfers",
          icon: "mdi-airport",
          description:
            "Our Meet and Greet Team Leader will be waiting to receive you at any of the terminals with a pager presenting your name and our logo. They will then sermon your Taxi Driver. They assist with your luggage as they escort you to your reserved vehicle. Our professional, uniformed and courteous drivers will ensure that you get to the destination of your choice smoothly and safely. ",
        },
        {
          name: "individual transfers",
          icon: "mdi-account-arrow-right",
          description:
            "When you need private time or time with your children and family and cannot drive to a regular pick-up or drop-off, our personal charge account comes in handy. With our well trained drivers, you can never go wrong. We also offer full day vehicle hire in case you will need the vehicle for a while longer at a discounted rate ",
        },
        {
          name: "corporate",
          icon: "mdi-account-tie",
          description:
            "Your organization can open an account with us to ensure a convenient payment plan for taxi and car hire services. Upon assessment and approval for services on credit terms, your organization qualifies for self-authorizing sequentially numbered vouchers or our online application that grant yourselves access to chauffeur driven cabs and vans anywhere, anytime ",
        },
        {
          name: "group transfers",
          icon: "mdi-account-group",
          description:
            "For your events and trips be it corporate or personal, Kenatco Taxis has got you covered. With a wide range of vehicles from Noahs and vans to the higher capacity vehicles i.e. 25, 33 and 65 seater buses, 4*4 vehicles, prados, Mercedes Benzes and lorries from 5 tons, we will take your group and equipment to any destination within the country. ",
        },
      ];
    },
    links() {
      return this.$store.getters["Dashboard/links"].map((link) => {
        link.sublinks = link.sublinks || [];
        return link;
      });
    },
  },
};
</script>
