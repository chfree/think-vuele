export default {
  computed: {
    vname: function vname() {
      var vmodel = this.$vnode.data.model || {};
      var expression = vmodel.expression || '';
      return expression.replace('.', '_');
    }
  }
};