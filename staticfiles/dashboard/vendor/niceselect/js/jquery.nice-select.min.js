/*  jQuery Nice Select - v1.1.0
https://github.com/hernansartorio/jquery-nice-select
Made by Hernán Sartorio  */

(function($) {
    $.fn.niceSelect = function(method) {
        // Methods
        if (typeof method == "string") {
            if (method == "update") {
                this.each(function() {
                    var $select = $(this);
                    var $dropdown = $(this).next(".nice-select");
                    var open = $dropdown.hasClass("open");

                    if ($dropdown.length) {
                        $dropdown.remove();
                        create_nice_select($select);

                        if (open) {
                            $select.next().trigger("click");
                        }
                    }
                });
            } else if (method == "destroy") {
                this.each(function() {
                    var $select = $(this);
                    var $dropdown = $(this).next(".nice-select");

                    if ($dropdown.length) {
                        $dropdown.remove();
                        $select.css("display", "");
                    }
                });
                if ($(".nice-select").length == 0) {
                    $(document).off(".nice_select");
                }
            } else {
                console.log('Method "' + method + '" does not exist.');
            }
            return this;
        }

        // Hide native select
        this.hide();

        // Create custom markup
        this.each(function() {
            var $select = $(this);

            if (!$select.next().hasClass("nice-select")) {
                create_nice_select($select);
            }
        });

        function create_nice_select($select) {
            $select.after(
                $("<div></div>")
                    .addClass("nice-select")
                    .addClass($select.attr("class") || "")
                    .addClass($select.attr("disabled") ? "disabled" : "")
                    .addClass($select.attr("multiple") ? "has-multiple" : "")
                    .attr("tabindex", $select.attr("disabled") ? null : "0")
                    .html(
                        $select.attr("multiple")
                            ? '<span class="multiple-options"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."/></div><ul class="list"></ul>'
                            : '<span class="current"></span><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="Search..."/></div><ul class="list"></ul>'
                    )
            );

            var $dropdown = $select.next();
            var $options = $select.find("option");
            if ($select.attr("multiple")) {
                var $selected = $select.find("option:selected");
                var $selected_html = "";
                $selected.each(function() {
                    $selected_option = $(this);
                    $selected_text =
                        $selected_option.data("display") ||
                        $selected_option.text();
                    $selected_html +=
                        '<span class="current">' + $selected_text + "</span>";
                });
                $select_placeholder =
                    $select.data("placeholder") || $select.attr("placeholder");
                $select_placeholder =
                    $select_placeholder == "" ? "Select" : $select_placeholder;
                $selected_html =
                    $selected_html == "" ? $select_placeholder : $selected_html;
                $dropdown.find(".multiple-options").html($selected_html);
            } else {
                var $selected = $select.find("option:selected");
                $dropdown
                    .find(".current")
                    .html($selected.data("display") || $selected.text());
            }

            $options.each(function(i) {
                var $option = $(this);
                var display = $option.data("display");

                $dropdown.find("ul").append(
                    $("<li></li>")
                        .attr("data-value", $option.val())
                        .attr("data-display", display || null)
                        .addClass(
                            "option" +
                                ($option.is(":selected") ? " selected" : "") +
                                ($option.is(":disabled") ? " disabled" : "")
                        )
                        .html($option.text())
                );
            });
        }

        /* Event listeners */

        // Unbind existing events in case that the plugin has been initialized before
        $(document).off(".nice_select");

        // Open/close
        $(document).on("click.nice_select", ".nice-select", function(event) {
            var $dropdown = $(this);

            $(".nice-select")
                .not($dropdown)
                .removeClass("open");
            $dropdown.toggleClass("open");

            if ($dropdown.hasClass("open")) {
                $dropdown.find(".option");
                $dropdown.find(".nice-select-search").val("");
                $dropdown.find(".nice-select-search").focus();
                $dropdown.find(".focus").removeClass("focus");
                $dropdown.find(".selected").addClass("focus");
                $dropdown.find("ul li").show();
            } else {
                $dropdown.focus();
            }
        });

        $(document).on("click", ".nice-select-search-box", function(event) {
            event.stopPropagation();
            return false;
        });
        $(document).on("keyup.nice-select-search", ".nice-select", function() {
            var $self = $(this);
            var $text = $self.find(".nice-select-search").val();
            var $options = $self.find("ul li");
            if ($text == "") $options.show();
            else if ($self.hasClass("open")) {
                $text = $text.toLowerCase();
                var $matchReg = new RegExp($text);
                if (0 < $options.length) {
                    $options.each(function() {
                        var $this = $(this);
                        var $optionText = $this.text().toLowerCase();
                        var $matchCheck = $matchReg.test($optionText);
                        $matchCheck ? $this.show() : $this.hide();
                    });
                } else {
                    $options.show();
                }
            }
            $self.find(".option"),
                $self.find(".focus").removeClass("focus"),
                $self.find(".selected").addClass("focus");
        });

        // Close when clicking outside
        $(document).on("click.nice_select", function(event) {
            if ($(event.target).closest(".nice-select").length === 0) {
                $(".nice-select")
                    .removeClass("open")
                    .find(".option");
            }
        });

        // Option click
        $(document).on(
            "click.nice_select",
            ".nice-select .option:not(.disabled)",
            function(event) {
                var $option = $(this);
                var $dropdown = $option.closest(".nice-select");
                if ($dropdown.hasClass("has-multiple")) {
                    if ($option.hasClass("selected")) {
                        $option.removeClass("selected");
                    } else {
                        $option.addClass("selected");
                    }
                    $selected_html = "";
                    $selected_values = [];
                    $dropdown.find(".selected").each(function() {
                        $selected_option = $(this);
                        var text =
                            $selected_option.data("display") ||
                            $selected_option.text();
                        $selected_html +=
                            '<span class="current">' + text + "</span>";
                        $selected_values.push($selected_option.data("value"));
                    });
                    $select_placeholder =
                        $dropdown.prev("select").data("placeholder") ||
                        $dropdown.prev("select").attr("placeholder");
                    $select_placeholder =
                        $select_placeholder == ""
                            ? "Select"
                            : $select_placeholder;
                    $selected_html =
                        $selected_html == ""
                            ? $select_placeholder
                            : $selected_html;
                    $dropdown.find(".multiple-options").html($selected_html);
                    $dropdown
                        .prev("select")
                        .val($selected_values)
                        .trigger("change");
                } else {
                    $dropdown.find(".selected").removeClass("selected");
                    $option.addClass("selected");
                    var text = $option.data("display") || $option.text();
                    $dropdown.find(".current").text(text);
                    $dropdown
                        .prev("select")
                        .val($option.data("value"))
                        .trigger("change");
                }
            }
        );

        // Keyboard events
        $(document).on("keydown.nice_select", ".nice-select", function(event) {
            var $dropdown = $(this);
            var $focused_option = $(
                $dropdown.find(".focus") ||
                    $dropdown.find(".list .option.selected")
            );

            // Space or Enter
            if (event.keyCode == 32 || event.keyCode == 13) {
                if ($dropdown.hasClass("open")) {
                    $focused_option.trigger("click");
                } else {
                    $dropdown.trigger("click");
                }
                return false;
                // Down
            } else if (event.keyCode == 40) {
                if (!$dropdown.hasClass("open")) {
                    $dropdown.trigger("click");
                } else {
                    var $next = $focused_option
                        .nextAll(".option:not(.disabled)")
                        .first();
                    if ($next.length > 0) {
                        $dropdown.find(".focus").removeClass("focus");
                        $next.addClass("focus");
                    }
                }
                return false;
                // Up
            } else if (event.keyCode == 38) {
                if (!$dropdown.hasClass("open")) {
                    $dropdown.trigger("click");
                } else {
                    var $prev = $focused_option
                        .prevAll(".option:not(.disabled)")
                        .first();
                    if ($prev.length > 0) {
                        $dropdown.find(".focus").removeClass("focus");
                        $prev.addClass("focus");
                    }
                }
                return false;
                // Esc
            } else if (event.keyCode == 27) {
                if ($dropdown.hasClass("open")) {
                    $dropdown.trigger("click");
                }
                // Tab
            } else if (event.keyCode == 9) {
                if ($dropdown.hasClass("open")) {
                    return false;
                }
            }
        });

        // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
        var style = document.createElement("a").style;
        style.cssText = "pointer-events:auto";
        if (style.pointerEvents !== "auto") {
            $("html").addClass("no-csspointerevents");
        }

        return this;
    };
})(jQuery);
