<template>
  <main class="relative">
    <section v-if="isOpen" class="absolute w-full mt-14 text-center w-f">
      <div class="bg-red-300 rounded-md p-3">{{ alert }}</div>
    </section>

    <button @click="toggleAlert()" class="bg-blue-200 rounded-md p-3 w-full z-10">
      <section class="flex justify-between gap-3 items-center">
        <div class="font-bold">{{ text }}</div>

        <div>
          <svg
            class="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m8 10 4 4 4-4"
            />
          </svg>
        </div>
      </section>
    </button>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "second-button",
  },
  alert: {
    type: String,
    default: "error",
  },
});

const isOpen = ref(false);

const toggleAlert = () => {
  isOpen.value ? (isOpen.value = false) : (isOpen.value = true);

  //   if (isOpen.value) {
  //     isOpen.value = false;
  //   } else {
  //     isOpen.value = true;
  //   }
  //   isOpen.value = !isOpen.value;
};
</script>