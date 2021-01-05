/* 
  Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.

  A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at
  any leaf node.

  Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None/null.
*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // declare output array to store sums
  const output = [];
  // call helper function with node, current sum, and output array
  getSum(root, 0, output);
  // return output array
  return output;
}

//helper recursive function to calculate running sum on left and right
function getSum(node, currentSum, output) {
  // base case if node is null
  if (!node) return;
  // update sum
  const newCurrentSum = currentSum + node.value;
  // if left and right nodes are null then push sum into output
  if (!node.left && !node.right) {
    output.push(newCurrentSum);
    return;
  }

  //invoke getSum on left and right nodes
  getSum(node.left, newCurrentSum, output);
  getSum(node.right, newCurrentSum, output);
}

const myTree = new BinaryTree(1);
myTree.left = new BinaryTree(2);
myTree.right = new BinaryTree(3);
myTree.left.left = new BinaryTree(4);
myTree.left.right = new BinaryTree(5);
myTree.left.left.left = new BinaryTree(8);
console.table(myTree);

console.log(branchSums(myTree));
