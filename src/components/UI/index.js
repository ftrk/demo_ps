import UButton from '@/components/UI/UButton.vue'
import UInput from '@/components/UI/UInput.vue'
import UDialog from '@/components/UI/UDialog.vue'
import UCalc from '@/components/UI/UCalc.vue'
import UCheckbox from '@/components/UI/UCheckbox.vue'

const components = [
    {name: 'UButton', component: UButton},
    {name: 'UInput', component: UInput},
    {name: 'UDialog', component: UDialog},
    {name: 'UCalc', component: UCalc},
    {name: 'UCheckbox', component: UCheckbox},
]

export default {
    install(app){
        components.forEach(({name, component}) => app.component(name, component))
    }
}