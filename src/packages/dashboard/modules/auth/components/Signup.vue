<template>
  <v-dialog v-model="dialog">
    <v-card>
      <v-row class="fill-height">
        <v-col cols="12" md="6" class="">
          <SideLogo />
        </v-col>
        <v-col cols="12" md="6" class="my-auto">
          <v-card flat>
            <v-card-text class="d-flex flex-column justify-center">
              <div class="mx-16 text-center">
                <v-avatar color="secondary">
                  <span>MCS</span>
                </v-avatar>
                <p class="ma-4 pa-4">ACCOUNT CREATION</p>
                <v-form class="mt-2" ref="SignupForm" v-model="isValid">
                  <v-row>
                    <v-col cols="12" md="12" sm="12">
                      <v-text-field
                        label="First Name"
                        placeholder="Enter your First Name"
                        prepend-inner-icon="account_circle"
                        v-model="formData.firstName"
                        :rules="rules.required"
                        persistent-placeholder
                        clearable
                        outlined
                        dense
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" sm="12" class="mt-n4">
                      <v-text-field
                        label="Last Name"
                        placeholder="Enter your Last Name"
                        prepend-inner-icon="account_circle"
                        v-model="formData.lastName"
                        :rules="rules.required"
                        persistent-placeholder
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
                        prepend-inner-icon="email"
                        v-model="formData.email"
                        :rules="rules.email"
                        persistent-placeholder
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
                        prepend-inner-icon="assignment"
                        v-model="formData.idNo"
                        :rules="rules.required"
                        dense
                        outlined
                        persistent-placeholder
                        clearable
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" sm="12" class="mt-n4">
                      <v-text-field
                        label="Password"
                        placeholder="Enter Password"
                        prepend-inner-icon="vpn_key"
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
                        persistent-placeholder
                      >
                        <template v-slot:append>
                          <v-btn @click="showPassword = !showPassword" icon>
                            <v-icon>{{
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
                    <v-col cols="12" md="12" sm="12" class="mt-n4">
                      <v-text-field
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        prepend-inner-icon="vpn_key"
                        :type="showPassword ? 'text' : 'password'"
                        id="confirmPassword"
                        v-model="formData.confirmPassword"
                        :rules="rules.required"
                        outlined
                        dense
                        @copy.prevent
                        @paste.prevent
                        required
                        persistent-placeholder
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
                  </v-row>
                </v-form>
              </div>
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <v-btn class="primary mx-auto" @click="Signup">Sign Up</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>
<script>
import SideLogo from "../../landing/components/SideLogo.vue";

export default {
  name: "Signup",
  components: { SideLogo },
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
</style>
