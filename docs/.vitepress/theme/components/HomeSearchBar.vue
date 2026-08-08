<template>
  <div class="home-search-bar" @click="openSearch">
    <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
    <span class="search-placeholder">搜索文章内容...</span>
    <div class="search-shortcut">
      <kbd>Ctrl</kbd>
      <kbd>K</kbd>
    </div>
  </div>
</template>

<script setup lang="ts">
function openSearch() {
  // 点击导航栏中的 VitePress 本地搜索按钮
  const btn = document.querySelector('#local-search button, .DocSearch-Button, button[aria-label="Search"]')
  if (btn) {
    ;(btn as HTMLElement).click()
  }
}
</script>

<style scoped>
.home-search-bar {
  display: flex;
  align-items: center;
  max-width: 520px;
  margin: 0 auto;
  padding: 12px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.home-search-bar:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 2px 12px rgba(33, 141, 161, 0.12);
}

.search-icon {
  color: var(--vp-c-text-2);
  flex-shrink: 0;
  margin-right: 10px;
}

.search-placeholder {
  flex: 1;
  color: var(--vp-c-text-2);
  font-size: 15px;
}

.search-shortcut {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}

.search-shortcut kbd {
  padding: 2px 7px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-size: 12px;
  font-family: inherit;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg);
}
</style>
