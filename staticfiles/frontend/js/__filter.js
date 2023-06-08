"use strict";
var endpoint = $("meta[name='baseurl']").attr("content");
if($("#instructor_list").length > 0){
    var filterCourseRoute = `${endpoint}/instructor/filter`;
}
if($("#course_list").length > 0){
    var filterCourseRoute = `${endpoint}/courses/filter`;
}

var urlParams = new URLSearchParams(window.location.search);
var search = urlParams.get("query");
var category = urlParams.get("category");

var filterTags = [];
var sortTag = $(".btn-options.text-primary").data("val") || "";
var is_free = "";
var page = 1;

// filter course list
window.filterCourseList = async () => {
    let categories = $('input[name="category[]"]:checked')
        .map(function () {
            return $(this).val();
        })
        .get();
    let instructors = $('input[name="instructor[]"]:checked')
        .map(function () {
            return $(this).val();
        })
        .get();
    let course_level = $('input[name="course_level[]"]:checked')
        .map(function () {
            return $(this).val();
        })
        .get();
    let languages = $('input[name="language[]"]:checked')
        .map(function () {
            return $(this).val();
        })
        .get();

    var ratings = $("input[name='ratings[]']:checked")
        .map(function () {
            return $(this).val();
        })
        .get();
    if (category) {
        categories.push(category);
    }
    is_free = $('input[name="is_free"]:checked').val();
    is_free = is_free ? is_free : "";

    urlParams.set("page", page);
    urlParams.set("categories", categories);
    urlParams.set("instructors", instructors);
    urlParams.set("course_level", course_level);
    urlParams.set("languages", languages);
    urlParams.set("ratings", ratings);
    urlParams.set("sortTag", sortTag);
    urlParams.set("is_free", is_free);
    urlParams.set("search", search);

    try {
        const response = await fetch(
            filterCourseRoute + "?" + urlParams.toString()
        );
        if (response.ok) {
            const { result, message, data } = await response.json();
            $("#course-load").html(data?.content);
            $("#showResults").html(data?.total);
        }
    } catch (error) {
        errorHandler(something_went_wrong);
    }
};
// end course list

// Start call filterCourseList
filterCourseList();
// End call filterCourseList

window.addFilterTags = () => {
    $(".search-tags").html("");
    if (filterTags.length > 0) {
        filterTags.forEach((e) => {
            $(".search-tags").prepend(
                `<span class="single-search-tag" onclick="clearTag('${e}')">${e} <i class="ri-close-line"></i></span>`
            );
        });
    }
};

function filterOptions(e){
    let text = $(e).find(".value").text();
    if (
        (text !== undefined || text !== null) &&
        $(e).find(".value").length > 0
    ) {
        filterTags.push(text);
        if (filterTags.length !== new Set(filterTags).size) {
            filterTags = filterTags.filter((e) => e !== text);
        }
        addFilterTags();
    }
    filterCourseList(); 
}

function filterButtonOptions(e){
    let text = $(e).text();
    if (text !== undefined || text !== null) {
        sortTag = $(e).data("val");
        $(".btn-options").removeClass("text-primary");
        $(".btn-options")
            .map(function () {
                filterTags = filterTags.filter((e) => e !== $(this).text());
                return $(this).text();
            })
            .get();
        filterTags.push(text);
        $(e).addClass("text-primary");
        addFilterTags();
    }
    filterCourseList();
}

// sidebar filter options
$(document).on("change", ".filter-options", function (e) {
    filterOptions(this);
});

$(document).ready(function() {
    $(".filter-options").each(function() {
        let is_checked = $(this).find("input").is(":checked");
        if (is_checked) {            
            filterOptions(this);
        }
    });
    $(".btn-options").each(function() {
        let is_checked = $(this).hasClass("text-primary");
        if (is_checked) {            
            filterButtonOptions(this);
        }
    });
});

// Sidebar filter options

// Start button options filter
$(document).on("click", ".btn-options", function () {
    filterButtonOptions(this);
});

// End button options filter
$(document).on("change", ".filter-options-radio", function () {
    let text = $(this).find(".value").text();
    $('.filter-options-radio').find(".value").map(function () {
        filterTags = filterTags.filter((e) => e !== $(this).text());
        return $(this).text();
    }).get();
    filterTags.push(text);
    addFilterTags();
    filterCourseList();
});

// Start remove single tag
window.clearTag = (tag) => {
    if (tag) {
        $(`.filter-options .value:contains(${tag})`)
            .parent()
            .find("input")
            .prop("checked", false);
        // remove sort tag
        $(`.filter-options-radio .value:contains(${tag})`)
            .parent()
            .find("input")
            .prop("checked", false);
        if ($(`.btn-options:contains(${tag})`).text() == tag) {
            $(".btn-options").removeClass("text-primary");
            sortTag = "";
        }
        filterTags = filterTags.filter((e) => e !== tag);
        addFilterTags();
        filterCourseList();
    } else {
        filterTags = [];
        sortTag = "";
        $(".btn-options").removeClass("text-primary");
        addFilterTags();
        filterCourseList();
    }
};
// End remove single tag

// Start pagination
$(document).on("click", ".coursePagination", function (e) {
    e.preventDefault();
    page = $(this).attr("href").split("page=")[1];
    filterCourseList();
});
