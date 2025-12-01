/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function sortedArrayToBST(nums) {
    // Helper function
    function build(start, end) {
        // If no elements, return null
        if (start > end) return null;
        
        // Pick middle
        let mid = Math.floor((start + end) / 2);
        
        // Create root node
        let root = new TreeNode(nums[mid]);
        
        // These lines AUTOMATICALLY build entire subtrees!
        root.left = build(start, mid - 1);    // Builds left subtree
        root.right = build(mid + 1, end);     // Builds right subtree
        
        return root;
    }
    
    return build(0, nums.length - 1);
}
//  [-10, -3, 0, 5, 9]