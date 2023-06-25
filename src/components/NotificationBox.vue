<!-- NOTE:

    When the user click the notification box, 
        it should go to a "specific" page it mentioned. 
        Basta, gets mo na na   

-->
<template>
  <div class="notification-box">
    <div
      class="border-2 border-black rounded-md flex items-center justify-between p-5 w-95 h-20 ml-10 mr-10 mb-2"
    >
      <div class="flex flex-col">
        <p class="text-left font-bold text-red-500">{{ notification.title }}</p>
        <p class="text-left font-medium">{{ notification.due }}</p>
      </div>
      <p class="text-left font-bold text-red-500">{{ notification.amount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  }
}
</script>
