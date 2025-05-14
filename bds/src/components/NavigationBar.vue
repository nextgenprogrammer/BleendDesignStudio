<template>
    <header class="flex w-full bg-white text-sm py-2">
        <nav class="max-w-[w-full] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
            <a class="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white" href="#" aria-label="Brand">
                <img src="../assets/logo2.png" class="sm:h-40 sm:w-90" alt="Logo">
            </a>
            <div class="flex flex-row items-center gap-18 mt-5 sm:justify-end sm:mt-0 sm:ps-5 text-l">  
                <a id="link1" class="font-medium text-black hover:text-gray-400 focus:text-gray-400" href="#"><router-link to="/">Home</router-link></a>
                <a id="link2" class="font-medium text-black hover:text-gray-400 focus:text-gray-400" href="#"><router-link to="/about">About</router-link></a>
                <a id="link3" class="font-medium text-black hover:text-gray-400 focus:text-gray-400" href="#"><router-link to="/portfolio">Portfolio</router-link></a>
                <a id="link4" class="font-medium text-black hover:text-gray-400 focus:text-gray-400" href="#"><router-link to="/contact">Contact</router-link></a>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        methods: {
            activeNav(link) {
                const link1 = document.getElementById('link1');
                const link2 = document.getElementById('link2');
                // const link3 = document.getElementById('link3');
                // const link4 = document.getElementById('link4');
                console.log('entered function')
                switch(link) {
                    case "link1" :
                        this.addTailwindClass(link1,'font-strong')
                        this.removeTailwindClass(link2,'font-strong')
                        // link1.style(link2,'font-size: 100px;');
                        // link2.style(link2,'font-medium');
                        // link3.style(link3,'font-medium');
                        // link4.style(link4,'font-medium');
                        break;
                    case "link2" :
                        this.addTailwindClass(link2,'font-strong')
                        this.removeTailwindClass(link1,'font-strong')
                        // link2.style('font-weight: bold;');
                        // link1.style('font-medium');
                        // link3.style('font-medium');
                        // link4.style('font-medium');
                        break;
                }
            },
            addTailwindClass(element, className) {
                element.classList.add(className);
            },
    
            removeTailwindClass(element,className) {
                element.classList.remove(className);
            }
        }
        
    }
</script>