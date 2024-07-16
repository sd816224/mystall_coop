<script setup>
import { ref, computed } from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';

const emit = defineEmits(['updateCart']);
const props = defineProps({
    inventory: Array
});

const currentDate = ref(new Date());
const summedUpItems = ref([]);
const showAll = ref(false);
const totalSum = ref(0);

const calculateSum = () => {
    totalSum.value = summedUpItems.value.reduce((acc, curr) => acc + parseInt(curr), 0);
    emit('updateCart', totalSum.value);
}

const futureDateInventoryItems = ref(props.inventory.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate > currentDate.value;
}));

const viewingDates = computed(() => {
    if(showAll.value) {
        return futureDateInventoryItems.value;
    }

    else {
        return futureDateInventoryItems.value.slice(0,2);
    }
})
</script>

<template>
    <div class="flex flex-col">
        <div class="border-2 rounded-lg mb-2 md:mb-5">
            <div class="divide-y-2">
                <div class="grid grid-cols-3">
                    <div class="col-span-1 px-6 py-3 text-start text-xs border-r-2 bg-gray-700 font-medium text-customwhite uppercase">Available Date</div>
                    <div class="col-span-1 px-6 py-3 text-start text-xs border-r-2 bg-gray-700 font-medium text-customwhite uppercase">Remaining Quantity</div>
                    <div class="col-span-1 px-6 py-3 text-start text-xs bg-gray-700 font-medium text-customwhite uppercase">Quantity To Order</div>
                </div>
                <div class="grid grid-cols-3" v-for="(item, dateIndex) in viewingDates" :key="item.id">
                    <div class="col-span-1 px-6 py-2 whitespace-nowrap text-center text-sm font-medium text-customwhite border-r-2">{{ item.date }}</div>
                    <div class="col-span-1 px-6 py-2 whitespace-nowrap text-center text-sm font-medium text-customwhite border-r-2">{{ item.max_supply - item.already_ordered }}</div>
                    <div class="col-span-1 px-6 whitespace-nowrap text-sm font-medium text-customwhite">
                        <Listbox v-model="summedUpItems[dateIndex]">
                            <div class="relative mt-1">
                                <ListboxButton class="relative w-full cursor-default rounded-md bg-background text-customwhite py-2 pl-3 pr-10 text-center focus:outline-none sm:text-sm">
                                    <span class="block truncate">{{ summedUpItems[dateIndex] ? summedUpItems[dateIndex] : 0 }}</span>
                                    <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                        </svg>
                                    </span>
                                </ListboxButton>

                                <transition
                                leave-active-class="transition duration-100 ease-in"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0"
                                >
                                    <ListboxOptions
                                        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-background text-customwhite py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                                    >
                                        <ListboxOption
                                            v-for="(option, arrayIndex) in Array.from({ length: (item.max_supply - item.already_ordered) }, (_, index) => index + 1)"
                                            :key="option"
                                            :value="option"
                                        >
                                            <span class="text-center py-2 hover:bg-gray-600">{{ option }}</span>
                                        </ListboxOption>
                                    </ListboxOptions>
                                </transition>
                            </div>
                        </Listbox>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-5 w-full flex flex-col items-center gap-4">
            <button v-if="!showAll" @click="showAll = true" class="inline-flex items-center space-x-2 text-sm text-customwhite px-4 py-2 rounded-md hover:bg-gray-600 duration-200">
                <svg class="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <span>See More Dates</span>
            </button>

            <button v-else @click="showAll = false" class="inline-flex items-center space-x-2 text-sm text-customwhite px-4 py-2 rounded-md hover:bg-gray-600 duration-200">
                <svg class="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <span>See Less Dates</span>
            </button>
            <button @click="calculateSum" class="bg-accent w-full rounded-full py-4 font-semibold hover:bg-pink-500 text-background hover:scale-[103%] duration-200">
                Add to Cart
            </button>
        </div>
    </div>
</template>