<template>
  <div
    ref="pageRef"
    class="download-page"
    @mousemove="handleMouseMove"
  >
    <!-- ==================== Background ==================== -->
    <div class="background">
      <div class="aurora aurora-1"></div>
      <div class="aurora aurora-2"></div>
      <div class="aurora aurora-3"></div>

      <div class="grid"></div>

      <div
        v-for="particle in particles"
        :key="particle.id"
        class="particle"
        :style="{
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          animationDelay: `${particle.delay}s`,
          animationDuration: `${particle.duration}s`,
          width: `${particle.size}px`,
          height: `${particle.size}px`
        }"
      ></div>

      <div
        class="mouse-glow"
        :style="{
          left: `${mouse.x}px`,
          top: `${mouse.y}px`
        }"
      ></div>
    </div>

    <!-- ==================== Navigation ==================== -->
    <header class="navbar">
      <div class="brand" @click="goHome">
        <div class="brand-icon">
          <div class="brand-icon-inner">
            <span class="brand-dot"></span>
          </div>
        </div>

        <div class="brand-text">
          <strong>Cloud Mail</strong>
          <span>MAIL CLIENT</span>
        </div>
      </div>

      <div class="nav-actions">
        <a href="#features">功能</a>
        <a href="#release">更新日志</a>
        <button class="nav-download" @click="download">
          下载客户端
        </button>
      </div>
    </header>

    <!-- ==================== Main ==================== -->
    <main>

      <!-- ==================== Hero ==================== -->
      <section class="hero">
        <div class="hero-content">

          <div class="status-badge">
            <span class="status-dot"></span>
            <span>Windows Client</span>
            <span class="badge-divider"></span>
            <span>Latest Release</span>
          </div>

          <h1>
            Your Mail.
            <br />
            <span class="gradient-text">Your Freedom.</span>
          </h1>

          <p class="hero-description">
            更快、更私密、更自由的现代化邮件客户端。
            <br />
            一个客户端，管理你的所有邮箱。
          </p>

          <!-- ==================== Download Card ==================== -->
          <div class="download-card">

            <div class="card-glow"></div>

            <div class="client-logo">
              <div class="logo-ring ring-1"></div>
              <div class="logo-ring ring-2"></div>
              <div class="logo-core">
                <div class="logo-mail">
                  <span></span>
                </div>
              </div>
            </div>

            <div class="client-info">
              <div class="client-label">
                CLOUD MAIL
              </div>

              <h2>Windows Client</h2>

              <div class="version">
                <span>v1.0.0</span>
                <i></i>
                <span>122 MB</span>
                <i></i>
                <span>x64</span>
              </div>
            </div>

            <button
              class="download-button"
              :class="{ downloading }"
              @click="download"
            >
              <span class="button-shine"></span>

              <span v-if="!downloading" class="download-content">
                <span class="download-icon">
                  ↓
                </span>

                <span>
                  <strong>立即下载</strong>
                  <small>Windows 10 / 11</small>
                </span>
              </span>

              <span v-else class="download-content">
                <span class="spinner"></span>

                <span>
                  <strong>正在启动下载</strong>
                  <small>请稍候...</small>
                </span>
              </span>
            </button>

            <div class="download-meta">
              <span>
                <span class="check">✓</span>
                免费下载
              </span>

              <span>
                <span class="check">✓</span>
                官方版本
              </span>

              <span>
                <span class="check">✓</span>
                无广告
              </span>
            </div>

          </div>

          <div class="scroll-hint">
            <span>SCROLL TO EXPLORE</span>
            <span class="scroll-arrow">↓</span>
          </div>

        </div>
      </section>

      <!-- ==================== Features ==================== -->
      <section id="features" class="section features-section">

        <div class="section-heading">
          <div class="eyebrow">
            WHY CLOUD MAIL
          </div>

          <h2>
            简单。
            <span>强大。</span>
            自由。
          </h2>

          <p>
            我们相信邮件客户端不应该复杂。
            <br />
            Cloud Mail 将你需要的一切放在一个干净、快速的界面中。
          </p>
        </div>

        <div class="features-grid">

          <article class="feature-card">
            <div class="feature-number">01</div>

            <div class="feature-icon">
              ⚡
            </div>

            <h3>极速同步</h3>

            <p>
              快速同步邮件数据，
              让你的收件箱始终保持最新状态。
            </p>

            <div class="feature-line"></div>
          </article>

          <article class="feature-card">
            <div class="feature-number">02</div>

            <div class="feature-icon">
              🔒
            </div>

            <h3>私密安全</h3>

            <p>
              你的邮件属于你。
              我们尽可能减少不必要的数据暴露。
            </p>

            <div class="feature-line"></div>
          </article>

          <article class="feature-card">
            <div class="feature-number">03</div>

            <div class="feature-icon">
              ☁
            </div>

            <h3>云端同步</h3>

            <p>
              邮件数据与云端保持同步，
              在不同设备之间自由切换。
            </p>

            <div class="feature-line"></div>
          </article>

          <article class="feature-card">
            <div class="feature-number">04</div>

            <div class="feature-icon">
              ✉
            </div>

            <h3>多账户</h3>

            <p>
              一个客户端管理多个邮箱，
              不再需要反复切换浏览器标签。
            </p>

            <div class="feature-line"></div>
          </article>

        </div>
      </section>

      <!-- ==================== Showcase ==================== -->
      <section class="section showcase-section">

        <div class="showcase">

          <div class="showcase-content">

            <div class="eyebrow">
              BUILT FOR FOCUS
            </div>

            <h2>
              你的邮箱。
              <br />
              <span>干净而高效。</span>
            </h2>

            <p>
              没有复杂的操作，
              没有多余的干扰。
              只专注于真正重要的邮件。
            </p>

            <div class="showcase-list">
              <div>
                <span>01</span>
                <strong>简洁界面</strong>
              </div>

              <div>
                <span>02</span>
                <strong>快速操作</strong>
              </div>

              <div>
                <span>03</span>
                <strong>现代体验</strong>
              </div>
            </div>

          </div>

          <div class="showcase-visual">

            <div class="window-back"></div>

            <div class="app-window">

              <div class="window-header">
                <div class="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div class="window-title">
                  Cloud Mail
                </div>
              </div>

              <div class="window-body">

                <aside class="fake-sidebar">
                  <div class="fake-logo"></div>

                  <div class="fake-menu active"></div>
                  <div class="fake-menu"></div>
                  <div class="fake-menu"></div>
                  <div class="fake-menu"></div>
                </aside>

                <div class="fake-content">

                  <div class="fake-toolbar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div class="fake-mail"></div>
                  <div class="fake-mail"></div>
                  <div class="fake-mail"></div>
                  <div class="fake-mail"></div>
                  <div class="fake-mail"></div>

                </div>

              </div>

            </div>

            <div class="visual-glow"></div>

          </div>

        </div>

      </section>

      <!-- ==================== System Requirements ==================== -->
      <section class="section system-section">

        <div class="section-heading small">
          <div class="eyebrow">
            SYSTEM REQUIREMENTS
          </div>

          <h2>
            开箱即用。
          </h2>
        </div>

        <div class="system-card">

          <div class="system-item">
            <span class="system-label">操作系统</span>
            <strong>Windows 10 / 11</strong>
          </div>

          <div class="system-divider"></div>

          <div class="system-item">
            <span class="system-label">架构</span>
            <strong>x64</strong>
          </div>

          <div class="system-divider"></div>

          <div class="system-item">
            <span class="system-label">文件大小</span>
            <strong>122 MB</strong>
          </div>

          <div class="system-divider"></div>

          <div class="system-item">
            <span class="system-label">版本</span>
            <strong>1.0.0</strong>
          </div>

        </div>

      </section>

      <!-- ==================== Release ==================== -->
      <section id="release" class="section release-section">

        <div class="release-layout">

          <div class="section-heading release-heading">

            <div class="eyebrow">
              RELEASE NOTES
            </div>

            <h2>
              最新版本
              <span>1.0.0</span>
            </h2>

            <p>
              Cloud Mail Windows 客户端
              首个公开版本。
            </p>

          </div>

          <div class="release-card">

            <div class="release-header">

              <div>
                <span class="release-version">
                  v1.0.0
                </span>

                <span class="release-date">
                  2026.08.13
                </span>
              </div>

              <span class="latest">
                LATEST
              </span>

            </div>

            <div class="release-line"></div>

            <ul>

              <li>
                <span>✓</span>
                首个公开版本
              </li>

              <li>
                <span>✓</span>
                邮件同步
              </li>

              <li>
                <span>✓</span>
                多账户支持
              </li>

              <li>
                <span>✓</span>
                Windows 客户端
              </li>

            </ul>

          </div>

        </div>

      </section>

      <!-- ==================== Final CTA ==================== -->
      <section class="final-section">

        <div class="final-glow"></div>

        <div class="final-content">

          <div class="mini-logo">
            <div></div>
          </div>

          <div class="eyebrow">
            READY TO FLY
          </div>

          <h2>
            重新定义你的
            <span>邮箱体验。</span>
          </h2>

          <p>
            下载 Cloud Mail Windows 客户端，
            开始一个更自由的邮件体验。
          </p>

          <button
            class="final-button"
            @click="download"
          >
            <span>↓</span>
            下载 Windows 客户端
          </button>

          <div class="final-meta">
            Windows 10 / 11 · x64 · 122 MB
          </div>

        </div>

      </section>

    </main>

    <!-- ==================== Footer ==================== -->
    <footer class="footer">

      <div class="footer-brand">
        <div class="footer-logo"></div>

        <div>
          <strong>Cloud Mail</strong>
          <span>PRIVATE · FAST · FREE</span>
        </div>
      </div>

      <div class="footer-center">
        © 2026 Cloud Mail
      </div>

      <div class="footer-right">
        <a href="/">返回邮箱</a>
      </div>

    </footer>

    <!-- ==================== Download Toast ==================== -->
    <Transition name="toast">
      <div
        v-if="showToast"
        class="download-toast"
      >
        <div class="toast-icon">
          ✓
        </div>

        <div>
          <strong>下载已开始</strong>
          <span>Cloud Mail Windows Client</span>
        </div>

        <button @click="showToast = false">
          ×
        </button>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const pageRef = ref(null)

const mouse = ref({
  x: -500,
  y: -500
})

const downloading = ref(false)
const showToast = ref(false)

let toastTimer = null
let downloadTimer = null

/*
 * Background particles
 */
const particles = Array.from({ length: 32 }, (_, index) => ({
  id: index,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 8,
  duration: Math.random() * 8 + 6
}))

function handleMouseMove(event) {
  mouse.value.x = event.clientX
  mouse.value.y = event.clientY
}

function download() {
  if (downloading.value) {
    return
  }

  downloading.value = true

  /*
   * 使用你的 Cloudflare Worker 下载地址。
   *
   * 因为页面和下载地址属于同一个域名，
   * 使用相对路径最方便。
   */
  const link = document.createElement('a')

  link.href = '/download/client.exe'
  link.download = 'mail-shungleemain-setup.exe'
  link.rel = 'noopener'

  document.body.appendChild(link)
  link.click()
  link.remove()

  showToast.value = true

  if (toastTimer) {
    clearTimeout(toastTimer)
  }

  toastTimer = setTimeout(() => {
    showToast.value = false
  }, 5000)

  if (downloadTimer) {
    clearTimeout(downloadTimer)
  }

  downloadTimer = setTimeout(() => {
    downloading.value = false
  }, 1600)
}

function goHome() {
  router.push('/')
}

onMounted(() => {
  document.body.classList.add('download-page-active')
})

onBeforeUnmount(() => {
  document.body.classList.remove('download-page-active')

  if (toastTimer) {
    clearTimeout(toastTimer)
  }

  if (downloadTimer) {
    clearTimeout(downloadTimer)
  }
})
</script>

<style lang="scss" scoped>
/* =========================================================
   Base
========================================================= */

.download-page {
  --bg: #05060a;
  --bg-soft: #080a10;
  --text: #f5f7ff;
  --text-soft: #a5abc0;
  --text-dim: #666c80;

  --accent: #7c6cff;
  --accent-light: #9f94ff;
  --cyan: #55d6ff;

  min-height: 100vh;
  overflow: hidden;
  position: relative;

  background:
    radial-gradient(
      circle at 50% -20%,
      rgba(100, 90, 255, 0.18),
      transparent 42%
    ),
    var(--bg);

  color: var(--text);

  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "PingFang SC",
    "Microsoft YaHei",
    sans-serif;
}

/* =========================================================
   Background
========================================================= */

.background {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.grid {
  position: absolute;
  inset: -50%;

  background-image:
    linear-gradient(
      rgba(255, 255, 255, 0.025) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.025) 1px,
      transparent 1px
    );

  background-size: 70px 70px;

  transform: perspective(700px) rotateX(58deg) translateY(8%);

  mask-image: linear-gradient(
    to bottom,
    transparent 5%,
    black 35%,
    black 70%,
    transparent 100%
  );

  opacity: 0.45;
}

.aurora {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.13;
  animation: auroraMove 16s ease-in-out infinite alternate;
}

.aurora-1 {
  top: -300px;
  left: -250px;
  background: #624cff;
}

.aurora-2 {
  top: 20%;
  right: -350px;
  background: #00bfff;
  animation-delay: -6s;
}

.aurora-3 {
  bottom: -450px;
  left: 30%;
  background: #a24cff;
  animation-delay: -11s;
}

@keyframes auroraMove {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  100% {
    transform: translate3d(100px, -50px, 0) scale(1.15);
  }
}

.mouse-glow {
  position: absolute;

  width: 500px;
  height: 500px;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(117, 100, 255, 0.1),
    transparent 68%
  );

  transition:
    left 0.08s linear,
    top 0.08s linear;
}

.particle {
  position: absolute;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.7);

  box-shadow:
    0 0 8px rgba(140, 130, 255, 0.8);

  animation: particleFloat linear infinite;
}

@keyframes particleFloat {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  20% {
    opacity: 0.8;
  }

  80% {
    opacity: 0.3;
  }

  100% {
    opacity: 0;
    transform: translateY(-80px);
  }
}

/* =========================================================
   Navbar
========================================================= */

.navbar {
  position: relative;
  z-index: 10;

  height: 82px;

  max-width: 1320px;
  margin: 0 auto;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;

  cursor: pointer;
}

.brand-icon {
  width: 38px;
  height: 38px;

  display: grid;
  place-items: center;

  border-radius: 11px;

  background:
    linear-gradient(
      135deg,
      rgba(140, 126, 255, 0.3),
      rgba(40, 200, 255, 0.1)
    );

  border: 1px solid rgba(255, 255, 255, 0.12);

  box-shadow:
    inset 0 0 20px rgba(120, 100, 255, 0.1),
    0 0 30px rgba(110, 90, 255, 0.08);
}

.brand-icon-inner {
  width: 18px;
  height: 14px;

  position: relative;

  border: 2px solid #9b90ff;
  border-radius: 4px;

  transform: rotate(-2deg);
}

.brand-dot {
  position: absolute;

  width: 4px;
  height: 4px;

  border-radius: 50%;

  background: #66dfff;

  right: -4px;
  top: -4px;

  box-shadow: 0 0 8px #66dfff;
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.brand-text strong {
  font-size: 15px;
  letter-spacing: -0.2px;
}

.brand-text span {
  font-size: 8px;
  letter-spacing: 2px;
  color: var(--text-dim);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-actions a {
  color: #858ba0;
  text-decoration: none;
  font-size: 13px;

  transition: color 0.25s ease;
}

.nav-actions a:hover {
  color: white;
}

.nav-download {
  border: 1px solid rgba(255, 255, 255, 0.13);

  color: white;

  background: rgba(255, 255, 255, 0.05);

  padding: 10px 17px;

  border-radius: 10px;

  cursor: pointer;

  font-size: 12px;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.nav-download:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(160, 150, 255, 0.5);

  transform: translateY(-1px);
}

/* =========================================================
   Hero
========================================================= */

.hero {
  position: relative;
  z-index: 2;

  min-height: calc(100vh - 82px);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 80px 24px 120px;
}

.hero-content {
  width: 100%;
  max-width: 900px;

  text-align: center;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  padding: 8px 13px;

  border-radius: 999px;

  border: 1px solid rgba(255, 255, 255, 0.1);

  background: rgba(255, 255, 255, 0.035);

  color: #999fb2;

  font-size: 10px;
  letter-spacing: 1px;

  backdrop-filter: blur(20px);

  animation: heroAppear 0.8s ease both;
}

.status-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #54e2a3;

  box-shadow:
    0 0 10px rgba(84, 226, 163, 0.8);

  animation: pulse 2s infinite;
}

@keyframes pulse {
  50% {
    opacity: 0.35;
  }
}

.badge-divider {
  width: 1px;
  height: 12px;

  background: rgba(255, 255, 255, 0.12);
}

.hero h1 {
  margin: 28px 0 20px;

  font-size: clamp(54px, 8vw, 104px);

  line-height: 0.95;

  letter-spacing: -5px;

  font-weight: 750;

  animation:
    heroAppear 0.8s 0.08s ease both;
}

.gradient-text {
  background:
    linear-gradient(
      100deg,
      #ffffff 10%,
      #aaa1ff 48%,
      #55d9ff 100%
    );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;
}

.hero-description {
  margin: 0 auto 46px;

  color: var(--text-soft);

  font-size: 15px;
  line-height: 1.9;

  animation:
    heroAppear 0.8s 0.16s ease both;
}

@keyframes heroAppear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* =========================================================
   Download Card
========================================================= */

.download-card {
  position: relative;

  max-width: 510px;

  margin: 0 auto;

  padding: 38px 40px 30px;

  border-radius: 28px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.075),
      rgba(255, 255, 255, 0.025)
    );

  border: 1px solid rgba(255, 255, 255, 0.11);

  backdrop-filter: blur(30px);

  box-shadow:
    0 30px 100px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);

  overflow: hidden;

  animation:
    cardAppear 0.9s 0.25s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

@keyframes cardAppear {
  from {
    opacity: 0;
    transform: translateY(35px) scale(0.97);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.card-glow {
  position: absolute;

  width: 260px;
  height: 260px;

  top: -180px;
  left: 50%;

  transform: translateX(-50%);

  background: #7666ff;

  filter: blur(100px);

  opacity: 0.18;

  pointer-events: none;
}

.client-logo {
  position: relative;

  width: 92px;
  height: 92px;

  margin: 0 auto 23px;

  display: grid;
  place-items: center;
}

.logo-ring {
  position: absolute;

  inset: 0;

  border-radius: 28px;

  border: 1px solid rgba(140, 125, 255, 0.3);

  animation: logoRotate 8s linear infinite;
}

.ring-2 {
  inset: 7px;

  border-color: rgba(60, 205, 255, 0.25);

  animation-direction: reverse;
  animation-duration: 11s;
}

@keyframes logoRotate {
  to {
    transform: rotate(360deg);
  }
}

.logo-core {
  width: 60px;
  height: 60px;

  display: grid;
  place-items: center;

  border-radius: 19px;

  background:
    linear-gradient(
      145deg,
      #7365ff,
      #4039a8
    );

  box-shadow:
    0 0 40px rgba(100, 85, 255, 0.35),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
}

.logo-mail {
  width: 30px;
  height: 22px;

  border: 2px solid rgba(255, 255, 255, 0.9);

  border-radius: 5px;

  position: relative;

  overflow: hidden;
}

.logo-mail::before,
.logo-mail::after {
  content: "";

  position: absolute;

  width: 18px;
  height: 2px;

  background: rgba(255, 255, 255, 0.9);

  top: 6px;
}

.logo-mail::before {
  left: -3px;
  transform: rotate(31deg);
}

.logo-mail::after {
  right: -3px;
  transform: rotate(-31deg);
}

.client-label {
  color: #777e94;

  font-size: 9px;

  letter-spacing: 3px;

  margin-bottom: 5px;
}

.client-info h2 {
  margin: 0;

  font-size: 26px;

  letter-spacing: -1px;
}

.version {
  margin-top: 11px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;

  color: #777e94;

  font-size: 11px;
}

.version i {
  width: 3px;
  height: 3px;

  border-radius: 50%;

  background: #4b5060;
}

/* =========================================================
   Download Button
========================================================= */

.download-button {
  position: relative;

  width: 100%;

  margin-top: 28px;

  padding: 16px 20px;

  border: 0;

  border-radius: 15px;

  cursor: pointer;

  color: white;

  background:
    linear-gradient(
      110deg,
      #6f60ff,
      #8a70ff,
      #4fcfff
    );

  box-shadow:
    0 12px 30px rgba(100, 85, 255, 0.25);

  overflow: hidden;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;
}

.download-button:hover {
  transform: translateY(-3px);

  box-shadow:
    0 18px 45px rgba(100, 85, 255, 0.4);

  filter: brightness(1.08);
}

.download-button:active {
  transform: translateY(-1px);
}

.button-shine {
  position: absolute;

  top: 0;
  left: -100%;

  width: 60%;
  height: 100%;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.22),
      transparent
    );

  transform: skewX(-20deg);

  animation: shine 4s ease-in-out infinite;
}

@keyframes shine {
  0%,
  55% {
    left: -100%;
  }

  75%,
  100% {
    left: 150%;
  }
}

.download-content {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 13px;
}

.download-content > span:last-child {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.download-content strong {
  font-size: 14px;
}

.download-content small {
  margin-top: 3px;

  font-size: 9px;

  opacity: 0.7;
}

.download-icon {
  width: 36px;
  height: 36px;

  display: grid;
  place-items: center;

  border-radius: 10px;

  background: rgba(0, 0, 0, 0.14);

  font-size: 23px;

  line-height: 1;
}

.spinner {
  width: 22px;
  height: 22px;

  border-radius: 50%;

  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;

  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.download-meta {
  display: flex;
  justify-content: center;

  gap: 18px;

  margin-top: 20px;

  color: #656b7d;

  font-size: 9px;
}

.check {
  color: #65dca7;
  margin-right: 4px;
}

/* =========================================================
   Scroll Hint
========================================================= */

.scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  margin-top: 65px;

  color: #4c5264;

  font-size: 8px;

  letter-spacing: 3px;

  animation: scrollFloat 2.5s ease-in-out infinite;
}

.scroll-arrow {
  font-size: 15px;
}

@keyframes scrollFloat {
  50% {
    transform: translateY(7px);
    opacity: 0.55;
  }
}

/* =========================================================
   Sections
========================================================= */

.section {
  position: relative;
  z-index: 2;

  max-width: 1200px;

  margin: 0 auto;

  padding: 140px 32px;
}

.section-heading {
  text-align: center;

  max-width: 700px;

  margin: 0 auto 70px;
}

.eyebrow {
  color: #7e75ff;

  font-size: 9px;

  letter-spacing: 3px;

  font-weight: 600;

  margin-bottom: 18px;
}

.section-heading h2 {
  margin: 0;

  font-size: clamp(38px, 5vw, 60px);

  line-height: 1.1;

  letter-spacing: -2.5px;
}

.section-heading h2 span {
  color: #8f86ff;
}

.section-heading p {
  margin-top: 22px;

  color: var(--text-soft);

  font-size: 14px;

  line-height: 1.9;
}

/* =========================================================
   Features
========================================================= */

.features-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 14px;
}

.feature-card {
  position: relative;

  padding: 32px 28px;

  min-height: 275px;

  border-radius: 20px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.045),
      rgba(255, 255, 255, 0.015)
    );

  border: 1px solid rgba(255, 255, 255, 0.07);

  overflow: hidden;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-7px);

  border-color: rgba(135, 120, 255, 0.3);

  background:
    linear-gradient(
      145deg,
      rgba(130, 115, 255, 0.08),
      rgba(255, 255, 255, 0.018)
    );
}

.feature-number {
  position: absolute;

  top: 22px;
  right: 24px;

  color: #363b4a;

  font-size: 10px;
}

.feature-icon {
  width: 45px;
  height: 45px;

  display: grid;
  place-items: center;

  border-radius: 13px;

  background: rgba(120, 105, 255, 0.1);

  border: 1px solid rgba(130, 115, 255, 0.12);

  font-size: 19px;

  margin-bottom: 28px;
}

.feature-card h3 {
  margin: 0 0 11px;

  font-size: 17px;
}

.feature-card p {
  margin: 0;

  color: #777d90;

  font-size: 12px;

  line-height: 1.8;
}

.feature-line {
  position: absolute;

  bottom: 0;
  left: 0;

  width: 0;
  height: 2px;

  background:
    linear-gradient(
      90deg,
      #7466ff,
      #4fd7ff
    );

  transition: width 0.4s ease;
}

.feature-card:hover .feature-line {
  width: 100%;
}

/* =========================================================
   Showcase
========================================================= */

.showcase-section {
  max-width: 1300px;
}

.showcase {
  display: grid;

  grid-template-columns: 0.85fr 1.15fr;

  align-items: center;

  gap: 90px;
}

.showcase-content h2 {
  margin: 0;

  font-size: clamp(40px, 5vw, 65px);

  line-height: 1.08;

  letter-spacing: -3px;
}

.showcase-content h2 span {
  color: #8177ff;
}

.showcase-content > p {
  margin: 25px 0;

  max-width: 420px;

  color: #858b9d;

  font-size: 14px;

  line-height: 1.9;
}

.showcase-list {
  margin-top: 35px;

  display: flex;
  flex-direction: column;

  gap: 13px;
}

.showcase-list div {
  display: flex;
  align-items: center;
  gap: 17px;
}

.showcase-list span {
  color: #696f82;

  font-size: 9px;

  letter-spacing: 1px;
}

.showcase-list strong {
  font-size: 12px;
}

/* =========================================================
   Fake App Window
========================================================= */

.showcase-visual {
  position: relative;

  min-height: 470px;

  display: grid;
  place-items: center;
}

.app-window {
  position: relative;

  width: 100%;
  max-width: 650px;

  border-radius: 18px;

  overflow: hidden;

  background: #0b0d14;

  border: 1px solid rgba(255, 255, 255, 0.1);

  box-shadow:
    0 40px 100px rgba(0, 0, 0, 0.55),
    0 0 70px rgba(100, 85, 255, 0.08);

  transform:
    perspective(1200px)
    rotateY(-6deg)
    rotateX(3deg);

  transition: transform 0.5s ease;

  z-index: 3;
}

.app-window:hover {
  transform:
    perspective(1200px)
    rotateY(-2deg)
    rotateX(1deg)
    translateY(-5px);
}

.window-back {
  position: absolute;

  width: 90%;
  height: 90%;

  border-radius: 20px;

  background:
    linear-gradient(
      135deg,
      rgba(100, 90, 255, 0.13),
      rgba(50, 210, 255, 0.05)
    );

  transform:
    rotate(3deg)
    translate(20px, 20px);

  filter: blur(1px);

  opacity: 0.7;
}

.window-header {
  height: 40px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  padding: 0 14px;

  position: relative;
}

.window-dots {
  display: flex;
  gap: 5px;
}

.window-dots span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #383c49;
}

.window-title {
  position: absolute;

  left: 50%;

  transform: translateX(-50%);

  color: #626879;

  font-size: 9px;
}

.window-body {
  display: flex;

  height: 330px;
}

.fake-sidebar {
  width: 125px;

  padding: 20px 13px;

  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.fake-logo {
  width: 25px;
  height: 25px;

  margin-bottom: 27px;

  border-radius: 7px;

  background:
    linear-gradient(
      135deg,
      #7668ff,
      #49cfff
    );
}

.fake-menu {
  width: 80px;
  height: 8px;

  margin: 15px 0;

  border-radius: 4px;

  background: #191c25;
}

.fake-menu.active {
  background: #302a61;
}

.fake-content {
  flex: 1;

  padding: 22px;
}

.fake-toolbar {
  display: flex;
  gap: 8px;

  margin-bottom: 20px;
}

.fake-toolbar span {
  width: 28px;
  height: 8px;

  border-radius: 4px;

  background: #20242e;
}

.fake-mail {
  height: 47px;

  margin-bottom: 8px;

  border-radius: 8px;

  background:
    linear-gradient(
      90deg,
      #151821,
      #10121a
    );

  border: 1px solid rgba(255, 255, 255, 0.025);

  position: relative;
}

.fake-mail::before {
  content: "";

  position: absolute;

  left: 13px;
  top: 14px;

  width: 90px;
  height: 6px;

  border-radius: 3px;

  background: #292d38;
}

.fake-mail::after {
  content: "";

  position: absolute;

  left: 13px;
  top: 26px;

  width: 170px;
  height: 4px;

  border-radius: 2px;

  background: #1f232d;
}

.visual-glow {
  position: absolute;

  width: 300px;
  height: 300px;

  border-radius: 50%;

  background: #6255ff;

  filter: blur(130px);

  opacity: 0.13;

  z-index: 1;
}

/* =========================================================
   System
========================================================= */

.system-section {
  max-width: 1050px;
}

.section-heading.small {
  margin-bottom: 45px;
}

.section-heading.small h2 {
  font-size: 45px;
}

.system-card {
  display: grid;

  grid-template-columns:
    1fr auto 1fr auto 1fr auto 1fr;

  align-items: center;

  padding: 28px 35px;

  border-radius: 18px;

  background: rgba(255, 255, 255, 0.035);

  border: 1px solid rgba(255, 255, 255, 0.07);

  backdrop-filter: blur(20px);
}

.system-item {
  display: flex;
  flex-direction: column;

  gap: 7px;

  text-align: center;
}

.system-label {
  color: #5f6575;

  font-size: 9px;

  letter-spacing: 1px;
}

.system-item strong {
  font-size: 12px;
}

.system-divider {
  width: 1px;
  height: 35px;

  background: rgba(255, 255, 255, 0.08);
}

/* =========================================================
   Release
========================================================= */

.release-section {
  max-width: 1050px;
}

.release-layout {
  display: grid;

  grid-template-columns: 1fr 1fr;

  align-items: center;

  gap: 80px;
}

.release-heading {
  text-align: left;

  margin: 0;
}

.release-heading h2 span {
  display: block;

  color: #8076ff;

  font-size: 0.65em;

  margin-top: 8px;
}

.release-card {
  padding: 32px;

  border-radius: 20px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.055),
      rgba(255, 255, 255, 0.015)
    );

  border: 1px solid rgba(255, 255, 255, 0.08);
}

.release-header {
  display: flex;

  align-items: center;
  justify-content: space-between;
}

.release-version {
  font-size: 18px;
  font-weight: 650;
}

.release-date {
  color: #666c7d;

  font-size: 10px;

  margin-left: 12px;
}

.latest {
  padding: 5px 9px;

  border-radius: 999px;

  background: rgba(85, 215, 160, 0.08);

  color: #61dba3;

  font-size: 8px;

  letter-spacing: 1px;
}

.release-line {
  height: 1px;

  background: rgba(255, 255, 255, 0.07);

  margin: 25px 0;
}

.release-card ul {
  list-style: none;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;

  gap: 17px;
}

.release-card li {
  display: flex;

  align-items: center;

  gap: 12px;

  color: #8b91a3;

  font-size: 12px;
}

.release-card li span {
  color: #64dba4;
}

/* =========================================================
   Final CTA
========================================================= */

.final-section {
  position: relative;

  z-index: 2;

  min-height: 620px;

  display: flex;

  align-items: center;
  justify-content: center;

  text-align: center;

  padding: 120px 25px;

  overflow: hidden;
}

.final-glow {
  position: absolute;

  width: 650px;
  height: 650px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(112, 96, 255, 0.16),
      transparent 68%
    );

  pointer-events: none;
}

.final-content {
  position: relative;

  max-width: 800px;
}

.mini-logo {
  width: 58px;
  height: 58px;

  margin: 0 auto 30px;

  display: grid;
  place-items: center;

  border-radius: 17px;

  background:
    linear-gradient(
      135deg,
      #7666ff,
      #4fcfff
    );

  box-shadow:
    0 0 60px rgba(100, 90, 255, 0.3);
}

.mini-logo div {
  width: 23px;
  height: 17px;

  border: 2px solid white;

  border-radius: 4px;
}

.final-content h2 {
  margin: 0;

  font-size: clamp(42px, 6vw, 72px);

  line-height: 1.05;

  letter-spacing: -3px;
}

.final-content h2 span {
  display: block;

  background:
    linear-gradient(
      90deg,
      #9187ff,
      #58d9ff
    );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;
}

.final-content p {
  color: #818799;

  font-size: 14px;

  line-height: 1.8;

  margin: 25px auto 30px;

  max-width: 500px;
}

.final-button {
  padding: 16px 27px;

  border: 1px solid rgba(255, 255, 255, 0.12);

  border-radius: 13px;

  background:
    linear-gradient(
      110deg,
      #7062ff,
      #4ecfff
    );

  color: white;

  font-size: 13px;

  font-weight: 600;

  cursor: pointer;

  box-shadow:
    0 15px 40px rgba(100, 85, 255, 0.25);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.final-button span {
  font-size: 19px;

  margin-right: 8px;
}

.final-button:hover {
  transform: translateY(-3px);

  box-shadow:
    0 20px 50px rgba(100, 85, 255, 0.4);
}

.final-meta {
  margin-top: 18px;

  color: #555b6c;

  font-size: 9px;

  letter-spacing: 1px;
}

/* =========================================================
   Footer
========================================================= */

.footer {
  position: relative;

  z-index: 2;

  max-width: 1200px;

  margin: 0 auto;

  padding: 30px 32px 45px;

  display: flex;

  align-items: center;
  justify-content: space-between;

  border-top: 1px solid rgba(255, 255, 255, 0.05);

  color: #555b6c;
}

.footer-brand {
  display: flex;

  align-items: center;

  gap: 10px;
}

.footer-logo {
  width: 25px;
  height: 25px;

  border-radius: 7px;

  background:
    linear-gradient(
      135deg,
      #7465ff,
      #4bcfff
    );
}

.footer-brand div:last-child {
  display: flex;
  flex-direction: column;
}

.footer-brand strong {
  color: #9ca2b3;

  font-size: 11px;
}

.footer-brand span {
  margin-top: 3px;

  font-size: 6px;

  letter-spacing: 1.5px;
}

.footer-center {
  font-size: 9px;
}

.footer-right a {
  color: #73798b;

  text-decoration: none;

  font-size: 10px;

  transition: color 0.2s ease;
}

.footer-right a:hover {
  color: white;
}

/* =========================================================
   Toast
========================================================= */

.download-toast {
  position: fixed;

  z-index: 100;

  right: 25px;
  bottom: 25px;

  min-width: 280px;

  display: flex;

  align-items: center;

  gap: 13px;

  padding: 14px 15px;

  border-radius: 15px;

  background:
    rgba(18, 20, 29, 0.9);

  border: 1px solid rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(25px);

  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.4);
}

.toast-icon {
  width: 33px;
  height: 33px;

  display: grid;
  place-items: center;

  border-radius: 10px;

  background: rgba(85, 220, 165, 0.12);

  color: #63dda6;
}

.download-toast > div:nth-child(2) {
  display: flex;
  flex-direction: column;

  gap: 3px;
}

.download-toast strong {
  font-size: 11px;
}

.download-toast span {
  color: #666c7d;

  font-size: 9px;
}

.download-toast button {
  margin-left: auto;

  border: 0;

  background: none;

  color: #666c7d;

  font-size: 18px;

  cursor: pointer;
}

.toast-enter-active,
.toast-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;

  transform: translateY(20px);
}

/* =========================================================
   Responsive
========================================================= */

@media (max-width: 1000px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .showcase {
    grid-template-columns: 1fr;

    gap: 50px;
  }

  .showcase-content {
    text-align: center;
  }

  .showcase-content > p {
    margin-left: auto;
    margin-right: auto;
  }

  .showcase-list {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .system-card {
    grid-template-columns: repeat(2, 1fr);

    gap: 25px;
  }

  .system-divider {
    display: none;
  }

  .release-layout {
    grid-template-columns: 1fr;
  }

  .release-heading {
    text-align: center;
  }
}

@media (max-width: 700px) {
  .navbar {
    height: 70px;

    padding: 0 18px;
  }

  .nav-actions a {
    display: none;
  }

  .nav-download {
    padding: 9px 13px;
  }

  .hero {
    min-height: auto;

    padding-top: 70px;
  }

  .hero h1 {
    font-size: clamp(48px, 14vw, 70px);

    letter-spacing: -3px;
  }

  .hero-description {
    font-size: 13px;
  }

  .download-card {
    padding: 30px 20px 25px;

    border-radius: 23px;
  }

  .download-meta {
    gap: 10px;

    flex-wrap: wrap;
  }

  .section {
    padding: 90px 20px;
  }

  .section-heading {
    margin-bottom: 45px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    min-height: auto;
  }

  .showcase-visual {
    min-height: 320px;
  }

  .window-body {
    height: 230px;
  }

  .fake-sidebar {
    width: 80px;
  }

  .system-card {
    grid-template-columns: 1fr;

    gap: 20px;

    padding: 25px;
  }

  .system-item {
    text-align: left;

    flex-direction: row;

    align-items: center;

    justify-content: space-between;
  }

  .release-card {
    padding: 24px;
  }

  .footer {
    padding-left: 20px;
    padding-right: 20px;

    flex-wrap: wrap;

    gap: 18px;
  }

  .footer-center {
    order: 3;

    width: 100%;

    text-align: center;
  }

  .download-toast {
    left: 15px;
    right: 15px;
    bottom: 15px;

    min-width: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
</style>
