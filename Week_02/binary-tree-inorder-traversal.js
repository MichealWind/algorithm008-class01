/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
// var inorderTraversal = function(root) {
//     if (root === null) return [];
//     return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right));
// };

// 迭代
var inorderTraversal = function(root) {
    if (root === null) return [];
    var rootStack = [root];
    var topNode = root;
    while (topNode.left !== null) {
        rootStack.push(topNode.left);
        topNode = topNode.left;
    }
    var result = [];
    while(rootStack.length > 0) {
        topNode = rootStack.pop();
        result.push(topNode.val);
        topNode = topNode.right;
        if (topNode !== null) {
            rootStack.push(topNode);
            while (topNode.left !== null) {
                rootStack.push(topNode.left);
                topNode = topNode.left;
            }
        }
    }
    return result;
};