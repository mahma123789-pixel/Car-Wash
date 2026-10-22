document.addEventListener("DOMContentLoaded", function () {
  if (document.body.dataset.page === "booking") {
    initBookingPage();
  }
});

function initBookingPage() {
  const form = document.getElementById("bookingForm");
  const selectedServicesList = document.getElementById("selectedServicesList");
  const totalPriceElement = document.getElementById("bookingTotal");
  const bookingMessage = document.getElementById("bookingMessage");
  const existingNotice = document.getElementById("existingCustomerNotice");
  const successModal = document.getElementById("successModal");
  const existingModal = document.getElementById("existingModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const existingCloseBtn = document.getElementById("existingCloseBtn");
  const backToServices = document.getElementById("backToServices");
  const bookingDateInput = document.getElementById("bookingDate");

  const selectedServices = JSON.parse(localStorage.getItem("selectedServices") || "[]");

  // Determine the user's real current date (not hard-coded) and stop the
  // date picker from offering, or accepting, anything earlier than today.
  const todayDate = new Date();
  const todayISO = [
    todayDate.getFullYear(),
    String(todayDate.getMonth() + 1).padStart(2, "0"),
    String(todayDate.getDate()).padStart(2, "0")
  ].join("-");

  if (bookingDateInput) {
    bookingDateInput.setAttribute("min", todayISO);
  }

  function renderSelectedServices() {
    selectedServicesList.innerHTML = "";

    if (!selectedServices.length) {
      selectedServicesList.innerHTML = `<p class="empty-state">${t("msg_no_services")}</p>`;
      totalPriceElement.textContent = "$0";
      return;
    }

    selectedServices.forEach((service) => {
      const item = document.createElement("div");
      item.className = "service-item";
      item.innerHTML = `
        <span>${service.title}</span>
        <strong>$${service.price}</strong>
      `;
      selectedServicesList.appendChild(item);
    });

    const total = selectedServices.reduce((sum, service) => sum + Number(service.price), 0);
    totalPriceElement.textContent = `$${total}`;
  }

  renderSelectedServices();

  if (!selectedServices.length) {
    bookingMessage.textContent = t("msg_select_service");
    bookingMessage.classList.add("show");
  }

  // Keep the summary and the empty/validation message in sync if the
  // person switches language while on this page.
  document.addEventListener("languagechange", () => {
    renderSelectedServices();
    if (!selectedServices.length) {
      bookingMessage.textContent = t("msg_select_service");
    }
  });

  backToServices.addEventListener("click", function () {
    window.location.href = "index.html#services";
  });

  modalCloseBtn.addEventListener("click", function () {
    successModal.classList.remove("show");
    window.location.href = "index.html";
  });

  existingCloseBtn.addEventListener("click", function () {
    existingModal.classList.remove("show");
  });

  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", () => {
      successModal.classList.remove("show");
      existingModal.classList.remove("show");
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!selectedServices.length) {
      bookingMessage.textContent = t("msg_select_service");
      bookingMessage.classList.add("show");
      return;
    }

    const data = new FormData(form);

    const phone = data.get("phone").trim();
    const plate = data.get("plate").trim();
    const carType = data.get("carType").trim();
    const name = data.get("name").trim();
    const mileage = data.get("mileage").trim();
    const bookingDate = (data.get("bookingDate") || "").trim();
    const bookingTime = (data.get("bookingTime") || "").trim();

    // Guard against a manually-typed past date even if the browser's native
    // date picker restriction is bypassed.
    if (bookingDate && bookingDate < todayISO) {
      bookingMessage.textContent = t("msg_past_date");
      bookingMessage.classList.add("show");
      return;
    }

    const allCustomers = JSON.parse(localStorage.getItem("carCustomers") || "[]");

    const existingCustomer = allCustomers.find(
      (customer) =>
        customer.phone === phone ||
        customer.plate.toLowerCase() === plate.toLowerCase()
    );

    if (existingCustomer) {
      existingNotice.textContent = t("msg_existing_notice");
      existingNotice.classList.add("show");

      const message = document.getElementById("existingMessage");
      message.textContent = t("msg_existing_modal");
      existingModal.classList.add("show");

      return;
    }

    const queueNumber = generateQueueNumber();

    const bookingData = {
      phone,
      plate,
      carType,
      name,
      mileage,
      bookingDate,
      bookingTime,
      services: selectedServices,
      queueNumber,
      createdAt: new Date().toISOString()
    };

    allCustomers.push(bookingData);
    localStorage.setItem("carCustomers", JSON.stringify(allCustomers));

    const bookings = JSON.parse(localStorage.getItem("carBookings") || "[]");
    bookings.push(bookingData);
    localStorage.setItem("carBookings", JSON.stringify(bookings));

    const total = selectedServices.reduce((sum, service) => sum + Number(service.price), 0);
    const formattedDateTime = formatBookingDateTime(bookingDate, bookingTime);

    document.getElementById("modalDetails").innerHTML = `
      <p><strong>${t("modal_detail_customer")}:</strong> ${name}</p>
      <p><strong>${t("modal_detail_queue")}:</strong> ${queueNumber}</p>
      <p><strong>${t("modal_detail_vehicle")}:</strong> ${carType}</p>
      <p><strong>${t("modal_detail_plate")}:</strong> ${plate}</p>
      ${formattedDateTime ? `<p><strong>${t("modal_detail_appointment")}:</strong> ${formattedDateTime}</p>` : ""}
      <p><strong>${t("modal_detail_total")}:</strong> $${total}</p>
    `;

    document.getElementById("modalMessage").textContent = `${t("modal_queue_label")} ${queueNumber}`;
    successModal.classList.add("show");
    existingNotice.classList.remove("show");

    form.reset();
    if (bookingDateInput) bookingDateInput.setAttribute("min", todayISO);
    localStorage.removeItem("selectedServices");
  });
}

function formatBookingDateTime(bookingDate, bookingTime) {
  if (!bookingDate) return "";

  const locale = typeof getLang === "function" && getLang() === "ar" ? "ar-EG" : "en-US";

  const [year, month, day] = bookingDate.split("-").map(Number);
  const dateObj = new Date(year, (month || 1) - 1, day || 1);
  const dateLabel = dateObj.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  if (!bookingTime) return dateLabel;

  const [hours, minutes] = bookingTime.split(":").map(Number);
  const timeObj = new Date(year, (month || 1) - 1, day || 1, hours || 0, minutes || 0);
  const timeLabel = timeObj.toLocaleTimeString(locale, {
    hour: "numeric",
    minute: "2-digit"
  });

  return `${dateLabel}, ${timeLabel}`;
}

function generateQueueNumber() {
  return Math.floor(100 + Math.random() * 900);
}