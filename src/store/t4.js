import { defineStore } from 'pinia'
import { getStateFromLocalStorage, saveStateToLocalStorage } from '@/common/storage.js'
import { translateViaGoogleApi } from '@/common/translate.js'

export const useT4Store = defineStore('t4', {
    state() {
        return {
            name: 'Tricky Translate Together Tool',
            sourceValue: '',
            targetValue: {},
            languageList: [],
            detectedLanguage: '',
        }
    },
    getters: {
        appName() {
            return 'Tricky Translate Together Tool'
        },
        languageOptions() {
            return [
                { value: 'en', label: 'English', },
                { value: 'ja', label: 'Japanese', },
                { value: 'ko', label: 'Korean', },
                { value: 'ru', label: 'Russian' },
                { value: 'zh-CN', label: 'Chinese (Simplified)', },
                { value: 'zh-TW', label: 'Chinese (Traditional)', },
            ]
        },
        languageMap() {
            const m = {}
            for (const it of this.languageOptions) {
                m[it.value] = it.label
            }
            return m
        },
    },
    actions: {
        init() {
            Object.assign(this, getStateFromLocalStorage())
            this.$subscribe((mutation, state) => saveStateToLocalStorage(state))
        },
        async fetchTranslation() {
            const { languageList, sourceValue, targetValue } = this
            if (!sourceValue) {
                this.targetValue = {}
            } else {
                const tasks = languageList.map((lang) => translateViaGoogleApi(sourceValue, 'auto', lang))
                const translated = await Promise.all(tasks)
                for (let i = 0; i < languageList.length; i++) {
                    targetValue[languageList[i]] = translated[i][0]
                    this.detectedLanguage = translated[i][1]
                }
            }
        }
    },
})
