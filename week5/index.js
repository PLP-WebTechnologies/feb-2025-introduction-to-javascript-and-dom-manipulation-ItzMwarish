const moods = {
  Happy: {
    message: "You're feeling happy today! Keep smiling ",
    surprises: [
      "Woohoo! Ride that energy wave! ",
      "The world is your playground!",
      "Let’s do something amazing today ",
    ],
    color: "rgb(255, 223, 88)",
  },
  Excited: {
    message: "So much energy! Let’s channel it into something fun ",
    surprises: [
      "Keep being your awesome self!",
      "Here’s a virtual high-five ",
      "You shine brighter than the sun ",
    ],
    color: "rgb(255, 153, 0)",
  },
  calm: {
    message: "You're calm and collected — here’s a gentle surprise",
    surprises: [
      "Peace begins with a smile ",
      "Breathe in. Breathe out. You are doing fine.",
      "Let stillness fill your soul ",
    ],

    color: "rgb(153, 204, 204)",
  },
  tired: {
    message: "Take some rest ",
    color: "rgb(96, 125, 139)",
    surprises: [
      "You deserve a nap ",
      "Take a deep breath. You are doing great.",
      "Slow down and rest. It’s okay.",
    ],
  },
  sad: {
    message: "Feeling a little down? Let’s brighten your day ",
    surprises: [
      "You’re stronger than you think ",
      "Sending a hug your way ",
      "Storms don’t last forever — you got this ",
    ],
    color: "rgb(37, 67, 82)",
  },
};

const buttons = document.querySelectorAll("button:not(#reset)");
const messageDiv = document.getElementById("message");
const resetBtn = document.getElementById("reset");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const mood = button.className;
    const data = moods[mood];
    const randomSurprise =
      data.surprises[Math.floor(Math.random() * data.surprises.length)];
    document.body.style.backgroundColor = data.color;
    messageDiv.innerHTML = `${data.message}<br><small>${randomSurprise}</small>`;
  });
});

resetBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  messageDiv.innerHTML = "";
});
