<template>
  <div class="viewer-container">
    <h3>Trình xem sản phẩm 3D 360° - WONDERLAB</h3>
    
    <!-- Thanh công cụ chuyển đổi chế độ 2D / 3D -->
    <div class="toggle-bar">
      <button 
        :class="{ active: !is3D }" 
        @click="is3D = false"
      >
        📷 Xem ảnh 2D
      </button>
      <button 
        :class="{ active: is3D }" 
        @click="is3D = true"
      >
        ✨ Trình xem 3D 360°
      </button>
    </div>

    <!-- Khu vực hiển thị nội dung thay đổi linh hoạt dựa vào biến is3D -->
    <div class="display-box">
      <!-- Nếu is3D = false thì hiển thị Ảnh 2D -->
      <div v-if="!is3D" class="image-2d-wrapper">
        <img 
          src="https://modelviewer.dev/shared-assets/models/Astronaut.png" 
          alt="Ảnh 2D sản phẩm WONDERLAB" 
          class="product-image-2d"
        />
        <p class="mode-desc">Chế độ ảnh tĩnh 2D truyền thống trên website thương mại điện tử.</p>
      </div>

      <!-- Nếu is3D = true thì hiển thị Trình xem 3D Model-Viewer -->
      <div v-else class="model-3d-wrapper">
        <model-viewer
          src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
          alt="Mô hình 3D tương tác 360 độ"
          camera-controls
          auto-rotate
          poster="https://modelviewer.dev/shared-assets/models/Astronaut.png"
          style="width: 100%; height: 420px; background-color: #f8f9fa;"
        >
        </model-viewer>
        <p class="mode-desc">✨ Trợ giúp: Dùng chuột trái để xoay 360°, lăn chuột để phóng to/thu nhỏ.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Khai báo trạng thái: mặc định ban đầu là hiển thị chế độ 3D (is3D = true)
const is3D = ref(true)
</script>

<style scoped>
.viewer-container {
  max-width: 750px;
  margin: 30px auto;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.toggle-bar {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 12px;
}

.toggle-bar button {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid #3498db;
  background-color: transparent;
  color: #3498db;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.toggle-bar button.active {
  background-color: #3498db;
  color: white;
  box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
}

.display-box {
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  overflow: hidden;
  background: #fdfdfd;
  padding: 15px;
}

.product-image-2d {
  max-width: 100%;
  height: 420px;
  object-fit: contain;
}

.mode-desc {
  font-size: 13px;
  color: #7f8c8d;
  margin-top: 12px;
  font-style: italic;
}
</style>