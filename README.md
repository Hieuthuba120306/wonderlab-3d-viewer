# HƯỚNG DẪN CÀI ĐẶT VÀ CHẠY DỰ ÁN WONDERLAB 3D VIEWER

Chào mọi người, đây là tài liệu hướng dẫn nhanh để mọi người có thể clone mã nguồn trình xem 3D tương tác 360° sử dụng Vue.js và Model-Viewer về máy cá nhân và chạy thử.

### 1. Yêu cầu hệ thống

Trước khi bắt đầu, mọi người nhớ kiểm tra máy tính đã cài đặt các công cụ sau chưa nhé:

* **Node.js** (Phiên bản LTS khuyên dùng). Mọi người có thể tải tại trang chủ: [nodejs.org](https://nodejs.org/).
* **Visual Studio Code** (Phần mềm viết code).
* **Git** (Để quản lý và tải mã nguồn).

### 2. Các bước chạy dự án trên máy cá nhân

**Bước 1: Tải mã nguồn về máy**
Mở phần mềm Terminal (trên Mac) hoặc CMD/PowerShell (trên Windows), sau đó chạy lệnh clone repository về thư mục muốn lưu:

git clone <URL-Repository-GitHub-Của-Nhóm>
cd wonderlab-3d-viewer


**Bước 2: Cài đặt các gói thư viện phụ thuộc**
Trong thư mục dự án vừa tải về, mọi người chạy lệnh sau để hệ thống tự động cài đặt các thư viện cần thiết (Vue, Vite, v.v.):

npm install


**Bước 3: Khởi động môi trường chạy thử (Development Server)**
Sau khi cài đặt xong, mọi người chạy lệnh để bật server:

bash
npm run dev

**Bước 4: Trải nghiệm trên trình duyệt**
Sau khi chạy lệnh trên, terminal sẽ cung cấp một đường dẫn cục bộ (thường sẽ là `http://localhost:5173/`). Mọi người chỉ cần giữ phím `Ctrl` (hoặc `Cmd` trên Mac) rồi click vào đường dẫn đó để mở trình duyệt và trải nghiệm giao diện chuyển đổi qua lại giữa ảnh 2D và mô hình 3D tương tác 360°!


### 3. Lưu ý khi làm việc nhóm

* Trước khi code thêm tính năng mới, mọi người nhớ tạo branch riêng theo quy ước nhóm nhé: `feature/tên-tính-năng`.
* Khi commit code, nhớ tuân thủ quy ước đặt tên (Ví dụ: `feat: add 3d viewer component`, `ui: update toggle button`,...).
