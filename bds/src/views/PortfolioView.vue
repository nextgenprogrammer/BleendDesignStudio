<script>
export default {
  setup() {
    const primaryBgColor = '[#00004b]';
    return {
      primaryBgColor,
    };
  },
};
</script>

<template class>
    <div class="flex items-center justify-center cards-container w-full content-center text-center mb-25">
      <div class="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-10">
        <div class="w-[400px] h-[325px] rounded-[1vw] overflow-hidden shadow-lg border-2 border-gray-200">
            <img class="w-full h-[50%] p-[1%]" src="../assets/slides/1.jpg" alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold text-l mb-2">The Coldest Sunset</div>
                <p class="text-base text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                </p>
            </div>
            <div class="px-2 pt-1 pb-1">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
        <div class="w-[400px] h-[325px] rounded-[1vw] overflow-hidden shadow-lg border-2 border-gray-200">
            <img class="w-full h-[50%] p-[1%]" src="../assets/slides/2.jpg" alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold text-l mb-1">The Coldest Sunset</div>
                <p class="text-gray-700 text-base text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                </p>
            </div>
            <div class="px-2 pt-1 pb-1">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
        <div class="w-[400px] h-[325px] rounded-[1vw] overflow-hidden shadow-lg border-2 border-gray-200">
          <img class="w-full h-[50%] p-[1%]" src="../assets/slides/3.jpg" alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <div class="font-bold text-l mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            </p>
          </div>
          <div class="px-2 pt-1 pb-1">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
        <div class="w-[400px] h-[325px] rounded-[1vw] overflow-hidden shadow-lg border-2 border-gray-200">
          <img class="w-full h-[50%] p-[1%]" src="../assets/slides/4.jpg" alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <div class="font-bold text-l mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            </p>
          </div>
          <div class="px-2 pt-1 pb-1">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
        <!-- <div class="flip-card max-w-[w-1/4] rounded overflow-hidden shadow-lg">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img class="w-full h-[50%]" src="../assets/slides/3.jpg" alt="Sunset in the mountains">
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                  </div>
                </div>
                <div class="flip-card-back">
                    <p class="title">BACK</p>
                    <img src="../assets/logo.png" alt="image.jpeg">
                </div>
            </div>
        </div> -->
    </div>
  </div>
</template>

<style>
/* .flip-card {
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
} 

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
}

.flip-card-front {
  background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%,
     rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
  color: coral;
}

.flip-card-back {
  background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%,
     bisque 40%, rgb(255, 185, 160) 78%);
  color: white;
  transform: rotateY(180deg);
} */
</style>