<template>
  <v-dialog
    v-model="dialog"
    width="40%"
    :fullscreen="$vuetify.breakpoint.smAndDown"
  >
    <v-card flat class="rounded-lg">
      <v-card-title
        class="text-center d-flex"
        :class="$vuetify.breakpoint.smAndDown ? '' : 'mx-10 '"
      >
        <v-row no-gutters>
          <v-col cols="11">
            <p class="pa-4">ACCOUNT CREATION</p>
          </v-col>

          <v-col cols="1" class="d-flex align-center">
            <v-btn
              icon
              color="error"
              class="mt-n4"
              :to="{ name: 'landingPage' }"
            >
              <v-icon color="error">mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text class="d-flex flex-column justify-center">
        <v-row>
          <div class="mx-auto mb-3 mt-n3">
            <v-avatar color="secondary">
              <span>MCS</span>
            </v-avatar>
          </div>
        </v-row>

        <div
          class="text-center"
          :class="$vuetify.breakpoint.smAndDown ? '' : 'mx-10 '"
        >
          <v-form class="mt-2" ref="SignupForm" v-model="isValid">
            <v-row>
              <!-- firstname -->
              <v-col cols="12" md="6" sm="12">
                <v-text-field
                  label="First Name"
                  placeholder="Enter your First Name"
                  v-model="formData.firstName"
                  :rules="rules.required"
                  clearable
                  outlined
                  dense
                  required
                />
              </v-col>
              <!-- lastname -->
              <v-col
                cols="12"
                md="6"
                sm="12"
                :class="$vuetify.breakpoint.smAndDown ? 'mt-n4' : ''"
              >
                <v-text-field
                  label="Last Name"
                  placeholder="Enter your Last Name"
                  v-model="formData.lastName"
                  :rules="rules.required"
                  clearable
                  outlined
                  dense
                  required
                />
              </v-col>
              <!-- email -->
              <v-col cols="12" md="12" sm="12" class="mt-n4">
                <v-text-field
                  label="Email"
                  placeholder="Email"
                  v-model="formData.email"
                  :rules="rules.email"
                  clearable
                  outlined
                  dense
                  required
                ></v-text-field>
              </v-col>
              <!-- id -->
              <v-col cols="12" md="12" sm="12" class="mt-n4">
                <v-text-field
                  label="ID/ Passport No."
                  placeholder="Enter National ID / Passport  No"
                  v-model="formData.idNo"
                  :rules="rules.required"
                  dense
                  outlined
                  clearable
                ></v-text-field>
              </v-col>
              <!-- password -->
              <v-col cols="12" md="12" sm="12" class="mt-n4">
                <v-text-field
                  label="Password"
                  placeholder="Enter Password"
                  :type="showPassword ? 'text' : 'password'"
                  autocomplete="off"
                  id="password"
                  v-model="formData.password"
                  :rules="rules.required"
                  outlined
                  dense
                  required
                  @copy.prevent
                  @paste.prevent
                >
                  <template v-slot:append>
                    <v-btn @click="showPassword = !showPassword" icon>
                      <v-icon size="20">{{
                        showPassword ? "visibility" : "visibility_off"
                      }}</v-icon>
                    </v-btn>
                  </template>
                  <!-- <template v-slot:message="{}">
                        <ul class="my-1">
                          <li
                            v-bind:class="{
                              is_valid: contains_eight_characters,
                            }"
                          >
                            At least 8 Characters long
                          </li>
                          <li
                            v-bind:class="{
                              is_valid: contains_max_sixteen_characters,
                            }"
                          >
                            Password should not be longer than 16 characters
                          </li>
                          <li v-bind:class="{ is_valid: contains_number }">
                            Contains Number
                          </li>
                          <li v-bind:class="{ is_valid: contains_uppercase }">
                            Contains Uppercase
                          </li>
                          <li v-bind:class="{ is_valid: contains_lowercase }">
                            Contains Lowercase
                          </li>
                          <li
                            v-bind:class="{
                              is_valid: contains_special_character,
                            }"
                          >
                            Contains Special Character
                          </li>
                        </ul>
                      </template> -->
                </v-text-field>
              </v-col>
              <!-- password -->
              <v-col cols="12" md="12" sm="12" class="mt-n4">
                <v-text-field
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  :type="showPassword ? 'text' : 'password'"
                  id="confirmPassword"
                  v-model="formData.confirmPassword"
                  :rules="rules.required"
                  outlined
                  dense
                  @copy.prevent
                  @paste.prevent
                  required
                >
                  <template v-slot:append>
                    <v-btn @click="showPassword = !showPassword" icon>
                      <v-icon size="20">{{
                        showPassword ? "visibility" : "visibility_off"
                      }}</v-icon>
                    </v-btn>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </div>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-btn class="primary mx-auto" @click="Signup">Sign Up</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
// import SideLogo from "../../landing/components/SideLogo.vue";

export default {
  name: "Signup",
  // components: { SideLogo },
  data() {
    return {
      showPassword: false,
      isValid: false,
      formData: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        idNo: "",
      },
      dialog: true,
    };
  },
  computed: {
    rules() {
      return {
        email: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+/.test(v) || "E-mail must be valid",
        ],
        required: [(v) => !!v || "Field is required"],
      };
    },
  },
  methods: {
    Signup() {
      if (!this.isValid) {
        this.$refs.SignupForm.validate();
      } else if (this.formData.password !== this.formData.confirmPassword) {
        Event.$emit("Invalid", "Passwords don't match");
      } else {
        this.$store.dispatch("", { ...this.formData });
      }
    },
  },
};
</script>
<style scoped>
@media (max-width: 768px) {
  #flex {
    display: flex;
    flex-direction: column;
  }
  #display1 {
    order: 2;
  }
  #display2 {
    order: 1;
  }
}
.font {
  color: rgba(240, 248, 255, 0.903);
  font-size: 16px !important;
}
.v-input__slot::before {
  border-style: none !important;
}
</style>
