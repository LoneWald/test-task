<template>
  <div id="flight">
    <div style="text-align: left">
      <img alt="Логотип компании" :src="imgSqr" width="75px" />
      <div class="con" style="background: #d2b48c">
        <label class="label-1">{{ departArea }}</label>
        <hr class="hr-dashed" width="50px" size="4" />
        <label class="label-1">{{ arrivalArea }}</label>
      </div>
    </div>
    <div class="con">
      <div class="con1">
        <label class="label-2">{{ departDayComp }}</label>
        <hr size="2" color="black" />
        <label class="label-2">{{ arrivalDayComp }}</label>
      </div>
      <div class="con1">
        <label class="label-2">{{ departTimeComp }}</label>
        <hr size="2" color="black" />
        <label class="label-2">{{ arrivalTimeComp }}</label>
      </div>
      <div class="con2">
        <label class="label-2">В пути:</label>
        <hr size="0" color="cba87a" />
        <label class="label-2">{{ timeDiffer }}</label>
      </div>
    </div>
    <div class="con">
      <label class="label-2">{{ price }} ₽</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flight",
  props: {
    departArea: String,
    arrivalArea: String,
    departDate: Date,
    arrivalDate: Date,
    price: Number,
    logo: String,
  },
  computed: {
    imgSqr() {
      return require("../" + this.logo);
    },
    departDayComp() {
      return this.departDate.toLocaleDateString();
    },
    arrivalDayComp() {
      return this.arrivalDate.toLocaleDateString();
    },
    departTimeComp() {
      return this.departDate.toLocaleTimeString().substr(0, 5);
    },
    arrivalTimeComp() {
      return this.arrivalDate.toLocaleTimeString().substr(0, 5);
    },
    timeDiffer() {
      var time = this.arrivalDate - this.departDate;
      var minutes = Math.floor((time / (1000 * 60)) % 60),
        hours = Math.floor(time / (1000 * 60 * 60));
      return hours + "ч " + minutes + "м";
    },
  },
};
</script>


<style scoped>
#flight {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  margin: 25px;
  padding: 10px;
  border: 0px solid #662e1c;
  border-radius: 15px;
  background: #d2b48c;
}

.con {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 0px solid black;
  border-radius: 10px;
  background-color: #cba87a;
  padding: 20px 10px;
  margin: 0 10px;
}

.con1 {
  margin: 0 10px;
}

.con2 {
  margin: 0 10px;
  width: 100px;
}

.label-1 {
  font-size: 35px;
  flex: 1 1 auto;
  margin: 0 5px;
}

.label-2 {
  font-size: 25px;
  flex: 1 1 auto;
  margin: 0 5px;
  white-space: nowrap;
}

.hr-dashed {
  flex: 1 1 auto;
  margin: 0 5px;
  padding: 0;
  height: 0;
  border: none;
  border-top: 2px dashed black;
}
</style>