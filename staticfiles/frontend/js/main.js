"use strict";
var webUrl = $("meta[name='baseurl']").attr("content");
var csrf_token = $("meta[name='csrf_token']").attr("content");
var apiEndpoint = "home/ajax";



let featuredCoursesUrl = webUrl + "/" + apiEndpoint + "/featured-courses"; //http://onestacademy.test/home/ajax/featured-courses
let latestCoursesUrl = webUrl + "/" + apiEndpoint + "/latest-courses"; //http://onestacademy.test/home/ajax/latest-courses
let bestRatedCoursesUrl = webUrl + "/" + apiEndpoint + "/best-rated-courses"; //http://onestacademy.test/home/ajax/best-rated-courses
let mostPopularCoursesUrl = webUrl + "/" + apiEndpoint + "/most-popular-courses"; //http://onestacademy.test/home/ajax/most-popular-courses
let discountCoursesUrl = webUrl + "/" + apiEndpoint + "/discount-courses"; //http://onestacademy.test/home/ajax/best-selling-courses


let popularCategoryUrl = webUrl + "/" + apiEndpoint + "/popular-category"; //http://onestacademy.test/home/ajax/popular-category
let becomeAnInstructorUrl = webUrl + "/" + apiEndpoint + "/become-an-instructor"; //http://onestacademy.test/home/ajax/become-an-instructor
let educationalEventsUrl = webUrl + "/" + apiEndpoint + "/educational-events"; //http://onestacademy.test/home/ajax/educational-event
let blogsUrl = webUrl + "/" + apiEndpoint + "/blogs"; //http://onestacademy.test/home/ajax/blogs
let testimonialUrl = webUrl + "/" + apiEndpoint + "/testimonials"; //http://onestacademy.test/home/ajax/testimonials
let brandsUrl = webUrl + "/" + apiEndpoint + "/brands"; //http://onestacademy.test/home/ajax/brands
let homeSliderUrl               = webUrl + "/" + apiEndpoint + "/home-sliders"; // home/ajax/home-sliders
let menuCategoriesUrl               = webUrl + "/" + apiEndpoint + "/menu-categories"; // home/ajax/menu-categories

var Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

function dHide(className) {
    $('.'+className).addClass('d-none');
  }
  function dShow(className) {
    $('.'+className).removeClass('d-none');
  }

function ajaxError(response) {

    if (response.status === 404) {
        Toast.fire({
            icon: 'error',
            title: 'What you are looking is not found'
        });
        return;
    } else if (response.status === 500) {
        Toast.fire({
            icon: 'error',
            title: 'Something went wrong.'
        });
        return;
    } else if (response.status === 200) {
        Toast.fire({
            icon: 'error',
            title: 'Something is not right'
        });
        return;
    } else {
        // reset error message here
        $(".custom-error-text").text("");
    }

    let jsonValue = $.parseJSON(response?.responseText);
    let errors = response?.responseJSON?.errors;
    var multifield_errors = JSON.parse(response?.responseText).errors;


    if (errors) {
        $.each(errors, function (field, messages) {
            var input = $("#error_" + field);
            $.each(messages, function (index, message) {
                input.text(message);
            });
        });
    } else {
        Toast.fire({
            icon: 'error',
            title: jsonValue.message
        });
    }
}

window.errorHandler = (error, timer=1500) => {
    let title = '';
    if (error?.result === false) {
        title = error?.message;
    } else if (error?.responseJSON?.message) {
        title = error?.responseJSON?.message;
    } else {
        title = error;
    }
    Toast.fire({
        icon: 'error',
        title: title,
        timer: timer
    });
}

window.warningsHandler = (warning) => {
    let title = '';
    if (warning?.result === false) {
        title = warning?.message;
    } else {
        title = 'Something went wrong';
    }
    Toast.fire({
        icon: 'warning',
        title: title
    });
}

window.successHandler = (title) => {
    Toast.fire({
        icon: 'success',
        title: title
    });
}


// select2 initialization
$(document).ready(function () {
    $('.select_2').select2();
});

// Start Menu Categories
async function menuCategories() {
    $.ajax({
        url: menuCategoriesUrl,
        method: "get",
        success: function (data) {
            if (data?.result) {
                $(".menu-categories").after(data?.data?.content);
            }
        }
    });
}
// Start Menu Categories
async function homePageSlider() {
    $.ajax({
        url: homeSliderUrl,
        method: "get",
        success: function (data) {
            if (data?.result) {
                $("#ot_banner_area").html(data?.data?.content);
                callBannerCarousel();
            }
        }
    });
}
// Start Featured Courses
async function featuredCourses() {
    await $.ajax({
        url: featuredCoursesUrl,
        method: "get",
        data: {},
        success: function (data) {
            if (data?.result) {
                $("#ot_courses_area").html(data?.data?.content);
            }
        }
    });
}
// End Featured Courses
// Start Popular category
async function popularCategory() {
    $.ajax({
        url: popularCategoryUrl,
        method: "get",
        data: {},
        success: function (data) {
            if (data?.result) {
                $("#ot_categories_area").html(data.data.content);
                callCategoriesCarousel();
            }
        },
    });
}
// End Popular category

// Start Latest Courses
async function latestCourses() {
    await $.ajax({
        url: latestCoursesUrl,
        method: "get",
        data: {},
        success: function (data) {
            if (data?.result) {
                $("#ot_latest_courses_area").html(data?.data?.content);
            }
        }
    });
}
// End Latest Courses

// Start Best Rated Courses
async function bestRatedCourses() {
    await $.ajax({
        url: bestRatedCoursesUrl,
        method: "get",
        data: {},
        success: function (data) {
            if (data?.result) {
                $("#ot_best_rated_courses_area").html(data?.data?.content);
            }
        }
    });
}
// End Best Rated Courses

// Start Best Selling Courses
async function mostPopularCourses() {
    await $.ajax({
        url: mostPopularCoursesUrl,
        method: "get",
        data: {},
        success: function (data) {
            if (data?.result) {
                $("#ot_best_selling_courses_area").html(data?.data?.content);
            }
        }
    });
}
// End Best Selling Courses
// Start Discount Courses
async function discountCourses() {
    await $.ajax({
        url: discountCoursesUrl,
        method: "get",
        data: {},
        success: function (data) {
            if (data?.result) {
                $("#ot_discount_courses_area").html(data?.data?.content);
            }
        }
    });
}
// End Discount Courses

// Start testimonial
async function testimonials() {
    $.ajax({
        url: testimonialUrl,
        method: "get",
        data: {},
        success: function (data) {
            if (data?.result) {
               $("#ot_testimonials_area").html(data.data.content);
               callTestimonialCarousel();
            }
        }
    });
}
// End testimonial

// Start Blog area
async function blogs() {
    $.ajax({
        url: blogsUrl,
        method: "get",
        data: {},
        success: function (data) {
            if (data?.result) {
               $("#ot_blog_area").html(data.data.content);
            }
        }
    });
}
// End Blog area


// Start Brand area
async function brands() {
    $.ajax({
        url: brandsUrl,
        method: "get",
        data: {},
        success: function (data) {
            if (data?.result) {
                $("#ot_brands").html(data.data.content);
                callBrandCarousel();
            }
        }
    });
}
// End Brand area

// Start Instructor area
async function becomeAnInstructor() {
    $.ajax({
        url: becomeAnInstructorUrl,
        method: "get",
        data: {},
        success: function (data) {
            // console.log(data);
            $("#ot_become_an_instructor").html(data.data.content);
        },
        error: function (data) {
            ajax_error(data);
        }
    });
}



$(document).ready(function () {
    $(".menu-categories").length > 0 && menuCategories();
    $(".hero-area").length > 0 && homePageSlider();
    $(".ot-courses-area").length > 0 && featuredCourses();
    $(".categories-area").length > 0 && popularCategory();
    $(".ot-latest-courses-area").length > 0 && latestCourses();
    $(".ot-best-rated-courses-area").length > 0 && bestRatedCourses();
    $(".ot-best-selling-courses-area").length > 0 && mostPopularCourses();
    $(".ot-discount-courses-area").length > 0 && discountCourses();
    $(".ot_become_an_instructor").length > 0 && discountCourses();
    $(".ot-blog-area").length > 0 && blogs();
    $(".testimonial-area").length > 0 && testimonials();
    $(".ot-brand-area").length > 0 && brands();
});





$('.date-picker').each(function() {
    $(this).daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
    });
  });












//Student Login/ Sign up
$(document).on('click', '#studentSignUpButton', function () {
    var data = new FormData($('#studentSignUp')[0]);
    var url = $('#studentSignUp').attr('action');
    var type = $('#studentSignUp').attr('method');

    if (data != '') {
        $.ajax({
            url: url,
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            type: type,
            headers: {
                'X-CSRF-TOKEN': csrf_token
            },
            success: function (response) {

                if (response.result == true) {
                    setTimeout(function () {
                        window.location.href = response.data.redirect_url;
                    }, 1500);

                    Toast.fire({
                        icon: 'success',
                        title: response?.message
                    });
                }
            },
            error: function (response) {
                ajaxError(response);
            }
        });
    }
});


$(document).on('click', '#studentSignInButton', function () {
    var data = new FormData($('#studentSignIn')[0]);
    var url = $('#studentSignIn').attr('action');
    var type = $('#studentSignIn').attr('method');

    if (data != '') {
        $.ajax({
            url: url,
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            type: type,
            headers: {
                'X-CSRF-TOKEN': csrf_token
            },
            success: function (response) {

                if (response.result == true) {
                    setTimeout(function () {
                        window.location.href = response.data.redirect_url;
                    }, 1500);

                    Toast.fire({
                        icon: 'success',
                        title: response?.message
                    });
                }
            },
            error: function (response) {
                ajaxError(response);
            }
        });
    }
});

//End student Login/ Sign up




// start modal open by an event
var modalClose = (event) => {
    $(".modal").remove();
    $(".modal-barkdrop").empty();
    $(".modal-backdrop").remove();
    $(".modal-open").removeClass("modal-open");
    $(".modal-backdrop").removeClass("modal-backdrop");
    $(".modal-backdrop").removeClass("modal-backdrop-open");
    $(".modal-backdrop").removeClass("show");
  };


window.mainModalOpen = (ur) => {
    modalClose();
    $.ajax({
      url: ur,
      type: "GET",
      success: function (data) {
        if (data?.result) {
              $(data?.data).appendTo('body').modal('show');
        } else {
            errorHandler(something_went_wrong);
        }
      },
      error: function (err) {
        if (err?.responseJSON?.message) {
            errorHandler(err.responseJSON.message);
          }else{
            errorHandler(something_went_wrong);
          }
      },
    });
  };

// end modal open by an event

$(document).on('click', '.main-modal-open', function () {
    var url = $(this).attr('data-url');
    mainModalOpen(url);
});


function deleteFunction(ur) {
    Swal.fire({
        title: are_you_sure,
        text: you_wont_be_able_to_revert_this,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: yes_delete_it
    }).then((confirmed) => {
        if (confirmed.isConfirmed) {
            location.href = ur;
        }
    });
};

// pagination
function getPagination(pageURL, loadClass, filterData = {}) {
    $.ajax({
        url: pageURL,
        type: "GET",
        data: filterData,
        success: function (response) {
            if (response?.result) {
                const {
                    data
                } = response;
                $('.' + loadClass).html(data);
            } else {
                errorHandler(something_went_wrong);
            }
        },
        error: function (data) {
            errorHandler(something_went_wrong);
        }
    });
}

$(document).on('click', '.bookmark-added', function(e) {
    let course_id = $(this).data('id');
    let added_url = webUrl + '/frontend/bookmark/added/' + course_id;

    Swal.fire({
        title: are_you_sure,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: added_bookmark
    }).then((confirmed) => {
        if (confirmed.isConfirmed) {
            location.href = added_url;
        }
    });
});


$(document).ready(function() {  
    $("#copyButton").click(function() {
        let copy_url = $("#copyButton").data('url');
        navigator.clipboard.writeText(copy_url).then(function
        () {
            successHandler(copied_url);
        }
        , function() {
            errorHandler(something_went_wrong);
        });    
    });
  });


$(document).on('change', '#language-select', function(e) {
    $.ajax({
        url: webUrl + '/change-language',
        type: "POST",
        data: {
            code: $(this).val(),
            _token: csrf_token
        },
        success: function (response) {
            if (response?.result) {
                successHandler(response?.message);
                setTimeout(() => {
                    location.reload();                    
                }, 1500);
            } else {
                errorHandler(something_went_wrong);
            }
        },
        error: function (data) {
            errorHandler(something_went_wrong);
        }
    });
});

$(document).on('click', '.bookmark-destroy', function(e) {
    let course_id = $(this).data('id');
    let remove_url = webUrl + '/frontend/bookmark/remove/' + course_id;

    Swal.fire({
        title: are_you_sure,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: yes_delete_it
    }).then((confirmed) => {
        if (confirmed.isConfirmed) {
            location.href = remove_url;
        }
    });
});

$(".file").each(function () {
    $(this).jubaerImagePicker({
        fieldName: $(this).data('name'),
        maxCount: 1,
        rowHeight: $(this).data('height'),
        groupClassName: 'col-lg-12',
        loaderIcon: '<i class="fa fa-close"></i>',
        maxFileSize: '1024',
        dropFileLabel: "Drop Here",
        defaultImage: $(this).data('val'),
        onAddRow: function (index) {},
        onRenderedPreview: function (index) {

        },
        onRemoveRow: function (index) {

        },
        onExtensionErr: function (index, file) {
            errorHandler(file_type_not_allowed);
        },
        onSizeErr: function (index, file) {
            errorHandler(file_size_not_allowed);
        }
    });
});



$(".thumbnail").each(function () {
    $(this).jubaerImagePicker({
        fieldName: $(this).data('name'),
        maxCount: 1,
        rowHeight: $(this).data('height'),
        groupClassName: 'col-lg-12',
        loaderIcon: '<i class="fa fa-close"></i>',
        maxFileSize: '1024',
        dropFileLabel: "Drop Here",
        onAddRow: function (index) {},
        onRenderedPreview: function (index) {
        },
        onRemoveRow: function (index) {
        },
        onExtensionErr: function (index, file) {
            errorHandler(file_type_not_allowed);
        },
        onSizeErr: function (index, file) {
            errorHandler(file_size_not_allowed);
        }
    });
});

















