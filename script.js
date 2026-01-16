const players = [
  {
    name: "Misztersusu",
    bottles: 18,
    character: "misztersiba.gif"
  },
  {
    name: "Spudbay",
    bottles: 53,
    character: "spudbaymaci.gif"
  },
  {
    name: "Sususzaurusz",
    bottles: 24,
    character: "dinoori.gif"
  }
];

// csökkenő sorrend
players.sort((a, b) => b.bottles - a.bottles);

const leaderboard = document.getElementById("leaderboard");

players.forEach((player, index) => {
  const row = document.createElement("div");
  row.className = "row";

  row.innerHTML = `
    <div class="rank">#${index + 1}</div>
    <div class="avatar">
      <img src="${player.character}" alt="${player.name}">
    </div>
    <div class="name">${player.name}</div>
    <div class="score">${player.bottles} 🧴</div>
  `;

  leaderboard.appendChild(row);
});
