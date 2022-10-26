const app = Vue.createApp({
  // template: `
  //   <h1>Hola Mundo</h1>
  //   <p>{{new Date()}}</p>
  // `,

  data() {
    return {
      message: "Hola que tal",
    };
  },
  methods: {
    changeMessage() {
      this.message = "Todo bien";
    },
    toUpperCase() {
      this.message = this.message.toUpperCase();
    },
  },
});

app.mount("#app");
