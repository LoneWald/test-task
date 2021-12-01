<template>
  <div class="form">
    <h1>{{ msg }}</h1>
    <div id="enter">
      <input
        type="text"
        v-model="currentDepartureArea"
        placeholder="Отбывает из"
      />
      <input
        type="text"
        v-model="currentArrivalArea"
        placeholder="Прибывает в"
      />
      <input id="depart-date" type="date" v-model="currentDepartureDate" />
      <button class="glo" @click="redirect(), find()">Search</button>
    </div>
  </div>
</template>


<script>
import Tickets from "@/store/tickets.json";
import Airports from "@/store/airports.json";

export default {
  name: "Form",
  data() {
    return {
      currentDepartureArea: this.$route.params.departArea,
      currentArrivalArea: this.$route.params.arrivalArea,
      currentDepartureDate: this.$route.params.departDate,
      currentArrivalDate: "",
      price: 0,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    find: function () {
      // Проверка на заполнение всех полей
      if (
        !this.currentDepartureArea ||
        !this.currentArrivalArea ||
        !this.currentDepartureDate
      )
        alert("Please, fill all fields");
      else {
        // Проверка на актуальность даты
        if (
          new Date(this.currentDepartureDate) < new Date().setHours(0, 0, 0, 0)
        )
          alert("This date is no longer valid");
        else {
          // Проверка на правильность заполнения городов
          const depart = Airports.filter(
            (airport) => this.currentDepartureArea == airport.City
          );
          const arrive = Airports.filter(
            (airport) => this.currentArrivalArea == airport.City
          );
          if (
            depart.length == 0 ||
            arrive.length == 0 ||
            this.currentDepartureArea == this.currentArrivalArea
          )
            alert("City is incorrect");
          else {
            // Очищает билеты(Если например нет билетов в этот день)
            this.$store.dispatch("clearTickets");
            for (var flight of Tickets) {
              if (
                this.currentDepartureArea == flight.departArea &&
                this.currentArrivalArea == flight.arrivalArea &&
                new Date(this.currentDepartureDate).setHours(0, 0, 0, 0) ==
                  new Date(flight.departDate).setHours(0, 0, 0, 0)
              ) {
                this.$store.dispatch("addTicket", flight);
              }
            }
          }
        }
      }
    },
    redirect: function () {
      if (this.$route.name == "Home")
      this.$router.push({
        name: "SearchTickets",
      });
    },
  },
};
</script>


<style scoped>
.form {
  margin: 5% 0;
  border: 10px double black;
  background: #c9a66b;
}
#enter {
  padding: 10px;
  margin: 10px;
}

#enter input {
  margin: 10px;
  background-color: #ebdcb2;
}

h3 {
  margin: 40px 0 0;
}

h1 {
  margin: 15px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button.glo {
  background-color: #ebdcb2;
  color: black;
  padding: 10px 20px;
  width: 100px;
  text-decoration: none;
  text-align: center;
  margin: 10px auto;
  display: block;
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    #662e1c 50%,
    #662e1c
  );
  background-position: 100% 0;
  background-size: 200% 100%;
  transition: all 0.25s ease-in;
  font: 400 18px tahoma;
  border: 1px solid #662e1c;
}
button.glo:hover {
  background-position: 0 0;
  color: #ebdcb2;
}
</style>
