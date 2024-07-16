<template>
    <div class="flex items-center gap-1 md:gap-3">
        <div class="size-5 md:size-6 text-customwhite">
            <slot name="icon"></slot>
        </div>
        <div class="font-medium text-sm whitespace-nowrap md:text-lg md:font-semibold text-customwhite">
            <slot name="label"></slot>
        </div>
    </div>
</template>