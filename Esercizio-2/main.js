var app = new Vue({
    el: "#app",
    data: {
      arrayCard: [],
    },
    mounted() {
      axios.get("../Esercizio-2/api/index.php").then((res) => {
        console.log(res);
        this.arrayCard = res.data;
      });
    },
    beforeUpdate() {},
    methods: {},
  });