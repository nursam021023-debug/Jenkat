// =====================================
//  script.js - dito ang logic ng website
//  (kailangan muna ma-load ang data.js)
// =====================================

// gets the file path of a photo from its number
function getImg(id) {
  if (id === "logo") {
    return "img/logo.png";
  }
  return "img/" + String(id).padStart(2, "0") + ".jpg";
}

// ---------- set the src of images with data-img ----------
var dataImgs = document.querySelectorAll("[data-img]");
for (var i = 0; i < dataImgs.length; i++) {
  dataImgs[i].src = getImg(dataImgs[i].dataset.img);
}

// ---------- HERO SLIDESHOW ----------
var slideBox = document.getElementById("hero-slides");
var slides = [];
var current = 0;

for (var i = 0; i < HERO_PHOTOS.length; i++) {
  var slide = document.createElement("img");
  slide.src = getImg(HERO_PHOTOS[i]);
  slide.alt = "";
  if (i === 0) {
    slide.fetchPriority = "high";
  } else {
    slide.loading = "lazy";
  }
  slideBox.appendChild(slide);
  slides.push(slide);
}
slides[0].classList.add("on");

function nextSlide() {
  slides[current].classList.remove("on");
  current = (current + 1) % slides.length;
  // remove then add again so the zoom animation restarts
  slides[current].classList.remove("on");
  void slides[current].offsetWidth;
  slides[current].classList.add("on");
}

// don't run the slideshow if the user wants less motion
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(nextSlide, 6500);
}

// ---------- LIGHTBOX ----------
var lightbox = document.getElementById("lb");
var lbImg = document.getElementById("lb-img");
var lbCap = document.getElementById("lb-cap");
var lbPrev = document.getElementById("lb-prev");
var lbNext = document.getElementById("lb-next");
var lbItems = [];   // the photos in the current lightbox
var lbIndex = 0;    // which photo is showing

function showPhoto() {
  var item = lbItems[lbIndex];
  lbImg.src = getImg(item.img);
  lbImg.alt = item.alt || "";
  lbCap.innerHTML = "";

  if (item.title) {
    // room caption: title and text
    var strong = document.createElement("strong");
    strong.textContent = item.title;
    lbCap.appendChild(strong);
    lbCap.appendChild(document.createTextNode(item.text || ""));
  } else {
    lbCap.textContent = item.alt || "";
  }

  // hide the arrows if only one photo
  var hasMany = lbItems.length > 1;
  lbPrev.hidden = !hasMany;
  lbNext.hidden = !hasMany;
}

function openLightbox(items, index) {
  lbItems = items;
  lbIndex = index;
  showPhoto();
  if (!lightbox.open) {
    lightbox.showModal();
  }
}

function changePhoto(direction) {
  lbIndex = (lbIndex + direction + lbItems.length) % lbItems.length;
  showPhoto();
}

document.getElementById("lb-close").onclick = function () { lightbox.close(); };
lbPrev.onclick = function () { changePhoto(-1); };
lbNext.onclick = function () { changePhoto(1); };

// click outside the photo to close
lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) {
    lightbox.close();
  }
});
// arrow keys
lightbox.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") changePhoto(-1);
  if (e.key === "ArrowRight") changePhoto(1);
});

// ---------- make a clickable photo button ----------
function makePhotoButton(id, items, index, label) {
  var btn = document.createElement("button");
  btn.type = "button";
  btn.setAttribute("aria-label", "View photo larger: " + (label || ALT[id]));

  var img = document.createElement("img");
  img.src = getImg(id);
  img.alt = ALT[id] || "";
  img.loading = "lazy";

  btn.appendChild(img);
  btn.onclick = function () { openLightbox(items, index); };
  return btn;
}

// ---------- BUILD THE PAGES ----------

// pools collage
var poolItems = [];
for (var i = 0; i < POOL_ALL.length; i++) {
  poolItems.push({ img: POOL_ALL[i], alt: ALT[POOL_ALL[i]] });
}
for (var i = 0; i < POOLS.length; i++) {
  document.getElementById("collage").appendChild(makePhotoButton(POOLS[i], poolItems, i));
}

// room cards
var roomItems = [];
for (var i = 0; i < ROOMS.length; i++) {
  var r = ROOMS[i];
  roomItems.push({
    img: r.img,
    alt: r.title + ": " + ALT[r.img],
    title: r.title + " | " + r.meta,
    text: r.sub + ". " + r.text
  });
}

function makeRoomCard(room, index) {
  var card = document.createElement("article");
  card.className = "card";

  // photo
  var imgBtn = document.createElement("button");
  imgBtn.type = "button";
  imgBtn.className = "card-img";
  imgBtn.setAttribute("aria-label", "View " + room.title);
  var img = document.createElement("img");
  img.src = getImg(room.img);
  img.alt = ALT[room.img];
  img.loading = "lazy";
  img.style.objectPosition = "50% 0%";
  imgBtn.appendChild(img);
  imgBtn.onclick = function () { openLightbox(roomItems, index); };

  // text
  var body = document.createElement("div");
  body.className = "card-body";

  var title = document.createElement("h3");
  title.textContent = room.title;

  var meta = document.createElement("p");
  meta.className = "meta";
  var metaStrong = document.createElement("strong");
  metaStrong.textContent = room.meta;
  var metaSub = document.createElement("span");
  metaSub.textContent = room.sub;
  meta.appendChild(metaStrong);
  meta.appendChild(document.createTextNode(" "));
  meta.appendChild(metaSub);

  var text = document.createElement("p");
  text.textContent = room.text;

  var more = document.createElement("button");
  more.type = "button";
  more.className = "more";
  more.textContent = "View room";
  more.onclick = function () { openLightbox(roomItems, index); };

  body.appendChild(title);
  body.appendChild(meta);
  body.appendChild(text);
  body.appendChild(more);
  card.appendChild(imgBtn);
  card.appendChild(body);
  return card;
}

for (var i = 0; i < ROOMS.length; i++) {
  document.getElementById("rooms-grid").appendChild(makeRoomCard(ROOMS[i], i));
}

// bathroom photos
var bathItems = [];
for (var i = 0; i < BATHS.length; i++) {
  bathItems.push({ img: BATHS[i], alt: ALT[BATHS[i]] });
}
for (var i = 0; i < BATHS.length; i++) {
  document.getElementById("bath-strip").appendChild(makePhotoButton(BATHS[i], bathItems, i));
}

// amenities mosaic
var amenityItems = [];
for (var i = 0; i < AMENITIES.length; i++) {
  amenityItems.push({ img: AMENITIES[i].img, alt: AMENITIES[i].cap });
}
for (var i = 0; i < AMENITIES.length; i++) {
  var a = AMENITIES[i];
  var btn = makePhotoButton(a.img, amenityItems, i, a.cap);
  btn.className = a.cls;
  var caption = document.createElement("span");
  caption.className = "cap";
  caption.textContent = a.cap;
  btn.appendChild(caption);
  document.getElementById("mosaic").appendChild(btn);
}

// gallery
var galleryItems = [];
for (var i = 0; i < GALLERY.length; i++) {
  galleryItems.push({ img: GALLERY[i], alt: ALT[GALLERY[i]] });
}
for (var i = 0; i < GALLERY.length; i++) {
  document.getElementById("gallery").appendChild(makePhotoButton(GALLERY[i], galleryItems, i));
}

// ---------- PAGE SWITCHING (uses the # in the url) ----------
var PAGES = ["home", "pools", "rooms", "amenities", "about"];
var PAGE_TITLES = {
  home: "Jen-Kat Hot Spring Resort | Private hot spring resort in Pansol, Calamba, Laguna",
  pools: "Pools | Jen-Kat Hot Spring Resort",
  rooms: "Rooms | Jen-Kat Hot Spring Resort",
  amenities: "Amenities | Jen-Kat Hot Spring Resort",
  about: "About us | Jen-Kat Hot Spring Resort"
};

var menu = document.getElementById("menu");
var burger = document.getElementById("burger");

function showPage() {
  // get the page name from the url, example: #/pools -> pools
  var page = location.hash.replace(/^#\/?/, "") || "home";
  page = page.split("?")[0];
  if (PAGES.indexOf(page) === -1) {
    page = "home";
  }

  // show only the current page
  for (var i = 0; i < PAGES.length; i++) {
    document.getElementById("view-" + PAGES[i]).hidden = (PAGES[i] !== page);
  }

  // highlight the current menu link
  var links = document.querySelectorAll(".menu a[data-route]");
  for (var i = 0; i < links.length; i++) {
    if (links[i].dataset.route === page) {
      links[i].setAttribute("aria-current", "page");
    } else {
      links[i].removeAttribute("aria-current");
    }
  }

  document.title = PAGE_TITLES[page];

  // close the mobile menu and go back to the top
  menu.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "auto" });
}

// mobile menu button
burger.onclick = function () {
  var isOpen = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(isOpen));
};

window.addEventListener("hashchange", showPage);
showPage();