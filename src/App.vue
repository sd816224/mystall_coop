<script setup>
import { reactive, ref } from 'vue';
import ProductImage from './components/ProductImage.vue';
import ProductMeta from './components/ProductMeta.vue';
import ProductTable from './components/ProductTable.vue';

const cartValue = ref(0);

const product = reactive({
	id: "27",
	title: "Birmingham weekly basketball scrimmage here is the testing text for length Any Text After this is cut off",
	price: "7.11",
	category: {
		id: "1",
		name: "EVENT",
		slug: "event"
	},
	desc: "Welcome to our booking page for Basketball sessions. Our popular mini basketball (4-11-year-olds) and skill evelopment sessions (12-17-year-olds) are the first point of contact for players joining the club. \n As you’ll see below you’ll need to book on to a class first of all – we will require payment in advance and a commitment to the month of sessions to reserve a place. \n Our Saturday sessions are split into two categories; Mini Development Sessions (ages 4-11) which take place from 9:00am – 10:30am & our Skill Development Sessions (ages 12-18) which take place from 10:40am – 12pm.\n Our Midweek Development Sessions are open to players aged 4-11 years old and will take place from 6:00pm-7:30pm every Monday ening. ",
	range: "N/A",
	image_id: null,
	image: null,
	card_size: "S",
	open_preorder_days: "30",
	close_preorder_days: "1",
	is_supply: true,
	stall: {
		url: "http://localhost:8000/stallfromvue",
		name: "stallfromvue"
	},
	slug: "bball-session-1720707720960",
	inventory: [
		{
			id: "1",
			date: "2024-07-11",
			already_ordered: "8",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "2",
			date: "2024-07-12",
			already_ordered: "12",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "3",
			date: "2024-07-13",
			already_ordered: "74",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "4",
			date: "2024-07-14",
			already_ordered: "76",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "5",
			date: "2024-07-15",
			already_ordered: "5",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "6",
			date: "2024-07-16",
			already_ordered: "2",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "7",
			date: "2024-07-17",
			already_ordered: "1",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "8",
			date: "2024-07-18",
			already_ordered: "2",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "9",
			date: "2024-07-19",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "10",
			date: "2024-07-20",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "11",
			date: "2024-07-21",
			already_ordered: "2",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "12",
			date: "2024-07-22",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "13",
			date: "2024-07-23",
			already_ordered: "6",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "14",
			date: "2024-07-24",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "15",
			date: "2024-07-25",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "16",
			date: "2024-07-26",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "17",
			date: "2024-07-27",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "18",
			date: "2024-07-28",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "19",
			date: "2024-07-29",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "20",
			date: "2024-07-30",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "21",
			date: "2024-07-31",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "22",
			date: "2024-08-01",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "23",
			date: "2024-08-02",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "24",
			date: "2024-08-03",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "25",
			date: "2024-08-04",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "26",
			date: "2024-08-05",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "27",
			date: "2024-08-06",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "28",
			date: "2024-08-07",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "29",
			date: "2024-08-08",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "30",
			date: "2024-08-09",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "31",
			date: "2024-08-10",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "125",
			date: "2024-08-11",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "191",
			date: "2024-08-12",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		},
		{
			id: "197",
			date: "2024-08-13",
			already_ordered: "0",
			max_supply: "10",
			product_slug: "bball-session-1720707720960"
		}
	]
})
</script>

<template>
	<main class="bg-background min-h-screen w-full">
		<div class="w-full px-5 md:px-0 md:max-w-7xl mx-auto">
			<div class="flex items-center justify-end py-5">
				<div class="border border-customwhite rounded-full p-2 relative">
					<svg class="size-6 text-customwhite" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM17 17H9.29395C8.83288 17 8.60193 17 8.41211 16.918C8.24466 16.8456 8.09938 16.7291 7.99354 16.5805C7.8749 16.414 7.82719 16.1913 7.73274 15.7505L5.27148 4.26465C5.17484 3.81363 5.12587 3.58838 5.00586 3.41992C4.90002 3.27135 4.75477 3.15441 4.58732 3.08205C4.39746 3 4.16779 3 3.70653 3H3M6 6H18.8732C19.595 6 19.9555 6 20.1978 6.15036C20.41 6.28206 20.5653 6.48862 20.633 6.729C20.7104 7.00343 20.611 7.34996 20.411 8.04346L19.0264 12.8435C18.9068 13.2581 18.8469 13.465 18.7256 13.6189C18.6185 13.7547 18.4772 13.861 18.317 13.9263C18.1361 14 17.9211 14 17.4921 14H7.73047M8 21C6.89543 21 6 20.1046 6 19C6 17.8954 6.89543 17 8 17C9.10457 17 10 17.8954 10 19C10 20.1046 9.10457 21 8 21Z"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<span class="h-5 w-5 rounded-full absolute bg-red-500 text-xs font-bold top-0 right-0 flex items-center justify-center text-customwhite">{{ cartValue }}</span>
				</div>
			</div>
			<div class="grid grid-cols-12 md:gap-14 mt-4 md:mt-8">
				<div class="col-span-12 md:col-span-6">
					<div>
						<ProductImage :url="product.slug" />
					</div>
					<div class="flex items-center justify-between py-6">
						<div class="flex flex-row-reverse md:flex-col gap-2 md:gap-4">
							<ProductMeta>
								<template #icon>
									<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M4.74791 7.64502L4.41669 11.2885C4.36763 11.8281 4.34289 12.1001 4.3878 12.3584C4.42792 12.5892 4.50806 12.8112 4.62496 13.0142C4.7563 13.2422 4.95043 13.4363 5.33647 13.8224L10.512 18.9979C11.299 19.7849 11.6927 20.1786 12.148 20.3265C12.5496 20.4571 12.983 20.4573 13.3847 20.3268C13.8414 20.1785 14.2382 19.7821 15.0302 18.9901L18.99 15.0303C19.7821 14.2382 20.1774 13.8424 20.3258 13.3857C20.4563 12.9841 20.4555 12.5511 20.325 12.1495C20.1766 11.6928 19.7819 11.297 18.9898 10.505L13.8271 5.34229C13.4375 4.95272 13.2427 4.75792 13.0136 4.62598C12.8107 4.50908 12.5886 4.4286 12.3579 4.38848C12.0974 4.3432 11.823 4.36809 11.2743 4.41797L7.64449 4.74796C6.69973 4.83384 6.22705 4.87698 5.85738 5.08255C5.53145 5.26379 5.26277 5.53248 5.08152 5.8584C4.87698 6.22623 4.83432 6.69555 4.74929 7.63092L4.74791 7.64502Z"
											stroke="currentColor" stroke-width="2" stroke-linecap="round"
											stroke-linejoin="round" />
										<path
											d="M9.71259 9.71297C10.1031 9.32244 10.1031 8.68928 9.71259 8.29876C9.32206 7.90823 8.68845 7.90823 8.29792 8.29876C7.9074 8.68928 7.90702 9.32229 8.29755 9.71282C8.68807 10.1033 9.32206 10.1035 9.71259 9.71297Z"
											stroke="currentColor" stroke-width="2" stroke-linecap="round"
											stroke-linejoin="round" />
									</svg>
								</template>
								<template #label>
									<a :href="product.category.slug" class="hover:underline">{{ product.category.name }}</a>
								</template>
							</ProductMeta>
							<ProductMeta>
								<template #icon>
									<svg viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M14.75 11.6644C14.75 11.6644 12.5 10.6644 11.25 11.9144C9.59313 13.5712 12 17.9144 9 18.9145C9 18.9145 12.3333 19.0811 15 18.9145"
											stroke="currentColor" stroke-width="2" stroke-linecap="round"
											stroke-linejoin="round" />
										<path d="M14 15.4145H9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
											stroke-linejoin="round" />
										<path
											d="M11.9999 24.1429C17.9999 24.1429 22.2857 22.0204 22.2857 17.2962C22.2857 12.1613 19.7142 8.73798 14.5714 6.17051L16.5942 3.56879C16.697 3.3981 16.7527 3.20331 16.7558 3.00416C16.7589 2.80501 16.7092 2.6086 16.6117 2.43483C16.5142 2.26105 16.3725 2.11609 16.2008 2.01464C16.0292 1.91319 15.8337 1.85886 15.6342 1.85715H8.36566C8.16619 1.85886 7.97072 1.91319 7.79907 2.01464C7.6274 2.11609 7.48567 2.26105 7.38821 2.43483C7.29074 2.6086 7.24102 2.80501 7.24409 3.00416C7.24716 3.20331 7.30289 3.3981 7.40566 3.56879L9.42852 6.18762C4.28566 8.77222 1.71423 12.1955 1.71423 17.3305C1.71423 22.0204 5.99995 24.1429 11.9999 24.1429Z"
											stroke="currentColor" stroke-width="2" stroke-linecap="round"
											stroke-linejoin="round" />
									</svg>
								</template>
								<template #label>
									$ {{ product.price }}
								</template>
							</ProductMeta>
							<ProductMeta>
								<template #icon>
									<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M5 9.92285C5 14.7747 9.24448 18.7869 11.1232 20.3252C11.3921 20.5454 11.5281 20.6568 11.7287 20.7132C11.8849 20.7572 12.1148 20.7572 12.271 20.7132C12.472 20.6567 12.6071 20.5463 12.877 20.3254C14.7557 18.7871 18.9999 14.7751 18.9999 9.9233C18.9999 8.08718 18.2625 6.32605 16.9497 5.02772C15.637 3.72939 13.8566 3 12.0001 3C10.1436 3 8.36301 3.7295 7.05025 5.02783C5.7375 6.32616 5 8.08674 5 9.92285Z"
											stroke="currentColor" stroke-width="2" stroke-linecap="round"
											stroke-linejoin="round" />
										<path
											d="M10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9Z"
											stroke="currentColor" stroke-width="2" stroke-linecap="round"
											stroke-linejoin="round" />
									</svg>
								</template>
								<template #label>
									National Delivery
								</template>
							</ProductMeta>
						</div>
						<a :href="product.stall.url" target="_blank" class="flex flex-col items-center group">
							<img src="https://placehold.co/100x100" class="size-12 md:size-20 object-cover rounded-full group-hover:scale-105 duration-200"
								alt="Product Image">
							<span class="hidden md:block mt-2 text-customwhite group-hover:underline font-semibold">@{{ product.stall.name }}</span>
						</a>
					</div>
				</div>
				<div class="col-span-12 md:col-span-6 space-y-6">
					<div>
						<h4 class="text-2xl md:text-5xl text-customwhite font-medium md:font-bold">{{ product.title.substring(0, 75) }}</h4>
					</div>
					<div>
						<ProductTable :inventory="product.inventory" @update-cart="(n) => cartValue = n" />
					</div>
					<div class="text-customwhite py-8 space-y-4">
						<p>
							{{ product.desc }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>