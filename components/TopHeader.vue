<template>
  <nav class=" bg-slate-100 h-20 w-full flex justify-center items-center">
    <div >
      <h1 class="font-bold font-mono text-xl">Raymond's Web Portfolio</h1>
      <div class="w-full flex gap-20">
        <NuxtLink to="/projects">
        <h1 class="text-start font-bold font-mono text-lg">My Projects</h1>
        </NuxtLink>
        <NuxtLink to="/">
          <h1 class="text-end font-bold font-mono text-lg">Home</h1>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
