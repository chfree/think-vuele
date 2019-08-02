import { isNull } from 'main/utils';
export default {
  computed: {
    vevent: function vevent() {
      var eventName = (Object.keys(this.$listeners) || [''])[0];
      if (isNull(eventName)) {
        return null;
      }
      if (isNull(this.$listeners[eventName])) {
        return null;
      }
      return this.$listeners[eventName]['fns'].name.replace(' ', '_');
    }
  }
};