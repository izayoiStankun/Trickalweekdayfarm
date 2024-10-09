window.onscroll = function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0; // 사파리 지원
    document.documentElement.scrollTop = 0; // 크롬, 파이어폭스, IE 지원
}
