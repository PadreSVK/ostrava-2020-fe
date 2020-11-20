import { extend, localize, ValidationObserver, ValidationProvider } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'
import VTextFieldValidateable from "@/components/validatable/VTextFieldValidateable.vue";


export default {
  apply: (Vue) => {
    Object.keys(rules).forEach(rule => {
      extend(rule, rules[rule]);
    });


    localize('en', en);


    Vue.component('ValidationObserver', ValidationObserver);
    Vue.component('ValidationProvider', ValidationProvider);
    Vue.component('v-text-field-validateable', VTextFieldValidateable)
  }
}
