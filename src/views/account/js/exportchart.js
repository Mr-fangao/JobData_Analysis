export const exportchart = {
  methods: {
    onDownChartImg(name) {
      var url = this[name].getConnectedDataURL({
        type: "png", backgroundColor: "#fff"
      });
      var $a = document.createElement("a");
      $a.download = "echarts.png";
      $a.target = "_blank";
      $a.href = url; // Chrome and Firefox
      $a.click();
    }
  }
}
