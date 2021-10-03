export default class TreeStore {
  constructor(data, userAccount = "") {
    this.userAccount = userAccount;
    this.stateTree = data;
    this.flatTree = [];
    this.keyCounter = 0;
    this.compileFlatState();
  }

  compileFlatState() {
    var userRecentLayerIds = localStorage.getItem(
      `${this.userAccount}-recent-layer`
    );
    if (!userRecentLayerIds) {
      this.userRecentLayerIds = null;
    }
    else {
      this.userRecentLayerIds = userRecentLayerIds;
    }

    this.stateTree.forEach(rootNode => {
      this.flattenChildren(rootNode);
    });
  }

  flattenChildren(node, parent) {
    node.nodeKey = this.keyCounter++;
    if (this.userRecentLayerIds === null) {
      node.isRecentLayer = false
    }
    else {
      node.isRecentLayer = this.userRecentLayerIds.indexOf(node.id) > -1
    }

    this.flatTree[node.nodeKey] = { node: node, nodeKey: node.nodeKey };
    if (typeof parent != 'undefined') {
      this.flatTree[node.nodeKey].parent = parent.nodeKey;
      this.flatTree[parent.nodeKey].children.push(node.nodeKey);
    }

    if (node.children && node.children.length > 0) {
      this.flatTree[node.nodeKey].children = [];
      node.children.forEach(child => this.flattenChildren(child, node));
    }
  }

  rebuildFlatState() {
    this.flatTree = [];
    this.keyCounter = 0;
    this.compileFlatState();
  }


}
