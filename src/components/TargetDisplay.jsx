import { defineComponent } from 'vue'
import { NH4, NP } from 'naive-ui'
import { css } from '@emotion/css'
import { useT4Store } from '@/store/t4.js'
import CopyButton from '@/components/CopyButton.jsx'

const ClassName = css`
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: .75rem;
    border-radius: 3px;
    width: 100%;

    @media (min-width: 900px) {
        & {
            width: calc(50% - .5rem);
        }
    }

    p {
        box-sizing: border-box;
        border: 1px solid #ddd;
        padding: .75rem;
        margin-top: 0;
        min-height: 80px;
        height: calc(100% - 34px - .5rem)
    }
`

export default defineComponent({
    props: {
        lang: {
            type: String,
            required: true,
        }
    },
    setup() {
        const t4Store = useT4Store()
        return { t4Store }
    },
    render({ t4Store, lang }) {
        const displayValue = t4Store.targetValue[lang]
        return (
            <div class={ClassName}>
                <div class="title-line">
                    <NH4>{t4Store.languageMap[lang]}</NH4>
                    <CopyButton value={displayValue} />
                </div>
                <NP>{displayValue}</NP>
            </div>
        )
    }
})