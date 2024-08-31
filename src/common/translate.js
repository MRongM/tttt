export async function translateViaGoogleApi(q, sl, tl) {
    const params = new URLSearchParams()
    params.append('q', q)
    params.append('sl', sl)
    params.append('tl', tl)
    params.append('client', 'gtx')
    params.append('dt', 't')
    const url = TRANSLATE_API + '?' + params
    const response = await fetch(url)
    const result = await response.json()
    const translations = result[0]
    let translated = ''
    let detectedLanguage = result[2]
    translations?.forEach((it) => {
        translated += it[0]
    })
    return [translated, detectedLanguage]
}

