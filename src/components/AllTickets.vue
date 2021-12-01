<template>
  <div class="content" v-if="isArrayExist">
    <div class="setParam">
      <div class="filter">
        <div class="filter">
          <label>Цена до:</label>
          <input
            type="range"
            v-model="range"
            min="2000"
            max="50000"
            step="1000"
          />
          <input type="text" v-model="range" placeholder="Введите цену:" />
        </div>
      </div>
      <div class="sort">
        <span>Сортировать по: </span>
        <select v-model="selected">
          <option>Цена: по возрастанию</option>
          <option>Цена: по убыванию</option>
          <option>Время в пути: меньше</option>
          <option>Время в пути: больше</option>
          <option>Пребытие: раньше</option>
          <option>Пребытие: позже</option>
        </select>
        <button @click="sort">Сортировать</button>
      </div>
    </div>
    <div>
      <transition-group appear="" name="list" tag="div">
        <Ticket
          v-for="ticket in filteredItems"
          :key="ticket.id"
          :departArea="ticket.departArea"
          :arrivalArea="ticket.arrivalArea"
          :departDate="new Date(ticket.departDate)"
          :arrivalDate="new Date(ticket.arrivalDate)"
          :price="ticket.price"
          :logo="ticket.logo"
        />
      </transition-group>
    </div>
  </div>
</template>


m.nikitin@bpo.travrel
bburtonzero@gmail.com

<script>
import Ticket from "@/components/Ticket.vue";

export default {
  name: "searchTickets",
  data() {
    return {
      items: this.$store.state.tickets,
      selected: "",
      range: null,
    };
  },
  components: {
    Ticket,
  },
  computed: {
    isArrayExist: function () {
      return this.$store.state.tickets.length > 0 ? true : false;
    },
    filteredItems() {
      console.log(this.range);
      if (this.range == "" || this.range == null) return this.items;
      else return this.items.filter((item) => Number(item.price) < Number(this.range));
    },
  },
  methods: {
    sort: function () {
      switch (this.selected) {
        case "Цена: по возрастанию":
          this.items.sort(sortByPriceAscending);
          break;
        case "Цена: по убыванию":
          this.items.sort(sortByPriceDescending);
          break;
        case "Время в пути: меньше":
          this.items.sort(sortByTravelTimeSmall);
          break;
        case "Время в пути: больше":
          this.items.sort(sortByTravelTimeLarge);
          break;
        case "Пребытие: раньше":
          this.items.sort(sortByDateEarlier);
          break;
        case "Пребытие: позже":
          this.items.sort(sortByDateLater);
          break;
      }
    },
  },
};

var sortByPriceAscending = function (d1, d2) {
  return d1.price > d2.price ? 1 : -1;
};
var sortByPriceDescending = function (d1, d2) {
  return d1.price < d2.price ? 1 : -1;
};
var sortByTravelTimeSmall = function (d1, d2) {
  return new Date(d1.arrivalDate) - new Date(d1.departDate) >
    new Date(d2.arrivalDate) - new Date(d2.departDate)
    ? 1
    : -1;
};
var sortByTravelTimeLarge = function (d1, d2) {
  return new Date(d1.arrivalDate) - new Date(d1.departDate) <
    new Date(d2.arrivalDate) - new Date(d2.departDate)
    ? 1
    : -1;
};
var sortByDateLater = function (d1, d2) {
  return new Date(d1.arrivalDate) < new Date(d2.arrivalDate) ? 1 : -1;
};
var sortByDateEarlier = function (d1, d2) {
  return new Date(d1.arrivalDate) > new Date(d2.arrivalDate) ? 1 : -1;
};
</script>

<style scoped>
.sort {
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 10px 30px;
}

.setParam {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background: #c9a66b;
}

.filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 30px;
}

select {
  background-color: #c9a66b;
  margin: 0 5px;
  padding: 10px;
}

button {
  background-color: #ebdcb2;
  color: black;
  padding: 10px;
  display: block;
  font: 400 14px tahoma;
  border: 1px solid #662e1c;
}

input {
  background-color: #c9a66b;
  accent-color: #662e1c;
  border-width: 1px;
  padding: 5px 0;
  width: 150px;
  text-align: center;
}

.list-move {
  transition: transform 1s;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
}
</style>