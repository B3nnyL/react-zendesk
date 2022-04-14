import  { Component } from "react"
import PropTypes from "prop-types"

const canUseDOM = () => {
    if(typeof window === 'undefined' || !window.document || !window.document.createElement ){
        return false
    }
    return true
}

export const ZendeskAPI = (...args) => {
    if (canUseDOM && window.zE) {
      window.zE.apply(null, args)
    } else {
      console.warn("Zendesk is not initialized yet")
    }
  }

export default class Zendesk extends Component {

    constructor(props) {
        super(props)
        this.insertScript = this.insertScript.bind(this)
        this.onScriptLoaded = this.onScriptLoaded.bind(this)
      }

      onScriptLoaded() {
        if (typeof this.props.onLoaded === 'function') {
          this.props.onLoaded();
        }
      }

      insertScript (zendeskKey, defer, nonce) {
        const script = document.createElement('script')
        if (defer) {
          script.defer = true
        } else {
          script.async = true
        }
        if (nonce) {
          script.nonce = nonce
        }
        script.id = 'ze-snippet'
        script.src = `https://static.zdassets.com/ekr/snippet.js?key=${zendeskKey}`
        script.addEventListener('load', this.onScriptLoaded);
        document.body.appendChild(script)
      }

      componentDidMount() {
        if (canUseDOM && !window.zE) {
          const {defer, zendeskKey, nonce, ...other} = this.props
          this.insertScript(zendeskKey, defer, nonce)
          window.zESettings = other
        }
      }

      componentWillUnmount(){
        if (!canUseDOM || !window.zE) {
            return
        }
        delete window.zE
        delete window.zESettings
      }

    render(){
        return null
    }
}

Zendesk.propTypes = {
    zendeskKey: PropTypes.string.isRequired,
    defer: PropTypes.bool,
    nonce: PropTypes.string
}
