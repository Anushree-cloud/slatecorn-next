import { sideNavigation } from '@/constants/sideNavigation'

export const isObjectNull = (obj = {}) => {
    if(!obj) return
    return Object.keys(obj).length === 0
}

export const getModuleByPathName = (sections, targetPath) => {
    let closestMatch = null

    const checkMatch = (item, targetPath) => {
        if (!item.path) return false
        return targetPath.startsWith(item.path)
    }

    const searchSections = (items, targetPath) => {
        if (!Array.isArray(items)) return
        for (const item of items) {
            if (checkMatch(item, targetPath)) {
                if (!closestMatch || item.path.length > closestMatch.path.length) {
                    closestMatch = item
                }
            }
            if (item.childItems && Array.isArray(item.childItems) && item.childItems.length > 0) {
                searchSections(item.childItems, targetPath)
            }
        }
    }

    for (const section of sections) {
        searchSections(section.items, targetPath)
    }

    return closestMatch
}
