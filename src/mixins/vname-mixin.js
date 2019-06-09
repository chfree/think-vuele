export default {
  computed: {
    vname: function() {
      var vmodel = this.$vnode.data.model || {}
      var expression = vmodel.expression || ''
      return expression.replace('.', '_')
    }
  }
}
