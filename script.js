// --- KHU VỰC CẤU HÌNH DANH SÁCH GAME ---
// Bạn có thể thêm bao nhiêu game tùy thích, chỉ cần copy thêm dòng {...},

const games = [
    // LOẠI 1: GAME TỪ GOOGLE APPS SCRIPT (Dùng link https://...)
    { 
        name: "1. Rung Chuông Vàng", 
        icon: "fa-solid fa-bell", 
        url: "https://script.google.com/macros/s/DÁN_LINK_CỦA_BẠN_VÀO_ĐÂY/exec", 
        color: "#fbbf24" // Màu vàng
    },
    { 
        name: "2. Luyện Đề Online", 
        icon: "fa-solid fa-graduation-cap", 
        url: "https://script.google.com/macros/s/DÁN_LINK_CỦA_BẠN_VÀO_ĐÂY/exec", 
        color: "#3b82f6" // Màu xanh
    },

    // LOẠI 2: GAME TỪ GOOGLE AI STUDIO (Dùng tên file .html đã upload lên GitHub)
    { 
        name: "3. Rắn Săn Mồi (AI)", 
        icon: "fa-solid fa-staff-snake", 
        url: "ran-san-moi.html", // Tên file bạn đã tạo và upload lên
        color: "#f472b6" // Màu hồng
    },
    { 
        name: "4. Cờ Caro (AI)", 
        icon: "fa-solid fa-chess-board", 
        url: "co-caro.html", 
        color: "#a78bfa" // Màu tím
    },

    // ... MUỐN THÊM GAME THỨ 5, 6... THÌ COPY ĐOẠN DƯỚI DÁN TIẾP VÀO ...
    { 
        name: "Game Thứ 30", 
        icon: "fa-solid fa-gamepad", 
        url: "#", 
        color: "#94a3b8" 
    }
    // (Lưu ý: Cái cuối cùng không cần dấu phẩy)
];

// --- PHẦN XỬ LÝ GIAO DIỆN (TUYỆT ĐỐI KHÔNG SỬA DƯỚI NÀY) ---
const grid = document.getElementById('game-grid');
if(grid) {
    games.forEach(game => {
        const card = document.createElement('a');
        card.className = 'game-card';
        card.href = game.url;
        card.target = "_blank"; // Luôn mở tab mới cho ổn định
        
        card.innerHTML = `
            <div class="icon-box" style="color: ${game.color}">
                <i class="${game.icon}"></i>
            </div>
            <div class="game-title">${game.name}</div>
        `;
        grid.appendChild(card);
    });
}
