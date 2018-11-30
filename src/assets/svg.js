! function (l) {
  var e, s = '<svg><symbol id="icon-homepage" viewBox="0 0 1030 1024"><path d="M996.7104 441.97888 609.4336 38.8096C585.36448 13.77792 553.20064 0 518.72256 0S452.08064 13.77792 428.01664 38.8096L40.73984 441.97888c-39.9616 41.61536-34.816 77.58336-28.2112 92.61056 4.70528 10.65984 20.60288 39.9616 66.39616 39.9616l56.76544 0 0 310.15936c0 70.41536 50.56 136.71936 122.41408 136.71936l65.14688 0L422.9632 1021.42976l0-72.87808 0-255.36c0-35.19488-5.32992-54.79936 30.61248-54.79936l65.14688 0 65.14688 0c35.93728 0 30.61248 19.60448 30.61248 54.79936l0 255.36 0 72.87808 99.71712 0 65.152 0c71.84896 0 122.40384-66.304 122.40384-136.71936l0-310.15936 56.77056 0c45.77792 0 61.68576-29.30176 66.39616-39.9616C1031.53664 519.56736 1036.672 483.59424 996.7104 441.97888z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M965.844997 881.865839 754.477009 664.678308c50.566676-69.379137 80.548524-155.630546 80.548524-249.027703C835.025533 186.084139 653.937175 0 430.548408 0 207.09722 0 26.008862 186.084139 26.008862 415.650605c0 229.622748 181.089381 415.653675 404.540569 415.653675 73.90522 0 143.193283-20.342304 202.813149-55.973826l218.011292 224.12657c31.629371 32.454156 82.899058 32.454156 114.472148 0C997.480508 967.001845 997.480508 914.321018 965.844997 881.865839zM430.548408 720.473055c-163.835416 0-296.68205-136.462998-296.68205-304.82245 0-168.298054 132.846634-304.823474 296.68205-304.823474 163.80267 0 296.64828 136.52542 296.64828 304.823474C727.196689 584.010057 594.351078 720.473055 430.548408 720.473055z"  ></path></symbol><symbol id="icon-movie" viewBox="0 0 1024 1024"><path d="M488 416c-57.6 0-104-46.4-104-104s46.4-104 104-104 104 46.4 104 104-46.4 104-104 104z m0-144c-22.4 0-40 17.6-40 40s17.6 40 40 40 40-17.6 40-40-17.6-40-40-40zM312 640c-57.6 0-104-46.4-104-104s46.4-104 104-104 104 46.4 104 104-46.4 104-104 104z m0-144c-22.4 0-40 17.6-40 40s17.6 40 40 40 40-17.6 40-40-17.6-40-40-40z m224 320c-57.6 0-104-46.4-104-104s46.4-104 104-104 104 46.4 104 104-46.4 104-104 104z m0-144c-22.4 0-40 17.6-40 40s17.6 40 40 40 40-17.6 40-40-17.6-40-40-40z m176-80c-57.6 0-104-46.4-104-104s46.4-104 104-104 104 46.4 104 104-46.4 104-104 104z m0-144c-22.4 0-40 17.6-40 40s17.6 40 40 40 40-17.6 40-40-17.6-40-40-40z m216 512H512C265.6 960 64 758.4 64 512S265.6 64 512 64s448 201.6 448 448c0 121.6-48 235.2-134.4 320-12.8 12.8-33.6 12.8-44.8 0-12.8-12.8-12.8-33.6 0-44.8C854.4 713.6 896 616 896 512c0-211.2-172.8-384-384-384S128 300.8 128 512s172.8 384 384 384h416c17.6 0 32 14.4 32 32s-14.4 32-32 32z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");
  if (t && !l.__iconfont__svg__cssinject__) {
    l.__iconfont__svg__cssinject__ = !0;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
    } catch (e) {
      console && console.log(e)
    }
  }! function (e) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(e, 0);
      else {
        var t = function () {
          document.removeEventListener("DOMContentLoaded", t, !1), e()
        };
        document.addEventListener("DOMContentLoaded", t, !1)
      }
    else document.attachEvent && (n = e, o = l.document, c = !1, i = function () {
      c || (c = !0, n())
    }, (s = function () {
      try {
        o.documentElement.doScroll("left")
      } catch (e) {
        return void setTimeout(s, 50)
      }
      i()
    })(), o.onreadystatechange = function () {
      "complete" == o.readyState && (o.onreadystatechange = null, i())
    });
    var n, o, c, i, s
  }(function () {
    var e, t, n, o, c, i;
    (e = document.createElement("div")).innerHTML = s, s = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", n = t, (o = document.body).firstChild ? (c = n, (i = o.firstChild).parentNode.insertBefore(c, i)) : o.appendChild(n))
  })
}(window);
