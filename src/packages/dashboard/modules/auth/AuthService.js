class AuthService {
  constructor() {
    this.token = window.localStorage.getItem(
      `${process.env.VUE_APP_NAME}_token`
    );
    this.user = JSON.parse(
      window.localStorage.getItem(`${process.env.VUE_APP_NAME}_user`)
    );
  }

  check() {
    return !!this.token;
  }

  login(token, user) {
    window.localStorage.setItem(`${process.env.VUE_APP_NAME}_token`, token);
    window.localStorage.setItem(
      `${process.env.VUE_APP_NAME}_user`,
      JSON.stringify(user)
    );

    this.token = token;
    this.user = user;

    location.reload();
  }
}
export default new AuthService();
