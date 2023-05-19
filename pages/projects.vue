<template>
  <div>
    <header>
      <TopHeader></TopHeader>
    </header>
    <body>
      <div class="bg-amber-400  grid md:grid-cols-2 gap-4">
        <div class="mt-24 md:col-span-2">
          <div class="flex justify-center items-center p-10 ">
            <h1  class="text-3xl font-bold font-mono">My Projects</h1>
          </div>
        </div>
        <div class="col-span-full p-10">
          <h1 class="font-mono text-xl pb-4">Paperplanes mobile app game (Unity)</h1>
          <h2 class="font-mono text-lg pb-4"><a href=""></a></h2>
          <video class="h-60" controls>
            <source src="@/videos/Screen_Recording_20210906-145727_Flight.mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video> 
          <p class="p-5 font-mono">
            This was a project to create a video game for mobile using Unity I made the art and source code on my own
            and learned a lot about game development through this endeavor. I also had a chance to gain depth experience with debugging 
            during this project which I learned a lot including perseverance and how to solve problems efficiently.
          </p>
        </div>
        <div class="col-span-full p-10">
          <h1 class="font-mono text-xl pb-4">Cardano Smart Contract example</h1>
          <h2 class="font-mono text-lg pb-4"><a href="https://github.com/FloofyFlare/Cardano-Loot-box-Smart-Contract">Github link</a></h2>
          <img class="h-60" src="@/images/cardanoCode.png"/>
          <p class="p-5 font-mono">
            Making a smart contract was a challenging project I had to learn from scratch the Haskell programming language and the Plutus library at the 
            same time while gaining knowledge on how the Cardano blockchain works. I learned how to navigate stack overflow and utilize rapidly changing documentation 
            even at the early stages of a technology. This experience pointed out the flaws in my coding mentality by showing me how to focus on making a working product
            , not a perfect product.
          </p>
        </div>
        <div class="col-span-full p-10">
          <h1 class="font-mono text-xl pb-4">Chat website design (Website)</h1>
          <h2 class="font-mono text-lg pb-4"><a href="https://em-chat.netlify.app/">Website link</a></h2>
          <img class="h-60" src="@/images/webpage.png"/>
          <p class="p-5 font-mono">
            Here I was tasked to create a webpage design that was my choose
            I enjoyed this project because I learned a lot about website design and why it's important. Here I learned how to choose a good color palette and what 
            to do to make a good and simple webpage.
          </p>
        </div>
        <div class="col-span-full p-10">
          <h1 class="font-mono text-xl pb-4">Class Group project (Website)</h1>
          <h2 class="font-mono text-lg pb-4"><a href="https://6466d1ea0d2f921d63a8e557--ubiquitous-bavarois-3dd7ae.netlify.app/index.html">Website link</a></h2>
          <img class="h-60" src="@/images/snowQueen.png"/>
          <p class="p-5 font-mono">
            This project was a team website creation challenge I learned a lot about myself and who I work best with in this project. I learned how to find
            people who are goal focused and how to work with those who are not. I now know how to be a leader from this experience who puts others first.
          </p>
        </div>
      </div>
    </body>
  </div>
</template>