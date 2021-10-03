class GLoading {
  constructor() {
    var loading = document.createElement("span");
    loading.className = "loading-view  ratate esri-icon-loading-indicator";
    loading.style.display = "none";
    this.loading = loading;
    this.loaded = false;
  }


  show(pt) {
    if (this.loaded === false) {
      document.getElementById("app-body").appendChild(this.loading);
    }
    this.loading.style.left = pt.x - 10 + "px";
    this.loading.style.top = pt.y - 10 + "px";
    this.loading.style.display = "block";
  }

  hide() {
    this.loading.style.display = "none";
  }
}

export const loading = new GLoading();
