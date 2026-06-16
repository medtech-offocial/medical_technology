document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. 日本語 / 英語 切り替え機能
  // ==========================================
  const langBtn = document.getElementById("lang-toggle");
  let currentLang = "ja"; // 初期値は日本語

  langBtn.addEventListener("click", () => {
    // ボタンを押した時のプチアニメーション
    langBtn.style.transform = "scale(0.95)";
    setTimeout(() => (langBtn.style.transform = "scale(1)"), 100);

    // 言語の反転
    currentLang = currentLang === "ja" ? "en" : "ja";

    // ボタン自体のテキストを変更
    langBtn.textContent = currentLang === "ja" ? "English" : "日本語";

    // ページ内の[data-ja]と[data-en]を持つ要素をすべて書き換え
    const translatableElements = document.querySelectorAll("[data-ja]");
    translatableElements.forEach((el) => {
      el.textContent = el.getAttribute(`data-${currentLang}`);
    });
  });

  // ==========================================
  // 2. スクロール時にフワッと表示させるアニメーション
  // ==========================================
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85; // 画面の下部15%の位置にきたら発火

    revealElements.forEach((el) => {
      const elTop = el.getBoundingClientRect().top;

      if (elTop < triggerBottom) {
        el.classList.add("active");
      }
    });
  };

  // 初期読み込み時にも一度実行（最初に見えている範囲のため）
  revealOnScroll();

  // スクロールイベントに登録
  window.addEventListener("scroll", revealOnScroll);
  // ==========================================
  // 3. ハンバーガーメニューの開閉制御
  // ==========================================
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const menuLinks = document.querySelectorAll(".nav-menu ul a");

  // ボタンをクリックした時の切り替え
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("open");
    navMenu.classList.toggle("open");
  });

  // メニュー内のリンクをクリックしたら自動で閉じる（ページ内スクロール用）
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("open");
      navMenu.classList.remove("open");
    });
  });
});
