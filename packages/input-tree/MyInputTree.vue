<template>
  <div class="my-input-tag-wrap" @click="focusInput">
    <el-popover ref="my-popover" placement="bottom" width="650" trigger="manual" @hide="test">
      <el-form slot="reference" :inline="true" class="input-tree" size="mini">
        <el-tag v-for="(tag,key) in dynamicTags" :key="key" closable @close="handleClose(tag)">
          {{ tag.label }}
        </el-tag>
        <input ref="my-input-tag" v-model="filterText" placeholder="请点击输入框并勾选机构" type="text" class="my-input-tag" @blur="isSelect" @focus="getTree($event)">
      </el-form>
      <div class="input-suggest">
        <el-tree
          ref="my-tree"
          :data="nodeData"
          :show-checkbox="treeData.checkbox"
          :expand-on-click-node="false"
          :lazy="lazy"
          :default-checked-keys="defaultCheckedKeys"
          :load="loadNode"
          :props="defaultProps"
          :check-strictly="treeData.checkstrictly"
          :filter-node-method="filterNode"
          node-key="label"
          class="inputtree-scroll"
          @check="checkChange"
          @node-click="currentChange">
        </el-tree>
      </div>
    </el-popover>
  </div>
</template>
<script>
var $widthDiv = null // 计算input宽度
var cacheIds = []
var i = null
export default {
  props:
  {
    treeData: { type: Object, required: false, default: null }
  },
  data: function () {
    return {
      mark: false,
      drop: [],
      lazy: true,
      dynamicTags: [],
      nodeData: [],
      defaultProps: {
        isLeaf: 'leaf',
        children: 'children',
        label: 'label'
      },
      filterText: ''
    }
  },
  computed: {
    defaultCheckedKeys: function () {
      return this.dynamicTags.map(function (item) {
        return item.id
      })
    }
  },
  watch: {
    filterText (val) {
      if (this.lazy) {
        if (this.nodeData.length > 0) {
          this.$refs['my-tree'].filter(val)
        }
      } else {
        this.$refs['my-tree'].filter(val)
      }
    },
    dynamicTags (val) {
      // console.log('11', val)
    }
  },
  created: function () {
    var $div = document.createElement('div')
    $div.className = 'sync-width'
    $div.setAttribute('style', 'position:absolute;top:0;left:0;opacity:0;height:0;overflow:hidden;')
    document.body.appendChild($div)
    $widthDiv = $div
    if (this.treeData.lazy === false) {
      this.lazy = this.treeData.lazy
    }
    if (this.treeData.defaultProps) {
      this.defaultProps = this.treeData.defaultProps
    }
  },
  mounted: function () {
    var me = this
    // me.setInputWidth(this.$refs['my-input-tag']);
    document.addEventListener('click', function () {
      me.$refs['my-popover'] && me.$refs['my-popover'].doClose && me.$refs['my-popover'].doClose()
    }, false)
  },
  methods: {
    test () {
      this.$emit('checkList', this.$refs['my-tree'].getCheckedNodes())
    },
    isSelect () {
      clearTimeout(i)
      i = setTimeout(() => {
        this.filterText = ''
      }, 200)
    },
    putDynamicTags (data) {
      console.log('------========')
      console.log(data)
      this.dynamicTags = data
    },
    getTags: function () {
      return this.dynamicTags
    },
    filterNode (value, data) {
      if (!value) return true
      return data[this.defaultProps.label].indexOf(value) !== -1
    },
    loadNode: function (node, resolve) {
      console.log('111111')
      if (this.lazy) {
        if (node.level === 0) {
          return resolve([{ name: 'region' }])
        }
        var postData = Object.assign({}, node.data)
        console.log(postData)
        this.treeData.dataApi(postData).then(res => {
          // if (res.respdata) {
          resolve(res.children)
          // } else if (res.nodeData) {
          //   resolve(res.nodeData)
          // }
        })
      }
    },
    handleClose: function (chkItem) {
      console.log(chkItem)
      this.removeTag(chkItem)
      this.$refs['my-tree'].setChecked(chkItem.label, false, true)
      this.$emit('input', this.dynamicTags)
    },
    checkChange: function (chkItem, chked) {
      console.log(chked) // 总选中
      console.log(chkItem) // 当前选中
      // const index = chked.checkedNodes.findIndex(item => chked.checkedNodes === item.checkedNodes)
      // if (index !== -1) {

      // }
      if (chked.checkedNodes.length === 0) { // 一个节点都没有选
        this.dynamicTags = []
        this.treeData.checkedNode = this.dynamicTags
        this.$emit('input', this.dynamicTags)
        return false
      } else if (chked.checkedNodes.length > 0) { // 勾了节点
        const index1 = chked.checkedNodes.findIndex(item => item.id === '111111111')
        if (index1 !== -1) { // 如果选的节点中包含有总行所有
          this.dynamicTags = []
          const totals = {
            id: '111111111',
            label: '总行(所有)',
            flag: '01',
            pid: null
          }
          this.dynamicTags.push(totals)
          this.treeData.checkedNode = this.dynamicTags
          this.$emit('input', this.dynamicTags)
          return false
        } else { // 选的节点中没有总行所有
          this.dynamicTags = []
          const arr1 = [] // 存放02和03
          for (let l = 0; l < chked.checkedNodes.length; l++) {
            if (chked.checkedNodes[l].flag === '02' || chked.checkedNodes[l].flag === '03') {
              arr1.push(chked.checkedNodes[l])
            }
          }
          console.log(arr1)
          const arr2 = [] // 存放04和05
          for (let j = 0; j < chked.checkedNodes.length; j++) {
            if (chked.checkedNodes[j].flag === '04' || chked.checkedNodes[j].flag === '05') {
              arr2.push(chked.checkedNodes[j])
            }
          }
          console.log(arr2)
          if (arr1.length === 0) { // 没有02和03,表示只有04或05
            this.dynamicTags = arr2
            this.treeData.checkedNode = this.dynamicTags
            this.$emit('input', this.dynamicTags)
            return false
          } else if (arr2.length === 0) { // 没有04和05,,表示只有02或03
            this.dynamicTags = arr1
            this.treeData.checkedNode = this.dynamicTags
            this.$emit('input', this.dynamicTags)
            return false
          } else if (arr1.length > 0 && arr2.length > 0) { // 既有02或03，也有04或05
            const contain2Array = []
            for (let m = 0; m < arr1.length; m++) {
              for (let n = 0; n < arr2.length; n++) { // 需要去掉的二级
                if ((arr2[n].id === arr1[m].id && arr2[n].flag === '04') || (arr2[n].pid === arr1[m].id && arr2[n].flag === '05')) {
                  contain2Array.push(arr2[n])
                }
              }
            }
            this.drop = contain2Array
            // 将需要去掉的二级加入到chked.checkedNodes
            // for (let s = 0; s < contain2Array.length; s++) {
            //   chked.checkedNodes.push(contain2Array[s])
            // }
            // console.log(chked.checkedNodes)
            // chked.checkedNodes 去重
            const finalArray = []
            for (let y = 0; y < chked.checkedNodes.length; y++) {
              if (finalArray.indexOf(chked.checkedNodes[y]) === -1) {
                console.log(chked.checkedNodes[y])
                this.check(chked.checkedNodes[y])
                if (this.mark === true) {
                  console.log(chked.checkedNodes[y])
                  finalArray.push(chked.checkedNodes[y])
                }
              }
            }
            console.log(finalArray)
            this.dynamicTags = []
            console.log(this.dynamicTags)
            this.dynamicTags = finalArray
            console.log(this.dynamicTags)
            // this.treeData.checkedNode = this.dynamicTags
            this.$emit('input', this.dynamicTags)
            return false
          }
        }
      }
    },
    check (item) {
      console.log(this.drop)
      this.mark = false
      if (this.drop.indexOf(item) === -1) {
        this.mark = true
      }
    },
    currentChange: function (chkItem) {
      if (!this.treeData.checkbox) {
        console.log(chkItem)
        this.dynamicTags = [chkItem]
        this.treeData.checkedNode = this.dynamicTags
        this.filterText = ''
        this.$emit('input', this.dynamicTags)
        this.$emit('openInput', this.dynamicTags)
      }
    },
    focusInput: function () {
      this.$refs['my-input-tag'].focus()
    },
    // syncWidth: function (event) {
    //   var $input = event.target;
    //   this.setInputWidth($input);
    // },
    getTree: function (event) {
      if (this.treeData.nodeData.length) {
        this.nodeData = this.treeData.nodeData
      }
      cacheIds.push(setTimeout(this.getTreeData, 200))
    },
    getTreeData: function () {
      console.log('222222')
      for (var i = 0; i < cacheIds.length; i++) {
        clearTimeout(cacheIds[i])
      }
      cacheIds = [] // 执行前清除全部队列
      var me = this
      this.$refs['my-popover'].doShow()
      console.log(me.nodeData, '44444444')
      if (me.nodeData.length === 0) { // 如果属性结构数据不存在
        var param = {}
        if (this.treeData.params) {
          param = this.treeData.params
        }
        console.log('3333333')
        this.treeData.dataApi(param).then(res => {
          console.log(res)
          if (res.respdata) {
            me.nodeData = res.respdata
          } else if (res.respdata) {
            me.nodeData = res.respdata
          // } else if (res.nodeData) { // 使用部门 返回数组
          //   me.nodeData.push(res.nodeData)
          }
        })
      }
    },
    setInputWidth: function ($input) {
      var val = $input.value
      $widthDiv.innerText = val
      $input.style.width = ($widthDiv.clientWidth + 2) + 'px'
    },
    removeTag: function (item) {
      for (var i = 0; i < this.dynamicTags.length; i++) {
        if (this.dynamicTags[i].id === item.id) {
          this.dynamicTags.splice(i, 1)
          break
        }
      }
    }
  }
}
</script>
<style scoped>
.el-popper[x-placement^=bottom] .popper__arrow{left:10%;}
  .el-tag{margin-right: 4px;}
  .inputtree-scroll{
    max-height: 300px;
    overflow-y: auto;
  }
</style>

