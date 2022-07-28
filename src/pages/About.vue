<template>
	 <div class="about-hero pa-12">
		  <div class="col-12 text-h3 text-md-h2 text-center text-md-right font-weight-bold">
				Allan Drozd
		  </div>
		  <div class="col-12 text-h4 text-md-h3 text-center text-md-right font-weight-bold">
				{{ $t("title") }}
		  </div>
		  <div class="col-12 text-center text-md-left py-16">
				<div class="text-h4 font-weight-bold">
					 {{ $t("who") }}
				</div>
		  </div>
		  <div class="col-12 text-center text-md-left pt-md-16">
				<p class="text-h6 font-weight-bold">
					 {{ $t("talk1") }}<br /> {{ $t("talk2") }}<br /> {{ $t("talk3") }}<br />
				</p>
		  </div>
	 </div>
</template>
<style scoped>
.about-hero {
    background-color: #507c54;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 97%, rgba(0, 0, 0, 1)), url('ivan-lopatin-yJEvZGhsSLY-unsplash-min.jpg');
    background-size: cover;
    height: 100vh;
}
</style>
