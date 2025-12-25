window.onload = () => {
  document.getElementById("envelope").style.display = "flex";
  document.getElementById("lockScreen").style.display = "none";
  document.getElementById("proposal").style.display = "none";
};
const correctPassword = "safe";

const pages = [
  "to my cute-tea ☕\n\n(flip the page)",
  "bindu,",
  "agar tu yahan tak aa gayi hai…\n\ntoh iska matlab sirf curiosity nahi hai.",
  "ye koi normal proposal nahi hai.\n\nye ek ehsaas hai —\njo maine sirf tumhare liye sambhal ke rakha hai.",
  "main perfect nahi hoon.\n\nkabhi zyada bol deta hoon.\nkabhi apni feelings theek se keh nahi paata.",
  "par ek baat sach hai…\n\nmain tumhari har baat sunne ke liye\nhamesha tayaar hoon.",
  "jab duniya thakaye…\n\nmain chahta hoon\ntumhara dil kahe —",
  "“mujhe jeet ke paas jana hai.”",
  "bindu,\n\nkya tum mujhe apni duniya ka\nwo hissa banaogi\njahan se tum kabhi door na jaana chaho? ❤"
];

let currentPage = 0;

/* envelope open */
function openEnvelope() {
  document.getElementById("envelope").style.display = "none";
  document.getElementById("lockScreen").style.display = "block";
}

/* unlock */
function unlock() {
  const input = document.getElementById("password").value;
  const heart = document.getElementById("heartBeat");

  if (input === correctPassword) {
    if (heart) {
      heart.currentTime = 0;
      heart.play();
    }
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("proposal").style.display = "flex";
    showPage();
  } else {
    document.getElementById("error").innerText =
      "This book opens only for one heart 💗";
  }
}

function showPage() {
  const page = document.getElementById("page");
  page.classList.remove("turn");
  void page.offsetWidth;
  page.innerText = pages[currentPage];
}

/* NEXT (button OR swipe) */
function nextPage() {
  const page = document.getElementById("page");
  const sound = document.getElementById("flipSound");

  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }

  page.classList.add("turn");

  setTimeout(() => {
    page.classList.remove("turn");

    if (currentPage === pages.length - 1) {
      page.innerHTML = '<div class="stamp">Yes ❤</div>';
      document.getElementById("nextBtn").style.display = "none";

      // 🎉 CONFETTI
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      currentPage++;
      showPage();
    }
  }, 1000);
}

/* ===== MOBILE SWIPE SUPPORT ===== */
let startX = 0;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    nextPage(); // swipe left → next page
  }
});
