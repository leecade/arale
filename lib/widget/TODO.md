
 - this.dataset 是否有必要？在事件代理中，可以直接用 [data-role=xx] 来选取，而且无动态
   更新问题。目前 dataset 的作用是，快速得到某个 data-xx 下的所有值和所对应的元素，在
   autoRender 时应该能用到，但其他使用场景暂时好像没有。等正式发布时，要考虑 this.dataset
   是不是必要功能，倘若不是的话，去除掉。