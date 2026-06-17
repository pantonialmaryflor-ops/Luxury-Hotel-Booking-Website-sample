window.addEventListener("load", () => {
  const container = document.querySelector(".rooms-container");
  if (!container) return;

  const originalCards = Array.from(container.children);
  if (originalCards.length === 0) return;

  // 1. Double the items: clone everything once and append it
  originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    container.appendChild(clone);
  });

  // 2. Get accurate sizing of one full loop cycle
  const firstCard = originalCards[0];
  const lastCard = originalCards[1];
  
  // Calculate exact distance from start of card 1 to start of card 4 (width + gap)
  let cardTotalWidth = firstCard.offsetWidth + 20; // fallback gap
  if (lastCard) {
    cardTotalWidth = lastCard.getBoundingClientRect().left - firstCard.getBoundingClientRect().left;
  }
  
  const loopWidth = cardTotalWidth * originalCards.length;

  // 3. Scroll listener to snap seamlessly
  container.addEventListener("scroll", () => {
    const currentScroll = container.scrollLeft;

    // If user scrolls near the end of the cloned set, snap back to start
    if (currentScroll >= loopWidth) {
      container.scrollLeft = currentScroll - loopWidth;
    }
    // If user drags/scrolls backward past the start, snap to the cloned track
    else if (currentScroll <= 0) {
      container.scrollLeft = loopWidth;
    }
  });
});
