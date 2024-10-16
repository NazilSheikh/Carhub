import React from 'react'


// infosection is  BEING COPIED FROM HYPER UI A

function InfoSection() {
  return (
<section>
  <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?cs=srgb&dl=pexels-mikebirdy-2365572.jpg&fm=jpg"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-gray-100">
        <span
          class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl font-bold sm:text-3xl">
          "Start today and drive with confidence!"
          </h2>

          <p class="mt-4 text-gray-600">
          "Discover your perfect ride with ease and confidence at CarHub. Whether you're searching for a sleek luxury car, a reliable family vehicle, or an eco-friendly option, we bring you a vast selection of top-quality cars from trusted sellers. Our user-friendly platform, competitive pricing, and expert support ensure that your car-buying journey is smooth and stress-free. With exclusive deals and a commitment to transparency, we're here to help you drive home the car of your dreams. Start your journey today and experience the future of car shopping with us."
          </p>

          <a
            href="#"
            class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default InfoSection