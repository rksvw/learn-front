const pickAc = document.getElementById("pickAc");
const userBtn = document.getElementById("userBtn");

let count = 0;
pickAc.addEventListener("click", () => {
  if (count) {
    pickAc.innerHTML = `Already have account? <span>Login now</span>`;
    count -= 1;
  } else {
    pickAc.innerHTML = `Don't have an account? <span>Sign up</span>`;
    count += 1;
  }
});
