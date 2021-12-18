const app = Vue.createApp({
  data() {
    return { enteredGoalValue: "", goals: [] };
  },
  methods: {
    enteredGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = "";
    },
  },
});

app.mount("#user-goals");
