# Sunny Female Night Minimal 11–15 validation

2026-10-22 · b129 · Built-in image_gen, one independent generation per product.

| Look | Products | App outfit ID |
| --- | ---: | --- |
| 11 | 8 | `bn15-11-minimal-f` |
| 12 | 7 | `bn15-12-minimal-f` |
| 13 | 6 | `bn15-13-minimal-f` |
| 14 | 9 | `bn15-14-minimal-f` |
| 15 | 9 | `bn15-15-minimal-f` |

39 unique independent product JPGs, all 500×500, all ≤50,000 bytes. Warm ivory background; no collage, text or branding. Each pair of footwear, gloves, socks or earrings counts as one item.
Original five editorial files match baseline Git bytes. Each archival editorial.jpg is an identical copy; app keeps original paths.
products.json counts, relative images, ko/en/de names and styling notes, stable app IDs and night metadata validated. Existing 24 item IDs preserved; 15 new IDs.
Base outfits.js remains unchanged from the latest main branch; existing Street plus Female Night Minimal mapping produces 135 outfits / 834 items, 829 active references and 110 article outfits. Five target outfits retain clear/chilly/f/35/evening/minimal. Other outfit and item objects are compared against baseline.
Only target folders plus the isolated mapping script, index.html and four existing documentation files plus this verification report are included. No other set is modified.

Uncertainty: 13 boot toe/sole/heel/exact shaft height unknown; 14 bag outline/closure/hardware partly hidden; 15 shirt body/collar hidden. All hidden backs, fastenings, opposite footwear and jewelry backs are conservative reconstructions. Actual materials, brands, retail links, prices and temperature values remain unknown.

## File checks

| Product file | Pixels | Bytes | SHA-256 |
| --- | --- | ---: | --- |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/11-minimal/products/01-outer.jpg` | 500×500 | 37009 | `ccee9c6453b178b438f52ffd7e7dc287e73c6e32297e09b4d78855de56820b26` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/11-minimal/products/02-top.jpg` | 500×500 | 42706 | `f8ad76e764de7f2c80cda533a5945a6127934c4be31ee497a9aae882d21cdf97` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/11-minimal/products/03-under.jpg` | 500×500 | 19644 | `96050723a7f2bcac3665208c9bacf2eadb17e56a8e498550e05b34f035d078fe` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/11-minimal/products/04-bottom.jpg` | 500×500 | 14132 | `f200ad83c50824f6df1ea5ad06c966d24c8381e9927919081cb0ee4b9002d5b0` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/11-minimal/products/05-gloves.jpg` | 500×500 | 29915 | `d2deb020b525569b246939cb192a3368faa78c0a6d75f3f69df147918e2d8df0` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/11-minimal/products/06-shoes.jpg` | 500×500 | 25749 | `3b4dacb029fa018eb77147ac12782ec50a408c2f57fe7603f931101675d6ea48` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/11-minimal/products/07-jewelry.jpg` | 500×500 | 21676 | `b3f86b90b77e0d1a991a59e0136b23d4c4d2540791091881d7346c3ead3baec4` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/11-minimal/products/08-earrings.jpg` | 500×500 | 15865 | `79381c145dc0ace29e0aac6bc0dfb47c8c0edc8539af18ea4d07612d72ffbc0e` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/12-minimal/products/01-outer.jpg` | 500×500 | 31393 | `a74b9e2c6baafc4bb0bfa1f7f68e7d8c0687cc7e20f524ebc0bddfdc7195ae66` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/12-minimal/products/02-top.jpg` | 500×500 | 46874 | `8d126f2c7b32c0da5fba5dc7d02cee807938c5a2dbfe498d16b70821b8d09daa` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/12-minimal/products/03-bottom.jpg` | 500×500 | 20452 | `6c7d63414f95df91d5696034e6ea6cf736213bac7a86af8d2ae2a4e7dba7edde` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/12-minimal/products/04-shoes.jpg` | 500×500 | 26923 | `74ef9f0f5b3e3984f07098cd0e96821c24c2e05b6e453682db4782a7f32a105b` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/12-minimal/products/05-scarf.jpg` | 500×500 | 35932 | `83f34c42d338a9e9e659f9a6eaafa0e1081af0f79328aa8b217e1a1fdbbd2d3e` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/12-minimal/products/06-gloves.jpg` | 500×500 | 28703 | `0e175f060a57feaa55c1b928ee9db7bde8acc0abc6d43b8dd1a8737656f1f10d` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/12-minimal/products/07-earrings.jpg` | 500×500 | 17054 | `5fb8ee2bdb8ebc1ef6d92ba1b2ab4d9699b2ffee6978606c2618c56a6e93afe7` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/13-minimal/products/01-outer.jpg` | 500×500 | 22404 | `b35b6090d3e34b1289528bdf88a4362bef0e98d317aa2be00bd0321538b02190` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/13-minimal/products/02-top.jpg` | 500×500 | 47073 | `516325601133addd4d3dde399197dac51de455153608ad12a24d6cddc67e6895` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/13-minimal/products/03-bottom.jpg` | 500×500 | 37634 | `d1a34f2a2813b4e15b48cb3e7f0bb8e23d0111530abdff54fd97561c4e2cee29` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/13-minimal/products/04-shoes.jpg` | 500×500 | 24129 | `cba0df8c37d17d3f18a941e8f8514e8511b1a4b854e62922711e6ef428070b1d` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/13-minimal/products/05-scarf.jpg` | 500×500 | 49976 | `1da2e8ab93b217197911af41af559454e13f4f834b5bf3d423498bf5383184f4` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/13-minimal/products/06-earrings.jpg` | 500×500 | 16040 | `6dc66ea6bdf2fa0562f8d73a126f96be1e84b27e00da2cbb545c736984fc2495` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/14-minimal/products/01-outer.jpg` | 500×500 | 29191 | `0f9332af535ead3d302aa47d0af21d675ce7349df461e973d364639b67ba96f4` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/14-minimal/products/02-top.jpg` | 500×500 | 49595 | `08d1c9ac0dff0da017b043e189ce8c607a660933e848edf6aaa29909f2a6d233` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/14-minimal/products/03-bottom.jpg` | 500×500 | 20921 | `55864edf947f62132d4d85a0f7fa9dc3c8cf3110f4b1903cc05b3c6bf0d64298` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/14-minimal/products/04-shoes.jpg` | 500×500 | 23859 | `e17eccb76b8d2a3d4be23fe9d6f3055ec377e01f0cbe9ed6f9a47fc9c86aaa69` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/14-minimal/products/05-scarf.jpg` | 500×500 | 44114 | `566709d4b0f60faa2767c6e6a377e905fac069561e5c052aa8f5a101784919e2` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/14-minimal/products/06-gloves.jpg` | 500×500 | 31135 | `afe2fce0448c9f12ed90cba126dd929fbce0bec5eb5f422f42afc1862317ce5e` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/14-minimal/products/07-bag.jpg` | 500×500 | 22034 | `c664375dc6410ff0af70bcb675e27cb494fabb4b51d807a56ebcddc7cd04335a` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/14-minimal/products/08-jewelry.jpg` | 500×500 | 12071 | `bde89043744a4c5041851760f9463b386e1733c569a9a01c20ae11a7d3ee1fd3` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/14-minimal/products/09-earrings.jpg` | 500×500 | 14161 | `d971cc55b0da571ce071a6b43cb3cacf4a4d4544f679da1a0d5e8635f59acdd9` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/15-minimal/products/01-outer.jpg` | 500×500 | 33417 | `1a8ba90a34008a09189a3b0c23818610965b3539ede00391060699886e7053cd` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/15-minimal/products/02-top.jpg` | 500×500 | 43095 | `caad57171c829299ae9ba40798f3a4fae38b8cedd85ede16cf114dddac9f6b7c` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/15-minimal/products/03-under.jpg` | 500×500 | 22188 | `04b1706d4df8555f13eadfa97c1758dbe4ee45d8ab4c1d68e4ec59be618a1e98` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/15-minimal/products/04-bottom.jpg` | 500×500 | 23461 | `f581a19c6f0acbc4e90f9dd58efa2c0086a51dd2f287535a7e9bdbdf005656aa` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/15-minimal/products/05-shoes.jpg` | 500×500 | 33262 | `898212525fd86cf79f9a0811c28803de19e6c2904c36d8fed3a7ac6cbb1af1ee` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/15-minimal/products/06-socks.jpg` | 500×500 | 28268 | `55698bb128f868d0da14d7a18976fd6b459e2fc1eb8bc86fb2f004fbd3ed22d8` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/15-minimal/products/07-scarf.jpg` | 500×500 | 46676 | `6e3e578d7a77f282a3ca0c34ed9e9c5853002cae0a4a48ada5c2a12e6dfe6f5c` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/15-minimal/products/08-earrings.jpg` | 500×500 | 17991 | `4e496b58b0d5359cb2ced384936bdf4c88db99608afb9116c53b41c6f3614ddc` |
| `look/berlin-complete/Sunny/Chilly/Female/35+/night/15-minimal/products/09-ring.jpg` | 500×500 | 13798 | `389e571db303566242d829bad62ea2cf82403ed49b13b07abd9d734f440653c8` |

App mapping: `look/sunny-female-night-minimal.js` loads synchronously after existing library scripts and before app initialization. The large base `look/outfits.js` is preserved because its full-file replacement exceeded automatic approval review input limits. This scoped module updates only the five requested outfits and their 39 products, matching the existing Street extension pattern.
