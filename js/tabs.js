(() => {
  const firstParams = {
    tabsClass: "js-tab", //наши кнопки переключения
    wrap: "js-tabs-wrap", // наша таб-обертка где кнопки и контент
    content: "js-tab-content", // наш таб-контент
    active: "active"// активный режим
  };

  function setTabs(params) {
    const tabBtns = document.querySelectorAll(`.${params.tabsClass}`);

    function onTabClick(e) {
      e.preventDefault();
      const path = e.target.dataset.path;
      const wrap = e.target.closest(`.${params.wrap}`);
      const currentContent = wrap.querySelector(`.${params.content}[data-target="${path}"]`);
      const contents = wrap.querySelectorAll(`.${params.content}`);

      contents.forEach((el) => {
        el.classList.remove(params.active);
      });

      currentContent.classList.add(params.active);

      tabBtns.forEach((el) => {
        el.classList.remove(params.active);
      });

      this.classList.add(params.active);
    }

    tabBtns.forEach(function (el) {
      el.addEventListener("click", onTabClick);
    });
  }

  setTabs(firstParams);

})();


