import { NButton, NTooltip } from 'naive-ui'
import { defineComponent, ref } from 'vue'
import clipboardCopy from '@/common/clipboardCopy.js'

export default defineComponent({
    props: {
        value: {
            type: String,
            default: '',
        }
    },
    setup(props) {
        const showCopiedTip = ref(false)

        function onClickButton() {
            showCopiedTip.value = true
            clipboardCopy(props.value)
        }

        function hideCopiedTip() {
            showCopiedTip.value = false
        }

        return {
            showCopiedTip,
            onClickButton,
            hideCopiedTip
        }
    },
    render({ onClickButton, showCopiedTip, hideCopiedTip }) {
        return (
            <NTooltip placement="top" show={showCopiedTip}>
                {{
                    trigger: () => (<NButton onMouseleave={hideCopiedTip} onClick={onClickButton}>Copy</NButton>),
                    default: () => 'Copied!',
                }}
            </NTooltip>
        )
    },
})