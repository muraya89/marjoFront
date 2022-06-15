<template>
  <v-app>
    <v-container>
      <v-card class="mx-auto my-10">
        <v-card-text>
          <v-row class="d-flex justify-space-around">
            <v-col cols="12" md="6">
              <div class="text-center">
                <p class="ma-4 pa-4">MARJO CABS SERVICES ACCOUNT CREATION</p>
              </div>
              <v-form class="mt-2" ref="SignupForm">
                <v-row>
                  <v-col cols="12" md="12" sm="12">
                    <v-text-field
                      label="First Name"
                      persistent-placeholder
                      placeholder="Enter your First Name"
                      prepend-inner-icon="account_circle"
                      clearable
                      outlined
                      dense
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" sm="12" class="mt-n4">
                    <v-text-field
                      label="Last Name"
                      persistent-placeholder
                      placeholder="Enter your Last Name"
                      prepend-inner-icon="account_circle"
                      clearable
                      outlined
                      dense
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" sm="12" class="mt-n4">
                    <v-text-field
                      label="Email"
                      placeholder="Email"
                      persistent-placeholder
                      prepend-inner-icon="email"
                      clearable
                      outlined
                      dense
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" sm="12" class="mt-n4">
                    <v-text-field
                      label="ID/ Passport No."
                      placeholder="Enter National ID / Passport  No"
                      dense
                      outlined
                      persistent-placeholder
                      prepend-inner-icon="assignment"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" sm="12" class="mt-n4">
                    <v-text-field
                      label="Password"
                      placeholder="Enter Password"
                      outlined
                      dense
                      required
                      @copy.prevent
                      @paste.prevent
                      id="password"
                      persistent-placeholder
                      prepend-inner-icon="vpn_key"
                      :type="showPassword ? 'text' : 'password'"
                      autocomplete="off"
                    >
                      <template v-slot:append>
                        <v-btn @click="showPassword = !showPassword" icon>
                          <v-icon>{{
                            showPassword ? "visibility" : "visibility_off"
                          }}</v-icon>
                        </v-btn>
                      </template>
                      <template v-slot:message="{}">
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
                        <div
                          class="checkmark_container"
                          v-bind:class="{ show_checkmark: valid_password }"
                        >
                          <svg width="50%" height="50%" viewBox="0 0 140 100">
                            <path
                              class="checkmark"
                              v-bind:class="{ checked: valid_password }"
                              d="M10,50 l25,40 l95,-70"
                            />
                          </svg>
                        </div>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" sm="12" class="mt-n4">
                    <v-text-field
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      outlined
                      dense
                      @copy.prevent
                      @paste.prevent
                      id="confirmPassword"
                      required
                      persistent-placeholder
                      prepend-inner-icon="vpn_key"
                      :type="showPassword ? 'text' : 'password'"
                    >
                      <template v-slot:append>
                        <v-btn @click="showPassword = !showPassword" icon>
                          <v-icon>{{
                            showPassword ? "visibility" : "visibility_off"
                          }}</v-icon>
                        </v-btn>
                      </template>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <div>
                      <v-btn block class="primary sign-up-button"
                        >Sign Up</v-btn
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
            <v-col cols="12" md="6">
              <v-img
                max-width="90%"
                max-height="80%"
                contain
                src="../../../../../assets/Mercedes.jpg"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      showPassword: false,
    };
  },
};
</script>
