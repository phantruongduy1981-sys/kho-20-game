// DANH SÁCH 20 GAME CỦA BẠN
const games = [
    // --- NHÓM 1: CÁC GAME TỪ APP SCRIPT (Link https...) ---
    { name: "Game 1: Rung Chuông", icon: "fa-solid fa-bell", url: "https://script.google.com/macros/s/LINK_CUA_BAN/exec", color: "#fbbf24" },
    { name: "Game 2: Trắc Nghiệm", icon: "fa-solid fa-pen", url: "https://script.google.com/macros/s/LINK_CUA_BAN/exec", color: "#34d399" },
    { name: "Game 3: Nộp Bài", icon: "fa-solid fa-upload", url: "https://script.google.com/macros/s/LINK_CUA_BAN/exec", color: "#60a5fa" },
    // ... Bạn copy thêm dòng để điền tiếp các game App Script khác ...

    // --- NHÓM 2: CÁC GAME TỪ AI STUDIO (Link là tên file .html) ---
    { name: "Game 4: Rắn Săn Mồi", icon: "fa-solid fa-staff-snake", url: "game-ran.html", color: "#f472b6" },
    { name: "Game 5: Cờ Caro", icon: "fa-solid fa-chess-board", url: "game-caro.html", color: "#a78bfa" },
    { name: "Game 6: Tính Toán", icon: "fa-solid fa-calculator", url: "game-toan.html", color: "#fb7185" },
    
    // ... Copy thêm các dòng dưới đây cho đủ 20 game ...
    { name: "Game 7", icon: "fa-solid fa-gamepad", url: "#", color: "#94a3b8" },
    { name: "Game 8", icon: "fa-solid fa-gamepad", url: "#", color: "#94a3b8" },
    // ...
    { name: "Game 20", icon: "fa-solid fa-gamepad", url: "#", color: "#94a3b8" }
];

// Code tạo giao diện (Không cần sửa)
const grid = document.getElementById('game-grid');
games.forEach(g => {
    const card = document.createElement('a');
    card.className = 'game-card';
    card.href = g.url;
    card.target = "_blank";
    card.innerHTML = `<div class="icon-box" style="color:${g.color}"><i class="${g.icon}"></i></div><div>${g.name}</div>`;
    grid.appendChild(card);
});
