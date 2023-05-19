<template>
  <div>
    <header>
      <TopHeader></TopHeader>
    </header>
    <body>
      <div class="bg-amber-400  grid md:grid-cols-2 gap-4">
        <div class="mt-24 md:col-span-2">
          <div class="flex justify-center items-center p-10 ">
            <img class="rounded-lg max-h-80" src="@/images/20230513_214423.jpg">
          </div>
        </div>
        <div class="md:col-span-2 ">
          <div class="pb-30">
            <h1 class="font-mono text-center">print(<span class="text-4xl font-bold">"HELLO WORLD"</span>)</h1>
            <p class="font-mono p-4">
              Raymond flowers = "A software developer going to the University of Maryland - college park";
            </p>
            <p class="font-mono p-4">
              gitHub = "<a href="https://github.com/FloofyFlare">https://github.com/FloofyFlare</a>";
            </p>
          </div>
        </div>
        <div class="col-span-full pb-10">
          <div class="flex justify-center items-center">
            <div class="shadow-2xl bg-slate-50 m-10 w-full h-auto rounded-lg ">
              <h1 class="p-4 text-3xl font-mono text-center">Review</h1>
                
                <ul class="pl-6 font-mono">
                  <h2>Skills/Experience</h2>
                  <li>Been programming as a hobby for 7 years</li>
                  <li>Knowledge of data structures and algorithms</li>
                  <li>Experience with: Ubuntu, Linux Terminal, Nix OS, Deep Learning, Unity Game Engine, Django, PostgreSQL, Vue.js, React Native</li>
                  <li>Programming Language Experience: (C#, C++, Haskell, Java, Python, VB.net, PostgreSQL, JavaScript) </li>
                  <li>Proficiet in understanding of blockchain</li>
                  <li>I am a nationally recognized Melvin Scholar</li>
                  <li>I have created smart contracts for the Cardano blockchain</li>
                </ul>
                <ul class="pl-6 font-mono">
                  <h2>Education</h2>
                  <h3>I have taken courses in</h3>
                  <li>Artificial Neural Networks (udemy)</li>
                  <li>Python for Data Science (udemy)</li>
                  <li>Unity game development (udemy)</li>
                  <li>SQL (udemy)</li>
                  <li>Artificial intelligence and Deep learning (udemy)</li>
                </ul>
                <ul class="pl-6 font-mono">
                  <h2>Hobbies</h2>
                  <li>Learning about blockchain, business, investing, algorithms and data structures</li>
                  <li>Playing competitve Overwatch</li>
                  <li>Competitive high power shooting</li>
                </ul>
                <a class="flex justify-end" href="https://www.credly.com/badges/2589137e-0628-4670-bf98-2a4eb11ba30d/public_url"><img class="h-auto w-24" src="@/images/national-career-readiness-certificate-platinum.png"/></a>
            </div>
          </div>
        </div>
        <div class="col-span-full pb-10">
          <div class="flex justify-center items-center">
            <div class="shadow-2xl bg-slate-50 m-10 w-full h-auto rounded-lg ">
              <h1 class="p-4 text-lg">Contact Information & References</h1>
              <p>
                <ul class="pl-6">
                  <li>Name: Raymond Flowers IV</li>
                  <li>My phone: 7347352967</li>
                  <li>Email: flogamesapps@gmail.com</li>
                  <li>Reference: Tammi Ramsey 419-824-8570 ext 5224</li>
                </ul>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </body>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/app-styles.scss';
</style>