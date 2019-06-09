<template>
  <div class="tc-input-tag">
     <vue-tags-input v-model="tag" :placeholder="placeholder" :add-on-key="addOnKey" v-bind="$attrs" v-on="$listeners" @tags-changed="tagsChange" @before-adding-tag="checkTag">
     </vue-tags-input>
  </div>
</template>

<script>
const validators = {
  email: new RegExp(
    /^(([^<>()[\]\\.,:\s@\']+(\.[^<>()[\]\\.,:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
  url: new RegExp(
    /^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i
  ),
  text: new RegExp(/^[a-zA-Z]+$/),
  digits: new RegExp(/^[\d() \.\:\-\+#]+$/),
  isodate: new RegExp(
    /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
  )
}
import vueTagsInput from '@johmun/vue-tags-input'

export default {
  name: 'TcInputTag',
  components: {
    vueTagsInput
  },
  props: {
    value: { type: String, default: null },
    placeholder: { type: String, default: '添加标签' },
    addOnKey: { type: Array, default: ()=> [13, ','] },
    defaultRegexp: { type: String, default: '' },
    regexp: { type: String, default: '' }
  },
  data() {
    return {
      tag: ''
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    tagsChange(newTags) {
      let tags = newTags.map(item => item.text).join(',')
      this.$emit('input', tags)
    },
    checkTag(obj) {
      var regexp = this.getRegexp()
      if (regexp === null) {
        obj.addTag()
        return
      }
      if (regexp.test(obj.tag.text)) {
        obj.addTag()
      }
    },
    getRegexp() {
      if (this.regexp !== null && this.regexp !== '') {
        return new RegExp(this.regexp)
      }
      if (this.defaultRegexp !== null && this.defaultRegexp !== '') {
        return validators[this.defaultRegexp]
      }
      return null
    }
  }
}
</script>
