import { NSelect } from 'naive-ui'
import { defineComponent, watch } from 'vue'
import { useT4Store } from '@/store/t4.js'

export default defineComponent({
    setup() {
        const t4Store = useT4Store()
        watch(() => t4Store.languageList, t4Store.fetchTranslation)
        return { t4Store }
    },
    render({ t4Store }) {
        return (
            <div>
                <NSelect placeholder="Select languages"
                         vModel:value={t4Store.languageList}
                         multiple
                         clearable
                         filterable
                         options={t4Store.languageOptions}/>
            </div>
        )
    }
})