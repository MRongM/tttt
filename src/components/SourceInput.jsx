import { defineComponent, watch } from 'vue'
import { NH4, NInput } from 'naive-ui'
import debounce from 'lodash/debounce'
import { css } from '@emotion/css'
import { useT4Store } from '@/store/t4.js'
import CopyButton from '@/components/CopyButton.jsx'

const ClassName = css`
    border: 1px solid #ccc;
    padding: .75rem;
    border-radius: 3px;
`

export default defineComponent({
    setup() {
        const t4Store = useT4Store()
        watch(() => t4Store.sourceValue, debounce(t4Store.fetchTranslation, 500))
        return { t4Store }
    },
    render({ t4Store }) {
        const detectedLanguageText = t4Store.languageMap[t4Store.detectedLanguage]
        const title = t4Store.sourceValue && detectedLanguageText ? `${detectedLanguageText} - Detected` : 'Detect language'
        return (
            <div class={ClassName}>
                <div class="title-line">
                    <NH4>{title}</NH4>
                    <CopyButton value={t4Store.sourceValue}/>
                </div>
                <NInput type="textarea"
                    vModel:value={t4Store.sourceValue}
                    clearable
                    autofocus
                    autosize={{ minRows: 3 }}
                    placeholder="Enter source text" />
            </div>
        )
    }
})