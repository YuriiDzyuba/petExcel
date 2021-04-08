import {capitalize} from "@core/utils";

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('No $root provided for DomListener')
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDomListener() {
        //  console.log(this.listeners)
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            //console.log(this)
            if (!this[method]) {
                throw new Error(`Method ${method} is not implemented in ${this.name || ''} Component`)
            }
            //тоже что и addEventListener
            this.$root.on(listener, this[method].bind(this))
        })
    }

    removeDomListener() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}

function getMethodName(eventName) {
    console.log(eventName, 'eventName')
    return `on${capitalize(eventName)}`

}