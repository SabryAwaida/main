const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");
toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  content.classList.toggle("active");
});

function playSound() {
  var audio = document.getElementById("myAudio");
  audio.play();
}

function requestPermission() {
  if (window.Notification && Notification.permission !== "granted") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        scheduleSound();
      }
    });
  } else {
    scheduleSound();
  }
}

function scheduleSound() {
  playSound();

  setInterval(function () {
    playSound();
  }, 1 * 60 * 1000); // كل 30 دقيقة (30 * 60 * 1000 مللي ثانية)
}