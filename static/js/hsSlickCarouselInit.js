function loadCarousel() {
    // initialization of slick carousel
    $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

    // initialization of form validation
    $.HSCore.components.HSValidation.init('.js-validate', {
      rules: {
        confirmPassword: {
          equalTo: '#signupPassword'
        }
      }
    });
};