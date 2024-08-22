const storageKey = 't4_storage'

export function saveStateToLocalStorage(state) {
    localStorage.setItem(storageKey, JSON.stringify(state))
}

export function getStateFromLocalStorage() {
    const s = localStorage.getItem(storageKey)
    if (s) {
        try {
            return JSON.parse(s)
        } catch (err) {
            return {}
        }
    } else {
        return {}
    }
}