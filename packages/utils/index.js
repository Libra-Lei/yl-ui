
/**
 * 更新表单树（origin）的目标节点（target）
 * @param {object} origin 表单树Json
 * @param {object} target 要更新的节点
 */
export const updateNode = (origin, target) => {
  // recursion terminator
  if (!origin.list) return;
  // process
  // drill down
  for (let i = 0; i < origin.list.length; i++) {
    if (origin.list[i].key === target.key) {
      origin.list[i] = target;
      return origin;
    } else {
      if (origin.list[i].type === 'grid') {
        // drill down
        for (let y = 0; y < origin.list[i].columns.length; y ++) {
          origin.list[i].columns[y] = updateNode(origin.list[i].columns[y], target);
        }
      }
      // TODO: 除栅格布局，其他布局处理...
    }
  }
  return origin;
}

/**
 * 删除表单树（origin）的目标节点（target key）
 * @param {object} origin 表单树Json
 * @param {object} key 要更新的节点的key
 */
export const deleteNode = (origin, key) => {
  // recursion terminator
  if (!origin.list) return;
  // process
  // drill down
  for (let i = 0; i < origin.list.length; i++) {
    if (origin.list[i].key === key) {
      origin.list.splice(i, 1);
      return origin;
    } else {
      if (origin.list[i].type === 'grid') {
        // drill down
        for (let y = 0; y < origin.list[i].columns.length; y ++) {
          origin.list[i].columns[y] = deleteNode(origin.list[i].columns[y], key);
        }
      }
      // TODO: 除栅格布局，其他布局处理...
    }
  }
  return origin;
}