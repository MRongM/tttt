import { defineComponent } from 'vue'
import { css } from '@emotion/css'
import { NButton, NH2 } from 'naive-ui'
import SourceInput from '@/components/SourceInput.jsx'
import TargetDisplay from '@/components/TargetDisplay.jsx'
import LanguageSelect from '@/components/LanguageSelect.jsx'
import { useT4Store } from '@/store/t4.js'
import { usePiniaLocalStorage } from '@/common/storage.js'
import GitHubIcon from './components/GitHubIcon.jsx'

const ClassName = css`
    box-sizing: border-box;
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: .75rem;

    .app-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .target-container {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .title-line {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: .5rem;
        height: 34px;
    }

    h2, h4 {
        margin: 0;
    }
`

export default defineComponent({
    setup() {
        const t4Store = useT4Store()
        usePiniaLocalStorage(t4Store)
        return { t4Store }
    },
    render({ t4Store }) {
        return (
            <div class={ClassName}>
                <div class="app-title">
                    <NH2>{t4Store.appName}</NH2>
                    <a href="https://github.com/alchem-x/tttt" target="_blank">
                        <NButton text>
                            {{
                                icon: () => (<GitHubIcon/>),
                                default: () => 'GitHub',
                            }}
                        </NButton>
                    </a>
                </div>
                <SourceInput/>
                <LanguageSelect/>
                <div class="target-container">
                    {t4Store.languageList.map((it) => (<TargetDisplay lang={it}/>))}
                </div>
            </div>
        )
    }
})
