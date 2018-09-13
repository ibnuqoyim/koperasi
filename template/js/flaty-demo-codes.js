$(function () {
  $("#gritter-sticky").click(function () {
    var e = $.gritter.add({
      title: "This is a sticky notice!",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
      image: "./img/demo/avatar/avatar1.jpg",
      sticky: true,
      time: "",
      class_name: "my-sticky-class"
    });
    return false
  });
  $("#gritter-regular").click(function () {
    $.gritter.add({
      title: "This is a regular notice!",
      text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
      image: "./img/demo/avatar/avatar1.jpg",
      sticky: false,
      time: ""
    });
    return false
  });
  $("#gritter-max").click(function () {
    $.gritter.add({
      title: "This is a notice with a max of 3 on screen at one time!",
      text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.',
      image: "./img/demo/avatar/avatar1.jpg",
      sticky: false,
      before_open: function () {
        if ($(".gritter-item-wrapper").length == 3) {
          return false
        }
      }
    });
    return false
  });
  $("#gritter-without-image").click(function () {
    $.gritter.add({
      title: "This is a notice without an image!",
      text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color:#ccc">magnis dis parturient</a> montes, nascetur ridiculus mus.'
    });
    return false
  });
  $("#gritter-light").click(function () {
    $.gritter.add({
      title: "This is a light notification",
      text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
      class_name: "gritter-light"
    });
    return false
  });
  $("#gritter-remove-all").click(function () {
    $.gritter.removeAll();
    return false
  });
  if (jQuery().slider) {
    $(".slider-basic").slider();
    $("#slider-snap-inc").slider({
      value: 100,
      min: 0,
      max: 1e3,
      step: 100,
      slide: function (e, t) {
        $("#slider-snap-inc-amount").text("$" + t.value)
      }
    });
    $("#slider-snap-inc-amount").text("$" + $("#slider-snap-inc").slider("value"));
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function (e, t) {
        $("#slider-range-amount").text("$" + t.values[0] + " - $" + t.values[1])
      }
    });
    $("#slider-range-amount").text("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
    $("#slider-range-max").slider({
      range: "max",
      min: 1,
      max: 10,
      value: 2,
      slide: function (e, t) {
        $("#slider-range-max-amount").text(t.value)
      }
    });
    $("#slider-range-max-amount").text($("#slider-range-max").slider("value"));
    $("#slider-range-min").slider({
      range: "min",
      value: 37,
      min: 1,
      max: 700,
      slide: function (e, t) {
        $("#slider-range-min-amount").text("$" + t.value)
      }
    });
    $("#slider-range-min-amount").text("$" + $("#slider-range-min").slider("value"));
    $("#slider-eq > span").each(function () {
      var e = parseInt($(this).text(), 10);
      $(this).empty().slider({
        value: e,
        range: "min",
        animate: true,
        orientation: "vertical"
      })
    });
    $("#slider-vertical").slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function (e, t) {
        $("#slider-vertical-amount").text(t.value)
      }
    });
    $("#slider-vertical-amount").text($("#slider-vertical").slider("value"));
    $("#slider-range-vertical").slider({
      orientation: "vertical",
      range: true,
      values: [17, 67],
      slide: function (e, t) {
        $("#slider-range-vertical-amount").text("$" + t.values[0] + " - $" + t.values[1])
      }
    });
    $("#slider-range-vertical-amount").text("$" + $("#slider-range-vertical").slider("values", 0) + " - $" + $("#slider-range-vertical").slider("values", 1));
    $(".slider-color-preview").slider({
      range: "min",
      value: 106,
      min: 1,
      max: 700
    })
  }
  if (jQuery().knob) {
    $(".knob").knob({
      dynamicDraw: true,
      thickness: .2,
      tickColorizeValues: true,
      skin: "tron"
    });
    $(".circle-stats-item > input").knob({
      readOnly: true,
      width: 120,
      height: 120,
      dynamicDraw: true,
      thickness: .2,
      tickColorizeValues: true,
      skin: "tron"
    })
  }
  if (jQuery().tagsInput) {
    $("#tag-input-1").tagsInput({
      width: "auto",
      onAddTag: function (e) {
        alert("New tag added: " + e)
      }
    });
    $("#tag-input-2").tagsInput({
      width: 240
    })
  }
  if (jQuery().daterangepicker) {
    $("#form-date-range").daterangepicker({
      ranges: {
        Today: ["today", "today"],
        Yesterday: ["yesterday", "yesterday"],
        "Last 7 Days": [Date.today().add({
          days: -6
        }), "today"],
        "Last 30 Days": [Date.today().add({
          days: -29
        }), "today"],
        "This Month": [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
        "Last Month": [Date.today().moveToFirstDayOfMonth().add({
          months: -1
        }), Date.today().moveToFirstDayOfMonth().add({
          days: -1
        })]
      },
      opens: "right",
      format: "MM/dd/yyyy",
      separator: " to ",
      startDate: Date.today().add({
        days: -29
      }),
      endDate: Date.today(),
      minDate: "01/01/2012",
      maxDate: "12/31/2014",
      locale: {
        applyLabel: "Submit",
        fromLabel: "From",
        toLabel: "To",
        customRangeLabel: "Custom Range",
        daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        firstDay: 1
      },
      showWeekNumbers: true,
      buttonClasses: ["btn-danger"]
    },
    function (e, t) {
      $("#form-date-range span").html(e.toString("MMMM d, yyyy") + " - " + t.toString("MMMM d, yyyy"))
    });
    $("#form-date-range span").html(Date.today().add({
      days: -29
    }).toString("MMMM d, yyyy") + " - " + Date.today().toString("MMMM d, yyyy"))
  }
  if (jQuery().clockface) {
    $("#clockface_1").clockface();
    $("#clockface_2").clockface({
      format: "HH:mm",
      trigger: "manual"
    });
    $("#clockface_2_toggle-btn").click(function (e) {
      e.stopPropagation();
      $("#clockface_2").clockface("toggle")
    });
    $("#clockface_3").clockface({
      format: "H:mm"
    }).clockface("show", "14:30")
  }
  if (jQuery().bootstrapWizard) {
    $("#form-wizard-1").bootstrapWizard({
      nextSelector: ".button-next",
      previousSelector: ".button-previous",
      onTabClick: function (e, t, n) {
        alert("on tab click disabled");
        return false
      },
      onNext: function (e, t, n) {
        var r = t.find("li").length;
        var i = n + 1;
        $(".step-title", $("#form-wizard-1")).text("Step " + (n + 1) + " of " + r);
        jQuery("li", $("#form-wizard-1")).removeClass("done");
        var s = t.find("li");
        for (var o = 0; o < n; o++) {
          jQuery(s[o]).addClass("done")
        }
        if (i == 1) {
          $("#form-wizard-1").find(".button-previous").hide()
        } else {
          $("#form-wizard-1").find(".button-previous").show()
        }
        if (i >= r) {
          $("#form-wizard-1").find(".button-next").hide();
          $("#form-wizard-1").find(".button-submit").show()
        } else {
          $("#form-wizard-1").find(".button-next").show();
          $("#form-wizard-1").find(".button-submit").hide()
        }
        var u = i / r * 100;
        $("#form-wizard-1").find(".progress-bar").css("width", u + "%");
        $("html, body").animate({
          scrollTop: $("#form-wizard-1").offset().top
        },
        900)
      },
      onPrevious: function (e, t, n) {
        var r = t.find("li").length;
        var i = n + 1;
        $(".step-title", $("#form-wizard-1")).text("Step " + (n + 1) + " of " + r);
        jQuery("li", $("#form-wizard-1")).removeClass("done");
        var s = t.find("li");
        for (var o = 0; o < n; o++) {
          jQuery(s[o]).addClass("done")
        }
        if (i == 1) {
          $("#form-wizard-1").find(".button-previous").hide()
        } else {
          $("#form-wizard-1").find(".button-previous").show()
        }
        if (i >= r) {
          $("#form-wizard-1").find(".button-next").hide();
          $("#form-wizard-1").find(".button-submit").show()
        } else {
          $("#form-wizard-1").find(".button-next").show();
          $("#form-wizard-1").find(".button-submit").hide()
        }
        var u = i / r * 100;
        $("#form-wizard-1").find(".progress-bar").css("width", u + "%");
        $("html, body").animate({
          scrollTop: $("#form-wizard-1").offset().top
        },
        900)
      },
      onTabShow: function (e, t, n) {
        var r = t.find("li").length;
        var i = n + 1;
        var s = i / r * 100;
        $("#form-wizard-1").find(".progress-bar").css({
          width: s + "%"
        })
      }
    });
    $("#form-wizard-1").find(".button-previous").hide();
    $("#form-wizard-1 .button-submit").click(function () {
      alert("Finished!")
    }).hide();
    if (jQuery().validate) {
      var e = function (e) {
        $(e).closest(".form-group").removeClass("has-success")
      };
      var t = $("#wizard-validation").validate({
        errorElement: "span",
        errorClass: "help-block",
        errorPlacement: function (e, t) {
          if (t.parent(".input-group").length) {
            e.insertAfter(t.parent())
          } else {
            e.insertAfter(t)
          }
        },
        focusInvalid: false,
        invalidHandler: function (e, t) {},
        highlight: function (e) {
          $(e).closest(".form-group").removeClass("has-success").addClass("has-error")
        },
        unhighlight: function (t) {
          $(t).closest(".form-group").removeClass("has-error");
          setTimeout(function () {
            e(t)
          },
          3e3)
        },
        success: function (e) {
          e.closest(".form-group").removeClass("has-error").addClass("has-success")
        }
      })
    }
    $("#form-wizard-2").bootstrapWizard({
      nextSelector: ".button-next",
      previousSelector: ".button-previous",
      onTabClick: function (e, t, n) {
        alert("on tab click disabled");
        return false
      },
      onNext: function (e, n, r) {
        var i = $("#wizard-validation").valid();
        if (!i) {
          t.focusInvalid();
          return false
        }
        var s = n.find("li").length;
        var o = r + 1;
        $(".step-title", $("#form-wizard-2")).text("Step " + (r + 1) + " of " + s);
        jQuery("li", $("#form-wizard-2")).removeClass("done");
        var u = n.find("li");
        for (var a = 0; a < r; a++) {
          jQuery(u[a]).addClass("done")
        }
        if (o == 1) {
          $("#form-wizard-2").find(".button-previous").hide()
        } else {
          $("#form-wizard-2").find(".button-previous").show()
        }
        if (o >= s) {
          $("#form-wizard-2").find(".button-next").hide();
          $("#form-wizard-2").find(".button-submit").show()
        } else {
          $("#form-wizard-2").find(".button-next").show();
          $("#form-wizard-2").find(".button-submit").hide()
        }
        var f = o / s * 100;
        $("#form-wizard-2").find(".progress-bar").css("width", f + "%");
        $("html, body").animate({
          scrollTop: $("#form-wizard-2").offset().top
        },
        900)
      },
      onPrevious: function (e, t, n) {
        var r = t.find("li").length;
        var i = n + 1;
        $(".step-title", $("#form-wizard-2")).text("Step " + (n + 1) + " of " + r);
        jQuery("li", $("#form-wizard-2")).removeClass("done");
        var s = t.find("li");
        for (var o = 0; o < n; o++) {
          jQuery(s[o]).addClass("done")
        }
        if (i == 1) {
          $("#form-wizard-2").find(".button-previous").hide()
        } else {
          $("#form-wizard-2").find(".button-previous").show()
        }
        if (i >= r) {
          $("#form-wizard-2").find(".button-next").hide();
          $("#form-wizard-2").find(".button-submit").show()
        } else {
          $("#form-wizard-2").find(".button-next").show();
          $("#form-wizard-2").find(".button-submit").hide()
        }
        var u = i / r * 100;
        $("#form-wizard-2").find(".progress-bar").css("width", u + "%");
        $("html, body").animate({
          scrollTop: $("#form-wizard-2").offset().top
        },
        900)
      },
      onTabShow: function (e, t, n) {
        var r = t.find("li").length;
        var i = n + 1;
        var s = i / r * 100;
        $("#form-wizard-2").find(".progress-bar").css({
          width: s + "%"
        })
      }
    });
    $("#form-wizard-2").find(".button-previous").hide();
    $("#form-wizard-2 .button-submit").click(function () {
      alert("Finished!")
    }).hide()
  }
  if (jQuery().plot) {
    var n = [];
    var r = 250;
    function i() {
      if (n.length > 0) n = n.slice(1);
      while (n.length < r) {
        var e = n.length > 0 ? n[n.length - 1] : 50;
        var t = e + Math.random() * 10 - 5;
        if (t < 0) t = 0;
        if (t > 100) t = 100;
        n.push(t)
      }
      var i = [];
      for (var s = 0; s < n.length; ++s) i.push([s, n
        [s]]);
      return i
    }
    function s() {
      if ($("#chart_1").size() == 0) {
        return
      }
      var e = [];
      for (var t = 0; t < Math.PI * 2; t += .25) e.push([t, Math.sin(t)]);
      var n = [];
      for (var t = 0; t < Math.PI * 2; t += .25) n.push([t, Math.cos(t)]);
      var r = [];
      for (var t = 0; t < Math.PI * 2; t += .1) r.push([t, Math.tan(t)]);
      $.plot($("#chart_1"), [{
        label: "sin(x)",
        data: e
      },
      {
        label: "cos(x)",
        data: n
      },
      {
        label: "tan(x)",
        data: r
      }], {
        series: {
          lines: {
            show: true
          },
          points: {
            show: true
          }
        },
        xaxis: {
          ticks: [0,
            [Math.PI / 2, "π/2"],
            [Math.PI, "π"],
            [Math.PI * 3 / 2, "3π/2"],
            [Math.PI * 2, "2π"]]
        },
        yaxis: {
          ticks: 10,
          min: -2,
          max: 2
        },
        grid: {
          backgroundColor: {
            colors: ["#fff", "#eee"]
          }
        }
      })
    }
    function o() {
      function e() {
        return Math.floor(Math.random() * (1 + 40 - 20)) + 20
      }
      function i(e, t, n) {
        $('<div id="tooltip">' + n + "</div>").css({
          position: "absolute",
          display: "none",
          top: t + 5,
          left: e + 15,
          border: "1px solid #333",
          padding: "4px",
          color: "#fff",
          "border-radius": "3px",
          "background-color": "#333",
          opacity: .8
        }).appendTo("body").fadeIn(200)
      }
      if ($("#chart_2").size() == 0) {
        return
      }
      var t = [
        [1, e()],
        [2, e()],
        [3, 2 + e()],
        [4, 3 + e()],
        [5, 5 + e()],
        [6, 10 + e()],
        [7, 15 + e()],
        [8, 20 + e()],
        [9, 25 + e()],
        [10, 30 + e()],
        [11, 35 + e()],
        [12, 25 + e()],
        [13, 15 + e()],
        [14, 20 + e()],
        [15, 45 + e()],
        [16, 50 + e()],
        [17, 65 + e()],
        [18, 70 + e()],
        [19, 85 + e()],
        [20, 80 + e()],
        [21, 75 + e()],
        [22, 80 + e()],
        [23, 75 + e()],
        [24, 70 + e()],
        [25, 65 + e()],
        [26, 75 + e()],
        [27, 80 + e()],
        [28, 85 + e()],
        [29, 90 + e()],
        [30, 95 + e()]];
      var n = [
        [1, e() - 5],
        [2, e() - 5],
        [3, e() - 5],
        [4, 6 + e()],
        [5, 5 + e()],
        [6, 20 + e()],
        [7, 25 + e()],
        [8, 36 + e()],
        [9, 26 + e()],
        [10, 38 + e()],
        [11, 39 + e()],
        [12, 50 + e()],
        [13, 51 + e()],
        [14, 12 + e()],
        [15, 13 + e()],
        [16, 14 + e()],
        [17, 15 + e()],
        [18, 15 + e()],
        [19, 16 + e()],
        [20, 17 + e()],
        [21, 18 + e()],
        [22, 19 + e()],
        [23, 20 + e()],
        [24, 21 + e()],
        [25, 14 + e()],
        [26, 24 + e()],
        [27, 25 + e()],
        [28, 26 + e()],
        [29, 27 + e()],
        [30, 31 + e()]];
      var r = $.plot($("#chart_2"), [{
        data: t,
        label: "Unique Visits"
      },
      {
        data: n,
        label: "Page Views"
      }], {
        series: {
          lines: {
            show: true,
            lineWidth: 2,
            fill: true,
            fillColor: {
              colors: [{
                opacity: .05
              },
              {
                opacity: .01
              }]
            }
          },
          points: {
            show: true
          },
          shadowSize: 2
        },
        grid: {
          hoverable: true,
          clickable: true,
          tickColor: "#eee",
          borderWidth: 0
        },
        colors: ["#FCB322", "#A5D16C", "#52e136"],
        xaxis: {
          ticks: 11,
          tickDecimals: 0
        },
        yaxis: {
          ticks: 11,
          tickDecimals: 0
        }
      });
      var s = null;
      $("#chart_2").bind("plothover", function (e, t, n) {
        $("#x").text(t.x.toFixed(2));
        $("#y").text(t.y.toFixed(2));
        if (n) {
          if (s != n.dataIndex) {
            s = n.dataIndex;
            $("#tooltip").remove();
            var r = n.datapoint[0].toFixed(2),
            o = n.datapoint[1].toFixed(2);
            i(n.pageX, n.pageY, n.series.label + " of " + r + " = " + o)
          }
        } else {
          $("#tooltip").remove();
          s = null
        }
      })
    }
    function u() {
      function o() {
        i = null;
        var e = s;
        var t = plot.getAxes();
        if (e.x < t.xaxis.min || e.x > t.xaxis.max || e.y < t.yaxis.min || e.y > t.yaxis.max) return;
        var n, o, u = plot.getData();
        for (n = 0; n < u.length; ++n) {
          var a = u[n];
          for (o = 0; o < a.data.length; ++o) if (a.data[o][0] > e.x) break;
          var f, l = a.data[o - 1],
          c = a.data[o];
          if (l == null) f = c[1];
          else if (c == null) f = l[1];
          else f = l[1] + (c[1] - l[1]) * (e.x - l[0]) / (c[0] - l[0]);
          r.eq(n).text(a.label.replace(/=.*/, "= " + f.toFixed(2)))
        }
      }
      if ($("#chart_3").size() == 0) {
        return
      }
      var e = [],
      t = [];
      for (var n = 0; n < 14; n += .1) {
        e.push([n, Math.sin(n)]);
        t.push([n, Math.cos(n)])
      }
      plot = $.plot($("#chart_3"), [{
        data: e,
        label: "sin(x) = -0.00"
      },
      {
        data: t,
        label: "cos(x) = -0.00"
      }], {
        series: {
          lines: {
            show: true
          }
        },
        crosshair: {
          mode: "x"
        },
        grid: {
          hoverable: true,
          autoHighlight: false
        },
        colors: ["#FCB322", "#A5D16C", "#52e136"],
        yaxis: {
          min: -1.2,
          max: 1.2
        }
      });
      var r = $("#chart_3 .legendLabel");
      r.each(function () {
        $(this).css("width", $(this).width())
      });
      var i = null;
      var s = null;
      $("#chart_3").bind("plothover", function (e, t, n) {
        s = t;
        if (!i) i = setTimeout(o, 50)
      })
    }
    function a() {
      function r() {
        n.setData([i()]);
        n.draw();
        setTimeout(r, t)
      }
      if ($("#chart_4").size() == 0) {
        return
      }
      var e = {
        series: {
          shadowSize: 1
        },
        lines: {
          show: true,
          lineWidth: .5,
          fill: true,
          fillColor: {
            colors: [{
              opacity: .1
            },
            {
              opacity: 1
            }]
          }
        },
        yaxis: {
          min: 0,
          max: 100,
          tickFormatter: function (e) {
            return e + "%"
          }
        },
        xaxis: {
          show: false
        },
        colors: ["#6ef146"],
        grid: {
          tickColor: "#a8a3a3",
          borderWidth: 0
        }
      };
      var t = 30;
      var n = $.plot($("#chart_4"), [i()], e);
      r()
    }
    function f() {
      function a() {
        $.plot($("#chart_5"), [e, n, r], {
          series: {
            stack: i,
            lines: {
              show: o,
              fill: true,
              steps: u
            },
            bars: {
              show: s,
              barWidth: .6
            }
          }
        })
      }
      if ($("#chart_5").size() == 0) {
        return
      }
      var e = [];
      for (var t = 0; t <= 10; t += 1) e.push([t, parseInt(Math.random() * 30)]);
      var n = [];
      for (var t = 0; t <= 10; t += 1) n.push([t, parseInt(Math.random() * 30)]);
      var r = [];
      for (var t = 0; t <= 10; t += 1) r.push([t, parseInt(Math.random() * 30)]);
      var i = 0,
      s = true,
      o = false,
      u = false;
      $(".stackControls input").click(function (e) {
        e.preventDefault();
        i = $(this).val() == "With stacking" ? true : null;
        a()
      });
      $(".graphControls input").click(function (e) {
        e.preventDefault();
        s = $(this).val().indexOf("Bars") != -1;
        o = $(this).val().indexOf("Lines") != -1;
        u = $(this).val().indexOf("steps") != -1;
        a()
      });
      a()
    }
    function l() {
      function r(e, t, n) {
        if (!n) return;
        percent = parseFloat(n.series.percent).toFixed(2);
        $("#hover").html('<span style="font-weight: bold; color: ' + n.series.color + '">' + n.series.label + " (" + percent + "%)</span>")
      }
      function i(e, t, n) {
        if (!n) return;
        percent = parseFloat(n.series.percent).toFixed(2);
        alert("" + n.series.label + ": " + percent + "%")
      }
      if ($("#graph_1").size() == 0) {
        return
      }
      var e = [];
      var t = Math.floor(Math.random() * 10) + 1;
      for (var n = 0; n < t; n++) {
        e[n] = {
          label: "Series" + (n + 1),
          data: Math.floor((Math.random() - 1) * 100) + 1
        }
      }
      $.plot($("#graph_1"), e, {
        series: {
          pie: {
            show: true,
            radius: 1,
            label: {
              show: true,
              radius: 1,
              formatter: function (e, t) {
                return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + e + "<br/>" + Math.round(t.percent) + "%</div>"
              },
              background: {
                opacity: .8
              }
            }
          }
        },
        legend: {
          show: false
        }
      });
      $.plot($("#graph_2"), e, {
        series: {
          pie: {
            show: true,
            radius: 1,
            label: {
              show: true,
              radius: 3 / 4,
              formatter: function (e, t) {
                return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + e + "<br/>" + Math.round(t.percent) + "%</div>"
              },
              background: {
                opacity: .5
              }
            }
          }
        },
        legend: {
          show: false
        }
      });
      $.plot($("#graph_3"), e, {
        series: {
          pie: {
            show: true
          }
        },
        grid: {
          hoverable: true,
          clickable: true
        }
      });
      $("#graph_3").bind("plothover", r);
      $("#graph_3").bind("plotclick", i);
      $.plot($("#graph_4"), e, {
        series: {
          pie: {
            innerRadius: .5,
            show: true
          }
        }
      })
    }
    s();
    o();
    u();
    a();
    f();
    l()
  }
  if (jQuery().fullCalendar) {
    var c = new Date;
    var h = c.getDate();
    var p = c.getMonth();
    var d = c.getFullYear();
    var v = {};
    if ($(window).width() <= 480) {
      v = {
        left: "title, prev,next",
        center: "",
        right: "month,agendaWeek,agendaDay"
      }
    } else {
      v = {
        left: "title",
        center: "",
        right: "prev,next,today,month,agendaWeek,agendaDay"
      }
    }
    var m = function (e) {
      var t = {
        title: $.trim(e.text())
      };
      e.data("eventObject", t);
      e.draggable({
        zIndex: 999,
        revert: true,
        revertDuration: 0
      })
    };
    var g = function (e, t) {
      e = e.length == 0 ? "Untitled Event" : e;
      t = t.length == 0 ? "default" : t;
      var n = $('<div data-class="label label-' + t + '" class="external-event label label-' + t + '">' + e + "</div>");
      jQuery("#event_box").append(n);
      m(n)
    };
    $("#external-events div.external-event").each(function () {
      m($(this))
    });
    $("#event_add").click(function () {
      var e = $("#event_title").val();
      var t = $("#event_priority").val();
      g(e, t)
    });
    var y = function () {
      $("#event_priority_chzn .chzn-search").hide();
      $("#event_priority_chzn_o_1").html('<span class="label label-default">' + $("#event_priority_chzn_o_1").text() + "</span>");
      $("#event_priority_chzn_o_2").html('<span class="label label-success">' + $("#event_priority_chzn_o_2").text() + "</span>");
      $("#event_priority_chzn_o_3").html('<span class="label label-info">' + $("#event_priority_chzn_o_3").text() + "</span>");
      $("#event_priority_chzn_o_4").html('<span class="label label-warning">' + $("#event_priority_chzn_o_4").text() + "</span>");
      $("#event_priority_chzn_o_5").html('<span class="label label-important">' + $("#event_priority_chzn_o_5").text() + "</span>")
    };
    $("#event_priority_chzn").click(y);
    g("My Event 1", "default");
    g("My Event 2", "success");
    g("My Event 3", "info");
    g("My Event 4", "warning");
    g("My Event 5", "important");
    g("My Event 6", "success");
    g("My Event 7", "info");
    g("My Event 8", "warning");
    g("My Event 9", "success");
    g("My Event 10", "default");
    $("#calendar").fullCalendar({
      header: v,
      editable: true,
      droppable: true,
      drop: function (e, t) {
        var n = $(this).data("eventObject");
        var r = $.extend({},
        n);
        r.start = e;
        r.allDay = t;
        r.className = $(this).attr("data-class");
        $("#calendar").fullCalendar("renderEvent", r, true);
        if ($("#drop-remove").is(":checked")) {
          $(this).remove()
        }
      },
      events: [{
        title: "All Day Event",
        start: new Date(d, p, 1),
        className: "label label-default"
      },
      {
        title: "Long Event",
        start: new Date(d, p, h - 5),
        end: new Date(d, p, h - 2),
        className: "label label-success"
      },
      {
        id: 999,
        title: "Repeating Event",
        start: new Date(d, p, h - 3, 16, 0),
        allDay: false,
        className: "label label-default"
      },
      {
        id: 999,
        title: "Repeating Event",
        start: new Date(d, p, h + 4, 16, 0),
        allDay: false,
        className: "label label-important"
      },
      {
        title: "Meeting",
        start: new Date(d, p, h, 10, 30),
        allDay: false,
        className: "label label-info"
      },
      {
        title: "Lunch",
        start: new Date(d, p, h, 12, 0),
        end: new Date(d, p, h, 14, 0),
        allDay: false,
        className: "label label-warning"
      },
      {
        title: "Birthday Party",
        start: new Date(d, p, h + 1, 19, 0),
        end: new Date(d, p, h + 1, 22, 30),
        allDay: false,
        className: "label label-success"
      },
      {
        title: "Click for Google",
        start: new Date(d, p, 28),
        end: new Date(d, p, 29),
        url: "http://google.com/",
        className: "label label-warning"
      }]
    });
    $(".fc-button").addClass("btn")
  }
  if (jQuery.plot) {
    var b = $("#visitors-chart");
    if ($(b).size() == 0) {
      return
    }
    var w = [
      [1, 35],
      [2, 48],
      [3, 34],
      [4, 54],
      [5, 46],
      [6, 37],
      [7, 40],
      [8, 55],
      [9, 43],
      [10, 61],
      [11, 52],
      [12, 57],
      [13, 64],
      [14, 56],
      [15, 48],
      [16, 53],
      [17, 50],
      [18, 59],
      [19, 66],
      [20, 73],
      [21, 81],
      [22, 75],
      [23, 86],
      [24, 77],
      [25, 86],
      [26, 85],
      [27, 79],
      [28, 83],
      [29, 95],
      [30, 92]];
    var E = [
      [1, 9],
      [2, 15],
      [3, 16],
      [4, 21],
      [5, 19],
      [6, 15],
      [7, 22],
      [8, 29],
      [9, 20],
      [10, 27],
      [11, 32],
      [12, 37],
      [13, 34],
      [14, 30],
      [15, 28],
      [16, 23],
      [17, 28],
      [18, 35],
      [19, 31],
      [20, 28],
      [21, 33],
      [22, 25],
      [23, 27],
      [24, 24],
      [25, 36],
      [26, 25],
      [27, 39],
      [28, 28],
      [29, 35],
      [30, 42]];
    var S = ["#88bbc8", "#ed7a53", "#9FC569", "#bbdce3", "#9a3b1b", "#5a8022", "#2c7282"];
    var x = {
      grid: {
        show: true,
        aboveData: true,
        color: "#3f3f3f",
        labelMargin: 5,
        axisMargin: 0,
        borderWidth: 0,
        borderColor: null,
        minBorderMargin: 5,
        clickable: true,
        hoverable: true,
        autoHighlight: true,
        mouseActiveRadius: 20
      },
      series: {
        grow: {
          active: false,
          stepMode: "linear",
          steps: 50,
          stepDelay: true
        },
        lines: {
          show: true,
          fill: true,
          lineWidth: 3,
          steps: false
        },
        points: {
          show: true,
          radius: 4,
          symbol: "circle",
          fill: true,
          borderColor: "#fff"
        }
      },
      legend: {
        position: "ne",
        margin: [0, -25],
        noColumns: 0,
        labelBoxBorderColor: null,
        labelFormatter: function (e, t) {
          return e + "&nbsp;&nbsp;"
        }
      },
      yaxis: {
        min: 0
      },
      xaxis: {
        ticks: 11,
        tickDecimals: 0
      },
      colors: S,
      shadowSize: 1,
      tooltip: true,
      tooltipOpts: {
        content: "%s : %y.0",
        defaultTheme: false,
        shifts: {
          x: -30,
          y: -50
        }
      }
    };
    $.plot(b, [{
      label: "Visits",
      data: w,
      lines: {
        fillColor: "#f2f7f9"
      },
      points: {
        fillColor: "#88bbc8"
      }
    },
    {
      label: "Unique Visits",
      data: E,
      lines: {
        fillColor: "#fff8f2"
      },
      points: {
        fillColor: "#ed7a53"
      }
    }], x)
  }
  if (jQuery().sparkline) {
    $(".inline-sparkline").sparkline("html", {
      width: "70px",
      height: "26px",
      lineWidth: 2,
      spotRadius: 3,
      lineColor: "#88bbc8",
      fillColor: "#f2f7f9",
      spotColor: "#14ae48",
      maxSpotColor: "#e72828",
      minSpotColor: "#f7941d"
    })
  }
})