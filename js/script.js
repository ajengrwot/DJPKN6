var satker = $.ajax({
	url: "https://portal.bpk.go.id/sites/djpkn6/_api/web/lists/GetByTitle('Satuan%20Kerja')/items?$select=Title,Description,Icon",
	type: "GET",
	dataType: "json",
	headers: {
		      Accept: "application/json;odata=verbose"
		      }
});
satker.done(function (data,value){
	var satkerpkn6 = '';
	var itemsSatker = data.d.results;    	
		for (var value of itemsSatker) {  
		
			satkerpkn6 +=`
						    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            					<div class="service-item  position-relative">
              						<div class="icon">
                						<i class="bi ${value.Icon}"></i>
              						</div>
              					<a href="#" class="stretched-link">
                					<h3>${value.Title}</h3>
              					</a>
              					<p>${value.Description}</p>
            					</div>
          					</div>
						`;  
    }  
	$('#satkerdjpkn6').html(satkerpkn6);
}); 
       
satker.fail(function (jqXHR,textStatus,errorThrown){
	alert("Error retrieving Tasks: " + jqXHR.responseText);
});

var entitas = $.ajax({
	url: "https://portal.bpk.go.id/sites/djpkn6/_api/web/lists/GetByTitle('Entitas')/items?$select=Title,Description,Tautan,EncodedAbsUrl",
	type: "GET",
	dataType: "json",
	headers: {
		      Accept: "application/json;odata=verbose"
		      }
});
entitas.done(function (data,value){
	var entitaspkn6 = '';
	var itemsEntitas = data.d.results;    	
		for (var value of itemsEntitas) {  
		
			entitaspkn6 +=`
							<div class="col-xl-3 col-md-4 client-logo">
            					<a href="${value.Tautan}" class="stretched-link" target=_blank>
            						<img src="${value.EncodedAbsUrl}" class="img-fluid" alt="">
            					</a>
          					</div>
						`;  
    }  
	$('#entitasdjpkn6').html(entitaspkn6);
}); 
       
entitas.fail(function (jqXHR,textStatus,errorThrown){
	alert("Error retrieving Tasks: " + jqXHR.responseText);
});

var galeri = $.ajax({
	url: "https://portal.bpk.go.id/sites/djpkn6/_api/web/lists/GetByTitle('Galeri')/items?$select=Title,Description,EncodedAbsUrl,Kategori",
	type: "GET",
	dataType: "json",
	headers: {
		      Accept: "application/json;odata=verbose"
		      }
});
galeri.done(function (data,value){
	var galeriPKN6 = '';
	var itemsGaleri = data.d.results;
		for (var value of itemsGaleri) {  
			
			galeriPKN6 +=`
	            			<div class="col-lg-4 col-md-6 portfolio-item isotope-item ${value.Kategori}">
              					<img src="${value.EncodedAbsUrl}" class="img-fluid" alt="">
              					<div class="portfolio-info">
                					<h4>${value.Title}</h4>
                					<p>${value.Description}</p>
                					<a href="${value.EncodedAbsUrl}" title="${value.Title}" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                				</div>
            				</div>
						`;  
    }  
	$('#galeridjpkn6').html(galeriPKN6);
}); 
       
galeri.fail(function (jqXHR,textStatus,errorThrown){
	alert("Error retrieving Tasks: " + jqXHR.responseText);
});

var dokumen = $.ajax({
	url: "https://portal.bpk.go.id/sites/djpkn6/_api/web/lists/GetByTitle('Dokumen%20Publik')/items?$select=Title,Description,EncodedAbsUrl",
	type: "GET",
	dataType: "json",
	headers: {
		      Accept: "application/json;odata=verbose"
		      }
});
dokumen.done(function (data,value){
	var dokumenpkn6 = '';
	var itemsDokumen = data.d.results;
		for (var value of itemsDokumen) {  
			
			dokumenpkn6 +=`
	            			<div class="testimonials-slider swiper init-swiper">
          <script type="application/json" class="swiper-config">
            {
              "loop": true,
              "speed": 800,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": 1,
              "spaceBetween": 30,
              "pagination": {
                "el": ".swiper-pagination",
                "type": "bullets",
                "clickable": true
              },
              "breakpoints": {
                "768": {
                  "slidesPerView": 2
                },
                "1200": {
                  "slidesPerView": 3
                }
              }
            }
          </script>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-card">
                <div class="testimonial-content">
                  <p>
                    <i class="bi bi-quote quote-icon"></i>
                    ${value.Description}
                  </p>
                </div>
                <div class="testimonial-profile">
                    <div class="profile-info">
                    <img src="assets/img/docjpg.jpg" alt="Profile Image">
                    <div>
                      <h3>${value.Title}</h3>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
						`;  
    }  
	$('#dokumendjpkn6').html(dokumenpkn6);
}); 
       
dokumen.fail(function (jqXHR,textStatus,errorThrown){
	alert("Error retrieving Tasks: " + jqXHR.responseText);
});
