import Vue from 'vue'
import {
  Form,
  FormItem,
  Notification,
  Message,
  Container,
  Main,
  Aside,
  Footer,
  Header,
  Input,
  Button
} from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Header)
Vue.use(Input)
Vue.use(Button)

Vue.prototype.$notify = Notification
Vue.prototype.$Message = Message
