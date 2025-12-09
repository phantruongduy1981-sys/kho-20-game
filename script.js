// ==============================================================
// PHẦN 1: DANH SÁCH GAME (Bạn điền Link thật của bạn vào đây)
// ==============================================================

const games = [
    // --- GAME SỐ 1 ---
    {
        name: "KẾ HOẠCH TUẦN",
        icon: "fa-solid fa-calendar-check", 
        // 👇 Dán link Apps Script thật vào đây
        url: "https://script.google.com/macros/s/AKfycbx63N3S0PkXpqsLrNTYl0xTTrBiUcMRZqMoaS1RX-zpsE-tMhSBM1gQ4kUvxRHcp_q9/exec", 
        color: "#fbbf24" // Màu vàng
    },

    // --- GAME SỐ 2 ---
    {
        name: "KIỂM TRA ONLINE",
        icon: "fa-solid fa-pen-to-square",
        url: "https://script.google.com/macros/s/AKfycbwP0S_0wde84PGdQW36dkf05bxbR-i0UKlNOC-J0o4JohO_bI74PkU7UCcZPYtOXJB6/exec",
        color: "#34d399" // Màu xanh lá
    },

    // --- GAME SỐ 3 ---
    {
        name: "HỆ THỐNG LMS",
        icon: "fa-solid fa-graduation-cap",
        url: "https://script.google.com/macros/s/DÁN_LINK_THẬT_VÀO_ĐÂY/exec",
        color: "#60a5fa" // Màu xanh dương
    },

    // --- GAME SỐ 4 ---
    {
        name: "RUNG CHUÔNG VÀNG",
        icon: "fa-solid fa-bell",
        url: "https://script.google.com/macros/s/DÁN_LINK_THẬT_VÀO_ĐÂY/exec",
        color: "#f87171" // Màu đỏ
    },
    
    // --- GAME SỐ 5 (Ví dụ) ---
    {
        name: "GAME GIẢI TRÍ",
        icon: "fa-solid fa-gamepad",
        url: "#",
        color: "#a78bfa" // Màu tím
    }
];


// ==============================================================
// PHẦN 2: CODE XỬ LÝ GIAO DIỆN (LÚC NÃY BẠN BỊ THIẾU PHẦN NÀY)
// Máy tính sẽ dùng đoạn này để vẽ các ô vuông icon ra màn hình
// ==============================================================

const grid = document.getElementById('game-grid');

if (grid) {
    // Xóa nội dung cũ để tránh bị trùng lặp
    grid.innerHTML = '';

    games.forEach(game => {
        // 1. Tạo thẻ a (đường dẫn)
        const card = document.createElement('a');
        card.className = 'game-card';
        card.href = game.url;
        card.target = "_blank"; // Mở tab mới khi click
        
        // 2. Tạo nội dung bên trong thẻ (Icon + Tên Game)
        card.innerHTML = `
            <div class="icon-box" style="color: ${game.color}">
                <i class="${game.icon}"></i>
            </div>
            <div class="game-title">${game.name}</div>
        `;

        // 3. Gắn thẻ vào lưới giao diện
        grid.appendChild(card);
    });
    
    console.log("Đã tải xong giao diện game!");
} else {
    console.error("Lỗi: Không tìm thấy khung chứa game (id='game-grid')");
}


