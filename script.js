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

function unlock() {
  const input = document.getElementById("password").value;

  if (input === correctPassword) {
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
  page.classList.remove("flip");
  void page.offsetWidth; // reflow
  page.innerText = pages[currentPage];
}

function nextPage() {
  const page = document.getElementById("page");
  const sound = document.getElementById("flipSound");

  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }

  page.classList.add("flip");

  setTimeout(() => {
    if (currentPage === pages.length - 1) {
      page.innerHTML = '<div class="stamp">YES ❤</div>';
      document.getElementById("nextBtn").style.display = "none";
    } else {
      currentPage++;
      page.classList.remove("flip");
      showPage();
    }
  }, 700);
}
