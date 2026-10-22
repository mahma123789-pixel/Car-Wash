document.addEventListener("DOMContentLoaded", function () {
  initNavReveal();
  initHeroReveal();
  initNavActive();
  initRevealOnScroll();
  initKpiCounters();
  initBeforeAfter();
  initServices();
  initReviews();
});

function initNavReveal() {
  const topbar = document.getElementById("topbar");
  if (topbar) {
    setTimeout(() => {
      document.body.classList.add("site-ready");
    }, 3400);
  }
}

function initHeroReveal() {
  const hookScreen = document.getElementById("hookScreen");

  if (!hookScreen) return;

  setTimeout(() => {
    hookScreen.classList.add("hide");
  }, 3400);
}

function initRevealOnScroll() {
  const elements = document.querySelectorAll(".reveal-left, .reveal-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));
}

function initNavActive() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  function setActiveSection(id) {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === "#" + id);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.dataset.navRatio = entry.isIntersecting
          ? entry.intersectionRatio
          : 0;
      });

      let topSection = null;
      let topRatio = 0;

      sections.forEach((section) => {
        const ratio = Number(section.dataset.navRatio || 0);
        if (ratio > topRatio) {
          topRatio = ratio;
          topSection = section;
        }
      });

      if (topSection) {
        setActiveSection(topSection.getAttribute("id"));
      }
    },
    { threshold: [0, 0.1, 0.25, 0.35, 0.5, 0.75, 1] }
  );

  sections.forEach((section) => observer.observe(section));
}

function initKpiCounters() {
  const counters = document.querySelectorAll(".kpi-number");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.dataset.animated === "true") return;
          el.dataset.animated = "true";
          animateCounter(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(el) {
  const target = Number(el.dataset.target);
  let start = 0;
  const duration = 1800;
  const startTime = performance.now();

  function update(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const current = Math.floor(progress * target);
    el.textContent = current.toLocaleString();

    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString();
  }

  requestAnimationFrame(update);
}

function initBeforeAfter() {
  const cars = {
    car1: {
      before: "image/MerA.png",
      after: "image/MerB.png"
    },
    car2: {
      before: "image/FordA.png",
      after: "image/FordB.png"
    }
  };

  const beforeImg = document.querySelector(".comparison-before");
  const afterImg = document.querySelector(".comparison-after");
  const afterWrapper = document.getElementById("afterWrapper");
  const divider = document.getElementById("divider");
  const comparisonContainer = document.querySelector(".comparison-container");
  const buttons = document.querySelectorAll(".car-btn");

  let dragging = false;
  let activeCar = "car1";

  function updateSlider(percent) {
    const value = Math.max(0, Math.min(100, percent));
    afterWrapper.style.width = value + "%";
    divider.style.left = value + "%";
  }

  function setCar(carKey) {
    activeCar = carKey;
    const current = cars[carKey];
    beforeImg.src = current.before;
    afterImg.src = current.after;
    updateSlider(50);

    buttons.forEach((button) => {
      button.classList.toggle("active", button.dataset.car === carKey);
    });
  }

  function handleMove(clientX) {
    if (!dragging) return;

    const rect = comparisonContainer.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const percentage = (x / rect.width) * 100;
    updateSlider(percentage);
  }

  divider.addEventListener("mousedown", () => {
    dragging = true;
  });

  document.addEventListener("mousemove", (e) => handleMove(e.clientX));
  document.addEventListener("mouseup", () => {
    dragging = false;
  });

  divider.addEventListener("touchstart", () => {
    dragging = true;
  });

  document.addEventListener("touchmove", (e) => {
    if (!dragging) return;
    if (e.touches && e.touches[0]) handleMove(e.touches[0].clientX);
  });

  document.addEventListener("touchend", () => {
    dragging = false;
  });

  comparisonContainer.addEventListener("click", (e) => {
    const rect = comparisonContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    updateSlider(percentage);
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => setCar(button.dataset.car));
  });

  setCar(activeCar);
}

function initServices() {
  // Services text (tag/title/description) comes from the current language's
  // translations so switching language re-renders this list in place.
  let services = (typeof t === "function" ? t("services") : null) || [];

  const carousel = document.getElementById("servicesCarousel");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const bookingDockSubtitle = document.getElementById("bookingDockSubtitle");
  const proceedBooking = document.getElementById("proceedBooking");
  const alertBox = document.getElementById("alertBox");
  const bookingPanel = document.getElementById("bookingPanel");
  const bookingDockCollapse = document.getElementById("bookingDockCollapse");

  if (!carousel || !prevBtn || !nextBtn) return;

  const viewport = document.querySelector(".services-carousel-viewport");

  // Force the scroll container itself to a left-to-right box, regardless of
  // the page's own direction. Native horizontal scrolling (scrollLeft /
  // scrollBy) is notoriously inconsistent across browsers when the
  // scrolling element sits inside dir="rtl" — some start scrolled to the
  // far end, some report negative scrollLeft values. Pinning the direction
  // here (as a real inline style, not just a class) removes that whole
  // class of bugs so the cards are always positioned and reachable.
  if (viewport) viewport.style.setProperty("direction", "ltr", "important");
  carousel.style.setProperty("direction", "ltr", "important");

  let selected = JSON.parse(localStorage.getItem("selectedServices") || "[]");

  function isSelected(id) {
    return selected.some((item) => item.id === id);
  }

  function renderServices() {
    carousel.innerHTML = "";

    services.forEach((service) => {
      const card = document.createElement("div");
      const selectedNow = isSelected(service.id);
      card.className = "service-card" + (selectedNow ? " selected" : "");
      card.dataset.serviceId = service.id;
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute(
        "aria-pressed",
        selectedNow ? "true" : "false"
      );

      card.innerHTML = `
        <div class="service-card-media">
          <img src="${service.image}" alt="${service.title}" loading="lazy" />
          <span class="service-card-tag">${service.icon} ${service.tag}</span>
          <span class="service-card-check">✓</span>
          <span class="service-card-price-tag">
            <small>${t("service_starting_at")}</small>
            $${service.price}
          </span>
        </div>
        <div class="service-card-body">
          <h4>${service.title}</h4>
          <p>${service.description}</p>
          <div class="service-card-action">
            <span class="action-label-add">${t("service_select")}</span>
            <span class="action-label-selected">${t("service_selected")}</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => toggleService(service));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleService(service);
        }
      });

      carousel.appendChild(card);
    });

    // Always start scrolled to the first card after a (re)render, so
    // switching language never leaves the view scrolled to a position that
    // no longer matches the new card widths/order.
    if (viewport) viewport.scrollLeft = 0;
  }

  function setSelected(service, shouldSelect) {
    const index = selected.findIndex((item) => item.id === service.id);

    if (shouldSelect && index === -1) {
      selected.push(service);
    } else if (!shouldSelect && index >= 0) {
      selected.splice(index, 1);
    }

    saveServices();
    renderServices();
    renderCart();
  }

  function toggleService(service) {
    setSelected(service, !isSelected(service.id));
  }

  function getStep() {
    const firstCard = carousel.querySelector(".service-card");
    if (!firstCard) return 320;
    const gapValue = parseFloat(getComputedStyle(carousel).columnGap || getComputedStyle(carousel).gap || "0") || 0;
    return firstCard.offsetWidth + gapValue;
  }

  // Plain native scrolling instead of a manually-tracked transform + looped
  // array. No index math to get out of sync, no dependency on "total"
  // matching between languages, and nothing that can end up translated
  // off-screen if a direction/RTL edge case is hit on a real device.
  function moveCarousel(direction) {
    if (!viewport) return;
    const amount = getStep() * (direction === "next" ? 1 : -1);
    viewport.scrollBy({ left: amount, behavior: "smooth" });
  }

  function saveServices() {
    localStorage.setItem("selectedServices", JSON.stringify(selected));
  }

  function renderCart() {
    cartItems.innerHTML = "";

    const hasSelection = selected.length > 0;

    if (bookingPanel) bookingPanel.classList.toggle("active", hasSelection);
    document.body.classList.toggle("has-booking-dock", hasSelection);

    if (bookingDockSubtitle) {
      const subtitleN = t("booking_dock_subtitle_n");
      bookingDockSubtitle.textContent = hasSelection
        ? (typeof subtitleN === "function" ? subtitleN(selected.length) : `${selected.length} services selected`)
        : t("booking_dock_subtitle_zero");
    }

    if (!hasSelection) {
      cartTotal.textContent = "$0";
      alertBox.classList.remove("show");
      return;
    }

    selected.forEach((service) => {
      const item = document.createElement("div");
      item.className = "booking-dock-item";
      item.innerHTML = `
        <img src="${service.image}" alt="${service.title}" />
        <div class="booking-dock-item-info">
          <span>${service.title}</span>
          <strong>$${service.price}</strong>
        </div>
      `;

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "booking-dock-item-remove";
      removeBtn.setAttribute("aria-label", `Remove ${service.title}`);
      removeBtn.textContent = "✕";
      removeBtn.addEventListener("click", () => setSelected(service, false));

      item.appendChild(removeBtn);
      cartItems.appendChild(item);
    });

    const totalPrice = selected.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `$${totalPrice}`;
  }

  prevBtn.addEventListener("click", () => moveCarousel("prev"));
  nextBtn.addEventListener("click", () => moveCarousel("next"));

  if (bookingDockCollapse && bookingPanel) {
    bookingDockCollapse.addEventListener("click", () => {
      bookingPanel.classList.toggle("collapsed");
      bookingDockCollapse.textContent = bookingPanel.classList.contains("collapsed") ? "▸" : "▾";
    });
  }

  proceedBooking.addEventListener("click", () => {
    if (selected.length === 0) {
      alertBox.classList.add("show");
      return;
    }

    alertBox.classList.remove("show");
    localStorage.setItem("selectedServices", JSON.stringify(selected));
    window.location.href = "booking.html";
  });

  document.addEventListener("languagechange", () => {
    // Pull the service list in the new language, then re-map any already
    // selected services (matched by id) onto their translated text so the
    // cart and booking dock immediately reflect the new language too.
    try {
      services = (typeof t === "function" ? t("services") : null) || [];
      selected = selected
        .map((item) => services.find((s) => s.id === item.id))
        .filter(Boolean);
      saveServices();

      // Re-pin direction:ltr in case anything upstream (e.g. a browser
      // extension or a stray inline style) cleared it when the page's own
      // dir attribute flipped to rtl.
      if (viewport) viewport.style.setProperty("direction", "ltr", "important");
      carousel.style.setProperty("direction", "ltr", "important");

      renderServices();
      renderCart();
    } catch (err) {
      // Never let a translation hiccup leave the section permanently blank —
      // log it and keep whatever was already rendered on screen.
      console.error("Services languagechange render failed:", err);
    }
  });

  renderServices();
  renderCart();
}

function initReviews() {
  const slider = document.getElementById("reviewsSlider");
  const viewport = slider?.querySelector(".reviews-viewport");
  const track = document.getElementById("reviewsTrack");
  const prevBtn = slider?.querySelector(".reviews-prev");
  const nextBtn = slider?.querySelector(".reviews-next");
  const dots = document.getElementById("reviewsDots");

  if (!slider || !viewport || !track) return;

  let reviews = [];
  let currentIndex = 0;
  let timer = null;
  let startX = 0;
  let startTranslate = 0;
  let dragging = false;

  const getStep = () => {
    const card = track.querySelector(".review-card");
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const getVisibleCount = () => {
    const step = getStep();
    if (!step) return 1;
    return Math.max(1, Math.floor((viewport.clientWidth + 22) / step));
  };

  const getMaxIndex = () => Math.max(0, reviews.length - getVisibleCount());

  function updateDots() {
    if (!dots) return;
    dots.innerHTML = "";

    const count = getMaxIndex() + 1;
    if (count <= 1) return;

    for (let i = 0; i < count; i += 1) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "reviews-dot" + (i === currentIndex ? " active" : "");
      dot.setAttribute("aria-label", `Go to review ${i + 1}`);
      dot.addEventListener("click", () => {
        goTo(i, true);
      });
      dots.appendChild(dot);
    }
  }

  function renderPosition(animate = true) {
    const max = getMaxIndex();
    currentIndex = Math.max(0, Math.min(currentIndex, max));

    if (!animate) track.style.transition = "none";
    track.style.transform = `translate3d(${-currentIndex * getStep()}px, 0, 0)`;

    if (!animate) {
      requestAnimationFrame(() => {
        track.style.transition = "";
      });
    }

    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === max;
    updateDots();
  }

  function goTo(index, userInitiated = false) {
    currentIndex = Math.max(0, Math.min(index, getMaxIndex()));
    renderPosition(true);
    if (userInitiated) restartAutoPlay();
  }

  function stopAutoPlay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (reviews.length <= getVisibleCount()) return;

    timer = setInterval(() => {
      const max = getMaxIndex();
      goTo(currentIndex >= max ? 0 : currentIndex + 1);
    }, 4200);
  }

  function restartAutoPlay() {
    startAutoPlay();
  }

  function render() {
    try {
      reviews = (typeof t === "function" ? t("reviews") : null) || [];
      track.innerHTML = "";

      reviews.forEach((review) => {
        const card = document.createElement("article");
        card.className = "review-card";
        card.innerHTML = `
          <div class="stars" aria-label="${review.rating}">${review.rating}</div>
          <p>${review.comment}</p>
          <h4>${review.name}</h4>
        `;
        track.appendChild(card);
      });

      const isArabic = document.documentElement.dir === "rtl" || document.body.classList.contains("lang-ar");
      prevBtn?.setAttribute("aria-label", isArabic ? "المراجعة السابقة" : "Previous review");
      nextBtn?.setAttribute("aria-label", isArabic ? "المراجعة التالية" : "Next review");

      currentIndex = 0;
      requestAnimationFrame(() => {
        renderPosition(false);
        startAutoPlay();
      });
    } catch (err) {
      console.error("Reviews render failed:", err);
    }
  }

  prevBtn?.addEventListener("click", () => goTo(currentIndex - 1, true));
  nextBtn?.addEventListener("click", () => goTo(currentIndex + 1, true));

  slider.addEventListener("mouseenter", stopAutoPlay);
  slider.addEventListener("mouseleave", startAutoPlay);
  slider.addEventListener("focusin", stopAutoPlay);
  slider.addEventListener("focusout", (event) => {
    if (!slider.contains(event.relatedTarget)) startAutoPlay();
  });

  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragging = true;
    startX = event.clientX;
    startTranslate = -currentIndex * getStep();
    viewport.classList.add("is-dragging");
    stopAutoPlay();
    viewport.setPointerCapture?.(event.pointerId);
    track.style.transition = "none";
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const delta = event.clientX - startX;
    track.style.transform = `translate3d(${startTranslate + delta}px, 0, 0)`;
  });

  const finishDrag = (event) => {
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove("is-dragging");
    track.style.transition = "";

    const delta = event.clientX - startX;
    const threshold = Math.min(90, viewport.clientWidth * 0.18);

    if (Math.abs(delta) > threshold) {
      goTo(currentIndex + (delta < 0 ? 1 : -1), true);
    } else {
      renderPosition(true);
      startAutoPlay();
    }
  };

  viewport.addEventListener("pointerup", finishDrag);
  viewport.addEventListener("pointercancel", finishDrag);

  window.addEventListener("resize", () => {
    renderPosition(false);
    startAutoPlay();
  });

  document.addEventListener("languagechange", () => {
    render();
  });

  render();
}
