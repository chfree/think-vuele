<template>
  <div class="tc-input-tag-container">
     <vue-tags-input 
      class="tc-input-tag" 
      :tags="initTags" 
      v-model="tag" 
      :vname="vname" 
      :disabled="inputDisabled" 
      :placeholder="placeholder" 
      :add-on-key="addOnKey" 
      v-bind="$attrs" 
      v-on="$listeners" 
      @tags-changed="tagsChange" 
      @before-adding-tag="checkTag">
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
import vueTagsInput from './vue-tags-input'
import vnameMixin from 'main/mixins/vname-mixin.js'
import { isNull } from 'main/utils'

export default {
  name: 'TcInputTag',
  mixins: [vnameMixin],
  components: {
    vueTagsInput
  },
  props: {
    value: { type: String, default: '' },
    placeholder: { type: String, default: '添加标签' },
    addOnKey: { type: Array, default: ()=> [13, ','] },
    defaultRegexp: { type: String, default: '' },
    regexp: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    tags: { type: Array, default: ()=>{return []} }
  },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  data() {
    return {
      tag: ''
    }
  },
  computed: {
    inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled
    },
    initTags() {
      var initTags = []
      if (!isNull(this.value)) {
        initTags = this.tags.concat(this.value.split(','))
      } else {
        initTags = this.tags
      }
      return initTags.map(item => {
        return {
          text: item
        }
      })
    }
  },
  mounted() {
  },
  watch: {
  },
  methods: {
    // setInitTags() {
    //   if (!isNull(this.value)) {
    //     this.initTags = this.tags.concat(this.value.split(','))
    //   } else {
    //     this.initTags = this.tags
    //   }
    //   this.initTags = this.initTags.map(item => {
    //     return {
    //       text: item
    //     }
    //   })
    // },
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
