import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faKey, faBell, faSync, faTrash, faEdit, faCopy, faBalanceScale, faLanguage, faSignOutAlt, faRedoAlt, faLock, faAngleDown, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCopy as farCopy, faBell as farBell, faQuestionCircle as farQuestionCircle, faComments as farComments, faEyeSlash as farEyeSlash, faEye as farEye, faComment as farComment, } from '@fortawesome/fontawesome-free-regular'
//import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faCheck, faKey, faBell, faSync, faTrash, faEdit, faCopy, farCopy, faBalanceScale, farBell, farQuestionCircle, farComments, faLanguage, faSignOutAlt, faRedoAlt, farEyeSlash, farEye, farComment, faLock, faAngleDown, faCaretDown, faCaretUp  )
//library.add(fas)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)