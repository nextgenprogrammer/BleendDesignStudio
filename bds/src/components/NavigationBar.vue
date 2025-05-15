<template>
    <header class="flex w-full bg-white text-sm py-2">
        <nav class="max-w-[w-full] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
            <a class="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white" href="#" aria-label="Brand">
                <img src="../assets/logo2.png" class="sm:h-40 sm:w-90" alt="Logo">
            </a>
            <div class="flex flex-row items-center gap-18 mt-5 sm:justify-end sm:mt-0 sm:ps-5 text-l">  
                <a id="link1" class="font-medium text-black hover:text-gray-400" href="#"><router-link class="focus:font-bold focus:text-gray-400" to="/">Home</router-link></a>
                <a id="link2" class="font-medium text-black hover:text-gray-400" href="#"><router-link class="focus:font-bold focus:text-gray-400" to="/about">About</router-link></a>
                <a id="link3" class="font-medium text-black hover:text-gray-400" href="#"><router-link class="focus:font-bold focus:text-gray-400" to="/portfolio">Portfolio</router-link></a>
                <a id="link4" class="font-medium text-black hover:text-gray-400" href="#"><router-link class="focus:font-bold focus:text-gray-400" to="/contact">Contact</router-link></a>
            </div>
        </nav>
    </header>
</template>

<script setup>
</script>