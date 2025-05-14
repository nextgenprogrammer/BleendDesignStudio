<template>
    <div class="items-center justify-center">
        <!-- <div "> -->
            <svg class="h-10 w-10 ml-[18%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path d="M113.51 100.6 88.28 55.97C32.35 87.58 24 123.13 24 141.51v102.53h102.53V141.51H75.26c0-8.9 10.02-24.96 38.25-40.91zm111.23 40.91c0-8.9 10.02-24.96 38.24-40.91l-25.22-44.63c-55.93 31.61-64.28 67.16-64.28 85.54v102.53H276V141.51h-51.26z" fill="%23FFF"></path></svg>
        <!-- </div> -->
        <blockquote class="p-4 my-4 border-none mt-[-15px] font-mono">
            <div class="hidden">
                {{ num = Math.floor(Math.random() * this.items.length) }}
            </div>
            <p class="text-center text-xl italic font-medium leading-relaxed mb-[1.5%]">
                {{ items [num][0] }}
            </p>
            <div class="text-center">
                <span class="text-l italic font-medium rounded leading-relaxed border-2 border-solid py-[0.5%] px-[1%]">
                    {{ items [num][1] }}
                </span>
            </div>
        </blockquote>
    </div>
</template>

<script>
// import { random } from 'core-js/core/number';

    export default {
        data () {
            return {
                items:[
                    ["Architecture is a visual art, and the buildings speak for themselves.","Julia Morgan"],
                    ["Architecture belongs to culture, not to civilization.","Alvar Aalto"],
                    ["Architecture is an expression of values.","Norman Foster"],
                    ["Form follows function.","Louis Sullivan"],
                    ["There are 360 degrees, so why stick to one?.","Zaha Hadid"],
                    ["Less is more.","Mies van der Rohe"],
                    ["Architecture is not a static building but a living organism that grows, evolves, and breathes with life.","Balkrishna Vithaldas Doshi"],
                    ["A great building must begin with the unmeasurable.","Loius Kahn"],
                    ["Architecture is about capturing light, framing the sky, and choreographing spaces to evoke emotion.","Sanjay Mohe"]
                    ]
            };
        }
    }
</script>