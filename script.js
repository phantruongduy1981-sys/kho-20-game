// ==============================================================
// PHẦN 1: DANH SÁCH GAME (Bạn điền Link thật của bạn vào đây)
// ==============================================================

const games = [
    // --- GAME SỐ 1 ---
    {
        name: "QUẢN LÝ MĐ",
        icon: "fa-solid fa-calendar-check", 
        // 👇 Dán link Apps Script thật vào đây
        url: "https://quanly-minhduc.vercel.app/", 
        color: "#fbbf24" // Màu vàng
    },
    // --- GAME SỐ 2 (Ví dụ) ---
    {
        name: "QUẢN LÝ THI ĐUA",
        icon: "fa-solid fa-briefcase",
        url: "https://script.google.com/macros/s/AKfycbwtOdCfKI341hcmyV7y-WxScx5phqUuvljGCve6u4TBjIpQwC8nL3jdLhbr3rY-cqlYoA/exec",
        color: "#a78bfa" // Màu tím
    },

    // --- GAME SỐ 3 ---
    {
        name: "KIỂM TRA ONLINE",
        icon: "fa-solid fa-pen-to-square",
        url: "https://script.google.com/macros/s/AKfycbwP0S_0wde84PGdQW36dkf05bxbR-i0UKlNOC-J0o4JohO_bI74PkU7UCcZPYtOXJB6/exec",
        color: "#34d399" // Màu xanh lá
    },

    // --- GAME SỐ 4 ---
    {
        name: "HỆ THỐNG LMS 10",
        icon: "fa-solid fa-graduation-cap",
        url: "https://script.google.com/macros/s/AKfycbxxT9pfULjr8SwcGQGvbNtspAfRxMQnc715Ohx3Q00UX5lLuvd_JCTZEuFOXeDQ6Mzi/exec",
        color: "#60a5fa" // Màu xanh dương
    },

    // --- GAME SỐ 5 ---
    {
        name: "TRỘN ĐỀ ONLINE",
        icon: "fa-solid fa-arrows-rotate",
        url: "https://tronde2025.pages.dev/?fbclid=IwY2xjawOtiGFleHRuA2FlbQIxMABicmlkETFyUHptT3JYYjcwNHNoa3FOc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHvVCfzGjJg3ffCPkorqXtBq2TW_2zHXYBSRi4Z2AO_xIU3piR3L3NQeWLusw_aem_d3ZUucDOE5uJ48Wr7ysesw",
        color: "#f87171" // Màu đỏ
    },
        // --- GAME SỐ 6 ---
    {
        name: "TRỘN ĐỀ 2025 MĐ",
        icon: "fa-solid fa-pen-to-square",
        url: "https://trondeword2026.streamlit.app",
        color: "#f87171" // Màu đỏ
    },
     // --- GAME SỐ 7 ---
    {
        name: "QUAY GỌI TÊN",
        icon: "fa-solid fa-dharmachakra",
        url: "https://game-goiten.vercel.app/",
        color: "#f87171" // Màu đỏ
    },
     // --- GAME SỐ 1 ---
    {
        name: "KẾ HOẠCH TUẦN QN",
        icon: "fa-solid fa-calendar-check", 
        // 👇 Dán link Apps Script thật vào đây
        url: "https://script.google.com/macros/s/AKfycbx63N3S0PkXpqsLrNTYl0xTTrBiUcMRZqMoaS1RX-zpsE-tMhSBM1gQ4kUvxRHcp_q9/exec", 
        color: "#fbbf24" // Màu vàng
    },
         // --- GAME SỐ 8 ---
    {
        name: "GAME RỒNG VÀNG",
        icon: "fa-solid fa-dragon",
        url: "https://script.google.com/macros/s/AKfycbznyRUJ7JNr6q3R3QzbfPBljdVUYk_NZ9s0opxDYA40SaeMQxGrn-oAbrdhSQB1hOm_/exec",
        color: "#f87171" // Màu đỏ
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



























