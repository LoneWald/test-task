<template>
  <div class="searchTickets">
    <Form msg="Search Ticket" items="items" />
    <AllTickets />
  </div>
</template>

<script>
// @ is an alias to /src
import Form from "@/components/Form.vue";
import AllTickets from "@/components/AllTickets.vue";

export default {
  name: "searchTickets",
  components: {
    Form,
    AllTickets,
  },
};
</script>