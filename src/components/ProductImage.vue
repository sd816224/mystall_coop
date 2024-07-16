<script setup>
defineProps({
    url: String,
});

</script>

<template>
    <div class="relative">
        <a :href="url">
            <img src="https://placehold.co/647x494" class="rounded-2xl hover:scale-[102%] duration-200 hidden md:block" alt="Product Image">
            <img src="https://placehold.co/400X300" class="rounded-2xl h-52 hover:scale-[102%] duration-200 block md:hidden w-full object-cover" alt="Product Image">
        </a>
        <div class="absolute -top-4 right-8">
            <div class="inline-flex space-x-3">
                <button class="bg-accent p-3 text-customwhite rounded-full hover:bg-pink-500 duration-200">
                    <svg class="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>

                <button class="bg-accent p-3 text-customwhite rounded-full hover:bg-pink-500 duration-200">
                    <svg class="size-5 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>