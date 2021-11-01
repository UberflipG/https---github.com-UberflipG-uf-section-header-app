if (window.ufstreamsectionapp.processSectionHeader === undefined) {
  window.ufstreamsectionapp.processSectionHeader = () => {
    if (window.ufstreamsectionapp.debug_mode) {
      console.log("processSectionHeader");
    }

    const tilesArray = [
      ...document.querySelectorAll("li.uf-item-tile:not(#loading-notifier)"),
    ];
    const sectionHeaderStreamArray =
      window.ufstreamsectionapp.sectionHeaderStreamArray;

    tilesArray.forEach((tile) => {
      const sourceStream = tile.dataset.sourceStreamId;
      var titleHtml = "";

      sectionHeaderStreamArray.forEach((streamID) => {
        if (streamID.toString() === sourceStream) {
          if (window.ufstreamsectionapp.debug_mode) {
            console.log("Section Header Found");
          }
          titleHtml =
            tile.children[0].children[0].children[0].children[0].outerHTML;
          tile.classList.add("section-header-tile");
          tile.innerHTML = titleHtml;
        }
      });
    });
    if (window.ufstreamsectionapp.debug_mode) {
      console.log("Handle Next Prev Link");
    }
    prevNextLinks = document.querySelectorAll(
      "a.uf-prev-next-link[href*=stream-section-headers]"
    );

    prevNextLinks.forEach((separatorLink) => {
      if (window.ufstreamsectionapp.debug_mode) {
        console.log("Hide Next Prev Link");
      }
      separatorLink.parentNode.hidden = true;
    });
  };

  if (window.ufstreamsectionapp.sectionHeaderInit === undefined) {
    window.ufstreamsectionapp.sectionHeaderInit = () => {
      if (window.ufstreamsectionapp.debug_mode) {
        console.log("sectionHeaderInit");
      }
      /* if not firing on uberflip.load - force to fire on script load */
      window.addEventListener("uberflip.load", () => {
        window.ufstreamsectionapp.processSectionHeader();
      });
      window.addEventListener("uberflip.itemsLoaded", () => {
        window.ufstreamsectionapp.processSectionHeader();
      });
    };
  }
}

window.ufstreamsectionapp.processSectionHeader();
