<template>
  <v-card>
    <v-card-title>
      <v-app-bar flat>
        <v-toolbar-title> Booking History</v-toolbar-title>
      </v-app-bar>
    </v-card-title>
    <v-card-text>
      <v-data-table :headers="headers" :items="items">
        <template v-slot:[`item.status`]="{ item }">
          <v-chip
            :color="`${getColor(item.status).color} lighten-5`"
            :class="`${getColor(item.status).color}--text text--${
              getColor(item.status).color
            } darken-3`"
            >{{ item.status }}</v-chip
          >
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
<script>
import { helper } from "@/packages/dashboard/utils";
export default {
  name: "BookingHistory",
  computed: {
    headers() {
      return [
        { text: "No", value: "bookingNo", align: "start", sortable: true },
        { text: "Car type", value: "carType", align: "start", sortable: true },
        {
          text: "Start date",
          value: "startDate",
          align: "start",
          sortable: true,
        },
        { text: "End date", value: "endDate", align: "start", sortable: true },
        {
          text: "Driving Days",
          value: "drivingDays",
          align: "start",
          sortable: true,
        },
        { text: "Status", value: "status", align: "start", sortable: false },
        { text: "Actions", value: "actions", align: "start", sortable: false },
      ];
    },
    items() {
      return [
        {
          bookingNo: "BOOK001",
          carType: "SUV",
          startDate: "2023-04-26",
          endDate: "2023-04-30",
          drivingDays: "4",
          status: "returned",
        },
      ];
    },
  },
  methods: {
    getColor(status) {
      console.log(helper.getColor(status).color);
      return helper.getColor(status).color;
    },
  },
};
</script>
