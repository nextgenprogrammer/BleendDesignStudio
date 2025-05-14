<template>
    <div class="w-full h-full py-5">
      <div class="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto sm:max-w-[80%] h-[80%] bg-white rounded-md">
        <div>
          <h1 class="text-slate-900 text-2xl font-semibold">Let's Talk</h1>
          <p class="text-l text-slate-500 mt-4 leading-relaxed">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>

          <div class="mt-12">
            <ul class="mt-4">
              <li class="flex items-center">
                <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="30px" fill='#007bff'
                    viewBox="0 0 479.058 479.058">
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000" />
                  </svg>
                </div>
                <a href="javascript:void(0)" class="text-sm ml-4">
                  <span class="text-blue-600 font-medium text-l">contactus@bleenddesignstudio.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form class="space-y-4 py-10">
          <input type='text' placeholder='Name'
            class="w-full text-slate-900 rounded-md py-3 px-1 border text-l outline-none focus:border-blue-500" />
          <input type='email' placeholder='Email'
            class="w-full text-slate-900 rounded-md py-3 px-1 border text-l outline-none focus:border-blue-500" />
          <input type='text' placeholder='Subject'
            class="w-full text-slate-900 rounded-md py-3 px-1 border text-l outline-none focus:border-blue-500" />
          <textarea placeholder='Message' rows="6"
            class="w-full text-slate-900 rounded-md py-3 px-1 border text-l pt-2.5 outline-none focus:border-blue-500"></textarea>
          <button type='button'
            class="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-l font-medium px-3 py-2 w-full !mt-6">Send</button>
        </form>
      </div>
    </div>
</template>

<script>
    export default {};
</script>