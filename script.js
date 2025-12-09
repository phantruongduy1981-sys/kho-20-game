// ==============================================================
// PHẦN 1: DANH SÁCH GAME (Bạn điền Link thật của bạn vào đây)
// ==============================================================

const games = [
    // --- GAME SỐ 1 ---
    {
        name: "RUNG CHUÔNG VÀNG",
        icon: "fa-solid fa-bell", // Icon cái chuông
        // 👇 Dán link Apps Script của bạn vào giữa 2 dấu nháy kép bên dưới
        url: "https://script.google.com/macros/s/AKfycbx63N3S0PkXpqsLrNTYl0xTTrBiUcMRZqMoaS1RX-zpsE-tMhSBM1gQ4kUvxRHcp_q9/exec", 
        color: "#eab308" // Màu vàng
    },

    // --- GAME SỐ 2 ---
    {
        name: "LUYỆN ĐỀ ONLINE",
        icon: "fa-solid fa-pen-to-square", // Icon cây bút
        url: "https://script.google.com/macros/s/DÁN_LINK_THẬT_VÀO_ĐÂY/exec",
        color: "#3b82f6" // Màu xanh dương
    },

    // --- GAME SỐ 3 ---
    {
        name: "NỘP HỒ SƠ GIÁO VIÊN",
        icon: "fa-solid fa-file-arrow-up", // Icon nộp file
        url: "https://script.google.com/macros/s/DÁN_LINK_THẬT_VÀO_ĐÂY/exec",
        color: "#10b981" // Màu xanh lá
    },

    // --- GAME SỐ 4 (Ví dụ Game AI Studio) ---
    {
        name: "RẮN SĂN MỒI (AI)",
        icon: "fa-solid fa-staff-snake", // Icon con rắn
        url: "#", // Điền tên file .html nếu có (ví dụ: game-ran.html)
        color: "#ec4899" // Màu hồng
    },

    // --- GAME SỐ 5 ---
    {
        name: "GAME KHÁC",
        icon: "fa-solid fa-gamepad",
        url: "#",
        color: "#8b5cf6" // Màu tím
    }
    
    // Muốn thêm game nữa thì copy từ dấu { đến dấu }, và dán xuống đây
];


// ==============================================================
// PHẦN 2: CODE XỬ LÝ GIAO DIỆN (QUAN TRỌNG - KHÔNG ĐƯỢC XÓA)
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

