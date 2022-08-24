
<template>
    <article class="skeleton">
        <div class="skeleton__image"></div>
        <p class="skeleton__line"></p>
    </article>
</template>

<style>
.skeleton {
	width: 280px;
  height: 400px;
  border: 1px solid #e0e0e0;
  padding: 1rem;
  background: white;
}
 .skeleton .skeleton__image, .skeleton .skeleton__line {
	 background-image: linear-gradient(90deg, #e0e0e0 0px, #ededed 30px, #e0e0e0 60px);
	 background-size: calc(320px + 100px);
	 animation: refresh 2s infinite ease-out;
}
 .skeleton .skeleton__image {
	height: 330px;
    margin-bottom: 0.5rem;
}
 .skeleton .skeleton__line {
	 height: 16px;
	 width: 80%;
}

 @keyframes refresh {
	 0% {
		 background-position: calc(-100px);
	}
	 40%, 100% {
		 background-position: 320px;
	}
}

</style>
