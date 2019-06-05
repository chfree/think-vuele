<template>
  <div class="tc-input-tag">
     <vue-tags-input v-model="tag" :placeholder="placeholder" v-bind="$attrs" v-on="$listeners" @tags-changed="tagsChange" />
  </div>
</template>

<script>
import vueTagsInput from '@johmun/vue-tags-input'

export default {
  name: 'TcInputTag',
  components: {
    vueTagsInput
  },
  props: {
    value: { type: String, default: null },
    placeholder: { type: String, default: '添加标签' }
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
      this.$emit('tags-change', newTags)
    }
  }
}
</script>
