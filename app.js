const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
      information: { name: "Thet Tun Kyaw", age: "24", birthPlace: "Mandalay" },
    };
  },
  methods: {
    enteredGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = "";
    },
    removedGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
