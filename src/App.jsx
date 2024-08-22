import { defineComponent } from 'vue'
import { css } from '@emotion/css'
import { NH2 } from 'naive-ui'
import SourceInput from '@/components/SourceInput.jsx'
import TargetDisplay from '@/components/TargetDisplay.jsx'
import LanguageSelect from '@/components/LanguageSelect.jsx'
import { useT4Store } from '@/store/t4.js'

const ClassName = css`
    box-sizing: border-box;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: .75rem;

    h2 {
        margin: 0;
    }
`

export default defineComponent({
    setup() {
        const t4Store = useT4Store()
        t4Store.init()
        return { t4Store }
    },
    render({ t4Store }) {
        return (
            <div class={ClassName}>
                <NH2>{t4Store.appName}</NH2>
                <SourceInput />
                <LanguageSelect />
                {t4Store.languageList.map((it) => (<TargetDisplay lang={it} />))}
            </div>
        )
    }
})
