// Home headline hero (b133, picked by title b134): for each article look, the product its title is about, background
// removed (rembg isnet-general-use from the product JPG, cropped to the garment). Written by tools/make-cutouts.py —
// rules in design/CUTOUTS.md. CUTS: item -> [path, mean relative luminance of the garment] (the luminance picks the
// color of the headline letters that cross it). HERO: look -> item (edit a row by hand to fix a pick; the tool keeps it).
(function () {
  var L = window.WX_LOOKS; if (!L) return;
  var CUTS = {
    "bn15-01-run-f.outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/01-running/products/01-outer.cut.webp",
        0.104
    ],
    "bn15-02-run-f.outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/02-running/products/01-outer.cut.webp",
        0.418
    ],
    "bn15-03-run-f.outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/03-running/products/01-outer.cut.webp",
        0.054
    ],
    "bn15-04-run-f.outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/04-running/products/01-outer.cut.webp",
        0.207
    ],
    "bn15-05-run-f.outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/05-running/products/01-outer.cut.webp",
        0.042
    ],
    "bn15-11-minimal-f.outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/11-minimal/products/01-outer.cut.webp",
        0.032
    ],
    "bn15-12-minimal-f.top": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/12-minimal/products/02-top.cut.webp",
        0.024
    ],
    "bn15-13-minimal-f.top": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/13-minimal/products/02-top.cut.webp",
        0.65
    ],
    "bn15-14-minimal-f.accessory": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/14-minimal/products/05-scarf.cut.webp",
        0.081
    ],
    "bn15-15-minimal-f.bottom": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/15-minimal/products/04-bottom.cut.webp",
        0.692
    ],
    "bn15-01-run-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/01-running/products/01-outer.cut.webp",
        0.145
    ],
    "bn15-02-run-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/02-running/products/01-outer.cut.webp",
        0.112
    ],
    "bn15-03-run-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/03-running/products/01-outer.cut.webp",
        0.064
    ],
    "bn15-04-run-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/04-running/products/01-outer.cut.webp",
        0.704
    ],
    "bn15-05-run-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/05-running/products/01-outer.cut.webp",
        0.069
    ],
    "bn15-06-street-m.accessory": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/06-street/products/05-scarf.cut.webp",
        0.032
    ],
    "bn15-07-street-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/07-street/products/01-outer.cut.webp",
        0.033
    ],
    "bn15-08-street-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/08-street/products/01-outer.cut.webp",
        0.052
    ],
    "bn15-09-street-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/09-street/products/01-outer.cut.webp",
        0.096
    ],
    "bn15-10-street-m.shoes": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/10-street/products/04-shoes.cut.webp",
        0.055
    ],
    "bn15-11-minimal-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/11-minimal/products/01-outer.cut.webp",
        0.024
    ],
    "bn15-12-minimal-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/12-minimal/products/01-outer.cut.webp",
        0.182
    ],
    "bn15-13-minimal-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/13-minimal/products/01-outer.cut.webp",
        0.017
    ],
    "bn15-14-minimal-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/14-minimal/products/01-outer.cut.webp",
        0.04
    ],
    "bn15-15-minimal-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/night/15-minimal/products/01-outer.cut.webp",
        0.301
    ],
    "bd4-01-run-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/01-running/products/01-outer.cut.webp",
        0.093
    ],
    "bd4-02-run-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/02-running/products/01-outer.cut.webp",
        0.49
    ],
    "bd4-03-run-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/03-running/products/01-outer.cut.webp",
        0.048
    ],
    "bd4-04-run-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/04-running/products/01-outer.cut.webp",
        0.186
    ],
    "bd15-05-run-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/05-running/products/01-outer.cut.webp",
        0.032
    ],
    "bd15-06-street-m.top": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/06-street/products/02-top.cut.webp",
        0.428
    ],
    "bd15-07-street-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/07-street/products/01-outer.cut.webp",
        0.072
    ],
    "bd15-08-street-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/08-street/products/01-outer.cut.webp",
        0.156
    ],
    "bd15-09-street-m.accessory": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/09-street/products/05-scarf.cut.webp",
        0.057
    ],
    "bd15-10-street-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/10-street/products/01-outer.cut.webp",
        0.359
    ],
    "bd15-11-minimal-m.top": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/11-minimal/products/02-top.cut.webp",
        0.712
    ],
    "bd15-12-minimal-m.top": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/12-minimal/products/02-top.cut.webp",
        0.045
    ],
    "bd15-13-minimal-m.outer": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/13-minimal/products/01-outer.cut.webp",
        0.017
    ],
    "bd15-14-minimal-m.accessory": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/14-minimal/products/05-accessory.cut.webp",
        0.11
    ],
    "bd15-15-minimal-m.top": [
        "look/berlin-complete/Sunny/Chilly/Male/35+/day/15-minimal/products/02-top.cut.webp",
        0.737
    ],
    "bd15-01-run-f.01-outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/01-running/products/01-outer.cut.webp",
        0.113
    ],
    "bd15-02-run-f.01-outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/02-running/products/01-outer.cut.webp",
        0.522
    ],
    "bd15-03-run-f.01-outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/03-running/products/01-outer.cut.webp",
        0.068
    ],
    "bd15-04-run-f.01-outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/04-running/products/01-outer.cut.webp",
        0.237
    ],
    "bd15-05-run-f.01-outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/05-running/products/01-outer.cut.webp",
        0.031
    ],
    "bd15-06-street-f.02-top": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/06-street/products/02-top.cut.webp",
        0.344
    ],
    "bd15-07-street-f.01-outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/07-street/products/01-outer.cut.webp",
        0.07
    ],
    "bd15-08-street-f.01-outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/08-street/products/01-outer.cut.webp",
        0.17
    ],
    "bd15-09-street-f.05-scarf": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/09-street/products/05-scarf.cut.webp",
        0.033
    ],
    "bd15-10-street-f.01-outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/10-street/products/01-outer.cut.webp",
        0.448
    ],
    "bd15-11-minimal-f.02-top": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/11-minimal/products/02-top.cut.webp",
        0.716
    ],
    "bd15-12-minimal-f.02-top": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/12-minimal/products/02-top.cut.webp",
        0.035
    ],
    "bd15-13-minimal-f.01-outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/13-minimal/products/01-outer.cut.webp",
        0.015
    ],
    "bd15-14-minimal-f.04-scarf": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/14-minimal/products/04-scarf.cut.webp",
        0.136
    ],
    "bd15-15-minimal-f.02-top": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/day/15-minimal/products/02-top.cut.webp",
        0.718
    ],
    "oc15-01-run-m.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/01-running/products/01-outer.cut.webp",
        0.047
    ],
    "oc15-02-run-m.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/02-running/products/01-outer.cut.webp",
        0.199
    ],
    "oc15-03-run-m.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/03-running/products/01-outer.cut.webp",
        0.361
    ],
    "oc15-04-run-m.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/04-running/products/01-outer.cut.webp",
        0.122
    ],
    "oc15-05-run-m.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/05-running/products/01-outer.cut.webp",
        0.435
    ],
    "oc15-06-street-m.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/06-street/products/01-outer.webp",
        0.048
    ],
    "oc15-07-street-m.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/07-street/products/01-outer.webp",
        0.217
    ],
    "oc15-08-street-m.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/08-street/products/01-outer.webp",
        0.097
    ],
    "oc15-09-street-m.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/09-street/products/01-outer.webp",
        0.052
    ],
    "oc15-10-street-m.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/10-street/products/01-outer.webp",
        0.039
    ],
    "oc15-11-minimal-m.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/11-minimal/products/01-outer.cut.webp",
        0.016
    ],
    "oc15-12-minimal-m.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/12-minimal/products/01-outer.cut.webp",
        0.031
    ],
    "oc15-13-minimal-m.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/13-minimal/products/01-outer.cut.webp",
        0.087
    ],
    "oc15-14-minimal-m.06-bag": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/14-minimal/products/06-bag.cut.webp",
        0.394
    ],
    "oc15-15-minimal-m.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/day/15-minimal/products/01-outer.cut.webp",
        0.015
    ],
    "of15-01-run-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/01-running/products/01-outer.cut.webp",
        0.126
    ],
    "of15-02-run-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/02-running/products/01-outer.cut.webp",
        0.299
    ],
    "of15-03-run-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/03-running/products/01-outer.cut.webp",
        0.14
    ],
    "of15-04-run-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/04-running/products/01-outer.cut.webp",
        0.045
    ],
    "of15-05-run-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/05-running/products/01-outer.cut.webp",
        0.059
    ],
    "of15-06-street-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/06-street/products/01-outer.cut.webp",
        0.057
    ],
    "of15-07-street-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/07-street/products/01-outer.cut.webp",
        0.083
    ],
    "of15-08-street-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/08-street/products/01-outer.cut.webp",
        0.083
    ],
    "of15-09-street-f.02-top": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/09-street/products/02-top.cut.webp",
        0.165
    ],
    "of15-10-street-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/10-street/products/01-outer.cut.webp",
        0.031
    ],
    "of15-11-minimal-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/11-minimal/products/01-outer.cut.webp",
        0.04
    ],
    "of15-12-minimal-f.02-top": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/12-minimal/products/02-top.cut.webp",
        0.725
    ],
    "of15-13-minimal-f.05-bag": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/13-minimal/products/05-bag.cut.webp",
        0.118
    ],
    "of15-14-minimal-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/14-minimal/products/01-outer.cut.webp",
        0.012
    ],
    "of15-15-minimal-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/day/15-minimal/products/01-outer.cut.webp",
        0.029
    ],
    "ofn-01-run-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/01-running/products/01-outer.cut.webp",
        0.096
    ],
    "ofn-02-run-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/02-running/products/01-outer.cut.webp",
        0.477
    ],
    "ofn-03-run-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/03-running/products/01-outer.cut.webp",
        0.073
    ],
    "ofn-04-run-f.02-top": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/04-running/products/02-top.cut.webp",
        0.275
    ],
    "ofn-05-run-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/05-running/products/01-outer.cut.webp",
        0.059
    ],
    "ofn-06-street-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/06-street/products/01-outer.cut.webp",
        0.26
    ],
    "ofn-07-street-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/07-street/products/01-outer.cut.webp",
        0.16
    ],
    "ofn-08-street-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/08-street/products/01-outer.cut.webp",
        0.078
    ],
    "ofn-09-street-f.02-top": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/09-street/products/02-top.cut.webp",
        0.385
    ],
    "ofn-10-street-f.02-top": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/10-street/products/02-top.cut.webp",
        0.129
    ],
    "ofn-11-minimal-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/11-minimal/products/01-outer.cut.webp",
        0.458
    ],
    "ofn-12-minimal-f.05-scarf": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/12-minimal/products/05-scarf.cut.webp",
        0.066
    ],
    "ofn-13-minimal-f.02-top": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/13-minimal/products/02-top.cut.webp",
        0.017
    ],
    "ofn-14-minimal-f.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/14-minimal/products/01-outer.cut.webp",
        0.037
    ],
    "ofn-15-minimal-f.02-top": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/15-minimal/products/02-top.cut.webp",
        0.09
    ],
    "bl-light-chilly-m-35-day-run-01.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/running/01/products/01-outer.cut.webp",
        0.175
    ],
    "bl-light-chilly-m-35-day-run-02.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/running/02/products/01-outer.cut.webp",
        0.714
    ],
    "bl-light-chilly-m-35-day-run-03.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/running/03/products/01-outer.cut.webp",
        0.044
    ],
    "bl-light-chilly-m-35-day-run-04.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/running/04/products/01-outer.cut.webp",
        0.077
    ],
    "bl-light-chilly-m-35-day-run-05.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/running/05/products/01-outer.cut.webp",
        0.432
    ],
    "bl-light-chilly-m-35-day-street-01.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/street/01/products/01-outer.cut.webp",
        0.198
    ],
    "bl-light-chilly-m-35-day-street-02.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/street/02/products/01-outer.cut.webp",
        0.077
    ],
    "bl-light-chilly-m-35-day-street-03.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/street/03/products/01-outer.cut.webp",
        0.042
    ],
    "bl-light-chilly-m-35-day-street-04.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/street/04/products/01-outer.cut.webp",
        0.043
    ],
    "bl-light-chilly-m-35-day-street-05.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/street/05/products/01-outer.cut.webp",
        0.252
    ],
    "bl-light-chilly-m-35-day-minimal-01.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/minimal/01/products/01-outer.cut.webp",
        0.048
    ],
    "bl-light-chilly-m-35-day-minimal-02.07-umbrella": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/minimal/02/products/07-umbrella.cut.webp",
        0.049
    ],
    "bl-light-chilly-m-35-day-minimal-03.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/minimal/03/products/01-outer.cut.webp",
        0.025
    ],
    "bl-light-chilly-m-35-day-minimal-04.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/minimal/04/products/01-outer.cut.webp",
        0.058
    ],
    "bl-light-chilly-m-35-day-minimal-05.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/day/minimal/05/products/01-outer.cut.webp",
        0.022
    ],
    "bl-light-chilly-f-35-day-minimal-01.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/day/minimal/01/products/01-outer.cut.webp",
        0.052
    ],
    "bl-light-chilly-f-35-day-minimal-02.02-top": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/day/minimal/02/products/02-top.cut.webp",
        0.052
    ],
    "bl-light-chilly-f-35-day-minimal-03.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/day/minimal/03/products/01-outer.cut.webp",
        0.031
    ],
    "bl-light-chilly-f-35-day-minimal-04.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/day/minimal/04/products/01-outer.cut.webp",
        0.084
    ],
    "bl-light-chilly-f-35-day-minimal-05.02-top": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/day/minimal/05/products/02-top.cut.webp",
        0.035
    ],
    "oc-unclassified-m-35-evening-minimal-01.07-scarf": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/night/minimal/01/products/07-scarf.cut.webp",
        0.368
    ],
    "oc-unclassified-m-35-evening-minimal-02.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/night/minimal/02/products/01-outer.cut.webp",
        0.051
    ],
    "oc-unclassified-m-35-evening-minimal-03.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/night/minimal/03/products/01-outer.cut.webp",
        0.433
    ],
    "oc-unclassified-m-35-evening-minimal-04.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/night/minimal/04/products/01-outer.cut.webp",
        0.018
    ],
    "oc-unclassified-m-35-evening-minimal-05.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Male/35+/night/minimal/05/products/01-outer.cut.webp",
        0.011
    ],
    "bl-light-chilly-f-35-day-casual-01.07-headwear": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/day/casual/01/products/07-headwear.cut.webp",
        0.674
    ],
    "bl-light-chilly-f-35-day-casual-02.02-top": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/day/casual/02/products/02-top.cut.webp",
        0.091
    ],
    "bl-light-chilly-f-35-day-casual-03.02-top": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/day/casual/03/products/02-top.cut.webp",
        0.035
    ],
    "bl-light-chilly-f-35-day-casual-04.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/day/casual/04/products/01-outer.cut.webp",
        0.093
    ],
    "bl-light-chilly-f-35-day-casual-05.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/day/casual/05/products/01-outer.cut.webp",
        0.022
    ],
    "bn15-06-street-f.top": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/06-street/products/02-top.cut.webp",
        0.285
    ],
    "bn15-07-street-f.outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/07-street/products/01-outer.cut.webp",
        0.184
    ],
    "bn15-08-street-f.outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/08-street/products/01-outer.cut.webp",
        0.147
    ],
    "bn15-09-street-f.accessory": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/09-street/products/05-scarf.cut.webp",
        0.031
    ],
    "bn15-10-street-f.outer": [
        "look/berlin-complete/Sunny/Chilly/Female/35+/night/10-street/products/01-outer.cut.webp",
        0.493
    ],
    "bl-light-chilly-f-35-night-street-01.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/street/01/products/01-outer.webp",
        0.128
    ],
    "bl-light-chilly-f-35-night-street-02.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/street/02/products/01-outer.webp",
        0.042
    ],
    "bl-light-chilly-f-35-night-street-03.05-umbrella": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/street/03/products/05-umbrella.webp",
        0.028
    ],
    "bl-light-chilly-f-35-night-street-04.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/street/04/products/01-outer.webp",
        0.046
    ],
    "bl-light-chilly-f-35-night-street-05.04-scarf": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/street/05/products/04-scarf.webp",
        0.023
    ],
    "bl-light-chilly-f-35-night-street-20261024-01.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/street-20261024/01/products/01-outer.webp",
        0.074
    ],
    "bl-light-chilly-f-35-night-street-20261024-02.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/street-20261024/02/products/01-outer.webp",
        0.085
    ],
    "bl-light-chilly-f-35-night-street-20261024-03.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/street-20261024/03/products/01-outer.webp",
        0.035
    ],
    "bl-light-chilly-f-35-night-street-20261024-04.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/street-20261024/04/products/01-outer.webp",
        0.04
    ],
    "bl-light-chilly-f-35-night-street-20261024-05.04-scarf": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/street-20261024/05/products/04-scarf.webp",
        0.26
    ],
    "bl-light-chilly-f-35-night-minimal-01.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/minimal/01/products/01-outer.webp",
        0.037
    ],
    "bl-light-chilly-f-35-night-minimal-02.02-top": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/minimal/02/products/02-top.webp",
        0.052
    ],
    "bl-light-chilly-f-35-night-minimal-03.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/minimal/03/products/01-outer.webp",
        0.04
    ],
    "bl-light-chilly-f-35-night-minimal-04.02-top": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/minimal/04/products/02-top.webp",
        0.087
    ],
    "bl-light-chilly-f-35-night-minimal-05.02-accessory": [
        "look/berlin-complete/Rain/Light/Chilly/Female/35+/night/minimal/05/products/02-accessory.webp",
        0.341
    ],
    "oc-chilly-f35-night-running-20261025-01.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/running-20261025/01/products/01-outer.webp",
        0.121
    ],
    "oc-chilly-f35-night-running-20261025-02.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/running-20261025/02/products/01-outer.webp",
        0.048
    ],
    "oc-chilly-f35-night-running-20261025-03.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/running-20261025/03/products/01-outer.webp",
        0.159
    ],
    "oc-chilly-f35-night-running-20261025-04.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/running-20261025/04/products/01-outer.webp",
        0.042
    ],
    "oc-chilly-f35-night-running-20261025-05.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/running-20261025/05/products/01-outer.webp",
        0.274
    ],
    "oc-chilly-f35-night-street-20261025-06.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/street-20261025/06/products/01-outer.webp",
        0.028
    ],
    "oc-chilly-f35-night-street-20261025-07.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/street-20261025/07/products/01-outer.webp",
        0.147
    ],
    "oc-chilly-f35-night-street-20261025-08.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/street-20261025/08/products/01-outer.webp",
        0.099
    ],
    "oc-chilly-f35-night-street-20261025-09.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/street-20261025/09/products/01-outer.webp",
        0.017
    ],
    "oc-chilly-f35-night-street-20261025-10.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/street-20261025/10/products/01-outer.webp",
        0.44
    ],
    "oc-chilly-f35-night-minimal-20261025-11.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/minimal-20261025/11/products/01-outer.webp",
        0.038
    ],
    "oc-chilly-f35-night-minimal-20261025-12.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/minimal-20261025/12/products/01-outer.webp",
        0.185
    ],
    "oc-chilly-f35-night-minimal-20261025-13.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/minimal-20261025/13/products/01-outer.webp",
        0.012
    ],
    "oc-chilly-f35-night-minimal-20261025-14.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/minimal-20261025/14/products/01-outer.webp",
        0.226
    ],
    "oc-chilly-f35-night-minimal-20261025-15.01-outer": [
        "look/berlin-complete/Overcast/Chilly/Female/35+/night/minimal-20261025/15/products/01-outer.webp",
        0.016
    ],
    "rn-chilly-f35-day-run-20261025-01.01-outer": [
        "look/berlin-complete/Rain/Normal/Chilly/Female/35+/day/running-20261025/01/products/01-outer.webp",
        0.121
    ],
    "rn-chilly-f35-day-run-20261025-02.01-outer": [
        "look/berlin-complete/Rain/Normal/Chilly/Female/35+/day/running-20261025/02/products/01-outer.webp",
        0.164
    ],
    "rn-chilly-f35-day-run-20261025-03.01-outer": [
        "look/berlin-complete/Rain/Normal/Chilly/Female/35+/day/running-20261025/03/products/01-outer.webp",
        0.089
    ],
    "rn-chilly-f35-day-run-20261025-04.01-outer": [
        "look/berlin-complete/Rain/Normal/Chilly/Female/35+/day/running-20261025/04/products/01-outer.webp",
        0.184
    ],
    "rn-chilly-f35-day-run-20261025-05.01-outer": [
        "look/berlin-complete/Rain/Normal/Chilly/Female/35+/day/running-20261025/05/products/01-outer.webp",
        0.042
    ],
    "rl-chilly-m35-night-run-20261025-01.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/night/running-20261025/01/products/01-outer.webp",
        0.045
    ],
    "rl-chilly-m35-night-run-20261025-02.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/night/running-20261025/02/products/01-outer.webp",
        0.101
    ],
    "rl-chilly-m35-night-run-20261025-03.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/night/running-20261025/03/products/01-outer.webp",
        0.068
    ],
    "rl-chilly-m35-night-run-20261025-04.02-top": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/night/running-20261025/04/products/02-top.webp",
        0.036
    ],
    "rl-chilly-m35-night-run-20261025-05.01-outer": [
        "look/berlin-complete/Rain/Light/Chilly/Male/35+/night/running-20261025/05/products/01-outer.webp",
        0.174
    ]
};
  var HERO = {
    "bn15-01-run-f": "bn15-01-run-f.outer",
    "bn15-02-run-f": "bn15-02-run-f.outer",
    "bn15-03-run-f": "bn15-03-run-f.outer",
    "bn15-04-run-f": "bn15-04-run-f.outer",
    "bn15-05-run-f": "bn15-05-run-f.outer",
    "bn15-06-street-f": "bn15-06-street-f.top",
    "bn15-07-street-f": "bn15-07-street-f.outer",
    "bn15-08-street-f": "bn15-08-street-f.outer",
    "bn15-09-street-f": "bn15-09-street-f.accessory",
    "bn15-10-street-f": "bn15-10-street-f.outer",
    "bn15-11-minimal-f": "bn15-11-minimal-f.outer",
    "bn15-12-minimal-f": "bn15-12-minimal-f.top",
    "bn15-13-minimal-f": "bn15-13-minimal-f.top",
    "bn15-14-minimal-f": "bn15-14-minimal-f.accessory",
    "bn15-15-minimal-f": "bn15-15-minimal-f.bottom",
    "bn15-01-run-m": "bn15-01-run-m.outer",
    "bn15-02-run-m": "bn15-02-run-m.outer",
    "bn15-03-run-m": "bn15-03-run-m.outer",
    "bn15-04-run-m": "bn15-04-run-m.outer",
    "bn15-05-run-m": "bn15-05-run-m.outer",
    "bn15-06-street-m": "bn15-06-street-m.accessory",
    "bn15-07-street-m": "bn15-07-street-m.outer",
    "bn15-08-street-m": "bn15-08-street-m.outer",
    "bn15-09-street-m": "bn15-09-street-m.outer",
    "bn15-10-street-m": "bn15-10-street-m.shoes",
    "bn15-11-minimal-m": "bn15-11-minimal-m.outer",
    "bn15-12-minimal-m": "bn15-12-minimal-m.outer",
    "bn15-13-minimal-m": "bn15-13-minimal-m.outer",
    "bn15-14-minimal-m": "bn15-14-minimal-m.outer",
    "bn15-15-minimal-m": "bn15-15-minimal-m.outer",
    "bd4-01-run-m": "bd4-01-run-m.outer",
    "bd4-02-run-m": "bd4-02-run-m.outer",
    "bd4-03-run-m": "bd4-03-run-m.outer",
    "bd4-04-run-m": "bd4-04-run-m.outer",
    "bd15-05-run-m": "bd15-05-run-m.outer",
    "bd15-06-street-m": "bd15-06-street-m.top",
    "bd15-07-street-m": "bd15-07-street-m.outer",
    "bd15-08-street-m": "bd15-08-street-m.outer",
    "bd15-09-street-m": "bd15-09-street-m.accessory",
    "bd15-10-street-m": "bd15-10-street-m.outer",
    "bd15-11-minimal-m": "bd15-11-minimal-m.top",
    "bd15-12-minimal-m": "bd15-12-minimal-m.top",
    "bd15-13-minimal-m": "bd15-13-minimal-m.outer",
    "bd15-14-minimal-m": "bd15-14-minimal-m.accessory",
    "bd15-15-minimal-m": "bd15-15-minimal-m.top",
    "bd15-01-run-f": "bd15-01-run-f.01-outer",
    "bd15-02-run-f": "bd15-02-run-f.01-outer",
    "bd15-03-run-f": "bd15-03-run-f.01-outer",
    "bd15-04-run-f": "bd15-04-run-f.01-outer",
    "bd15-05-run-f": "bd15-05-run-f.01-outer",
    "bd15-06-street-f": "bd15-06-street-f.02-top",
    "bd15-07-street-f": "bd15-07-street-f.01-outer",
    "bd15-08-street-f": "bd15-08-street-f.01-outer",
    "bd15-09-street-f": "bd15-09-street-f.05-scarf",
    "bd15-10-street-f": "bd15-10-street-f.01-outer",
    "bd15-11-minimal-f": "bd15-11-minimal-f.02-top",
    "bd15-12-minimal-f": "bd15-12-minimal-f.02-top",
    "bd15-13-minimal-f": "bd15-13-minimal-f.01-outer",
    "bd15-14-minimal-f": "bd15-14-minimal-f.04-scarf",
    "bd15-15-minimal-f": "bd15-15-minimal-f.02-top",
    "oc15-01-run-m": "oc15-01-run-m.01-outer",
    "oc15-02-run-m": "oc15-02-run-m.01-outer",
    "oc15-03-run-m": "oc15-03-run-m.01-outer",
    "oc15-04-run-m": "oc15-04-run-m.01-outer",
    "oc15-05-run-m": "oc15-05-run-m.01-outer",
    "oc15-06-street-m": "oc15-06-street-m.01-outer",
    "oc15-07-street-m": "oc15-07-street-m.01-outer",
    "oc15-08-street-m": "oc15-08-street-m.01-outer",
    "oc15-09-street-m": "oc15-09-street-m.01-outer",
    "oc15-10-street-m": "oc15-10-street-m.01-outer",
    "oc15-11-minimal-m": "oc15-11-minimal-m.01-outer",
    "oc15-12-minimal-m": "oc15-12-minimal-m.01-outer",
    "oc15-13-minimal-m": "oc15-13-minimal-m.01-outer",
    "oc15-14-minimal-m": "oc15-14-minimal-m.06-bag",
    "oc15-15-minimal-m": "oc15-15-minimal-m.01-outer",
    "of15-01-run-f": "of15-01-run-f.01-outer",
    "of15-02-run-f": "of15-02-run-f.01-outer",
    "of15-03-run-f": "of15-03-run-f.01-outer",
    "of15-04-run-f": "of15-04-run-f.01-outer",
    "of15-05-run-f": "of15-05-run-f.01-outer",
    "of15-06-street-f": "of15-06-street-f.01-outer",
    "of15-07-street-f": "of15-07-street-f.01-outer",
    "of15-08-street-f": "of15-08-street-f.01-outer",
    "of15-09-street-f": "of15-09-street-f.02-top",
    "of15-10-street-f": "of15-10-street-f.01-outer",
    "of15-11-minimal-f": "of15-11-minimal-f.01-outer",
    "of15-12-minimal-f": "of15-12-minimal-f.02-top",
    "of15-13-minimal-f": "of15-13-minimal-f.05-bag",
    "of15-14-minimal-f": "of15-14-minimal-f.01-outer",
    "of15-15-minimal-f": "of15-15-minimal-f.01-outer",
    "ofn-01-run-f": "ofn-01-run-f.01-outer",
    "ofn-02-run-f": "ofn-02-run-f.01-outer",
    "ofn-03-run-f": "ofn-03-run-f.01-outer",
    "ofn-04-run-f": "ofn-04-run-f.02-top",
    "ofn-05-run-f": "ofn-05-run-f.01-outer",
    "ofn-06-street-f": "ofn-06-street-f.01-outer",
    "ofn-07-street-f": "ofn-07-street-f.01-outer",
    "ofn-08-street-f": "ofn-08-street-f.01-outer",
    "ofn-09-street-f": "ofn-09-street-f.02-top",
    "ofn-10-street-f": "ofn-10-street-f.02-top",
    "ofn-11-minimal-f": "ofn-11-minimal-f.01-outer",
    "ofn-12-minimal-f": "ofn-12-minimal-f.05-scarf",
    "ofn-13-minimal-f": "ofn-13-minimal-f.02-top",
    "ofn-14-minimal-f": "ofn-14-minimal-f.01-outer",
    "ofn-15-minimal-f": "ofn-15-minimal-f.02-top",
    "bl-light-chilly-m-35-day-run-01": "bl-light-chilly-m-35-day-run-01.01-outer",
    "bl-light-chilly-m-35-day-run-02": "bl-light-chilly-m-35-day-run-02.01-outer",
    "bl-light-chilly-m-35-day-run-03": "bl-light-chilly-m-35-day-run-03.01-outer",
    "bl-light-chilly-m-35-day-run-04": "bl-light-chilly-m-35-day-run-04.01-outer",
    "bl-light-chilly-m-35-day-run-05": "bl-light-chilly-m-35-day-run-05.01-outer",
    "bl-light-chilly-m-35-day-street-01": "bl-light-chilly-m-35-day-street-01.01-outer",
    "bl-light-chilly-m-35-day-street-02": "bl-light-chilly-m-35-day-street-02.01-outer",
    "bl-light-chilly-m-35-day-street-03": "bl-light-chilly-m-35-day-street-03.01-outer",
    "bl-light-chilly-m-35-day-street-04": "bl-light-chilly-m-35-day-street-04.01-outer",
    "bl-light-chilly-m-35-day-street-05": "bl-light-chilly-m-35-day-street-05.01-outer",
    "bl-light-chilly-m-35-day-minimal-01": "bl-light-chilly-m-35-day-minimal-01.01-outer",
    "bl-light-chilly-m-35-day-minimal-02": "bl-light-chilly-m-35-day-minimal-02.07-umbrella",
    "bl-light-chilly-m-35-day-minimal-03": "bl-light-chilly-m-35-day-minimal-03.01-outer",
    "bl-light-chilly-m-35-day-minimal-04": "bl-light-chilly-m-35-day-minimal-04.01-outer",
    "bl-light-chilly-m-35-day-minimal-05": "bl-light-chilly-m-35-day-minimal-05.01-outer",
    "bl-light-chilly-f-35-day-minimal-01": "bl-light-chilly-f-35-day-minimal-01.01-outer",
    "bl-light-chilly-f-35-day-minimal-02": "bl-light-chilly-f-35-day-minimal-02.02-top",
    "bl-light-chilly-f-35-day-minimal-03": "bl-light-chilly-f-35-day-minimal-03.01-outer",
    "bl-light-chilly-f-35-day-minimal-04": "bl-light-chilly-f-35-day-minimal-04.01-outer",
    "bl-light-chilly-f-35-day-minimal-05": "bl-light-chilly-f-35-day-minimal-05.02-top",
    "oc-unclassified-m-35-evening-minimal-01": "oc-unclassified-m-35-evening-minimal-01.07-scarf",
    "oc-unclassified-m-35-evening-minimal-02": "oc-unclassified-m-35-evening-minimal-02.01-outer",
    "oc-unclassified-m-35-evening-minimal-03": "oc-unclassified-m-35-evening-minimal-03.01-outer",
    "oc-unclassified-m-35-evening-minimal-04": "oc-unclassified-m-35-evening-minimal-04.01-outer",
    "oc-unclassified-m-35-evening-minimal-05": "oc-unclassified-m-35-evening-minimal-05.01-outer",
    "bl-light-chilly-f-35-day-casual-01": "bl-light-chilly-f-35-day-casual-01.07-headwear",
    "bl-light-chilly-f-35-day-casual-02": "bl-light-chilly-f-35-day-casual-02.02-top",
    "bl-light-chilly-f-35-day-casual-03": "bl-light-chilly-f-35-day-casual-03.02-top",
    "bl-light-chilly-f-35-day-casual-04": "bl-light-chilly-f-35-day-casual-04.01-outer",
    "bl-light-chilly-f-35-day-casual-05": "bl-light-chilly-f-35-day-casual-05.01-outer",
    "bl-light-chilly-f-35-night-street-01": "bl-light-chilly-f-35-night-street-01.01-outer",
    "bl-light-chilly-f-35-night-street-02": "bl-light-chilly-f-35-night-street-02.01-outer",
    "bl-light-chilly-f-35-night-street-03": "bl-light-chilly-f-35-night-street-03.05-umbrella",
    "bl-light-chilly-f-35-night-street-04": "bl-light-chilly-f-35-night-street-04.01-outer",
    "bl-light-chilly-f-35-night-street-05": "bl-light-chilly-f-35-night-street-05.04-scarf",
    "bl-light-chilly-f-35-night-street-20261024-01": "bl-light-chilly-f-35-night-street-20261024-01.01-outer",
    "bl-light-chilly-f-35-night-street-20261024-02": "bl-light-chilly-f-35-night-street-20261024-02.01-outer",
    "bl-light-chilly-f-35-night-street-20261024-03": "bl-light-chilly-f-35-night-street-20261024-03.01-outer",
    "bl-light-chilly-f-35-night-street-20261024-04": "bl-light-chilly-f-35-night-street-20261024-04.01-outer",
    "bl-light-chilly-f-35-night-street-20261024-05": "bl-light-chilly-f-35-night-street-20261024-05.04-scarf",
    "bl-light-chilly-f-35-night-minimal-01": "bl-light-chilly-f-35-night-minimal-01.01-outer",
    "bl-light-chilly-f-35-night-minimal-02": "bl-light-chilly-f-35-night-minimal-02.02-top",
    "bl-light-chilly-f-35-night-minimal-03": "bl-light-chilly-f-35-night-minimal-03.01-outer",
    "bl-light-chilly-f-35-night-minimal-04": "bl-light-chilly-f-35-night-minimal-04.02-top",
    "bl-light-chilly-f-35-night-minimal-05": "bl-light-chilly-f-35-night-minimal-05.02-accessory",
    "oc-chilly-f35-night-running-20261025-01": "oc-chilly-f35-night-running-20261025-01.01-outer",
    "oc-chilly-f35-night-running-20261025-02": "oc-chilly-f35-night-running-20261025-02.01-outer",
    "oc-chilly-f35-night-running-20261025-03": "oc-chilly-f35-night-running-20261025-03.01-outer",
    "oc-chilly-f35-night-running-20261025-04": "oc-chilly-f35-night-running-20261025-04.01-outer",
    "oc-chilly-f35-night-running-20261025-05": "oc-chilly-f35-night-running-20261025-05.01-outer",
    "oc-chilly-f35-night-street-20261025-06": "oc-chilly-f35-night-street-20261025-06.01-outer",
    "oc-chilly-f35-night-street-20261025-07": "oc-chilly-f35-night-street-20261025-07.01-outer",
    "oc-chilly-f35-night-street-20261025-08": "oc-chilly-f35-night-street-20261025-08.01-outer",
    "oc-chilly-f35-night-street-20261025-09": "oc-chilly-f35-night-street-20261025-09.01-outer",
    "oc-chilly-f35-night-street-20261025-10": "oc-chilly-f35-night-street-20261025-10.01-outer",
    "oc-chilly-f35-night-minimal-20261025-11": "oc-chilly-f35-night-minimal-20261025-11.01-outer",
    "oc-chilly-f35-night-minimal-20261025-12": "oc-chilly-f35-night-minimal-20261025-12.01-outer",
    "oc-chilly-f35-night-minimal-20261025-13": "oc-chilly-f35-night-minimal-20261025-13.01-outer",
    "oc-chilly-f35-night-minimal-20261025-14": "oc-chilly-f35-night-minimal-20261025-14.01-outer",
    "oc-chilly-f35-night-minimal-20261025-15": "oc-chilly-f35-night-minimal-20261025-15.01-outer",
    "rn-chilly-f35-day-run-20261025-01": "rn-chilly-f35-day-run-20261025-01.01-outer",
    "rn-chilly-f35-day-run-20261025-02": "rn-chilly-f35-day-run-20261025-02.01-outer",
    "rn-chilly-f35-day-run-20261025-03": "rn-chilly-f35-day-run-20261025-03.01-outer",
    "rn-chilly-f35-day-run-20261025-04": "rn-chilly-f35-day-run-20261025-04.01-outer",
    "rn-chilly-f35-day-run-20261025-05": "rn-chilly-f35-day-run-20261025-05.01-outer",
    "rl-chilly-m35-night-run-20261025-01": "rl-chilly-m35-night-run-20261025-01.01-outer",
    "rl-chilly-m35-night-run-20261025-02": "rl-chilly-m35-night-run-20261025-02.01-outer",
    "rl-chilly-m35-night-run-20261025-03": "rl-chilly-m35-night-run-20261025-03.01-outer",
    "rl-chilly-m35-night-run-20261025-04": "rl-chilly-m35-night-run-20261025-04.02-top",
    "rl-chilly-m35-night-run-20261025-05": "rl-chilly-m35-night-run-20261025-05.01-outer"
};
  Object.keys(CUTS).forEach(function (id) { var it = L.items[id]; if (it) { it.cut = CUTS[id][0]; it.lum = CUTS[id][1]; } });
  L.outfits.forEach(function (o) { if (HERO[o.id]) o.hero = HERO[o.id]; });
})();
