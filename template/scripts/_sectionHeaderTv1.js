if (window.ufstreamsectionapp.processSectionHeader === undefined) {
  window.ufstreamsectionapp.processSectionHeader = () => {
    if (window.ufstreamsectionapp.debug_mode) {
      console.log("processSectionHeader");
    }

    const tilesArray = [
      ...document.querySelectorAll("#collection-items li.tile"),
    ];
    const sectionHeaderStreamArray =
      window.ufstreamsectionapp.sectionHeaderStreamArray;

    tilesArray.forEach((tile) => {
      const sourceStream = tile.dataset.sourceStreamId;
      var titleHtml = "";

      sectionHeaderStreamArray.forEach((streamID) => {
        if (streamID.toString() === sourceStream) {
          titleHtml = tile.children[0].children[1].outerHTML;
          tile.classList.add("section-header-tile");
          tile.innerHTML = titleHtml;
        }
      });
    });

    prevNextLinks = document.querySelectorAll(
      '.item-next-prev a[href*="stream-section-headers"]'
    );
    if (prevNextLinks.length > 0) {
      if (window.ufstreamsectionapp.debug_mode) {
        console.log(
          "prevNextLinks.length = " + prevNextLinks.length.toString()
        );
      }

      headerLink = prevNextLinks[0].parentElement.children;
      for (let i = 0; i < headerLink.length; i++) {
        headerLink[i].style.display = "none";
      }
      prevNextLinks[0].parentNode.parentNode.style.opacity = 0;
    }

    relatedContent = document.querySelectorAll(
      '#related-items-carousel a.item-link.view[href*="stream-section-headers"]'
    );
    if (window.ufstreamsectionapp.debug_mode) {
      console.log(
        "#related-items-carousel = " + relatedContent.length.toString()
      );
    }

    relatedContent.forEach((item) => {
      item.parentElement.style.display = "none";
    });
  };
}

if (window.ufstreamsectionapp.sectionHeaderInit === undefined) {
  window.ufstreamsectionapp.sectionHeaderInit = () => {
    Hubs.Events.on("load", () => {
      if (window.ufstreamsectionapp.debug_mode) {
        console.log("load");
      }
      window.ufstreamsectionapp.processSectionHeader();
    });

    Hubs.Events.on("itemsLoaded", () => {
      if (window.ufstreamsectionapp.debug_mode) {
        console.log("itemsLoaded");
      }

      window.ufstreamsectionapp.processSectionHeader();
    });
  };
}

window.ufstreamsectionapp.processSectionHeader();
